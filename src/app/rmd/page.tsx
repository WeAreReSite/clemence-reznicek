import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon, StarIcon } from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { rmdPage } from '../../../content/rmd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button, Card, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.rmd.title,
  description: siteMetadata.rmd.description,
  keywords: siteMetadata.rmd.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/rmd',
  },
  openGraph: {
    title: siteMetadata.rmd.title,
    description: siteMetadata.rmd.description,
    images: [{ url: siteMetadata.rmd.ogImage ?? '/images/work/DSC02979.jpg' }],
  },
};

const rmdBreadcrumb = JSON.stringify(
  getBreadcrumbSchema([{ name: 'Programme RMD Signature', url: 'https://clemencereznicek.com/rmd' }])
);
const rmdService = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: rmdPage.heroTitle,
  description: rmdPage.introduction[0],
  provider: { '@id': 'https://clemencereznicek.com/#localbusiness' },
  url: 'https://clemencereznicek.com/rmd',
  offers: {
    '@type': 'Offer',
    price: '1333',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  areaServed: { '@type': 'City', name: 'Jonzac' },
});

export default function RMDPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: rmdBreadcrumb }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: rmdService }} />

      {/* Hero */}
      <InnerPageHero
        title={rmdPage.heroTitle}
        subtitle={rmdPage.heroSubtitle}
        backgroundImage={rmdPage.heroImage}
      />

      {/* Introduction */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px]">
          <div className="flex flex-col gap-5">
            {rmdPage.introduction.map((paragraph, i) => (
              <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Pour qui */}
      <Section background="roseTint">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader title={rmdPage.forWhom.title} decorative />
          <ul className="flex flex-col gap-4" role="list">
            {rmdPage.forWhom.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleIcon
                  size={22}
                  weight="light"
                  className="shrink-0 text-indigo-500 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-body text-base text-neutral-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Le deroulement */}
      <Section background="cream">
        <SectionHeader title={rmdPage.process.title} decorative />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rmdPage.process.steps.map((step) => (
            <Card key={step.number} className="relative flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 font-heading text-lg font-bold text-neutral-50 shrink-0"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <h3 className="font-heading text-lg font-semibold text-indigo-500">
                  {step.title}
                </h3>
              </div>
              <p className="font-body text-sm text-neutral-600 leading-relaxed flex-1">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Ce que comprend le programme */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader title={rmdPage.includes.title} decorative />
          <ul className="flex flex-col gap-3" role="list">
            {rmdPage.includes.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircleIcon
                  size={20}
                  weight="fill"
                  className="shrink-0 text-secondary-500 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-body text-base text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Prix */}
      <Section background="roseTint">
        <div className="mx-auto max-w-[560px] text-center">
          <Badge className="mb-4">Programme complet</Badge>
          <p className="font-heading text-4xl lg:text-5xl font-bold text-indigo-500 mb-2">
            {rmdPage.price}
          </p>
          <p className="font-body text-sm text-neutral-700 mb-8">{rmdPage.priceDetail}</p>
          <Link href={rmdPage.cta.href}>
            <Button variant="warm" size="lg">
              {rmdPage.cta.label}
            </Button>
          </Link>
        </div>
      </Section>

      {/* Testimonial */}
      {rmdPage.testimonial && (
        <Section background="indigoDeep">
          <div className="mx-auto max-w-[640px] text-center">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6" role="img" aria-label="5 étoiles sur 5">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} size={20} weight="fill" className="text-secondary-400" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="font-body text-base text-neutral-200 leading-relaxed italic mb-6">
              &ldquo;{rmdPage.testimonial.text}&rdquo;
            </blockquote>
            <cite className="font-heading text-lg font-semibold text-neutral-50 not-italic">
              {rmdPage.testimonial.name}
            </cite>
            {rmdPage.testimonial.service && (
              <p className="font-body text-sm text-neutral-300 mt-1">{rmdPage.testimonial.service}</p>
            )}
          </div>
        </Section>
      )}
    </>
  );
}
