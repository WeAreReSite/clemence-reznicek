import type { Metadata } from 'next';
import Link from 'next/link';
import { metadata as siteMetadata } from '../../../content/metadata';
import { aboutPage } from '../../../content/about';
import {
  InnerPageHero,
  AboutStory,
  AboutValues,
  AboutCertifications,
} from '@/components/sections';
import { Section, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  keywords: siteMetadata.about.keywords,
  openGraph: {
    title: siteMetadata.about.title,
    description: siteMetadata.about.description,
    images: [{ url: siteMetadata.about.ogImage ?? '/images/team/DSC02967.jpg' }],
  },
};

export default function AboutPage() {
  return (
    <>
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
          pullQuote="Ce qui me définit le plus, c'est peut-être ma qualité de présence. Être là, pleinement, pour ce qui se présente."
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

      {/* CTA */}
      <Section background="indigoDeep">
        <div className="text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-50 mb-4">
            Et si on se rencontrait ?
          </h2>
          <p className="font-body text-base text-neutral-200 mb-8 max-w-lg mx-auto">
            La meilleure façon de savoir si mon accompagnement est fait pour toi, c&apos;est de le vivre. Prends rendez-vous pour une première séance.
          </p>
          <Link href={aboutPage.cta.href}>
            <Button variant="warm" size="lg">
              {aboutPage.cta.label}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
