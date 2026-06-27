import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Globe, Heart } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata = {
  title: 'Sobre Nós | Relojoaria Monaco',
  description: 'Conheça a história da Relojoaria Monaco. 30 anos de paixão pela alta relojoaria.',
}

const timeline = [
  {
    year: '1994',
    title: 'Fundação',
    description:
      'A Relojoaria Monaco abre suas portas na Av. Paulista com uma missão: democratizar o acesso à alta relojoaria com autenticidade e confiança.',
  },
  {
    year: '2001',
    title: 'Expansão de Marcas',
    description:
      'Ampliamos nosso portfólio para incluir as principais marcas suíças e japonesas, tornando-nos referência nacional no segmento premium.',
  },
  {
    year: '2010',
    title: 'Loja Online',
    description:
      'Lançamento da nossa plataforma digital, levando a experiência Monaco para todo o Brasil com segurança e comodidade.',
  },
  {
    year: '2018',
    title: 'Certificação Internacional',
    description:
      'Obtemos autorização de revendedor oficial de mais de 15 marcas internacionais, consolidando nossa posição como referência do mercado.',
  },
  {
    year: '2024',
    title: 'Nova Era',
    description:
      'Com mais de 12.000 clientes satisfeitos e 500+ modelos em catálogo, iniciamos uma nova fase com experiência digital imersiva.',
  },
]

const team = [
  {
    name: 'Roberto Monaco',
    role: 'Fundador & CEO',
    description: 'Relojoeiro com 35 anos de experiência, formado em Genebra pela École d\'Horlogerie.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Ana Paula Ferreira',
    role: 'Diretora de Curadoria',
    description: 'Especialista em marcas de luxo com passagens por Baselworld e Watches & Wonders.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Lucas Santana',
    role: 'Consultor Sênior',
    description: 'Colecionador apaixonado com expertise em relógios vintage e edições limitadas.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
]

const stats = [
  { icon: Award, value: '30+', label: 'Anos de Experiência' },
  { icon: Users, value: '12k+', label: 'Clientes Satisfeitos' },
  { icon: Globe, value: '25+', label: 'Marcas Parceiras' },
  { icon: Heart, value: '500+', label: 'Modelos em Catálogo' },
]

export default function SobrePage() {
  return (
    <div style={{ backgroundColor: '#070706', minHeight: '100vh' }}>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80"
            alt="Relojoaria Monaco — Nossa História"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(7,7,6,0.75) 0%, rgba(7,7,6,0.97) 100%)',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="section-label">Nossa História</span>
            <h1
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Três Décadas de{' '}
              <em className="text-gold-gradient">Paixão</em>
            </h1>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#8A8780' }}>
              Desde 1994, a Relojoaria Monaco é o destino dos apaixonados por
              relojoaria fina no Brasil. Nossa história é feita de precisão,
              autenticidade e amor pelo artesanato do tempo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-b" style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <AnimatedSection key={stat.label} delay={idx * 0.1} direction="up">
                  <div className="flex flex-col items-center text-center gap-3">
                    <Icon size={24} strokeWidth={1.5} style={{ color: '#B8943E' }} />
                    <p
                      className="font-light"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '3rem',
                        color: '#D4AE5C',
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-widest uppercase" style={{ color: '#545250' }}>
                      {stat.label}
                    </p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '4/5', backgroundColor: '#1E1C19', border: '1px solid #2E2C28' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80"
                    alt="A arte da relojoaria Monaco"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {/* Decorative element */}
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 -z-10"
                  style={{ border: '1px solid rgba(184,148,62,0.2)' }}
                />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="flex flex-col gap-6">
                <span className="section-label">Nossa Missão</span>
                <h2
                  className="heading-display"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  Mais que Relógios —{' '}
                  <em className="text-gold-gradient">Experiências</em>
                </h2>
                <div className="flex flex-col gap-4">
                  <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                    A Relojoaria Monaco nasceu em 1994 da paixão de Roberto Monaco pela
                    alta relojoaria. Formado na École d&apos;Horlogerie de Genebra, Roberto
                    trouxe para o Brasil a filosofia suíça de que um relógio não é apenas
                    um instrumento de medição de tempo — é uma obra de arte.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                    Em três décadas, construímos relacionamentos duradouros com as principais
                    manufaturas do mundo, garantindo autenticidade absoluta em cada peça
                    que vendemos. Nossa curadoria é rigorosa: só trabalhamos com o que
                    acreditamos de verdade.
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                    Para nós, cada cliente que entra pela porta — física ou digital —
                    merece a mesma atenção que daríamos a um colecionador exigente.
                    Porque é isso que você é: alguém que entende o valor do tempo.
                  </p>
                </div>
                <Link href="/colecoes" className="btn-primary w-fit mt-2">
                  Explorar Coleções
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 md:py-32 border-t"
        style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Nossa Jornada</span>
            <h2
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              30 Anos de{' '}
              <em className="text-gold-gradient">História</em>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ backgroundColor: '#2E2C28', transform: 'translateX(-50%)' }}
            />

            <div className="flex flex-col gap-10">
              {timeline.map((item, idx) => (
                <AnimatedSection key={item.year} delay={idx * 0.1}>
                  <div
                    className={`relative flex gap-8 ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div
                        className="p-6"
                        style={{ border: '1px solid #2E2C28', backgroundColor: '#1E1C19' }}
                      >
                        <p
                          className="text-xs tracking-[0.2em] uppercase mb-2"
                          style={{ color: '#B8943E' }}
                        >
                          {item.year}
                        </p>
                        <h3
                          className="font-light text-xl mb-3"
                          style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot (hidden on mobile) */}
                    <div className="hidden md:flex items-center justify-center w-4 flex-shrink-0">
                      <div
                        className="w-3 h-3 rounded-full relative z-10"
                        style={{
                          backgroundColor: '#B8943E',
                          boxShadow: '0 0 0 4px rgba(184,148,62,0.15)',
                        }}
                      />
                    </div>

                    {/* Empty space for opposite side */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 border-t" style={{ borderColor: '#2E2C28' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="section-label">Nossa Equipe</span>
            <h2
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Os Especialistas{' '}
              <em className="text-gold-gradient">Monaco</em>
            </h2>
            <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: '#8A8780' }}>
              Nossa equipe combina décadas de experiência com paixão genuína pela
              arte da relojoaria.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <AnimatedSection key={member.name} delay={idx * 0.12} direction="up">
                <div
                  className="group overflow-hidden"
                  style={{ border: '1px solid #2E2C28', backgroundColor: '#1E1C19' }}
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: '3/4', backgroundColor: '#252320' }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, transparent 50%, rgba(7,7,6,0.8) 100%)',
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-light text-xl"
                      style={{ fontFamily: 'var(--font-cormorant)', color: '#F0EDE5' }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs tracking-[0.15em] uppercase mt-1 mb-3"
                      style={{ color: '#B8943E' }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#8A8780' }}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="py-20 border-t"
        style={{ borderColor: '#2E2C28', backgroundColor: '#0D0C0A' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="section-label">Contato</span>
            <h2
              className="heading-display mt-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Fale com um{' '}
              <em className="text-gold-gradient">Especialista</em>
            </h2>
            <p className="mt-4 text-sm max-w-lg mx-auto mb-10" style={{ color: '#8A8780' }}>
              Nossa equipe de consultores está pronta para ajudá-lo a encontrar
              o relógio perfeito. Entre em contato conosco:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Telefone', value: '(11) 3333-4444' },
                { label: 'WhatsApp', value: '(11) 99999-8888' },
                { label: 'E-mail', value: 'contato@monaco.com.br' },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="p-5 text-center"
                  style={{ border: '1px solid #2E2C28', backgroundColor: '#1E1C19' }}
                >
                  <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#B8943E' }}>
                    {contact.label}
                  </p>
                  <p
                    className="font-light"
                    style={{ fontFamily: 'var(--font-dm-mono)', color: '#C8C4BC', fontSize: '0.9rem' }}
                  >
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/colecoes" className="btn-primary">
              Ver Nossos Relógios
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
