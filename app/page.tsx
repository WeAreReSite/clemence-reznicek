import { HeroSection } from "@/components/sections/HeroSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { GiftSection } from "@/components/sections/GiftSection"
import { CTASection } from "@/components/sections/CTASection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsSection />
      <GiftSection />
      <CTASection />
    </>
  )
}
