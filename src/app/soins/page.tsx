import type { Metadata } from 'next';
import Link from 'next/link';
import { metadata as siteMetadata } from '../../../content/metadata';
import { soinsPage } from '../../../content/soins';
import {
  InnerPageHero,
  SoinsCategoryNav,
  SoinsCategoryBlock,
} from '@/components/sections';
import { Section, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.soins.title,
  description: siteMetadata.soins.description,
  keywords: siteMetadata.soins.keywords,
  openGraph: {
    title: siteMetadata.soins.title,
    description: siteMetadata.soins.description,
    images: [{ url: siteMetadata.soins.ogImage ?? '/images/work/DSC02550.jpg' }],
  },
};

/** Normalize a French string to a URL-safe slug */
function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const categoryTabs = soinsPage.categories.map((cat) => ({
  id: slugify(cat.title),
  label: cat.title,
}));

export default function SoinsPage() {
  return (
    <>
      {/* Hero */}
      <InnerPageHero
        title={soinsPage.heroTitle}
        subtitle={soinsPage.heroSubtitle}
        backgroundImage={soinsPage.heroImage}
      />

      {/* Introduction */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-base text-neutral-600 leading-relaxed">
            {soinsPage.introduction}
          </p>
        </div>
      </Section>

      {/* Sticky category navigation */}
      <SoinsCategoryNav categories={categoryTabs} />

      {/* Category blocks */}
      {soinsPage.categories.map((category, index) => (
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
            ctaHref={soinsPage.cta.href}
          />
        </Section>
      ))}

      {/* CTA */}
      <Section background="indigoDeep">
        <div className="text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-50 mb-4">
            Quel soin te correspond ?
          </h2>
          <p className="font-body text-base text-neutral-200 mb-8 max-w-lg mx-auto">
            Si tu ne sais pas par où commencer, contacte-moi. On trouvera ensemble l&apos;accompagnement le plus juste pour toi.
          </p>
          <Link href={soinsPage.cta.href}>
            <Button variant="warm" size="lg">
              {soinsPage.cta.label}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
