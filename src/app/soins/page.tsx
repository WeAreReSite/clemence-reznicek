import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { metadata as siteMetadata } from '../../../content/metadata';
import { soinsPage } from '../../../content/soins';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

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

      {/* Service categories */}
      {soinsPage.categories.map((category, index) => (
        <Section
          key={category.title}
          background={index % 2 === 0 ? 'cream' : 'roseTint'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image — alternating sides */}
            {index % 2 === 1 && category.image && (
              <div className="hidden lg:block relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  width={category.image.width}
                  height={category.image.height}
                  className="object-cover object-[center_30%] w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Content */}
            <div>
              <SectionHeader
                title={category.title}
                subtitle={category.description}
                align="left"
                decorative
              />

              {/* Mobile image */}
              {category.image && (
                <div className="lg:hidden relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    width={category.image.width}
                    height={category.image.height}
                    className="object-cover object-[center_30%] w-full h-full"
                    sizes="100vw"
                  />
                </div>
              )}

              <div className="flex flex-col gap-6">
                {category.services.map((service) => (
                  <Card key={service.name}>
                    <CardHeader>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-sm text-neutral-600 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-3 font-body text-sm">
                        <span className="font-semibold text-indigo-500">{service.price}</span>
                        <span className="text-neutral-400" aria-hidden="true">·</span>
                        <span className="text-neutral-500">{service.duration}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image — alternating sides (desktop even index) */}
            {index % 2 === 0 && category.image && (
              <div className="hidden lg:block relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  width={category.image.width}
                  height={category.image.height}
                  className="object-cover object-[center_30%] w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
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
