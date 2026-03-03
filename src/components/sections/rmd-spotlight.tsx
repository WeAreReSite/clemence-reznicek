import Image from 'next/image';
import Link from 'next/link';
import {
  CompassIcon,
  StackSimpleIcon,
  AnchorIcon,
} from '@phosphor-icons/react/dist/ssr';
import { rmdSpotlight } from '../../../content/homepage';
import { Section, SectionHeader, ScrollReveal, Button, Badge } from '@/components/ui';

const iconMap = {
  compass: CompassIcon,
  layers: StackSimpleIcon,
  anchor: AnchorIcon,
} as const;

export function RMDSpotlightSection() {
  return (
    <Section background="roseTint" geometricAccent>
      <SectionHeader
        title={rmdSpotlight.sectionTitle}
        decorative
      />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text — 55% on desktop (LEFT) */}
        <ScrollReveal delay={150} className="w-full lg:w-[55%] order-2 lg:order-1">
          <h3 className="font-heading text-2xl font-semibold text-indigo-500 mb-4">
            {rmdSpotlight.headline}
          </h3>

          <p className="font-body text-base text-neutral-700 leading-relaxed mb-8">
            {rmdSpotlight.description}
          </p>

          {/* Highlights */}
          <div className="space-y-6 mb-8">
            {rmdSpotlight.highlights.map((highlight) => {
              const IconComponent = iconMap[highlight.icon as keyof typeof iconMap];

              return (
                <div key={highlight.title} className="flex items-start gap-4">
                  {IconComponent && (
                    <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-secondary-100 text-secondary-600">
                      <IconComponent size={22} weight="light" />
                    </span>
                  )}
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-indigo-500 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="font-body text-sm text-neutral-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="accent" className="text-base px-4 py-2">
              {rmdSpotlight.price}
            </Badge>
            <div className="flex flex-col">
              <span className="font-body text-sm font-medium text-neutral-700">
                {rmdSpotlight.sessions}
              </span>
              <span className="font-body text-xs text-neutral-500">
                {rmdSpotlight.priceDetail}
              </span>
            </div>
          </div>

          {/* CTA */}
          <Link href={rmdSpotlight.cta.href}>
            <Button variant="warm" size="lg">
              {rmdSpotlight.cta.label}
            </Button>
          </Link>
        </ScrollReveal>

        {/* Image — 45% on desktop (RIGHT) */}
        <ScrollReveal className="w-full lg:w-[45%] order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-3)]">
            <Image
              src={rmdSpotlight.image.src}
              alt={rmdSpotlight.image.alt}
              width={rmdSpotlight.image.width}
              height={rmdSpotlight.image.height}
              className="object-cover object-top w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
