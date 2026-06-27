'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Coleções', href: '/colecoes' },
  { label: 'Relógios', href: '/colecoes' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Contato', href: '/sobre#contato' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass border-b border-[#2E2C28]/60 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-[1.35rem] tracking-[0.2em] uppercase font-light transition-colors duration-300 group-hover:text-[#D4AE5C]"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
            >
              MONACO
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-125"
              style={{ backgroundColor: '#B8943E' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href + link.label} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Cart + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <button
              className="relative p-2 transition-colors duration-300"
              aria-label="Carrinho de compras"
              style={{ color: '#8A8780' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AE5C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8780')}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full text-[10px] font-semibold flex items-center justify-center"
                  style={{ backgroundColor: '#B8943E', color: '#070706' }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden p-2 transition-colors duration-300"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              style={{ color: '#8A8780' }}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-[100] transition-all duration-500',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        style={{ backgroundColor: '#0D0C0A' }}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 p-2 transition-colors duration-300"
          onClick={() => setMobileOpen(false)}
          aria-label="Fechar menu"
          style={{ color: '#8A8780' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#D4AE5C')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8780')}
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Mobile Logo */}
        <div className="absolute top-6 left-6">
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <span
              className="text-xl tracking-[0.2em] uppercase font-light"
              style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
            >
              MONACO
            </span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#B8943E' }} />
          </Link>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col justify-center h-full px-10 gap-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'flex items-center justify-between py-4 border-b group transition-all duration-300',
                mobileOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-4'
              )}
              style={{
                borderColor: '#2E2C28',
                transitionDelay: `${idx * 60}ms`,
              }}
            >
              <span
                className="text-2xl font-light tracking-wide transition-colors duration-300 group-hover:text-[#D4AE5C]"
                style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
              >
                {link.label}
              </span>
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-2"
                style={{ color: '#B8943E' }}
              />
            </Link>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="absolute bottom-10 left-10 right-10">
          <p className="text-xs tracking-widest uppercase" style={{ color: '#545250' }}>
            Relojoaria Monaco — Desde 1994
          </p>
        </div>
      </div>
    </>
  )
}
