export type WatchSpecs = {
  movement: string
  case: string
  dial: string
  bracelet: string
  water_resistance: string
  functions: string
}

export type Product = {
  id: string
  name: string
  slug: string
  brand: string
  price: number
  originalPrice?: number
  category: string
  collection: string
  description: string
  specs: WatchSpecs
  images: string[]
  badge?: 'Novo' | 'Exclusivo' | 'Edição Limitada'
  rating: number
  reviews: number
  inStock: boolean
  featured?: boolean
}

export type Collection = {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
  accent: string
}

export const collections: Collection[] = [
  {
    id: 'classicos',
    name: 'Clássicos',
    slug: 'classicos',
    description: 'Elegância atemporal que nunca sai de moda. Designs refinados para o homem moderno.',
    image: 'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=1200&q=80',
    productCount: 4,
    accent: '#B8943E',
  },
  {
    id: 'esportivos',
    name: 'Esportivos',
    slug: 'esportivos',
    description: 'Precisão e resistência para os momentos mais intensos da vida.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80',
    productCount: 3,
    accent: '#8A6A2A',
  },
  {
    id: 'mergulho',
    name: 'Mergulho',
    slug: 'mergulho',
    description: 'Companheiros confiáveis das profundezas. Engenharia de alta performance.',
    image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=1200&q=80',
    productCount: 3,
    accent: '#2A5A7A',
  },
  {
    id: 'edicao-limitada',
    name: 'Edição Limitada',
    slug: 'edicao-limitada',
    description: 'Peças únicas para colecionadores. Disponibilidade exclusiva e numerada.',
    image: 'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=1200&q=80',
    productCount: 2,
    accent: '#D4AE5C',
  },
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Presage Cocktail Time',
    slug: 'seiko-presage-cocktail-time',
    brand: 'Seiko',
    price: 2890,
    category: 'Clássico',
    collection: 'classicos',
    description:
      'Inspirado nos elegantes bares de coquetelaria de Tóquio, o Presage Cocktail Time combina um mostrador em madrepérola com índices dourados cuidadosamente aplicados. Um relógio que conta histórias a cada olhar.',
    specs: {
      movement: 'Automático Seiko 4R35, 23 joias, reserva de marcha 41h',
      case: 'Aço inoxidável, 40,5mm, acabamento escovado/polido',
      dial: 'Madrepérola branca com índices dourados aplicados',
      bracelet: 'Couro marrom genuíno com fivela de borboleta',
      water_resistance: '50 metros (5 ATM)',
      functions: 'Horas, minutos, segundos, data',
    },
    images: [
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585533561153-8470eed10a3d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587836374828-4ce87db7c5ab?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Exclusivo',
    rating: 4.9,
    reviews: 127,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Bambino Version IV',
    slug: 'orient-bambino-v4',
    brand: 'Orient',
    price: 890,
    category: 'Clássico',
    collection: 'classicos',
    description:
      'O Bambino V4 é a definição de elegância acessível. Com seu mostrador domed e ponteiros dauphine, é um clássico instantâneo que combina com qualquer ocasião formal.',
    specs: {
      movement: 'Automático Orient Cal. F6724, 21 joias, reserva 40h',
      case: 'Aço inoxidável, 40,5mm, caixa domed',
      dial: 'Branco marfim com algarismos romanos',
      bracelet: 'Couro preto genuíno, fivela simples',
      water_resistance: '30 metros (3 ATM)',
      functions: 'Horas, minutos, segundos',
    },
    images: [
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Eco-Drive Titanium',
    slug: 'citizen-eco-drive-titanium',
    brand: 'Citizen',
    price: 3450,
    originalPrice: 3990,
    category: 'Clássico',
    collection: 'classicos',
    description:
      'Tecnologia Eco-Drive que converte qualquer luz em energia. Caixa em titânio ultraleve e hipoalergênico com acabamento super-anti-reflexo para uma leitura perfeita.',
    specs: {
      movement: 'Eco-Drive Cal. H820, alimentação a luz, precisão ±1s/ano',
      case: 'Titânio, 40mm, super-anti-reflexo',
      dial: 'Preto com índices SuperTitânio',
      bracelet: 'Titânio com fecho triplo de segurança',
      water_resistance: '100 metros (10 ATM)',
      functions: 'Horas, minutos, segundos, data, indicador de carga',
    },
    images: [
      'https://images.unsplash.com/photo-1585533561153-8470eed10a3d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Novo',
    rating: 4.8,
    reviews: 89,
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    name: 'PRX Powermatic 80',
    slug: 'tissot-prx-powermatic-80',
    brand: 'Tissot',
    price: 4290,
    category: 'Clássico',
    collection: 'classicos',
    description:
      'O PRX é um ícone reinventado. Com sua integração perfeita entre caixa e bracelete, reserve de marcha de 80 horas e design inspirado nos anos 70, é o relógio para quem busca sofisticação e performance.',
    specs: {
      movement: 'Automático ETA C07.111, Powermatic 80, 80h reserva',
      case: 'Aço inoxidável, 40mm, caixa integrada',
      dial: 'Azul sunray com índices polidos',
      bracelet: 'Aço integrado com fecho de dobra',
      water_resistance: '100 metros (10 ATM)',
      functions: 'Horas, minutos, segundos, data',
    },
    images: [
      'https://images.unsplash.com/photo-1587836374828-4ce87db7c5ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Exclusivo',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    name: 'Khaki Field Mechanical',
    slug: 'hamilton-khaki-field',
    brand: 'Hamilton',
    price: 3190,
    category: 'Esportivo',
    collection: 'esportivos',
    description:
      'Nascido nas trincheiras da Segunda Guerra Mundial, o Khaki Field é um relógio de campo lendário. Robusto, legível e sem pretensão — exatamente o que um verdadeiro relógio de aventura deve ser.',
    specs: {
      movement: 'Mecânico manual ETA 6497-1, reserva 80h',
      case: 'Aço inoxidável, 38mm, espessura 10.6mm',
      dial: 'Verde militar com numeração árabe luminescente',
      bracelet: 'Lona khaki com fecho simples',
      water_resistance: '50 metros (5 ATM)',
      functions: 'Horas, minutos, segundos',
    },
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587836374828-4ce87db7c5ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
    ],
    rating: 4.8,
    reviews: 312,
    inStock: true,
    featured: true,
  },
  {
    id: '6',
    name: 'HydroConquest GMT',
    slug: 'longines-hydroconquest-gmt',
    brand: 'Longines',
    price: 7890,
    originalPrice: 8500,
    category: 'Mergulho',
    collection: 'mergulho',
    description:
      'O HydroConquest GMT é o companheiro perfeito para os viajantes das profundezas. Com segundo fuso horário e resistência a 300 metros, une elegância suíça à robustez de um verdadeiro relógio de mergulho.',
    specs: {
      movement: 'Automático L888.4, COSC cronômetro certificado, reserva 72h',
      case: 'Cerâmica e aço inoxidável, 41mm',
      dial: 'Azul com marcações luminescentes Super-LumiNova',
      bracelet: 'Aço com fecho de extensão para wetsuit',
      water_resistance: '300 metros (30 ATM)',
      functions: 'Horas, minutos, segundos, data, GMT, bisel giratório unidirecional',
    },
    images: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Exclusivo',
    rating: 4.9,
    reviews: 78,
    inStock: true,
    featured: true,
  },
  {
    id: '7',
    name: 'Alpinist SPB119',
    slug: 'seiko-alpinist-spb119',
    brand: 'Seiko',
    price: 3990,
    category: 'Esportivo',
    collection: 'esportivos',
    description:
      'Uma lenda japonesa renasce. O Alpinist é um relógio de montanha com bússola integrada e resistência excepcional. Ideal para quem busca aventura com elegância discreta.',
    specs: {
      movement: 'Automático Seiko 6R35, 24 joias, reserva 70h',
      case: 'Aço inoxidável, 39.5mm, cristal safira côncavo',
      dial: 'Verde musgo com bisel interno giratório',
      bracelet: 'Couro marrom, intercambiável com nylon',
      water_resistance: '200 metros (20 ATM)',
      functions: 'Horas, minutos, segundos, data, bisel GMT, bússola magnética',
    },
    images: [
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585533561153-8470eed10a3d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Novo',
    rating: 4.8,
    reviews: 194,
    inStock: true,
  },
  {
    id: '8',
    name: 'Pelagos FXD',
    slug: 'tudor-pelagos-fxd',
    brand: 'Tudor',
    price: 12500,
    category: 'Mergulho',
    collection: 'mergulho',
    description:
      'O Pelagos FXD foi desenvolvido em parceria com a Marinha Francesa. Com sua caixa antiestática e válvula de hélio, é um dos relógios de mergulho mais capazes do mundo — dentro ou fora d\'água.',
    specs: {
      movement: 'Automático MT5602-1U, COSC certificado, reserva 70h',
      case: 'Titânio com parafusos integrados, 42mm',
      dial: 'Preto com Super-LumiNova C3 e T100 tritium',
      bracelet: 'Tecido elástico preto com fecho em titânio',
      water_resistance: '500 metros (50 ATM)',
      functions: 'Horas, minutos, segundos, data, bisel giratório cerâmica',
    },
    images: [
      'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Edição Limitada',
    rating: 5.0,
    reviews: 45,
    inStock: true,
    featured: true,
  },
  {
    id: '9',
    name: 'Seamaster 300',
    slug: 'omega-seamaster-300',
    brand: 'Omega',
    price: 11200,
    category: 'Mergulho',
    collection: 'mergulho',
    description:
      'Homenagem ao lendário Seamaster de 1957, o Seamaster 300 carrega seis décadas de história do mergulho profissional. Com coaxial Master Chronometer certificado e resistência de 300m.',
    specs: {
      movement: 'Automático Omega Cal. 8912, Master Chronometer METAS',
      case: 'Aço Sedna e aço inoxidável, 41mm',
      dial: 'Preto tropical com texto heritage dourado',
      bracelet: 'Aço polido/escovado com fecho de segurança',
      water_resistance: '300 metros (30 ATM)',
      functions: 'Horas, minutos, segundos, bisel giratório unidirecional',
    },
    images: [
      'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585533561153-8470eed10a3d?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Exclusivo',
    rating: 4.9,
    reviews: 67,
    inStock: false,
  },
  {
    id: '10',
    name: 'Chronomat B01 42',
    slug: 'breitling-chronomat-b01',
    brand: 'Breitling',
    price: 9800,
    category: 'Esportivo',
    collection: 'esportivos',
    description:
      'O Chronomat nasceu para voar. Com cronógrafo de coluna-roda, movimento manufacture COSC e bisel de aviação em cerâmica com riders, é a escolha dos profissionais de aviação ao redor do mundo.',
    specs: {
      movement: 'Breitling Manufacture Caliber 01, COSC, reserva 70h',
      case: 'Aço inoxidável, 42mm, monobloco polido/escovado',
      dial: 'Azul ice com suítes de cronômetro aplicadas',
      bracelet: 'Aço Rouleaux com fecho de dobra',
      water_resistance: '200 metros (20 ATM)',
      functions: 'Horas, minutos, segundos, cronógrafo 1/4 seg, data',
    },
    images: [
      'https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587836374828-4ce87db7c5ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523170335258-f87a2d58c4c6?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Novo',
    rating: 4.7,
    reviews: 38,
    inStock: true,
  },
  {
    id: '11',
    name: 'Portugieser Chronograph',
    slug: 'iwc-portugieser-chrono',
    brand: 'IWC',
    price: 12500,
    category: 'Edição Limitada',
    collection: 'edicao-limitada',
    description:
      'Uma das referências mais elegantes da relojoaria suíça. O Portugieser Chronograph edição especial 150 anos combina movimento Pellaton de acima de 70h com design intemporal que transcende gerações.',
    specs: {
      movement: 'IWC Cal. 69355, automático, Pellaton, reserva 46h',
      case: 'Ouro rosa 18k, 41mm, cristal safira duplo antirreflexo',
      dial: 'Prateado sunray com cronógrafo sub-dials azul',
      bracelet: 'Couro de crocodilo marrom, fivela dobrável ouro rosa',
      water_resistance: '30 metros (3 ATM)',
      functions: 'Horas, minutos, pequeno segundos, cronógrafo, exibição de data',
    },
    images: [
      'https://images.unsplash.com/photo-1641553875469-d74e1da71b2c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587836374828-4ce87db7c5ab?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Edição Limitada',
    rating: 5.0,
    reviews: 22,
    inStock: true,
    featured: true,
  },
  {
    id: '12',
    name: 'Calatrava Ref. 5127',
    slug: 'patek-calatrava-5127',
    brand: 'Patek Philippe',
    price: 12500,
    category: 'Edição Limitada',
    collection: 'edicao-limitada',
    description:
      'O Calatrava é o padrão definitivo do relógio de bolso com caixa round. A Ref. 5127 representa a expressão máxima da tradição relojoeira suíça — pura, essencial e absolutamente perfeita.',
    specs: {
      movement: 'Patek Cal. 315 SC, automático, 29 joias, reserva 44h',
      case: 'Ouro amarelo 18k, 38mm, caixa monobloco lapidada',
      dial: 'Champagne guilhoché com índices aplicados em ouro',
      bracelet: 'Couro jacaré chocolate com fivela de ouro amarelo 18k',
      water_resistance: '30 metros (3 ATM)',
      functions: 'Horas, minutos, segundos, data com exibição retrograde',
    },
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1641553875469-d74e1da71b2c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1630694093867-4b947d812bf0?auto=format&fit=crop&w=800&q=80',
    ],
    badge: 'Edição Limitada',
    rating: 5.0,
    reviews: 14,
    inStock: true,
  },
]

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
