'use client'

import { useState } from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    alt: 'Relógio clássico dourado',
    caption: 'Elegância Atemporal',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
    alt: 'Detalhe de mostrador',
    caption: 'Precisão Artesanal',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=800&q=80',
    alt: 'Relógio esportivo',
    caption: 'Engenharia de Performance',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    alt: 'Relógio de pulso masculino',
    caption: 'Distinção',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80',
    alt: 'Relógio de mergulho',
    caption: 'Aventura e Robustez',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
    alt: 'Coleção de relógios',
    caption: 'Coleções Exclusivas',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80',
    alt: 'Relógio de luxo',
    caption: 'Alta Relojoaria',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=800&q=80',
    alt: 'Detalhe de bracelete',
    caption: 'Acabamento Impecável',
    span: 'col-span-1 row-span-1',
  },
]

export default function WatchGallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#0D0C0A' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="section-label">Galeria</span>
          <h2
            className="heading-display mt-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            A Beleza do{' '}
            <em className="text-gold-gradient">Detalhe</em>
          </h2>
        </AnimatedSection>

        {/* Masonry Grid */}
        <AnimatedSection direction="none">
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto',
            }}
          >
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden group cursor-pointer ${
                  idx === 0 || idx === 4 ? 'row-span-2' : 'row-span-1'
                }`}
                style={{
                  aspectRatio: idx === 0 || idx === 4 ? 'auto' : '1/1',
                  minHeight: idx === 0 || idx === 4 ? '400px' : '200px',
                  backgroundColor: '#1E1C19',
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-400"
                  style={{
                    background:
                      'linear-gradient(180deg, transparent 40%, rgba(7,7,6,0.85) 100%)',
                    opacity: hoveredIdx === idx ? 1 : 0,
                  }}
                />

                {/* Caption */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 transition-all duration-400"
                  style={{
                    opacity: hoveredIdx === idx ? 1 : 0,
                    transform: hoveredIdx === idx ? 'translateY(0)' : 'translateY(8px)',
                  }}
                >
                  <p
                    className="font-light italic text-lg"
                    style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
                  >
                    {item.caption}
                  </p>
                  <div
                    className="mt-1.5 h-px transition-all duration-500"
                    style={{
                      width: hoveredIdx === idx ? '40px' : '0px',
                      background: 'linear-gradient(90deg, #B8943E, transparent)',
                    }}
                  />
                </div>

                {/* Gold border on hover */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-400"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(184,148,62,0.3)',
                    opacity: hoveredIdx === idx ? 1 : 0,
                  }}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
