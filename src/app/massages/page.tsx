import type { Metadata } from 'next';
import Image from 'next/image';
import { metadata as siteMetadata } from '../../../content/metadata';
import { massagesPage } from '../../../content/massages';
import { getBreadcrumbSchema, getServiceSchema } from '@/lib/schema';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button, YouTubeEmbed } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.massages.title,
  description: siteMetadata.massages.description,
  keywords: siteMetadata.massages.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/massages',
  },
  openGraph: {
    title: siteMetadata.massages.title,
    description: siteMetadata.massages.description,
    images: [{ url: siteMetadata.massages.ogImage ?? '/images/work/DSC02663.jpg' }],
  },
};

const breadcrumbSchema = JSON.stringify(
  getBreadcrumbSchema([{ name: 'Massages', url: 'https://clemencereznicek.com/massages' }])
);
const serviceSchemaData = getServiceSchema(
  massagesPage.services,
  'https://clemencereznicek.com/massages'
).map((s) => JSON.stringify(s));

export default function MassagesPage() {
  return (
    <>
      {/* JSON-LD: Breadcrumb + Service schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbSchema }} />
      {serviceSchemaData.map((json, i) => (
        <script key={`service-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      ))}

      {/* Hero */}
      <InnerPageHero
        title={massagesPage.heroTitle}
        subtitle={massagesPage.heroSubtitle}
        backgroundImage={massagesPage.heroImage}
      />

      {/* Introduction */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-base text-neutral-600 leading-relaxed">
            {massagesPage.introduction}
          </p>
        </div>
      </Section>

      {/* Video presentation */}
      <Section background="roseTint">
        <SectionHeader title="Bienvenue au cabinet" decorative />
        <div className="mx-auto max-w-[900px]">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-3)]">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              playsInline
              poster="/videos/massage-presentation-poster.jpg"
            >
              <source src="/videos/massage-presentation.mp4" type="video/mp4" />
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          </div>
        </div>
      </Section>

      {/* Service cards */}
      <Section background="cream">
        <SectionHeader title="Les massages" decorative />
        <div className="flex flex-col gap-12 lg:gap-16">
          {massagesPage.services.map((service, index) => (
            <div
              key={service.name}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              {service.image && (
                <div className="w-full lg:w-1/2 shrink-0">
                  <div className="relative aspect-[3/4] w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={service.image.width}
                      height={service.image.height}
                      className="object-cover w-full h-full"
                      style={{ objectPosition: service.image.objectPosition ?? 'center' }}
                      sizes="(max-width: 1024px) 100vw, 480px"
                    />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-indigo-500 mb-4">
                  {service.name}
                </h2>
                <p className="font-body text-base text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center flex-wrap gap-4 font-body text-sm">
                  <span className="font-semibold text-indigo-500">{service.price}</span>
                  <span className="text-neutral-400" aria-hidden="true">·</span>
                  <span className="text-neutral-600">{service.duration}</span>
                </div>

                {/* Video Solar */}
                {service.name === 'Massage-soin Solar' && (
                  <div className="mt-6">
                    <YouTubeEmbed
                      videoId="uzAgE6g28c0"
                      title="Découvrir le massage-soin Solar"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Mon approche */}
      <Section background="roseTint">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              title={massagesPage.approachTitle}
              align="left"
              decorative
            />
            <div className="flex flex-col gap-4">
              {massagesPage.approachText.map((paragraph, i) => (
                <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden">
            <Image
              src={massagesPage.approachImage.src}
              alt={massagesPage.approachImage.alt}
              width={massagesPage.approachImage.width}
              height={massagesPage.approachImage.height}
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="indigoDeep">
        <div className="text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-50 mb-4">
            Prêt·e pour un massage ?
          </h2>
          <p className="font-body text-base text-neutral-200 mb-8 max-w-lg mx-auto">
            Réservez votre séance et offrez-vous un moment de douceur et de reconnexion.
          </p>
          <a href={massagesPage.cta.href}>
            <Button variant="warm" size="lg">
              {massagesPage.cta.label}
            </Button>
          </a>
        </div>
      </Section>
    </>
  );
}
