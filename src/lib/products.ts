import 'server-only'
import fs from 'fs'
import path from 'path'
import type { Product, CollectionBase, Collection } from './types'

const PRODUCTS_PATH = path.join(process.cwd(), 'src/data/products.json')
const COLLECTIONS_PATH = path.join(process.cwd(), 'src/data/collections.json')

// Lê sempre do disco (sem cache em memória) — o painel /admin escreve nesses
// mesmos arquivos, e as páginas que consomem esses dados usam
// `export const dynamic = 'force-dynamic'` pra nunca servir uma versão
// desatualizada depois de uma edição no painel.
export function getProducts(): Product[] {
  try {
    const raw = fs.readFileSync(PRODUCTS_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function saveProducts(products: Product[]) {
  fs.writeFileSync(PRODUCTS_PATH, JSON.stringify(products, null, 2), 'utf-8')
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((p) => p.slug === slug)
}

export function getCollectionsBase(): CollectionBase[] {
  try {
    const raw = fs.readFileSync(COLLECTIONS_PATH, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function getCollections(): Collection[] {
  const base = getCollectionsBase()
  const products = getProducts()
  return base.map((c) => ({
    ...c,
    productCount: products.filter((p) => p.collection === c.id).length,
  }))
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return getCollections().find((c) => c.slug === slug)
}
