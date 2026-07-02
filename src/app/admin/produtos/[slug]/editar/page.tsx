import Link from 'next/link'
import { notFound } from 'next/navigation'
import { requireAdmin } from '@/lib/auth'
import { getCollectionsBase, getProductBySlug } from '@/lib/products'
import AdminProductForm from '../../../AdminProductForm'

export const metadata = { title: 'Editar Produto | Painel Admin' }
export const dynamic = 'force-dynamic'

export default async function EditarProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await requireAdmin()
  const { slug } = await params
  const produto = getProductBySlug(slug)
  if (!produto) notFound()

  const colecoes = getCollectionsBase()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#070706' }}>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/admin"
          className="text-xs tracking-wider uppercase inline-block mb-6"
          style={{ color: '#545250' }}
        >
          ← Voltar ao painel
        </Link>
        <h1 className="heading-display mb-8" style={{ fontSize: '1.75rem' }}>
          Editar: {produto.name}
        </h1>
        <AdminProductForm produto={produto} colecoes={colecoes} />
      </div>
    </div>
  )
}
