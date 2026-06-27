'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0D0C0A' }}>
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,148,62,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">Depoimentos</span>
          <h2
            className="heading-display mt-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            O Que Dizem{' '}
            <em className="text-gold-gradient">Nossos Clientes</em>
          </h2>
        </AnimatedSection>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center gap-8 px-4 md:px-16"
            >
              {/* Quote icon */}
              <div
                className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                style={{
                  border: '1px solid rgba(184,148,62,0.2)',
                  backgroundColor: 'rgba(184,148,62,0.05)',
                }}
              >
                <Quote size={24} strokeWidth={1.5} style={{ color: '#B8943E' }} />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    style={{ color: '#B8943E', fill: '#B8943E' }}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="font-light italic leading-relaxed max-w-2xl"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  color: '#F0EDE5',
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Product */}
              <div
                className="text-xs tracking-[0.15em] uppercase px-4 py-2"
                style={{
                  color: '#B8943E',
                  border: '1px solid rgba(184,148,62,0.2)',
                }}
              >
                {t.product}
              </div>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <p
                  className="font-light text-lg"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
                >
                  {t.name}
                </p>
                <p className="text-xs tracking-wider" style={{ color: '#545250' }}>
                  {t.city}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center border transition-all duration-300"
            style={{ borderColor: '#2E2C28', color: '#8A8780' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#B8943E'
              e.currentTarget.style.color = '#D4AE5C'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2E2C28'
              e.currentTarget.style.color = '#8A8780'
            }}
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className="transition-all duration-300"
                style={{
                  width: idx === current ? '24px' : '8px',
                  height: '2px',
                  backgroundColor: idx === current ? '#B8943E' : '#2E2C28',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center border transition-all duration-300"
            style={{ borderColor: '#2E2C28', color: '#8A8780' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#B8943E'
              e.currentTarget.style.color = '#D4AE5C'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2E2C28'
              e.currentTarget.style.color = '#8A8780'
            }}
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
