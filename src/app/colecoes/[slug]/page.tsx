import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowLeft } from 'lucide-react'
import { getProducts, getCollections } from '@/lib/products'
import { formatPrice } from '@/lib/utils'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = getCollections().find((c) => c.slug === slug)
  if (!collection) return { title: 'Coleção não encontrada' }
  return {
    title: `${collection.name} | Relojoaria Monaco`,
    description: collection.description,
  }
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = getCollections().find((c) => c.slug === slug)
  if (!collection) notFound()

  const collectionProducts = getProducts().filter((p) => p.collection === collection.id)

  return (
    <div style={{ backgroundColor: '#070706', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(7,7,6,0.7) 0%, rgba(7,7,6,0.95) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <Link
              href="/colecoes"
              className="inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-300"
              style={{ color: '#8A8780' }}
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Todas as Coleções
            </Link>
            <span className="section-label">Coleção</span>
            <h1
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {collection.name}
            </h1>
            <p className="mt-4 text-base max-w-lg" style={{ color: '#8A8780' }}>
              {collection.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span
                className="text-xs tracking-widest uppercase px-3 py-1.5"
                style={{
                  border: '1px solid rgba(184,148,62,0.2)',
                  color: '#B8943E',
                  backgroundColor: 'rgba(184,148,62,0.06)',
                }}
              >
                {collection.productCount} modelos
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {collectionProducts.length === 0 ? (
            <div className="text-center py-20">
              <p style={{ color: '#545250' }}>Nenhum produto encontrado nesta coleção.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionProducts.map((product, idx) => (
                <AnimatedSection key={product.id} delay={idx * 0.1} direction="up">
                  <Link href={`/produto/${product.slug}`} className="block group">
                    <div
                      className="card-product"
                      style={{ border: '1px solid #2E2C28' }}
                    >
                      {/* Image */}
                      <div
                        className="relative overflow-hidden"
                        style={{ aspectRatio: '4/3', backgroundColor: '#1E1C19' }}
                      >
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.badge && (
                          <span
                            className="absolute top-3 left-3 text-xs px-2.5 py-1 tracking-wider uppercase"
                            style={{
                              backgroundColor:
                                product.badge === 'Edição Limitada'
                                  ? 'rgba(184,148,62,0.9)'
                                  : 'rgba(30,28,25,0.9)',
                              color:
                                product.badge === 'Edição Limitada' ? '#070706' : '#D4AE5C',
                              border:
                                product.badge === 'Edição Limitada'
                                  ? 'none'
                                  : '1px solid rgba(184,148,62,0.4)',
                            }}
                          >
                            {product.badge}
                          </span>
                        )}
                        {!product.inStock && (
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ backgroundColor: 'rgba(7,7,6,0.6)' }}
                          >
                            <span className="text-xs tracking-widest uppercase" style={{ color: '#545250' }}>
                              Esgotado
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <p
                          className="text-xs tracking-[0.15em] uppercase mb-1"
                          style={{ color: '#B8943E' }}
                        >
                          {product.brand}
                        </p>
                        <h3
                          className="font-light leading-snug mb-3 transition-colors duration-300 group-hover:text-[#D4AE5C]"
                          style={{
                            fontFamily: 'var(--font-cormorant)',
                            fontSize: '1.25rem',
                            color: '#F0EDE5',
                          }}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="text-sm leading-relaxed mb-4 line-clamp-2"
                          style={{ color: '#8A8780' }}
                        >
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span
                              className="font-light text-lg"
                              style={{ fontFamily: 'var(--font-cormorant)', color: '#D4AE5C' }}
                            >
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs line-through" style={{ color: '#545250' }}>
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star size={11} style={{ color: '#B8943E', fill: '#B8943E' }} />
                            <span className="text-xs" style={{ color: '#8A8780' }}>
                              {product.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
