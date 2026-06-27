import Hero from '@/components/home/Hero'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import ProductShowcase from '@/components/home/ProductShowcase'
import BrandValues from '@/components/home/BrandValues'
import WatchGallery from '@/components/home/WatchGallery'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ProductShowcase />
      <BrandValues />
      <WatchGallery />
      <Testimonials />
      <Newsletter />
    </>
  )
}
