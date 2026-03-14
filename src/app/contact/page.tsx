import type { Metadata } from 'next';
import Image from 'next/image';
import { metadata as siteMetadata } from '../../../content/metadata';
import { contactPage } from '../../../content/contact';
import { getBreadcrumbSchema } from '@/lib/schema';
import { InnerPageHero, BentoContactGrid, CTAFinalSection } from '@/components/sections';
import { Section } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  keywords: siteMetadata.contact.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/contact',
  },
  openGraph: {
    title: siteMetadata.contact.title,
    description: siteMetadata.contact.description,
    images: [{ url: siteMetadata.contact.ogImage ?? '/images/establishment/DSC02779.jpg' }],
  },
};

const cBC = JSON.stringify(
  getBreadcrumbSchema([{ name: 'Contact', url: 'https://clemencereznicek.com/contact' }])
);

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: cBC }} />
      <InnerPageHero
        title={contactPage.heroTitle}
        subtitle={contactPage.heroSubtitle}
      />

      <Section background="warmWhite">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-body text-base text-neutral-600 leading-relaxed">
              {contactPage.introText}
            </p>
          </div>
          {contactPage.introImage && (
            <div className="relative aspect-[2/3] w-full max-w-[380px] mx-auto rounded-2xl overflow-hidden">
              <Image
                src={contactPage.introImage.src}
                alt={contactPage.introImage.alt}
                width={contactPage.introImage.width}
                height={contactPage.introImage.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 380px"
                priority
                fetchPriority="high"
                quality={75}
              />
            </div>
          )}
        </div>
      </Section>

      <Section background="warmWhite">
        <BentoContactGrid />
      </Section>

      <CTAFinalSection />

      {/* SIRET */}
      {contactPage.siret && (
        <div className="text-center py-4 bg-bg-cream">
          <p className="font-body text-xs text-neutral-600">
            SIRET : {contactPage.siret}
          </p>
        </div>
      )}
    </>
  );
}
