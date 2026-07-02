import Link from 'next/link'
import { requireAdmin } from '@/lib/auth'
import { getCollectionsBase } from '@/lib/products'
import AdminProductForm from '../../AdminProductForm'

export const metadata = { title: 'Novo Produto | Painel Admin' }
export const dynamic = 'force-dynamic'

export default async function NovoProdutoPage() {
  await requireAdmin()
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
          Novo Produto
        </h1>
        <AdminProductForm colecoes={colecoes} />
      </div>
    </div>
  )
}
