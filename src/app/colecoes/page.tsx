import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { products, collections } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata = {
  title: 'Coleções | Relojoaria Monaco',
  description: 'Explore nossa curadoria completa de relógios de luxo. Clássicos, Esportivos, Mergulho e Edições Limitadas.',
}

export default function ColecoesPage() {
  return (
    <div style={{ backgroundColor: '#070706', minHeight: '100vh' }}>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=1920&q=80"
            alt="Coleções Monaco"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(7,7,6,0.8) 0%, rgba(7,7,6,0.95) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="section-label">Catálogo Completo</span>
            <h1
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Nossas{' '}
              <em className="text-gold-gradient">Coleções</em>
            </h1>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#8A8780' }}>
              Uma seleção cuidadosa dos mais extraordinários relógios do mundo,
              organizados para que você encontre a peça perfeita.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Collection Quick Nav */}
      <section className="py-10 border-b" style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {collections.map((col) => (
              <Link
                key={col.id}
                href={`/colecoes/${col.slug}`}
                className="flex items-center gap-2 px-5 py-2.5 text-sm tracking-wider uppercase transition-all duration-300 border"
                style={{ borderColor: '#2E2C28', color: '#8A8780' }}
              >
                {col.name}
                <span
                  className="text-xs px-1.5 py-0.5"
                  style={{ backgroundColor: 'rgba(184,148,62,0.1)', color: '#B8943E' }}
                >
                  {col.productCount}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Each Collection Section */}
      {collections.map((collection, colIdx) => {
        const collectionProducts = products.filter((p) => p.collection === collection.id)

        return (
          <section
            key={collection.id}
            className="py-20"
            style={{ backgroundColor: colIdx % 2 === 0 ? '#070706' : '#0D0C0A' }}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Collection header */}
              <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="h-px w-8"
                      style={{ backgroundColor: '#B8943E' }}
                    />
                    <span
                      className="text-xs tracking-[0.2em] uppercase"
                      style={{ color: '#B8943E' }}
                    >
                      Coleção
                    </span>
                  </div>
                  <h2
                    className="heading-display"
                    style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                  >
                    {collection.name}
                  </h2>
                  <p className="mt-2 text-sm max-w-md" style={{ color: '#8A8780' }}>
                    {collection.description}
                  </p>
                </div>
                <Link
                  href={`/colecoes/${collection.slug}`}
                  className="btn-ghost flex items-center gap-2 self-start md:self-end"
                >
                  Ver coleção completa
                  <ArrowRight size={14} />
                </Link>
              </AnimatedSection>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {collectionProducts.map((product, idx) => (
                  <AnimatedSection key={product.id} delay={idx * 0.08} direction="up">
                    <Link href={`/produto/${product.slug}`} className="block group">
                      <div
                        className="card-product"
                        style={{ border: '1px solid #2E2C28' }}
                      >
                        {/* Image */}
                        <div
                          className="relative overflow-hidden"
                          style={{ aspectRatio: '1/1', backgroundColor: '#1E1C19' }}
                        >
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            style={{ objectFit: 'cover' }}
                            className="transition-transform duration-700 group-hover:scale-105"
                          />
                          {product.badge && (
                            <span
                              className="absolute top-3 left-3 text-xs px-2 py-0.5 tracking-wider uppercase"
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
                        </div>

                        {/* Info */}
                        <div className="p-4">
                          <p
                            className="text-xs tracking-[0.15em] uppercase mb-1"
                            style={{ color: '#B8943E' }}
                          >
                            {product.brand}
                          </p>
                          <h3
                            className="font-light leading-snug mb-2 transition-colors duration-300 group-hover:text-[#D4AE5C]"
                            style={{
                              fontFamily: 'var(--font-cormorant)',
                              fontSize: '1.1rem',
                              color: '#F0EDE5',
                            }}
                          >
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1 mb-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={10}
                                style={{
                                  color: i < Math.floor(product.rating) ? '#B8943E' : '#2E2C28',
                                  fill: i < Math.floor(product.rating) ? '#B8943E' : 'transparent',
                                }}
                              />
                            ))}
                            <span className="text-xs ml-1" style={{ color: '#545250' }}>
                              ({product.reviews})
                            </span>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span
                              className="font-light"
                              style={{
                                fontFamily: 'var(--font-cormorant)',
                                fontSize: '1.1rem',
                                color: '#D4AE5C',
                              }}
                            >
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs line-through" style={{ color: '#545250' }}>
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
