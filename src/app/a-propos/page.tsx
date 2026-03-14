import type { Metadata } from 'next';
import { metadata as siteMetadata } from '../../../content/metadata';
import { aboutPage } from '../../../content/about';
import { getBreadcrumbSchema } from '@/lib/schema';
import {
  InnerPageHero,
  AboutStory,
  AboutValues,
  AboutCertifications,
  BlogSpotlight,
  CTAFinalSection,
} from '@/components/sections';
import { Section } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  keywords: siteMetadata.about.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/a-propos',
  },
  openGraph: {
    title: siteMetadata.about.title,
    description: siteMetadata.about.description,
    images: [{ url: siteMetadata.about.ogImage ?? '/images/team/DSC02967.jpg' }],
  },
};

const aboutBC = JSON.stringify(
  getBreadcrumbSchema([{ name: 'A propos', url: 'https://clemencereznicek.com/a-propos' }])
);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: aboutBC }}
      />

      {/* Hero */}
      <InnerPageHero
        title={aboutPage.heroTitle}
        subtitle={aboutPage.heroSubtitle}
        backgroundImage={aboutPage.heroImage}
      />

      {/* Mon chemin — Story with staggered reveal */}
      <Section background="warmWhite">
        <AboutStory
          title={aboutPage.story.title}
          paragraphs={aboutPage.story.paragraphs}
          image={aboutPage.story.image}
          pullQuote="Mon rôle est simple : vous offrir un espace suffisamment sécurisé pour que vous osiez vous retrouver."
        />
      </Section>

      {/* Ce qui guide ma pratique — Values cascade */}
      <Section background="roseTint" geometricAccent>
        <AboutValues
          title={aboutPage.values.title}
          values={aboutPage.values.items}
        />
      </Section>

      {/* Formations et certifications — Marquee */}
      <Section background="cream">
        <AboutCertifications
          title={aboutPage.certifications.title}
          certifications={aboutPage.certifications.items}
        />
      </Section>

      {/* Affiliations */}
      {aboutPage.affiliations && (
        <Section background="warmWhite">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-800 tracking-[var(--tracking-headings)]">
              {aboutPage.affiliations.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {aboutPage.affiliations.items.map((item) => {
              const inner = (
                <>
                  <p className="font-heading text-base font-semibold text-neutral-800 mb-1">
                    {item.name}
                  </p>
                  {item.description && (
                    <p className="font-body text-sm text-neutral-600">
                      {item.description}
                    </p>
                  )}
                  {item.url && (
                    <p className="font-body text-xs text-indigo-500 mt-2 underline underline-offset-2">
                      Voir le site →
                    </p>
                  )}
                </>
              );
              return item.url ? (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center p-6 rounded-2xl bg-bg-cream border border-neutral-200 hover:border-indigo-300 hover:shadow-[var(--shadow-2)] transition-[border-color,box-shadow] duration-200 block"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.name}
                  className="text-center p-6 rounded-2xl bg-bg-cream border border-neutral-200"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* Blog */}
      <BlogSpotlight />

      <CTAFinalSection />

      {/* Crédit photographe */}
      {aboutPage.photographerCredit && (
        <div className="text-center py-4 bg-bg-cream">
          <p className="font-body text-xs text-neutral-400">
            {aboutPage.photographerCredit}
          </p>
        </div>
      )}
    </>
  );
}
