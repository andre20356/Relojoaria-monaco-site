'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { type Product } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import AnimatedSection from '@/components/ui/AnimatedSection'

const tabs = ['Todos', 'Novidades', 'Clássicos', 'Esportivos']

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={`/produto/${product.slug}`}
        className="block group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="card-product relative"
          style={{ border: '1px solid #2E2C28' }}
        >
          {/* Image container */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '1/1', backgroundColor: '#1E1C19' }}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay on hover */}
            <div
              className="absolute inset-0 transition-opacity duration-400"
              style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(7,7,6,0.9) 100%)',
                opacity: hovered ? 1 : 0,
              }}
            />

            {/* CTA overlay */}
            <div
              className="absolute bottom-4 left-0 right-0 flex justify-center transition-all duration-400"
              style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'translateY(0)' : 'translateY(8px)' }}
            >
              <span className="btn-primary text-xs py-2.5 px-6">
                Ver Detalhes
              </span>
            </div>

            {/* Badge */}
            {product.badge && (
              <span
                className="absolute top-3 left-3 text-xs px-2.5 py-1 tracking-wider uppercase font-medium"
                style={{
                  backgroundColor:
                    product.badge === 'Edição Limitada'
                      ? 'rgba(184,148,62,0.9)'
                      : product.badge === 'Novo'
                      ? 'rgba(30,28,25,0.9)'
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

            {/* Out of stock */}
            {!product.inStock && (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(7,7,6,0.7)' }}
              >
                <span className="text-xs tracking-widest uppercase" style={{ color: '#545250' }}>
                  Esgotado
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-4 flex flex-col gap-2">
            {/* Brand */}
            <p
              className="text-xs tracking-[0.15em] uppercase"
              style={{ color: '#B8943E' }}
            >
              {product.brand}
            </p>

            {/* Name */}
            <h3
              className="font-light leading-snug transition-colors duration-300 group-hover:text-[#D4AE5C]"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.2rem',
                color: '#F0EDE5',
              }}
            >
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    style={{
                      color: i < Math.floor(product.rating) ? '#B8943E' : '#2E2C28',
                      fill: i < Math.floor(product.rating) ? '#B8943E' : 'transparent',
                    }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: '#545250' }}>
                ({product.reviews})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-1">
              <span
                className="text-lg font-light"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#D4AE5C' }}
              >
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span
                  className="text-xs line-through"
                  style={{ color: '#545250' }}
                >
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProductShowcase({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState('Todos')

  const filtered = products.filter((p) => {
    if (activeTab === 'Todos') return p.featured
    if (activeTab === 'Novidades') return p.badge === 'Novo'
    if (activeTab === 'Clássicos') return p.collection === 'classicos'
    if (activeTab === 'Esportivos') return p.collection === 'esportivos'
    return true
  })

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#0D0C0A' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-label">Destaques</span>
            <h2
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Peças{' '}
              <em className="text-gold-gradient">Selecionadas</em>
            </h2>
          </div>
          <Link
            href="/colecoes"
            className="btn-ghost flex items-center gap-2 self-start md:self-end"
          >
            Ver todos os relógios
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300"
                style={{
                  backgroundColor:
                    activeTab === tab ? 'rgba(184,148,62,0.1)' : 'transparent',
                  border:
                    activeTab === tab
                      ? '1px solid rgba(184,148,62,0.4)'
                      : '1px solid #2E2C28',
                  color: activeTab === tab ? '#D4AE5C' : '#8A8780',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-12 text-center">
          <Link href="/colecoes" className="btn-secondary">
            Explorar Catálogo Completo
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
