import type { Metadata } from 'next';
import { metadata as siteMetadata } from '../../../content/metadata';
import { legalPage } from '../../../content/legal';
import { Section } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.legal.title,
  description: siteMetadata.legal.description,
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Page heading — no hero image */}
      <div
        className="relative py-[clamp(4rem,10vw,6rem)] text-center"
        style={{
          background:
            'linear-gradient(135deg, oklch(0.404 0.1351 279.5 / 0.90), oklch(0.430 0.1013 325.0 / 0.80))',
        }}
      >
        <div className="relative px-[clamp(1.25rem,4vw,3rem)]">
          <h1
            className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-50 leading-tight"
            style={{ textShadow: '0 2px 6px oklch(0 0 0 / 0.20)' }}
          >
            {legalPage.title}
          </h1>
        </div>
      </div>

      {/* Legal content */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px]">
          <div className="flex flex-col gap-10">
            {legalPage.sections.map((section) => (
              <article key={section.title}>
                <h2 className="font-heading text-xl font-semibold text-indigo-500 mb-4 pb-2 border-b border-neutral-200">
                  {section.title}
                </h2>
                <div className="font-body text-sm text-neutral-600 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
