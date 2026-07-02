// Dados estáticos seguros de importar em Client Components (sem `fs`/`path`).
// Os dados de produtos/coleções (que o painel /admin edita em disco) ficam
// em `@/lib/products` — módulo `server-only`, nunca deve ir pro bundle do
// navegador.

export type { WatchSpecs, Product, CollectionBase, Collection } from './types'

export const testimonials = [
  {
    id: 1,
    name: 'Eduardo Machado',
    city: 'São Paulo, SP',
    rating: 5,
    text: 'Comprei o Tissot PRX e foi a melhor decisão. A Monaco entrega uma experiência que vai muito além do relógio — é atendimento de classe mundial. O unboxing sozinho já valeu cada centavo.',
    product: 'Tissot PRX Powermatic 80',
  },
  {
    id: 2,
    name: 'Rafael Sousa',
    city: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'Já comprei três relógios na Relojoaria Monaco. A autenticidade é garantida, o frete é rápido e o suporte pós-venda é impecável. Não compro em outro lugar.',
    product: 'Seiko Presage Cocktail',
  },
  {
    id: 3,
    name: 'Gustavo Fernandes',
    city: 'Belo Horizonte, MG',
    rating: 5,
    text: 'O Hamilton Khaki Field chegou antes do prazo, com certificado de autenticidade e numa caixa premium incrível. Recomendo a Monaco para qualquer amante de relógios.',
    product: 'Hamilton Khaki Field',
  },
  {
    id: 4,
    name: 'Marcelo Oliveira',
    city: 'Curitiba, PR',
    rating: 5,
    text: 'Precisei de ajuda para escolher entre dois modelos e o consultor da Monaco passou mais de uma hora me explicando cada detalhe. Esse nível de atenção é raro hoje em dia.',
    product: 'Longines HydroConquest GMT',
  },
  {
    id: 5,
    name: 'André Lima',
    city: 'Porto Alegre, RS',
    rating: 5,
    text: 'Meu IWC Portugieser chegou perfeito, com todos os papéis, ajuste de pulseira incluso. A Monaco é referência quando o assunto é relojoaria fina no Brasil.',
    product: 'IWC Portugieser Chronograph',
  },
]
