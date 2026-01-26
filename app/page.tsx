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
  title: `${spaInfo.name} | Réflexologie & Drainage Lymphatique à ${spaInfo.address.city}`,
  description:
    `Cabinet de réflexologie et bien-être à ${spaInfo.address.city} (${spaInfo.address.postalCode}). ${therapists[0].name}, praticienne formée en réflexologie et drainage lymphatique, vous propose des soins personnalisés près de Redon.`,
  alternates: {
    canonical: getCanonicalUrl(''),
  },
  openGraph: {
    title: `${spaInfo.name} | Réflexologie & Drainage Lymphatique à ${spaInfo.address.city}`,
    description: `Cabinet de réflexologie et bien-être à ${spaInfo.address.city}. ${therapists[0].name}, praticienne certifiée, propose réflexologie plantaire, drainage lymphatique manuel, amma assis et beauté des mains.`,
    url: getCanonicalUrl(''),
    type: "website",
    images: [
      {
        url: getCanonicalUrl('/images/logo.png'),
        width: 1200,
        height: 630,
        alt: `${spaInfo.name} - Cabinet de Réflexologie à ${spaInfo.address.city}`,
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
