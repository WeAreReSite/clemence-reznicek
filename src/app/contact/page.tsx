import type { Metadata } from 'next';
import { metadata as siteMetadata } from '../../../content/metadata';
import { contactPage } from '../../../content/contact';
import { InnerPageHero, BentoContactGrid } from '@/components/sections';
import { Section } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  keywords: siteMetadata.contact.keywords,
  openGraph: {
    title: siteMetadata.contact.title,
    description: siteMetadata.contact.description,
    images: [{ url: siteMetadata.contact.ogImage ?? '/images/establishment/DSC02779.jpg' }],
  },
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        title={contactPage.heroTitle}
        subtitle={contactPage.heroSubtitle}
      />

      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-base text-neutral-600 leading-relaxed">
            {contactPage.introText}
          </p>
        </div>
      </Section>

      <Section background="cream">
        <BentoContactGrid />
      </Section>
    </>
  );
}
