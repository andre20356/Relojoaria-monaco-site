'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function FeaturedCollections() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#070706' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">Nossas Coleções</span>
          <h2
            className="heading-display mt-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Cada Peça,{' '}
            <em className="text-gold-gradient">Uma História</em>
          </h2>
          <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#8A8780' }}>
            De relógios clássicos atemporais a instrumentos de alta performance,
            nossas coleções refletem a diversidade da arte relojoeira.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((collection, idx) => (
            <AnimatedSection
              key={collection.id}
              delay={idx * 0.1}
              direction="up"
            >
              <Link href={`/colecoes/${collection.slug}`} className="block group">
                <motion.div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: idx === 0 || idx === 3 ? '3/4' : '3/4',
                    backgroundColor: '#1E1C19',
                    border: '1px solid #2E2C28',
                  }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Image */}
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(7,7,6,0.1) 0%, rgba(7,7,6,0.8) 100%)',
                    }}
                  />

                  {/* Gold border on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(184,148,62,0.4)',
                    }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-2"
                      style={{ color: '#B8943E' }}
                    >
                      {collection.productCount} modelos
                    </p>
                    <h3
                      className="font-light leading-tight"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.5rem',
                        color: '#F0EDE5',
                      }}
                    >
                      {collection.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                      <span
                        className="text-xs tracking-wider uppercase"
                        style={{ color: '#D4AE5C' }}
                      >
                        Explorar
                      </span>
                      <ArrowRight size={13} style={{ color: '#D4AE5C' }} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
