'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100svh', minHeight: 600 }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587836374828-4ce87db7c5ab?auto=format&fit=crop&w=1920&q=90"
          alt="Relógio de luxo Monaco"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(7,7,6,0.55) 0%, rgba(7,7,6,0.3) 30%, rgba(7,7,6,0.75) 70%, #070706 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(7,7,6,0.6) 0%, transparent 60%)',
        }}
      />

      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="badge-gold">A Arte do Tempo</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="mt-6 heading-display"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}
            >
              Relógios que
              <br />
              <em
                className="text-gold-gradient"
                style={{ fontStyle: 'italic', fontWeight: 300 }}
              >
                Contam Histórias
              </em>
            </motion.h1>

            {/* Divider */}
            <motion.div variants={itemVariants} className="mt-6 flex items-center gap-4">
              <div
                className="h-px flex-shrink-0 w-12"
                style={{ background: 'linear-gradient(90deg, #B8943E, transparent)' }}
              />
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: '#8A8780', fontFamily: 'var(--font-dm-sans)' }}
              >
                Relojoaria Monaco — Desde 1994
              </p>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base leading-relaxed max-w-md"
              style={{ color: '#C8C4BC' }}
            >
              Uma seleção curada dos mais extraordinários timepieces do mundo.
              Autenticidade garantida. Entrega premium. Experiência incomparável.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
              <Link href="/colecoes" className="btn-primary">
                Explorar Coleções
              </Link>
              <Link href="/sobre" className="btn-secondary">
                Nossa História
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center gap-8"
            >
              {[
                { value: '30+', label: 'Anos de experiência' },
                { value: '500+', label: 'Modelos exclusivos' },
                { value: '12k+', label: 'Clientes satisfeitos' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-light"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      color: '#D4AE5C',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-wider uppercase mt-0.5"
                    style={{ color: '#545250' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: '#545250' }}
        >
          Descobrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} strokeWidth={1} style={{ color: '#B8943E' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
