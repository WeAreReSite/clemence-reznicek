import type { Metadata } from 'next';
import { metadata as siteMetadata } from '../../content/metadata';
import { getFAQSchema } from '@/lib/schema';
import {
  HeroSection,
  TrustBarSection,
  EntryPointsSection,
  IntroductionSection,
  TestimonialsSection,
  ServiceCategoriesSection,
  RMDSpotlightSection,
  ValuesSection,
  PromotionsSection,
  Accordion,
  PracticalInfoSection,
  CTAFinalSection,
  TestimonialCarousel,
} from '@/components/sections';

export const metadata: Metadata = {
  title: siteMetadata.home.title,
  description: siteMetadata.home.description,
  keywords: siteMetadata.home.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com',
  },
  openGraph: {
    title: siteMetadata.home.title,
    description: siteMetadata.home.description,
    images: [{ url: siteMetadata.home.ogImage ?? '/images/work/DSC02941.jpg' }],
  },
};

const faqSchema = JSON.stringify(getFAQSchema());

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqSchema }}
      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust Bar */}
      <TrustBarSection />

      {/* 3. Entry Points */}
      <EntryPointsSection />

      {/* 4. Introduction */}
      <IntroductionSection />

      {/* 5. Testimonials — desktop grid inside dark section, mobile carousel */}
      <section aria-label="Témoignages clients">
        {/* Desktop grid (hidden on mobile) */}
        <div className="hidden lg:block">
          <TestimonialsSection />
        </div>
        {/* Mobile carousel (hidden on desktop) */}
        <div className="lg:hidden bg-bg-indigo-deep py-[clamp(3rem,6vw,5rem)]">
          <TestimonialCarousel />
        </div>
      </section>

      {/* 6. Service Categories */}
      <ServiceCategoriesSection />

      {/* 7. RMD Spotlight */}
      <RMDSpotlightSection />

      {/* 8. Values */}
      <ValuesSection />

      {/* 9. Promotions */}
      <PromotionsSection />

      {/* 10. FAQ */}
      <Accordion />

      {/* 11. Practical Info */}
      <PracticalInfoSection />

      {/* 12. CTA Final */}
      <CTAFinalSection />
    </>
  );
}
