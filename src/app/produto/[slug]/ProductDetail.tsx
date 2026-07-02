'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  ArrowLeft,
  ShoppingBag,
  Heart,
  Share2,
  Shield,
  Truck,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Check,
} from 'lucide-react'
import type { Product } from '@/lib/data'
import { formatPrice } from '@/lib/utils'

const faqItems = [
  {
    question: 'Como funciona a garantia?',
    answer:
      'Todos os nossos relógios vêm com garantia de autenticidade Monaco + garantia do fabricante (1 a 5 anos dependendo da marca). Em caso de defeito de fabricação, cobrimos o reparo ou substituição.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'Entregamos em todo o Brasil. O prazo varia de 3 a 7 dias úteis para capitais e 5 a 10 dias úteis para interior. Para pedidos acima de R$2.000, o frete é grátis.',
  },
  {
    question: 'Posso devolver o produto?',
    answer:
      'Sim. Você tem 30 dias a partir do recebimento para devolver o produto sem qualquer justificativa, desde que esteja em perfeitas condições e na embalagem original.',
  },
  {
    question: 'O relógio vem com caixa original?',
    answer:
      'Todos os relógios são vendidos na caixa original do fabricante, com papéis, manuais e certificados de garantia. Além disso, incluímos nossa embalagem premium Monaco.',
  },
]

export default function ProductDetail({
  product,
  relatedProducts,
}: {
  product: Product
  relatedProducts: Product[]
}) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [wishlisted, setWishlisted] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  return (
    <div style={{ backgroundColor: '#070706', minHeight: '100vh' }}>
      {/* Breadcrumb */}
      <div
        className="pt-24 pb-4 border-b"
        style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs" style={{ color: '#545250' }}>
            <Link
              href="/"
              className="transition-colors duration-300"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#B8943E')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#545250')}
            >
              Início
            </Link>
            <span>/</span>
            <Link
              href="/colecoes"
              className="transition-colors duration-300"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#B8943E')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#545250')}
            >
              Coleções
            </Link>
            <span>/</span>
            <span style={{ color: '#8A8780' }}>{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* LEFT: Gallery */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div
                className="relative overflow-hidden group"
                style={{
                  aspectRatio: '1/1',
                  backgroundColor: '#1E1C19',
                  border: '1px solid #2E2C28',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0"
                  >
                    {product.images[selectedImage] && (
                      <Image
                        src={product.images[selectedImage]}
                        alt={`${product.name} — imagem ${selectedImage + 1}`}
                        fill
                        priority={selectedImage === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-700 group-hover:scale-103"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {product.badge && (
                  <span
                    className="absolute top-4 left-4 z-10 text-xs px-3 py-1 tracking-wider uppercase"
                    style={{
                      backgroundColor:
                        product.badge === 'Edição Limitada'
                          ? 'rgba(184,148,62,0.9)'
                          : 'rgba(13,12,10,0.9)',
                      color: product.badge === 'Edição Limitada' ? '#070706' : '#D4AE5C',
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

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className="relative overflow-hidden transition-all duration-300"
                    style={{
                      aspectRatio: '1/1',
                      backgroundColor: '#1E1C19',
                      border: `1px solid ${idx === selectedImage ? '#B8943E' : '#2E2C28'}`,
                      opacity: idx === selectedImage ? 1 : 0.6,
                    }}
                    aria-label={`Ver imagem ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} detalhe ${idx + 1}`}
                      fill
                      sizes="120px"
                      style={{ objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Product Info */}
            <div className="flex flex-col gap-6">
              {/* Back link */}
              <Link
                href="/colecoes"
                className="inline-flex items-center gap-2 text-xs tracking-wider uppercase transition-colors duration-300 w-fit"
                style={{ color: '#545250' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#B8943E')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#545250')}
              >
                <ArrowLeft size={12} />
                Voltar às Coleções
              </Link>

              {/* Brand + Name */}
              <div>
                <p
                  className="text-xs tracking-[0.25em] uppercase mb-2"
                  style={{ color: '#B8943E' }}
                >
                  {product.brand}
                </p>
                <h1
                  className="heading-display"
                  style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
                >
                  {product.name}
                </h1>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      style={{
                        color: i < Math.floor(product.rating) ? '#B8943E' : '#2E2C28',
                        fill: i < Math.floor(product.rating) ? '#B8943E' : 'transparent',
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm" style={{ color: '#8A8780' }}>
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              {/* Price */}
              <div
                className="flex items-baseline gap-3 py-5 border-t border-b"
                style={{ borderColor: '#2E2C28' }}
              >
                <span
                  className="font-light"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.25rem',
                    color: '#D4AE5C',
                  }}
                >
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <div className="flex flex-col">
                    <span className="text-sm line-through" style={{ color: '#545250' }}>
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-xs" style={{ color: '#B8943E' }}>
                      Economize{' '}
                      {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                {product.description}
              </p>

              {/* Add to Cart + Wishlist */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="btn-primary flex-1 flex items-center justify-center gap-2"
                  style={{ opacity: product.inStock ? 1 : 0.5, cursor: product.inStock ? 'pointer' : 'not-allowed' }}
                >
                  <AnimatePresence mode="wait">
                    {addedToCart ? (
                      <motion.span
                        key="added"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={14} />
                        Adicionado!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="add"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <ShoppingBag size={14} />
                        {product.inStock ? 'Adicionar ao Carrinho' : 'Produto Esgotado'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button
                  onClick={() => setWishlisted((w) => !w)}
                  className="w-12 h-12 flex items-center justify-center border transition-all duration-300"
                  style={{
                    borderColor: wishlisted ? '#B8943E' : '#2E2C28',
                    backgroundColor: wishlisted ? 'rgba(184,148,62,0.1)' : 'transparent',
                    color: wishlisted ? '#B8943E' : '#8A8780',
                  }}
                  aria-label="Adicionar à lista de desejos"
                >
                  <Heart size={16} strokeWidth={1.5} fill={wishlisted ? '#B8943E' : 'none'} />
                </button>
                <button
                  className="w-12 h-12 flex items-center justify-center border transition-all duration-300"
                  style={{ borderColor: '#2E2C28', color: '#8A8780' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#B8943E'
                    e.currentTarget.style.color = '#D4AE5C'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#2E2C28'
                    e.currentTarget.style.color = '#8A8780'
                  }}
                  aria-label="Compartilhar"
                >
                  <Share2 size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Trust signals */}
              <div
                className="grid grid-cols-3 gap-3 pt-4 border-t"
                style={{ borderColor: '#2E2C28' }}
              >
                {[
                  { icon: Shield, label: 'Autenticidade', sub: 'Garantida' },
                  { icon: Truck, label: 'Frete Grátis', sub: 'Acima de R$2.000' },
                  { icon: RefreshCw, label: 'Devolução', sub: '30 dias' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center gap-2 text-center">
                    <Icon size={18} strokeWidth={1.5} style={{ color: '#B8943E' }} />
                    <div>
                      <p className="text-xs font-medium" style={{ color: '#F0EDE5' }}>
                        {label}
                      </p>
                      <p className="text-xs" style={{ color: '#545250' }}>
                        {sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="py-16 border-t" style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="heading-display mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Especificações Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border" style={{ borderColor: '#2E2C28' }}>
            {Object.entries(product.specs).map(([key, value], idx) => {
              const labels: Record<string, string> = {
                movement: 'Movimento',
                case: 'Caixa',
                dial: 'Mostrador',
                bracelet: 'Pulseira / Bracelete',
                water_resistance: 'Resistência à água',
                functions: 'Funções',
              }
              return (
                <div
                  key={key}
                  className="flex gap-4 p-4 border-b"
                  style={{
                    borderColor: '#2E2C28',
                    backgroundColor: idx % 2 === 0 ? 'transparent' : 'rgba(30,28,25,0.4)',
                  }}
                >
                  <span
                    className="text-xs tracking-wider uppercase flex-shrink-0 w-40"
                    style={{ color: '#B8943E' }}
                  >
                    {labels[key] || key}
                  </span>
                  <span className="text-sm" style={{ color: '#C8C4BC' }}>
                    {value}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 border-t" style={{ borderColor: '#2E2C28' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h2
                className="heading-display"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
              >
                Avaliações dos Clientes
              </h2>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      style={{
                        color: i < Math.floor(product.rating) ? '#B8943E' : '#2E2C28',
                        fill: i < Math.floor(product.rating) ? '#B8943E' : 'transparent',
                      }}
                    />
                  ))}
                </div>
                <span
                  className="font-light text-2xl"
                  style={{ fontFamily: 'var(--font-cormorant)', color: '#D4AE5C' }}
                >
                  {product.rating}
                </span>
                <span className="text-sm" style={{ color: '#8A8780' }}>
                  / 5 — {product.reviews} avaliações
                </span>
              </div>
            </div>
          </div>

          {/* Sample Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: 'Carlos M.',
                date: 'Janeiro 2026',
                rating: 5,
                text: 'Produto perfeito, exatamente como descrito. A embalagem Monaco é um luxo à parte. Recomendo sem hesitar.',
              },
              {
                name: 'Pedro A.',
                date: 'Dezembro 2025',
                rating: 5,
                text: 'Terceira compra na Monaco. Consistência impecável. Autenticidade verificada pelo fabricante. 5 estrelas sempre.',
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="p-6"
                style={{ border: '1px solid #2E2C28', backgroundColor: '#1E1C19' }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-sm" style={{ color: '#F0EDE5' }}>
                      {review.name}
                    </p>
                    <p className="text-xs" style={{ color: '#545250' }}>
                      {review.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={12} style={{ color: '#B8943E', fill: '#B8943E' }} />
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 border-t"
        style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="heading-display mb-8 text-center"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-2">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden"
                style={{ border: '1px solid #2E2C28' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300"
                  style={{ backgroundColor: openFaq === idx ? '#252320' : '#1E1C19' }}
                >
                  <span className="text-sm font-medium" style={{ color: '#F0EDE5' }}>
                    {item.question}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp size={16} strokeWidth={1.5} style={{ color: '#B8943E', flexShrink: 0 }} />
                  ) : (
                    <ChevronDown size={16} strokeWidth={1.5} style={{ color: '#545250', flexShrink: 0 }} />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div
                        className="px-5 pb-5"
                        style={{ backgroundColor: '#252320' }}
                      >
                        <p className="text-sm leading-relaxed pt-2" style={{ color: '#8A8780' }}>
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 border-t" style={{ borderColor: '#2E2C28' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2
              className="heading-display mb-10"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
            >
              Você Também Pode Gostar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/produto/${rp.slug}`} className="block group">
                  <div
                    className="card-product"
                    style={{ border: '1px solid #2E2C28' }}
                  >
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: '1/1', backgroundColor: '#1E1C19' }}
                    >
                      <Image
                        src={rp.images[0]}
                        alt={rp.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs tracking-[0.15em] uppercase mb-1" style={{ color: '#B8943E' }}>
                        {rp.brand}
                      </p>
                      <h3
                        className="font-light text-base leading-snug mb-2 group-hover:text-[#D4AE5C] transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
                      >
                        {rp.name}
                      </h3>
                      <p
                        className="font-light text-lg"
                        style={{ fontFamily: 'var(--font-cormorant)', color: '#D4AE5C' }}
                      >
                        {formatPrice(rp.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
