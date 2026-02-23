import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { TrustSection } from "@/components/sections/TrustSection"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { AboutPreview } from "@/components/sections/AboutPreview"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"
import { spaInfo, therapists } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: `${spaInfo.name} | Thérapeute Holistique & Médium à ${spaInfo.address.city}`,
  description:
    `Cabinet de thérapie holistique à ${spaInfo.address.city} (${spaInfo.address.postalCode}). ${therapists[0].name}, thérapeute holistique et médium, vous propose soins énergétiques, constellations familiales, coaching et massages en Charente-Maritime.`,
  alternates: {
    canonical: getCanonicalUrl(''),
  },
  openGraph: {
    title: `${spaInfo.name} | Thérapeute Holistique & Médium à ${spaInfo.address.city}`,
    description: `Cabinet de thérapie holistique à ${spaInfo.address.city}. ${therapists[0].name} propose soins énergétiques, constellations familiales, coaching, massages et décodage biologique.`,
    url: getCanonicalUrl(''),
    type: "website",
    images: [
      {
        url: getCanonicalUrl('/images/logo.png'),
        width: 1200,
        height: 630,
        alt: `${spaInfo.name} - Thérapeute Holistique à ${spaInfo.address.city}`,
      },
    ],
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
