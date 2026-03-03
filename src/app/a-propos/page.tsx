import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  EyeIcon,
  HeartIcon,
  SunIcon,
  ShieldCheckIcon,
  FeatherIcon,
  SparkleIcon,
  ArrowsSplitIcon,
  ScalesIcon,
  BirdIcon,
  CertificateIcon,
} from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { aboutPage } from '../../../content/about';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.about.title,
  description: siteMetadata.about.description,
  keywords: siteMetadata.about.keywords,
  openGraph: {
    title: siteMetadata.about.title,
    description: siteMetadata.about.description,
    images: [{ url: siteMetadata.about.ogImage ?? '/images/team/DSC02967.jpg' }],
  },
};

// Map icon string names to Phosphor icon components
const iconMap: Record<string, React.ElementType> = {
  eye: EyeIcon,
  heart: HeartIcon,
  sun: SunIcon,
  shield: ShieldCheckIcon,
  feather: FeatherIcon,
  sparkles: SparkleIcon,
  network: ArrowsSplitIcon,
  scale: ScalesIcon,
  bird: BirdIcon,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <InnerPageHero
        title={aboutPage.heroTitle}
        subtitle={aboutPage.heroSubtitle}
        backgroundImage={aboutPage.heroImage}
      />

      {/* Mon chemin — Story */}
      <Section background="warmWhite">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              title={aboutPage.story.title}
              align="left"
              decorative
            />
            <div className="flex flex-col gap-5">
              {aboutPage.story.paragraphs.map((paragraph, i) => (
                <p key={i} className="font-body text-base text-neutral-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden">
            <Image
              src={aboutPage.story.image.src}
              alt={aboutPage.story.image.alt}
              width={aboutPage.story.image.width}
              height={aboutPage.story.image.height}
              className="object-cover object-top w-full h-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Values grid */}
      <Section background="roseTint">
        <SectionHeader
          title={aboutPage.values.title}
          decorative
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutPage.values.items.map((value) => {
            const IconComponent = iconMap[value.icon] ?? EyeIcon;
            return (
              <Card key={value.title} className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50" aria-hidden="true">
                    <IconComponent size={20} weight="light" className="text-indigo-500" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-indigo-500">
                    {value.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-neutral-600 leading-relaxed flex-1">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Certifications */}
      <Section background="cream">
        <SectionHeader
          title={aboutPage.certifications.title}
          decorative
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutPage.certifications.items.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200"
            >
              <CertificateIcon
                size={20}
                weight="light"
                className="shrink-0 text-secondary-500 mt-0.5"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-body text-sm font-semibold text-neutral-800 mb-1">
                  {cert.name}
                </h3>
                <p className="font-body text-xs text-neutral-500 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="indigoDeep">
        <div className="text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-50 mb-4">
            Et si on se rencontrait ?
          </h2>
          <p className="font-body text-base text-neutral-200 mb-8 max-w-lg mx-auto">
            La meilleure façon de savoir si mon accompagnement est fait pour toi, c&apos;est de le vivre. Prends rendez-vous pour une première séance.
          </p>
          <Link href={aboutPage.cta.href}>
            <Button variant="warm" size="lg">
              {aboutPage.cta.label}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
