'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#070706' }}>
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div
            className="relative p-10 md:p-16 text-center overflow-hidden"
            style={{
              border: '1px solid rgba(184,148,62,0.2)',
              backgroundColor: '#1E1C19',
            }}
          >
            {/* Corner accents */}
            {[
              'top-0 left-0',
              'top-0 right-0',
              'bottom-0 left-0',
              'bottom-0 right-0',
            ].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-8 h-8 pointer-events-none`}
                style={{
                  borderTop: pos.includes('top') ? '1px solid #B8943E' : 'none',
                  borderBottom: pos.includes('bottom') ? '1px solid #B8943E' : 'none',
                  borderLeft: pos.includes('left') ? '1px solid #B8943E' : 'none',
                  borderRight: pos.includes('right') ? '1px solid #B8943E' : 'none',
                }}
              />
            ))}

            {/* Background glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(184,148,62,0.05) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <div
                className="w-12 h-12 mx-auto mb-6 flex items-center justify-center"
                style={{
                  border: '1px solid rgba(184,148,62,0.25)',
                  backgroundColor: 'rgba(184,148,62,0.06)',
                }}
              >
                <Mail size={20} strokeWidth={1.5} style={{ color: '#B8943E' }} />
              </div>

              {/* Badge */}
              <span className="badge-gold">Newsletter Exclusiva</span>

              {/* Heading */}
              <h2
                className="heading-display mt-5"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
              >
                Seja o Primeiro{' '}
                <em className="text-gold-gradient">a Saber</em>
              </h2>

              {/* Subtext */}
              <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#8A8780' }}>
                Receba em primeira mão nossos lançamentos exclusivos, edições limitadas
                e ofertas especiais. Cadastre-se e ganhe{' '}
                <strong style={{ color: '#D4AE5C' }}>10% de desconto</strong> na
                primeira compra.
              </p>

              {/* Form */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      required
                      className="input-monaco flex-1"
                    />
                    <button type="submit" className="btn-primary whitespace-nowrap">
                      Cadastrar
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 flex flex-col items-center gap-3"
                  >
                    <CheckCircle size={32} style={{ color: '#B8943E' }} strokeWidth={1.5} />
                    <p className="font-light text-lg" style={{ fontFamily: 'var(--font-cormorant)', color: '#D4AE5C' }}>
                      Perfeito! Seu desconto está a caminho.
                    </p>
                    <p className="text-sm" style={{ color: '#8A8780' }}>
                      Verifique sua caixa de entrada em breve.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Terms */}
              <p className="mt-5 text-xs" style={{ color: '#545250' }}>
                Ao se cadastrar, você concorda com nossa{' '}
                <a
                  href="#"
                  className="transition-colors duration-300 underline"
                  style={{ color: '#545250' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#B8943E')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#545250')}
                >
                  Política de Privacidade
                </a>
                . Sem spam, prometemos.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
