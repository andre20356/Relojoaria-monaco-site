import Link from 'next/link'
import Image from 'next/image'
import { requireAdmin } from '@/lib/auth'
import { getProducts } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import { logoutAction, excluirProdutoAction } from './actions'

export const metadata = { title: 'Painel Admin | Relojoaria Monaco' }
export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  await requireAdmin()
  const produtos = getProducts()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#070706' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-2"
              style={{ color: '#B8943E' }}
            >
              Relojoaria Monaco
            </p>
            <h1 className="heading-display" style={{ fontSize: '1.75rem' }}>
              Produtos ({produtos.length})
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/admin/produtos/novo" className="btn-primary">
              + Novo Produto
            </Link>
            <form action={logoutAction}>
              <button type="submit" className="btn-ghost text-xs">
                Sair
              </button>
            </form>
          </div>
        </div>

        {produtos.length === 0 ? (
          <div
            className="text-center py-20"
            style={{ border: '1px dashed #2E2C28' }}
          >
            <p style={{ color: '#8A8780' }}>
              Nenhum produto cadastrado ainda.
            </p>
            <Link href="/admin/produtos/novo" className="btn-secondary inline-block mt-4">
              Cadastrar o primeiro produto
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {produtos.map((produto) => (
              <div
                key={produto.slug}
                className="flex flex-col"
                style={{ border: '1px solid #2E2C28', backgroundColor: '#0D0C0A' }}
              >
                <div
                  className="relative"
                  style={{ aspectRatio: '1/1', backgroundColor: '#1E1C19' }}
                >
                  {produto.images[0] ? (
                    <Image
                      src={produto.images[0]}
                      alt={produto.name}
                      fill
                      sizes="300px"
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-xs"
                      style={{ color: '#545250' }}
                    >
                      Sem imagem
                    </div>
                  )}
                  {!produto.inStock && (
                    <span
                      className="absolute top-2 left-2 text-xs px-2 py-0.5 uppercase tracking-wider"
                      style={{ backgroundColor: 'rgba(7,7,6,0.85)', color: '#C8574A' }}
                    >
                      Esgotado
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col gap-1 flex-1">
                  <p
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#B8943E' }}
                  >
                    {produto.brand || '—'}
                  </p>
                  <h3 className="text-sm font-medium" style={{ color: '#F0EDE5' }}>
                    {produto.name}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#D4AE5C' }}>
                    {formatPrice(produto.price)}
                  </p>
                  <p className="text-xs" style={{ color: '#545250' }}>
                    {produto.images.length} foto(s) · {produto.collection || 'sem coleção'}
                  </p>

                  <div className="flex items-center gap-2 mt-auto pt-3">
                    <Link
                      href={`/admin/produtos/${produto.slug}/editar`}
                      className="btn-ghost text-xs flex-1 text-center"
                    >
                      Editar
                    </Link>
                    <Link
                      href={`/produto/${produto.slug}`}
                      target="_blank"
                      className="btn-ghost text-xs flex-1 text-center"
                    >
                      Ver no site
                    </Link>
                  </div>
                  <form action={excluirProdutoAction} className="mt-2">
                    <input type="hidden" name="slug" value={produto.slug} />
                    <button
                      type="submit"
                      className="text-xs w-full text-center py-2"
                      style={{ color: '#C8574A' }}
                    >
                      Excluir
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
