import { notFound } from 'next/navigation'
import { getProducts, getProductBySlug } from '@/lib/products'
import ProductDetail from './ProductDetail'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return { title: 'Produto não encontrado' }
  return {
    title: `${product.name} | Relojoaria Monaco`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const relatedProducts = getProducts()
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 3)

  return <ProductDetail product={product} relatedProducts={relatedProducts} />
}
