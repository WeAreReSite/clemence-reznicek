import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "Syl'Vie Bien-Etre | Réflexologie & Drainage Lymphatique à Pipriac",
  description:
    "Cabinet de réflexologie et bien-être à Pipriac (35550). Sylvie Lebordais, praticienne certifiée, vous propose drainage lymphatique, réflexologie plantaire et beauté des mains près de Redon.",
  alternates: {
    canonical: "https://www.sylviebienetre.fr",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <TestimonialsSection />
      <ServicesPreview />
      <TrustSection />
      <CTASection />
    </>
  )
}
