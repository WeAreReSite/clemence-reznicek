import type { Metadata } from 'next';
import { metadata as siteMetadata } from '../../../content/metadata';
import { legalPage } from '../../../content/legal';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: siteMetadata.legal.title,
  description: siteMetadata.legal.description,
  alternates: {
    canonical: 'https://clemencereznicek.com/mentions-legales',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-bg-warm-white">
      <div className="mx-auto max-w-[720px] px-[clamp(1.25rem,4vw,3rem)]">
        <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-800 mb-10">
          {legalPage.title}
        </h1>

        <div className="space-y-10 text-neutral-700">
          {legalPage.sections.map((section) => {
            if (section.title === 'Propriété du site') {
              return (
                <section key={section.title}>
                  <h2 className="font-heading text-xl font-semibold text-indigo-500 mb-4">
                    {section.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed mb-4">
                    Le design, le code source et l&apos;infrastructure technique de ce site sont la propriété
                    exclusive de l&apos;agence
                    {' '}
                    <strong>ReSite</strong>
                    .
                  </p>
                  <p className="font-body text-sm leading-relaxed mb-4">
                    Le site est mis à disposition de
                    {' '}
                    <strong>Clémence Reznicek</strong>
                    {' '}
                    dans le cadre d&apos;un contrat de licence d&apos;utilisation.
                  </p>
                  <p className="font-body text-sm leading-relaxed">
                    <strong>Agence ReSite</strong>
                    <br />
                    <a
                      href="https://www.weareresite.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:underline"
                    >
                      www.weareresite.com
                    </a>
                  </p>
                </section>
              );
            }

            if (section.title === 'Crédits') {
              return (
                <section key={section.title}>
                  <h2 className="font-heading text-xl font-semibold text-indigo-500 mb-4">
                    {section.title}
                  </h2>
                  <p className="font-body text-sm leading-relaxed">
                    Conception et développement :
                    {' '}
                    <strong>ReSite</strong>
                  </p>
                  <p className="font-body text-sm leading-relaxed">
                    Design et intégration :
                    {' '}
                    <strong>ReSite</strong>
                  </p>
                  <p className="font-body text-sm leading-relaxed mt-4">
                    &copy;
                    {' '}
                    {new Date().getFullYear()}
                    {' '}
                    ReSite — Tous droits réservés
                  </p>
                </section>
              );
            }

            const sectionId = section.title === 'Protection des données personnelles'
              ? 'confidentialite'
              : undefined;

            return (
              <section key={section.title} id={sectionId}>
                <h2 className="font-heading text-xl font-semibold text-indigo-500 mb-4">
                  {section.title}
                </h2>
                <div className="font-body text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
