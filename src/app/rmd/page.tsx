import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircleIcon, StarIcon } from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { rmdPage } from '../../../content/rmd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button } from '@/components/ui';

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
    images: [{ url: siteMetadata.rmd.ogImage ?? '/images/team/DSC02996.jpg' }],
  },
};

const rmdBreadcrumb = JSON.stringify(
  getBreadcrumbSchema([{ name: 'RMD — Résurrection Multi-Dimensionnelle', url: 'https://clemencereznicek.com/rmd' }])
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

      {/* Citation */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[640px] text-center">
          <blockquote className="font-heading text-xl lg:text-2xl text-indigo-500 italic leading-relaxed">
            &ldquo;{rmdPage.quote}&rdquo;
          </blockquote>
          <p className="font-body text-sm text-neutral-500 mt-3">— Clémence</p>
        </div>
      </Section>

      {/* Le parcours phare - Introduction */}
      <Section background="cream">
        <SectionHeader title="Le parcours phare" decorative />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5">
            {rmdPage.introduction.map((paragraph, i) => (
              <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          {rmdPage.introImage && (
            <div className="relative aspect-[3/4] w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden">
              <Image
                src={rmdPage.introImage.src}
                alt={rmdPage.introImage.alt}
                width={rmdPage.introImage.width}
                height={rmdPage.introImage.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>
          )}
        </div>
      </Section>

      {/* Pour qui */}
      <Section background="roseTint">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader title={rmdPage.forWhom.title} align="left" decorative />
            <ul className="flex flex-col gap-4" role="list">
              {rmdPage.forWhom.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary-500 mt-0.5 shrink-0" aria-hidden="true">✦</span>
                  <span className="font-body text-base text-neutral-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {rmdPage.forWhom.image && (
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <Image
                src={rmdPage.forWhom.image.src}
                alt={rmdPage.forWhom.image.alt}
                width={rmdPage.forWhom.image.width}
                height={rmdPage.forWhom.image.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Section>

      {/* Dimensions */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionHeader title={rmdPage.dimensions.title} decorative />
          <div className="flex flex-col gap-3 mb-8">
            {rmdPage.dimensions.items.map((item, i) => (
              <p key={i} className="font-body text-base text-neutral-700">
                {item}
              </p>
            ))}
          </div>
          <p className="font-heading text-lg text-indigo-500 italic">
            {rmdPage.dimensions.movement}
          </p>
        </div>
      </Section>

      {/* Les trois temps — image banner + vertical timeline */}
      <Section background="cream">
        <SectionHeader title={rmdPage.process.title} decorative />

        {/* Full-width image from step 1 as section banner */}
        {rmdPage.process.steps[0]?.image && (
          <div className="relative w-full max-w-[900px] mx-auto mb-12 lg:mb-16 rounded-2xl overflow-hidden">
            <div className="relative aspect-[21/9]">
              <Image
                src={rmdPage.process.steps[0].image.src}
                alt={rmdPage.process.steps[0].image.alt}
                width={rmdPage.process.steps[0].image.width}
                height={rmdPage.process.steps[0].image.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>
        )}

        {/* Vertical timeline */}
        <div className="relative mx-auto max-w-[720px]">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-indigo-500/40 via-secondary-400/30 to-indigo-500/40 hidden md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10 lg:gap-14">
            {rmdPage.process.steps.map((step, index) => (
              <div
                key={step.number}
                className="relative md:pl-16"
              >
                {/* Step number circle */}
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 font-heading text-lg font-bold text-neutral-50 shrink-0 mb-3 md:absolute md:left-0 md:top-0"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Connector dot on timeline (between steps) */}
                {index < rmdPage.process.steps.length - 1 && (
                  <div
                    className="absolute left-[18px] -bottom-5 lg:-bottom-7 w-1.5 h-1.5 rounded-full bg-secondary-400/50 hidden md:block"
                    aria-hidden="true"
                  />
                )}

                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-indigo-500 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Ce que comprend le parcours */}
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
          <p className="font-heading text-4xl lg:text-5xl font-bold text-indigo-500 mb-2">
            {rmdPage.price}
          </p>
          {rmdPage.priceDetail.split('\n').map((line, i) => (
            <p key={i} className="font-body text-sm text-neutral-700">
              {line}
            </p>
          ))}
          <div className="mt-8">
            <a href={rmdPage.cta.href}>
              <Button variant="warm" size="lg">
                {rmdPage.cta.label}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      {rmdPage.faq && rmdPage.faq.length > 0 && (
        <Section background="warmWhite">
          <SectionHeader title="Questions fréquentes" decorative />
          <div className="mx-auto max-w-[720px] flex flex-col gap-6">
            {rmdPage.faq.map((item, i) => (
              <div key={i}>
                <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-2">
                  {item.question}
                </h3>
                <p className="font-body text-base text-neutral-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Témoignage */}
      {rmdPage.testimonial && (
        <Section background="indigoDeep">
          <div className="mx-auto max-w-[640px] text-center">
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
