import Hero from '@/components/home/Hero'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import ProductShowcase from '@/components/home/ProductShowcase'
import BrandValues from '@/components/home/BrandValues'
import WatchGallery from '@/components/home/WatchGallery'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'
import { getProducts, getCollections } from '@/lib/products'

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const products = getProducts()
  const collections = getCollections()

  return (
    <>
      <Hero />
      <FeaturedCollections collections={collections} />
      <ProductShowcase products={products} />
      <BrandValues />
      <WatchGallery />
      <Testimonials />
      <Newsletter />
    </>
  )
}
