import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCategories } from "@/components/product-categories"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <FeaturedProducts />
        <AboutSection />
         <NewsSection />
         <PartnersSection/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
