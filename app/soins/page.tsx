import { Metadata } from "next"
import { Suspense } from "react"
import { services, categories, giftCardData, spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { SoinsHero } from "@/components/sections/SoinsHero"
import { CategoryNav } from "@/components/sections/CategoryNav"
import { AnimatedCategorySection } from "@/components/sections/AnimatedCategorySection"
import { GiftCards } from "@/components/sections/GiftCards"
import { SoinsCTA } from "@/components/sections/SoinsCTA"
import { ScrollToAnchor } from "@/components/ScrollToAnchor"

export const metadata: Metadata = {
  title: "Nos Soins",
  description: `Découvrez tous les soins de ${spaInfo.name} à ${spaInfo.address.city} : soins énergétiques, constellations familiales, coaching, massages bien-être et décodage biologique.`,
  alternates: {
    canonical: getCanonicalUrl('/soins'),
  },
  openGraph: {
    title: `Nos Soins | ${spaInfo.name}`,
    description: `Soins holistiques à ${spaInfo.address.city} : soins énergétiques, constellations familiales, coaching, massage des 5 continents, décodage biologique. Tarifs et réservation.`,
    url: getCanonicalUrl('/soins'),
    type: "website",
    images: [
      {
        url: getCanonicalUrl('/images/soin-energetique.jpeg'),
        width: 1200,
        height: 630,
        alt: `Soins holistiques et énergétiques - ${spaInfo.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Nos Soins | ${spaInfo.name}`,
    description: `Soins holistiques à ${spaInfo.address.city} : soins énergétiques, constellations familiales, coaching, massages et décodage biologique.`,
    images: [getCanonicalUrl('/images/soin-energetique.jpeg')],
  },
}

export default function SoinsPage() {
  // Filter categories that have services
  const activeCategories = categories.filter((category) =>
    services.some((s) => s.category === category.id)
  )

  // Generate ItemList schema for services (better for rich results)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Soins holistiques - ${spaInfo.name}`,
    description: `Liste complète des soins énergétiques, constellations familiales, coaching, massages et décodage proposés par ${spaInfo.name} à ${spaInfo.address.city}`,
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": getCanonicalUrl(`/soins#${service.slug}`),
        name: service.name,
        description: service.shortDescription,
        provider: {
          "@id": getCanonicalUrl('')
        },
        areaServed: ["Jonzac", "Saintes", "Charente-Maritime", "Nouvelle-Aquitaine"],
        offers: {
          "@type": "Offer",
          price: service.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          validFrom: "2026-01-01"
        }
      }
    }))
  }

  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Nos Soins", href: "/soins" }
  ]

  return (
    <main>
      <JsonLd data={servicesSchema} />
      <Suspense fallback={null}>
        <ScrollToAnchor />
      </Suspense>

      {/* Breadcrumbs for SEO */}
      <div className="container-spa pt-24 pb-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Animated Hero Section */}
      <SoinsHero />

      {/* Sticky Category Navigation */}
      <CategoryNav categories={activeCategories} />

      {/* Services by Category */}
      {activeCategories.map((category, index) => {
        const categoryServices = services.filter((s) => s.category === category.id)
        return (
          <AnimatedCategorySection
            key={category.id}
            category={category}
            services={categoryServices}
            index={index}
          />
        )
      })}

      {/* Gift Cards Section */}
      <GiftCards data={giftCardData} />

      {/* Call to Action */}
      <SoinsCTA />
    </main>
  )
}
