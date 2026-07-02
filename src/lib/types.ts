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

export type CollectionBase = {
  id: string
  name: string
  slug: string
  description: string
  image: string
  accent: string
}

export type Collection = CollectionBase & {
  productCount: number
}
