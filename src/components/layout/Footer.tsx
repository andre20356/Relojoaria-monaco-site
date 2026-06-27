'use client'

import Link from 'next/link'
import { Camera, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'

const navigation = [
  { label: 'Coleções', href: '/colecoes' },
  { label: 'Clássicos', href: '/colecoes/classicos' },
  { label: 'Esportivos', href: '/colecoes/esportivos' },
  { label: 'Mergulho', href: '/colecoes/mergulho' },
  { label: 'Edição Limitada', href: '/colecoes/edicao-limitada' },
  { label: 'Sobre nós', href: '/sobre' },
]

const service = [
  { label: 'Guia de Tamanhos', href: '#' },
  { label: 'Política de Trocas', href: '#' },
  { label: 'Garantia & Autenticidade', href: '#' },
  { label: 'Assistência Técnica', href: '#' },
  { label: 'Frete & Entrega', href: '#' },
  { label: 'FAQ', href: '#' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D0C0A' }}>
      {/* Gold top border */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #B8943E 30%, #D4AE5C 50%, #B8943E 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <span
                className="text-2xl tracking-[0.2em] uppercase font-light transition-colors duration-300 group-hover:text-[#D4AE5C]"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
              >
                MONACO
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#B8943E' }} />
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
              Há mais de 30 anos conectando apaixonados por relojoaria às melhores peças do mundo.
              Autenticidade é nossa assinatura.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Camera, label: 'Instagram', href: '#' },
                { icon: Globe, label: 'Facebook', href: '#' },
                { icon: MessageCircle, label: 'WhatsApp', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm border transition-all duration-300"
                  style={{ borderColor: '#2E2C28', color: '#8A8780' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#B8943E'
                    e.currentTarget.style.color = '#D4AE5C'
                    e.currentTarget.style.backgroundColor = 'rgba(184,148,62,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2E2C28'
                    e.currentTarget.style.color = '#8A8780'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: '#B8943E' }}
            >
              Navegação
            </h4>
            <ul className="flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#8A8780' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D4AE5C')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8A8780')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: '#B8943E' }}
            >
              Atendimento
            </h4>
            <ul className="flex flex-col gap-3">
              {service.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#8A8780' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D4AE5C')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8A8780')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: '#B8943E' }}
            >
              Contato
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 flex-shrink-0" style={{ color: '#B8943E' }} />
                <span className="text-sm" style={{ color: '#8A8780' }}>
                  Av. Paulista, 1374 — Cj. 901<br />
                  São Paulo, SP 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} strokeWidth={1.5} className="flex-shrink-0" style={{ color: '#B8943E' }} />
                <a
                  href="tel:+551133334444"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#8A8780' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D4AE5C')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8A8780')}
                >
                  (11) 3333-4444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} strokeWidth={1.5} className="flex-shrink-0" style={{ color: '#B8943E' }} />
                <a
                  href="mailto:contato@monaco.com.br"
                  className="text-sm transition-colors duration-300"
                  style={{ color: '#8A8780' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#D4AE5C')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#8A8780')}
                >
                  contato@monaco.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: '#2E2C28' }}
        >
          <p className="text-xs" style={{ color: '#545250' }}>
            © {new Date().getFullYear()} Relojoaria Monaco. Todos os direitos reservados.
          </p>

          {/* Payment methods */}
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: '#545250' }}>
              Pagamento:
            </span>
            {['Visa', 'Mastercard', 'Pix', 'Boleto'].map((method) => (
              <span
                key={method}
                className="text-xs px-2 py-1 border"
                style={{
                  borderColor: '#2E2C28',
                  color: '#545250',
                  fontFamily: 'var(--font-dm-mono)',
                }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
