import type { Metadata } from 'next';
import { cgvPage } from '../../../content/cgv';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Clémence Reznicek',
  description:
    'Conditions Générales de Vente de Clémence Reznicek, thérapeute holistique et praticienne en massage à Jonzac.',
  alternates: {
    canonical: 'https://clemencereznicek.com/cgv',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CGVPage() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-bg-warm-white">
      <div className="mx-auto max-w-[720px] px-[clamp(1.25rem,4vw,3rem)]">
        <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-800 mb-2">
          {cgvPage.title}
        </h1>
        <p className="font-body text-sm text-neutral-400 mb-10">
          Actualisées le {cgvPage.lastUpdated}
        </p>

        <div className="space-y-10 text-neutral-700">
          {cgvPage.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-xl font-semibold text-indigo-500 mb-4">
                {section.title}
              </h2>
              <div className="font-body text-sm leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
