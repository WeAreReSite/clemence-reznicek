import type { Metadata } from 'next';
import Image from 'next/image';
import { StarIcon, MapPinIcon, VideoIcon, ClockIcon, PhoneIcon, EnvelopeSimpleIcon } from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { rmdPage } from '../../../content/rmd';
import { getBreadcrumbSchema, getRMDFAQSchema } from '@/lib/schema';
import { InnerPageHero, RMDFAQAccordion, CTAFinalSection } from '@/components/sections';
import { Section, SectionHeader, buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

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
  getBreadcrumbSchema([{ name: 'RMD \u2014 Parcours de transformation profonde', url: 'https://clemencereznicek.com/rmd' }])
);
const rmdService = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: rmdPage.heroTitle,
  description: rmdPage.heroSubtitle,
  provider: { '@id': 'https://clemencereznicek.com/#localbusiness' },
  url: 'https://clemencereznicek.com/rmd',
  areaServed: { '@type': 'City', name: 'Jonzac' },
});
const rmdFAQ = JSON.stringify(getRMDFAQSchema());

function JsonLd({ data }: { data: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />;
}

export default function RMDPage() {
  return (
    <>
      <JsonLd data={rmdBreadcrumb} />
      <JsonLd data={rmdService} />
      <JsonLd data={rmdFAQ} />

      {/* ================================================================
          HERO
      ================================================================ */}
      <InnerPageHero
        title={rmdPage.heroTitle}
        subtitle={rmdPage.heroSubtitle}
        backgroundImage={rmdPage.heroImage}
      />

      {/* Trust badges */}
      <Section background="warmWhite">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {rmdPage.trustBadges.map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 border border-secondary-200/40 font-body text-sm text-neutral-700"
            >
              <span className="text-secondary-500" aria-hidden="true">
                <StarIcon size={14} weight="fill" />
              </span>
              {badge}
            </span>
          ))}
        </div>
      </Section>

      {/* ================================================================
          PAIN POINT
      ================================================================ */}
      <Section background="cream">
        <div className="mx-auto max-w-[720px]">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-indigo-500 leading-tight mb-8 text-center">
            {rmdPage.painPoint.title}
          </h2>
          <div className="flex flex-col gap-4 mb-8">
            {rmdPage.painPoint.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <blockquote className="border-l-2 border-secondary-400 pl-6 mb-6">
            <p className="font-heading text-lg text-indigo-500 italic leading-relaxed">
              {rmdPage.painPoint.question}
            </p>
          </blockquote>
          <p className="font-heading text-xl font-semibold text-indigo-500 mb-2">
            {rmdPage.painPoint.answer}
          </p>
          <p className="font-body text-base text-neutral-700 italic">
            {rmdPage.painPoint.closingLine}
          </p>
        </div>
      </Section>

      {/* ================================================================
          FOR WHOM
      ================================================================ */}
      <Section background="roseTint" geometricAccent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader title={rmdPage.forWhom.title} align="left" decorative />
            <ul className="flex flex-col gap-4" role="list">
              {rmdPage.forWhom.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary-500 mt-1 shrink-0 font-bold" aria-hidden="true">
                    &#10003;
                  </span>
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

      {/* ================================================================
          WHY RMD TRANSFORMS
      ================================================================ */}
      <Section background="warmWhite">
        <SectionHeader title={rmdPage.whyRMD.title} decorative />

        <div className="mx-auto max-w-[900px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Classical therapy side */}
          <div className="rounded-2xl bg-neutral-100 p-8 shadow-[var(--shadow-2)]">
            <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-4">
              {rmdPage.whyRMD.classical.title}
            </h3>
            <div className="font-body text-base text-neutral-600 leading-relaxed whitespace-pre-line mb-5">
              {rmdPage.whyRMD.classical.intro}
            </div>
            <ul className="flex flex-col gap-3 mb-6" role="list">
              {rmdPage.whyRMD.classical.limitations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-neutral-400 mt-0.5 shrink-0" aria-hidden="true">&#8594;</span>
                  <span className="font-body text-base text-neutral-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-1">
              {rmdPage.whyRMD.classical.result.map((line, i) => (
                <p key={i} className={`font-body text-base text-neutral-700 ${i === 0 ? 'font-semibold' : ''}`}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Holistic RMD side */}
          <div className="rounded-2xl bg-secondary-50 p-8 shadow-[var(--shadow-2)] border border-secondary-200/40">
            <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-4">
              {rmdPage.whyRMD.holistic.title}
            </h3>
            <p className="font-body text-base text-neutral-600 leading-relaxed mb-5">
              {rmdPage.whyRMD.holistic.intro}
            </p>
            <ol className="flex flex-col gap-3 mb-6" role="list">
              {rmdPage.whyRMD.holistic.levels.map((level, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-500 text-neutral-50 font-heading text-xs font-bold shrink-0 mt-0.5" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="font-body text-base text-neutral-700 leading-relaxed">{level}</span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-1">
              {rmdPage.whyRMD.holistic.closingLines.map((line, i) => (
                <p key={i} className={`font-body text-base text-neutral-700 ${i >= 3 ? 'font-semibold' : ''}`}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ================================================================
          TESTIMONIALS
      ================================================================ */}
      <Section background="indigoDeep">
        <SectionHeader title={rmdPage.testimonials.title} decorative dark />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rmdPage.testimonials.items.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/[0.06] backdrop-blur-sm p-6 border border-white/10"
            >
              <div className="flex items-center gap-1 mb-4" role="img" aria-label="5 sur 5">
                {Array.from({ length: 5 }, (_, j) => (
                  <StarIcon key={j} size={14} weight="fill" className="text-secondary-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="font-body text-sm text-neutral-200 leading-relaxed italic mb-3">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              {testimonial.afterText && (
                <p className="font-body text-sm text-neutral-300 leading-relaxed whitespace-pre-line mb-3">
                  {testimonial.afterText}
                </p>
              )}
              <div className="mt-auto pt-3 border-t border-white/10">
                <cite className="font-heading text-base font-semibold text-neutral-50 not-italic">
                  {testimonial.name}
                </cite>
                <p className="font-body text-xs text-neutral-400 mt-1">{testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Appreciations */}
        <div className="mx-auto max-w-[640px] text-center">
          <h3 className="font-heading text-xl font-semibold text-neutral-50 mb-6">
            {rmdPage.testimonials.appreciations.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {rmdPage.testimonials.appreciations.items.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.08] border border-white/10 font-body text-sm text-neutral-200"
              >
                <span className="text-secondary-400 shrink-0" aria-hidden="true">
                  <StarIcon size={12} weight="fill" />
                </span>
                &ldquo;{item}&rdquo;
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ================================================================
          HOW IT WORKS — Part 1: Intro + 5 Dimensions
      ================================================================ */}
      <Section background="cream">
        <SectionHeader title={rmdPage.process.title} decorative />

        <div className="mx-auto max-w-[720px] mb-12">
          <p className="font-heading text-lg text-indigo-500 font-semibold mb-2 text-center">
            {rmdPage.process.acronym}
          </p>
          <p className="font-body text-base text-neutral-600 leading-relaxed text-center">
            {rmdPage.process.intro}
          </p>
        </div>

        <div className="mx-auto max-w-[960px]">
          <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-2 text-center">
            {rmdPage.process.dimensionsTitle}
          </h3>
          <div className="flex flex-col gap-1 mb-8 text-center">
            {rmdPage.process.dimensionsIntro.map((line, i) => (
              <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* 5 dimensions — grid with thematic colors */}
          {(() => {
            const dimColors = [
              { bg: 'bg-primary-50', border: 'border-l-primary-300', badge: 'bg-primary-500' },
              { bg: 'bg-plum-50', border: 'border-l-plum-300', badge: 'bg-plum-500' },
              { bg: 'bg-secondary-50', border: 'border-l-secondary-300', badge: 'bg-secondary-500' },
              { bg: 'bg-indigo-50', border: 'border-l-indigo-300', badge: 'bg-indigo-500' },
              { bg: 'bg-primary-50', border: 'border-l-primary-300', badge: 'bg-primary-500' },
            ];
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {rmdPage.process.dimensions.map((dim, i) => {
                  const color = dimColors[i % dimColors.length];
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl ${color.bg} border-l-4 ${color.border} p-6 shadow-[var(--shadow-2)] flex flex-col ${
                        i === rmdPage.process.dimensions.length - 1 && rmdPage.process.dimensions.length % 2 !== 0
                          ? 'md:col-span-2 md:max-w-[calc(50%-0.625rem)] md:mx-auto'
                          : ''
                      }`}
                    >
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${color.badge} font-heading text-sm font-bold text-neutral-50 mb-3`}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <h4 className="font-heading text-lg font-semibold text-indigo-500 mb-2">
                        {dim.title}
                      </h4>
                      <p className="font-body text-sm text-neutral-600 leading-relaxed mb-3 flex-1">
                        {dim.description}
                      </p>
                      <div className="border-t border-neutral-200/40 pt-3">
                        <p className="font-body text-sm text-secondary-800 italic flex items-start gap-2">
                          <span className="text-secondary-500 shrink-0 mt-0.5" aria-hidden="true">&#8594;</span>
                          {dim.method}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </Section>

      {/* ================================================================
          HOW IT WORKS — Part 2: Sur mesure + Image
      ================================================================ */}
      <Section background="roseTint" geometricAccent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionHeader title={rmdPage.process.customNote[0]} align="left" decorative />
            <div className="flex flex-col gap-3">
              {rmdPage.process.customNote.slice(1).map((line, i) => (
                <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {rmdPage.process.image && (
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[var(--shadow-3)]">
              <Image
                src={rmdPage.process.image.src}
                alt={rmdPage.process.image.alt}
                width={rmdPage.process.image.width}
                height={rmdPage.process.image.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </Section>

      {/* ================================================================
          HOW IT WORKS — Part 3: Les 9 séances + Entre les séances
      ================================================================ */}
      <Section background="warmWhite">
        <SectionHeader title={rmdPage.process.timeline.title} decorative />

        {(() => {
          const stepColors = [
            { bg: 'bg-indigo-50', border: 'border-t-indigo-400', badge: 'bg-indigo-500' },
            { bg: 'bg-plum-50', border: 'border-t-plum-400', badge: 'bg-plum-500' },
            { bg: 'bg-secondary-50', border: 'border-t-secondary-400', badge: 'bg-secondary-800 text-neutral-50' },
          ];
          return (
            <div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {rmdPage.process.timeline.steps.map((step, index) => {
                const color = stepColors[index % stepColors.length];
                return (
                  <div
                    key={index}
                    className={`rounded-2xl ${color.bg} border-t-4 ${color.border} p-6 shadow-[var(--shadow-2)] flex flex-col`}
                  >
                    <span
                      className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full ${color.badge} font-heading text-sm font-bold text-neutral-50 self-start mb-4`}
                    >
                      {step.label}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-neutral-600 leading-relaxed whitespace-pre-line flex-1">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Entre les séances */}
        <div className="mx-auto max-w-[640px] rounded-2xl bg-bg-rose-tint p-6 lg:p-8 text-center">
          <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-3">
            {rmdPage.process.betweenSessions.title}
          </h3>
          <div className="flex flex-col gap-2">
            {rmdPage.process.betweenSessions.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* ================================================================
          LOCATION
      ================================================================ */}
      <Section background="roseTint" geometricAccent>
        <SectionHeader title={rmdPage.location.title} decorative />

        <div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cabinet */}
          <div className="rounded-2xl bg-primary-50 border-t-4 border-t-primary-300 p-8 shadow-[var(--shadow-2)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-200/60">
                <MapPinIcon size={20} weight="fill" className="text-primary-700" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-indigo-500">
                {rmdPage.location.cabinet.title}
              </h3>
            </div>
            <div className="flex flex-col gap-0.5 mb-5">
              {rmdPage.location.cabinet.address.map((line, i) => (
                <p key={i} className="font-body text-sm text-neutral-600">{line}</p>
              ))}
            </div>
            <p className="font-body text-sm font-semibold text-neutral-700 mb-2">Avantages :</p>
            <ul className="flex flex-col gap-2" role="list">
              {rmdPage.location.cabinet.advantages.map((adv, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                  <span className="font-body text-sm text-neutral-600">{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visio */}
          <div className="rounded-2xl bg-indigo-50 border-t-4 border-t-indigo-300 p-8 shadow-[var(--shadow-2)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-200/60">
                <VideoIcon size={20} weight="fill" className="text-indigo-700" />
              </span>
              <h3 className="font-heading text-lg font-semibold text-indigo-500">
                {rmdPage.location.visio.title}
              </h3>
            </div>
            <p className="font-body text-sm text-neutral-600 mb-5">Via visio s&#233;curis&#233;e</p>
            <p className="font-body text-sm font-semibold text-neutral-700 mb-2">Avantages :</p>
            <ul className="flex flex-col gap-2 mb-6" role="list">
              {rmdPage.location.visio.advantages.map((adv, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                  <span className="font-body text-sm text-neutral-600">{adv}</span>
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-secondary-400 pl-4">
              <p className="font-body text-sm text-neutral-600 italic">
                T&#233;moignage de Patricia (RMD en visio) :
              </p>
              <p className="font-body text-sm text-neutral-700 italic mt-1">
                &ldquo;{rmdPage.location.visio.testimonial}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* ================================================================
          DURATION
      ================================================================ */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader title={rmdPage.duration.title} decorative />

          <div className="rounded-2xl bg-plum-50 border border-plum-200/30 p-8 shadow-[var(--shadow-2)]">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-plum-200/60 shrink-0">
                <ClockIcon size={20} weight="fill" className="text-plum-600" />
              </span>
              <p className="font-heading text-lg font-semibold text-indigo-500">
                {rmdPage.duration.summary}
              </p>
            </div>

            <div className="font-body text-base text-neutral-600 leading-relaxed whitespace-pre-line mb-6">
              {rmdPage.duration.rhythm}
            </div>

            <div className="flex flex-col gap-2 mb-6">
              {rmdPage.duration.rhythmExplanation.map((line, i) => (
                <p key={i} className={`font-body text-base text-neutral-600 leading-relaxed ${i === 0 ? 'font-semibold text-neutral-700' : ''}`}>
                  {line}
                </p>
              ))}
            </div>

            <div className="font-body text-base text-neutral-600 leading-relaxed whitespace-pre-line">
              {rmdPage.duration.sessionDuration}
            </div>
          </div>
        </div>
      </Section>

      {/* ================================================================
          INVESTMENT
      ================================================================ */}
      <Section background="cream">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader title={rmdPage.investment.title} decorative />

          <div className="rounded-2xl bg-secondary-50 border border-secondary-200/40 p-8 shadow-[var(--shadow-2)] mb-8">
            <p className="font-heading text-xl font-semibold text-indigo-500 mb-3">
              {rmdPage.investment.price}
            </p>
            <p className="font-body text-base text-neutral-600 mb-6">
              {rmdPage.investment.paymentNote}
            </p>

            <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-3">
              {rmdPage.investment.whyTitle}
            </h3>
            <div className="flex flex-col gap-2 mb-6">
              {rmdPage.investment.whyParagraphs.map((p, i) => (
                <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-4">
              <p className="font-heading text-base font-semibold text-neutral-700 mb-1">
                {rmdPage.investment.reimbursement.question}
              </p>
              <p className="font-body text-sm text-neutral-600">
                {rmdPage.investment.reimbursement.answer}
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href={rmdPage.cta.href} className={cn(buttonVariants({ variant: 'warm', size: 'lg' }))}>
              {rmdPage.cta.label}
            </a>
          </div>
        </div>
      </Section>

      {/* ================================================================
          WHAT MAKES RMD UNIQUE
      ================================================================ */}
      <Section background="warmWhite">
        <SectionHeader title={rmdPage.unique.title} decorative />

        {(() => {
          const uniqueColors = [
            { card: 'bg-primary-50 border-t-4 border-t-primary-300', badge: 'bg-primary-500' },
            { card: 'bg-indigo-50 border-t-4 border-t-indigo-300', badge: 'bg-indigo-500' },
            { card: 'bg-secondary-50 border-t-4 border-t-secondary-300', badge: 'bg-secondary-800' },
            { card: 'bg-plum-50 border-t-4 border-t-plum-300', badge: 'bg-plum-500' },
            { card: 'bg-primary-50 border-t-4 border-t-primary-300', badge: 'bg-primary-500' },
            { card: 'bg-indigo-50 border-t-4 border-t-indigo-300', badge: 'bg-indigo-500' },
          ];
          return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {rmdPage.unique.items.map((item, i) => {
            const color = uniqueColors[i % uniqueColors.length];
            return (
            <div key={i} className={`rounded-2xl ${color.card} p-6 lg:p-8 shadow-[var(--shadow-2)] flex flex-col`}>
              <span
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full ${color.badge} font-heading text-base font-bold text-neutral-50 mb-4`}
                aria-hidden="true"
              >
                {i + 1}
              </span>

              <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-4">
                {item.title}
              </h3>

              {item.testimonialQuote && (
                <blockquote className="border-l-2 border-secondary-400 pl-4 mb-4">
                  <p className="font-body text-sm text-neutral-600 italic">
                    &ldquo;{item.testimonialQuote}&rdquo;
                  </p>
                </blockquote>
              )}

              <div className="flex flex-col gap-2 flex-1">
                {item.paragraphs.map((p, j) => (
                  <p key={j} className="font-body text-sm text-neutral-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {item.listItems && item.listItems.length > 0 && (
                <ul className="flex flex-col gap-2 mt-3" role="list">
                  {item.listItems.map((li, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className="text-secondary-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                      <span className="font-body text-sm text-neutral-700 leading-relaxed">
                        {li}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            );
          })}
        </div>
          );
        })()}
      </Section>

      {/* ================================================================
          FAQ
      ================================================================ */}
      <Section background="roseTint">
        <SectionHeader title={rmdPage.faq.title} decorative />
        <RMDFAQAccordion items={rmdPage.faq.items} />
      </Section>

      {/* ================================================================
          DISCOVERY CALL CTA
      ================================================================ */}
      <Section background="cream">
        <div className="mx-auto max-w-[700px]">
          <div className="rounded-2xl bg-secondary-50 border border-secondary-200/40 p-8 lg:p-10 shadow-[var(--shadow-3)] text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-indigo-500 mb-2">
              {rmdPage.discoveryCall.title}
            </h2>
            <p className="font-heading text-lg text-secondary-800 font-semibold mb-6">
              {rmdPage.discoveryCall.subtitle}
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {rmdPage.discoveryCall.description.map((p, i) => (
                <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <ul className="flex flex-col gap-2 mb-6 text-left mx-auto max-w-[400px]" role="list">
              {rmdPage.discoveryCall.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-secondary-500 mt-0.5 shrink-0" aria-hidden="true">&#10003;</span>
                  <span className="font-body text-base text-neutral-700 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-1 mb-8">
              {rmdPage.discoveryCall.closing.map((line, i) => (
                <p key={i} className="font-body text-base text-neutral-600 italic">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${rmdPage.discoveryCall.phone.replace(/\s/g, '')}`} className={cn(buttonVariants({ variant: 'warm', size: 'lg' }))}>
                <PhoneIcon size={18} weight="bold" />
                {rmdPage.discoveryCall.phone}
              </a>
              <a href={`mailto:${rmdPage.discoveryCall.email}`} className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}>
                <EnvelopeSimpleIcon size={18} weight="bold" />
                {rmdPage.discoveryCall.email}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CTAFinalSection />
    </>
  );
}
