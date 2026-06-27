'use client'

import { ShieldCheck, Clock, Headphones, Truck } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const values = [
  {
    icon: ShieldCheck,
    title: 'Autenticidade Garantida',
    description:
      'Cada relógio é verificado por nossos especialistas com mais de 20 anos de experiência. Certificado de autenticidade incluso em todas as compras.',
  },
  {
    icon: Clock,
    title: '30 Anos de Expertise',
    description:
      'Desde 1994 no mercado de relojoaria fina. Nossa experiência garante que você receba a melhor consultoria para encontrar o relógio perfeito.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Premium',
    description:
      'Consultores especializados disponíveis por WhatsApp, telefone e e-mail. Suporte completo antes, durante e após sua compra.',
  },
  {
    icon: Truck,
    title: 'Frete Grátis Acima de R$2.000',
    description:
      'Entrega segura com embalagem premium, seguro total e rastreamento em tempo real para todo o Brasil. Frete grátis em compras acima de R$2.000.',
  },
]

export default function BrandValues() {
  return (
    <section className="py-24 md:py-32 relative" style={{ backgroundColor: '#070706' }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #B8943E 30%, #D4AE5C 50%, #B8943E 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">Por que Monaco</span>
          <h2
            className="heading-display mt-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            O Compromisso{' '}
            <em className="text-gold-gradient">Monaco</em>
          </h2>
        </AnimatedSection>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <AnimatedSection key={value.title} delay={idx * 0.1} direction="up">
                <div
                  className="group flex flex-col gap-5 p-6 h-full transition-all duration-400"
                  style={{
                    border: '1px solid #2E2C28',
                    backgroundColor: '#1E1C19',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(184,148,62,0.25)'
                    e.currentTarget.style.backgroundColor = '#252320'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2E2C28'
                    e.currentTarget.style.backgroundColor = '#1E1C19'
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                    style={{
                      border: '1px solid rgba(184,148,62,0.2)',
                      backgroundColor: 'rgba(184,148,62,0.06)',
                    }}
                  >
                    <Icon size={20} strokeWidth={1.5} style={{ color: '#B8943E' }} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className="font-light leading-snug"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.25rem',
                        color: '#F0EDE5',
                      }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom gold line */}
                  <div
                    className="h-px mt-auto transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(90deg, #B8943E, transparent)',
                      width: '60%',
                    }}
                  />
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #B8943E 30%, #D4AE5C 50%, #B8943E 70%, transparent)',
        }}
      />
    </section>
  )
}
