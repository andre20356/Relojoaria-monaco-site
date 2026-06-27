import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Relojoaria Monaco | Timepieces de Luxo',
  description:
    'A mais refinada seleção de relógios de luxo do Brasil. Autenticidade garantida, atendimento premium e entrega segura para todo o país.',
  keywords: ['relógios de luxo', 'relojoaria', 'Seiko', 'Tissot', 'IWC', 'Longines', 'Monaco'],
  openGraph: {
    title: 'Relojoaria Monaco | Timepieces de Luxo',
    description: 'A mais refinada seleção de relógios de luxo do Brasil.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070706',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <body className="min-h-screen flex flex-col antialiased" style={{ backgroundColor: '#070706' }}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
