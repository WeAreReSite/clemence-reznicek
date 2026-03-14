import type { Metadata } from 'next';
import Image from 'next/image';
import { metadata as siteMetadata } from '../../../content/metadata';
import { formationsPage } from '../../../content/formations';
import { getBreadcrumbSchema } from '@/lib/schema';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button, Badge, YouTubeEmbed } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.formations.title,
  description: siteMetadata.formations.description,
  keywords: siteMetadata.formations.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/formations',
  },
  openGraph: {
    title: siteMetadata.formations.title,
    description: siteMetadata.formations.description,
    images: [{ url: siteMetadata.formations.ogImage ?? '/images/work/DSC02941.jpg' }],
  },
};

const breadcrumbSchema = JSON.stringify(
  getBreadcrumbSchema([{ name: 'Formations holistiques', url: 'https://clemencereznicek.com/formations' }])
);

/* Split formations into featured (Cosmo, Quantique 111) and stages */
const featured = formationsPage.formations.filter((f) => !f.name.startsWith('Stage'));
const stages = formationsPage.formations.filter((f) => f.name.startsWith('Stage'));

export default function FormationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />

      {/* Hero */}
      <InnerPageHero
        title={formationsPage.heroTitle}
        subtitle={formationsPage.heroSubtitle}
        backgroundImage={formationsPage.heroImage}
      />

      {/* Introduction */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-base text-neutral-600 leading-relaxed mb-6">
            {formationsPage.introduction}
          </p>
          <a
            href="https://www.formationquantique.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="md">
              Voir les dates sur formationquantique.fr
            </Button>
          </a>
        </div>
      </Section>

      {/* ── Featured Formations ── */}
      <Section background="cream">
        <SectionHeader title="Les formations" decorative />

        <div className="flex flex-col gap-16 lg:gap-20">
          {featured.map((formation, index) => (
            <div
              key={formation.name}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              {formation.image && (
                <div className="w-full lg:w-[45%] shrink-0">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[var(--shadow-2)]">
                    <Image
                      src={formation.image.src}
                      alt={formation.image.alt}
                      width={formation.image.width}
                      height={formation.image.height}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className={formation.image ? 'w-full lg:w-[55%]' : 'w-full max-w-[720px] mx-auto'}>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-indigo-500 mb-3">
                  {formation.name}
                </h2>

                {/* Price + duration */}
                <div className="flex items-center flex-wrap gap-3 mb-5">
                  <Badge variant="accent">{formation.price}</Badge>
                  <span className="font-body text-sm text-neutral-500">{formation.duration}</span>
                </div>

                <p className="font-body text-base text-neutral-600 leading-relaxed mb-5">
                  {formation.description}
                </p>

                {/* Modules (Quantique 111) */}
                {formation.modules && (
                  <div className="rounded-xl bg-bg-warm-white border border-neutral-200 p-5 lg:p-6">
                    <p className="font-heading text-sm font-semibold text-neutral-800 tracking-[0.04em] uppercase mb-4">
                      Programme des 6 modules
                    </p>
                    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {formation.modules.map((mod, i) => (
                        <li key={mod} className="flex items-start gap-2.5">
                          <span
                            className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/10 font-body text-xs font-semibold text-indigo-500 shrink-0 mt-0.5"
                            aria-hidden="true"
                          >
                            {i + 1}
                          </span>
                          <span className="font-body text-sm text-neutral-700 leading-snug">
                            {mod.replace(/^Module \d+ — /, '')}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Video Quantique 111 */}
                {formation.name === 'Quantique 111' && (
                  <div className="mt-6">
                    <YouTubeEmbed
                      videoId="UuYiI8AcR2s"
                      title="Découvrir la formation Quantique 111"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Stages d'éveil ── */}
      {stages.length > 0 && (
        <Section background="roseTint" geometricAccent>
          <SectionHeader
            title="Stages d'éveil"
            subtitle="Un parcours progressif en 5 étapes pour approfondir votre connexion intérieure. Chaque stage se déroule sur 2 jours à Jonzac."
            decorative
          />

          {/* Stage 1 image as section banner */}
          {stages[0]?.image && (
            <div className="relative w-full max-w-[800px] mx-auto mb-10 lg:mb-14 rounded-2xl overflow-hidden shadow-[var(--shadow-2)]">
              <div className="relative aspect-[21/9]">
                <Image
                  src={stages[0].image.src}
                  alt={stages[0].image.alt}
                  width={stages[0].image.width}
                  height={stages[0].image.height}
                  className="object-cover object-[center_35%] w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
            </div>
          )}

          {/* Stage cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
            {stages.map((stage) => {
              const stageNumber = stage.name.match(/Stage (\d+)/)?.[1] ?? '';
              const stageTitle = stage.name.replace(/^Stage \d+ — /, '');

              return (
                <div
                  key={stage.name}
                  className="relative bg-bg-warm-white rounded-2xl border border-neutral-200 p-6 flex flex-col"
                >
                  {/* Stage number */}
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-500 font-heading text-base font-bold text-neutral-50 mb-4"
                    aria-hidden="true"
                  >
                    {stageNumber}
                  </span>

                  <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2">
                    {stageTitle}
                  </h3>

                  <p className="font-body text-sm text-neutral-600 leading-relaxed mb-4 flex-1">
                    {stage.description}
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-neutral-200/60">
                    <Badge variant="accent">{stage.price}</Badge>
                    <span className="font-body text-xs text-neutral-500">{stage.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="indigoDeep">
        <div className="text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-50 mb-4">
            {`Prêt·e à vous former ?`}
          </h2>
          <p className="font-body text-base text-neutral-200 mb-8 max-w-lg mx-auto">
            Retrouvez les dates des prochaines formations et inscrivez-vous directement.
          </p>
          <a
            href="https://www.formationquantique.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="warm" size="lg">
              Voir les dates sur formationquantique.fr
            </Button>
          </a>
        </div>
      </Section>
    </>
  );
}
