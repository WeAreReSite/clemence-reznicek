import type { Metadata } from 'next';
import { metadata as siteMetadata } from '../../../content/metadata';
import { soinsPage } from '../../../content/soins';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import {
  InnerPageHero,
  SoinsCategoryBlock,
  CTAFinalSection,
} from '@/components/sections';
import { Section } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.soins.title,
  description: siteMetadata.soins.description,
  keywords: siteMetadata.soins.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/accompagnements',
  },
  openGraph: {
    title: siteMetadata.soins.title,
    description: siteMetadata.soins.description,
    images: [{ url: siteMetadata.soins.ogImage ?? '/images/work/DSC02550.jpg' }],
  },
};

function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const accompBC = JSON.stringify(
  getBreadcrumbSchema([{ name: 'Accompagnements', url: 'https://clemencereznicek.com/accompagnements' }])
);
const allServices = soinsPage.categories.flatMap((cat) => cat.services);
const serviceData = getServiceSchema(
  allServices,
  'https://clemencereznicek.com/accompagnements'
).map((s) => JSON.stringify(s));

export default function AccompagnementsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: accompBC }} />
      {serviceData.map((json, i) => (
        <script key={`svc-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      ))}

      <InnerPageHero
        title={soinsPage.heroTitle}
        subtitle={soinsPage.heroSubtitle}
        backgroundImage={soinsPage.heroImage}
      />

      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-base text-neutral-600 leading-relaxed">
            {soinsPage.introduction}
          </p>
        </div>
      </Section>

      {/* Pourquoi un accompagnement holistique */}
      {soinsPage.whyHolistic && (
        <Section background="cream">
          <div className="mx-auto max-w-[720px]">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-indigo-500 mb-6 text-center">
              {soinsPage.whyHolistic.title}
            </h2>
            {soinsPage.whyHolistic.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-base text-neutral-600 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <p className="font-body text-base text-neutral-700 leading-relaxed font-semibold mb-3">
              {soinsPage.whyHolistic.listIntro}
            </p>
            <ul className="flex flex-col gap-2 mb-6" role="list">
              {soinsPage.whyHolistic.listItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary-500 mt-0.5 shrink-0" aria-hidden="true">&#10022;</span>
                  <span className="font-body text-base text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-heading text-lg font-semibold text-indigo-500 mb-4">
              {soinsPage.whyHolistic.emphasis}
            </p>
            <p className="font-body text-base text-neutral-600 leading-relaxed mb-4">
              {soinsPage.whyHolistic.closing}
            </p>
            <p className="font-body text-sm text-neutral-500 italic">
              {soinsPage.whyHolistic.disclaimer}
            </p>
          </div>
        </Section>
      )}

      {soinsPage.categories.map((category, index) => {
        const isAteliers = category.title.toLowerCase().includes('atelier');
        return (
          <Section
            key={category.title}
            background={index % 2 === 0 ? 'cream' : 'roseTint'}
          >
            <SoinsCategoryBlock
              id={slugify(category.title)}
              title={category.title}
              description={category.description}
              services={category.services}
              image={category.image}
              ctaHref={isAteliers ? 'https://www.formationquantique.fr' : soinsPage.cta.href}
              ctaLabel={isAteliers ? 'Voir les dates' : undefined}
              ctaExternal={isAteliers}
            />
          </Section>
        );
      })}

      <CTAFinalSection />
    </>
  );
}
