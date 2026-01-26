import { Metadata } from "next"
import { Suspense } from "react"
import { services, categories, giftCardData, spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { SoinsHero } from "@/components/sections/SoinsHero"
import { CategoryNav } from "@/components/sections/CategoryNav"
import { AnimatedCategorySection } from "@/components/sections/AnimatedCategorySection"
import { GiftCards } from "@/components/sections/GiftCards"
import { SoinsCTA } from "@/components/sections/SoinsCTA"
import { ScrollToAnchor } from "@/components/ScrollToAnchor"

export const metadata: Metadata = {
  title: "Nos Soins",
  description: `Découvrez tous les soins ${spaInfo.name} à ${spaInfo.address.city} : réflexologie plantaire, drainage lymphatique manuel, amma assis, beauté des mains. 29 soins pour votre bien-être.`,
  alternates: {
    canonical: getCanonicalUrl('/soins'),
  },
}

export default function SoinsPage() {
  // Filter categories that have services
  const activeCategories = categories.filter((category) =>
    services.some((s) => s.category === category.id)
  )

  return (
    <main>
      <Suspense fallback={null}>
        <ScrollToAnchor />
      </Suspense>

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
