'use server'

import fs from 'fs'
import path from 'path'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { getProducts, saveProducts, getCollectionsBase } from '@/lib/products'
import type { Product } from '@/lib/types'
import { slugify } from '@/lib/utils'
import { createSession, destroySession, checkPassword, requireAdmin } from '@/lib/auth'

// Fora de public/ de propósito — ver comentário em
// src/app/produtos/[...path]/route.ts sobre o cache de estáticos do Next 16.
const PRODUTOS_DIR = path.join(process.cwd(), 'uploads/produtos')

export async function loginAction(formData: FormData) {
  const password = String(formData.get('password') || '')
  if (!checkPassword(password)) {
    redirect('/admin/login?erro=1')
  }
  await createSession()
  redirect('/admin')
}

export async function logoutAction() {
  await destroySession()
  redirect('/admin/login')
}

function novoNomeArquivo(dir: string, originalName: string, indice: number): string {
  const ext = path.extname(originalName) || '.jpg'
  return `${Date.now()}_${indice}${ext}`
}

async function salvarImagens(slug: string, arquivos: File[]): Promise<string[]> {
  const dir = path.join(PRODUTOS_DIR, slug)
  fs.mkdirSync(dir, { recursive: true })

  const caminhos: string[] = []
  for (let i = 0; i < arquivos.length; i++) {
    const arquivo = arquivos[i]
    if (!arquivo || arquivo.size === 0) continue
    const nomeArquivo = novoNomeArquivo(dir, arquivo.name, i)
    const buffer = Buffer.from(await arquivo.arrayBuffer())
    fs.writeFileSync(path.join(dir, nomeArquivo), buffer)
    caminhos.push(`/produtos/${slug}/${nomeArquivo}`)
  }
  return caminhos
}

function slugUnico(base: string, existentes: Product[], slugAtual?: string): string {
  let slug = slugify(base) || 'produto'
  let contador = 2
  while (existentes.some((p) => p.slug === slug && p.slug !== slugAtual)) {
    slug = `${slugify(base)}-${contador}`
    contador++
  }
  return slug
}

export async function salvarProdutoAction(formData: FormData) {
  await requireAdmin()

  const produtos = getProducts()
  const slugOriginal = String(formData.get('slugOriginal') || '') || undefined

  const nome = String(formData.get('name') || '').trim()
  if (!nome) throw new Error('Nome é obrigatório')

  const slug = slugUnico(nome, produtos, slugOriginal)

  const precoOriginal = String(formData.get('originalPrice') || '').trim()

  const imagensExistentes = formData.getAll('imagensExistentes').map(String)
  const novosArquivos = formData.getAll('imagens') as File[]
  const novasImagens = await salvarImagens(slug, novosArquivos)
  const imagens = [...imagensExistentes, ...novasImagens]

  const badge = String(formData.get('badge') || '')

  const produto: Product = {
    id: slugOriginal
      ? produtos.find((p) => p.slug === slugOriginal)?.id || Date.now().toString()
      : Date.now().toString(),
    name: nome,
    slug,
    brand: String(formData.get('brand') || '').trim(),
    price: parseFloat(String(formData.get('price') || '0')) || 0,
    ...(precoOriginal ? { originalPrice: parseFloat(precoOriginal) } : {}),
    category: String(formData.get('category') || '').trim(),
    collection: String(formData.get('collection') || '').trim(),
    description: String(formData.get('description') || '').trim(),
    specs: {
      movement: String(formData.get('spec_movement') || '').trim(),
      case: String(formData.get('spec_case') || '').trim(),
      dial: String(formData.get('spec_dial') || '').trim(),
      bracelet: String(formData.get('spec_bracelet') || '').trim(),
      water_resistance: String(formData.get('spec_water_resistance') || '').trim(),
      functions: String(formData.get('spec_functions') || '').trim(),
    },
    images: imagens,
    ...(badge ? { badge: badge as Product['badge'] } : {}),
    rating: parseFloat(String(formData.get('rating') || '5')) || 5,
    reviews: parseInt(String(formData.get('reviews') || '0'), 10) || 0,
    inStock: formData.get('inStock') === 'on',
    featured: formData.get('featured') === 'on',
  }

  // Se o nome mudou, o slug muda junto — mas as imagens já enviadas continuam
  // funcionando normalmente pelo path antigo (só as novas vão pra pasta com o
  // slug atual). Não movemos a pasta pra manter isso simples ("provisório").
  let novaLista: Product[]
  if (slugOriginal) {
    novaLista = produtos.map((p) => (p.slug === slugOriginal ? produto : p))
  } else {
    novaLista = [...produtos, produto]
  }

  saveProducts(novaLista)
  revalidatePath('/', 'layout')
  redirect('/admin')
}

export async function excluirProdutoAction(formData: FormData) {
  await requireAdmin()
  const slug = String(formData.get('slug') || '')
  if (!slug) return

  const produtos = getProducts()
  const novaLista = produtos.filter((p) => p.slug !== slug)
  saveProducts(novaLista)

  const dir = path.join(PRODUTOS_DIR, slug)
  try {
    fs.rmSync(dir, { recursive: true, force: true })
  } catch {
    // pasta pode não existir — sem problema
  }

  revalidatePath('/', 'layout')
  redirect('/admin')
}
