import {
  StarIcon,
  ClockIcon,
  CertificateIcon,
  MapPinIcon,
} from '@phosphor-icons/react/dist/ssr';
import { trustBar } from '../../../content/homepage';
import { Section, ScrollReveal } from '@/components/ui';

const iconMap = {
  star: StarIcon,
  clock: ClockIcon,
  award: CertificateIcon,
  mapPin: MapPinIcon,
} as const;

export function TrustBarSection() {
  return (
    <Section background="roseTint" className="!py-8 lg:!py-10" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {trustBar.badges.map((badge, index) => {
          const IconComponent = iconMap[badge.icon as keyof typeof iconMap];

          return (
            <ScrollReveal
              key={badge.label}
              delay={index * 100}
              className="flex flex-col items-center text-center gap-2"
            >
              {IconComponent && (
                <span className="inline-flex items-center justify-center text-secondary-500" aria-hidden="true">
                  <IconComponent size={28} weight="light" />
                </span>
              )}
              <span className="font-heading text-lg font-semibold text-indigo-500">
                {badge.value}
              </span>
              <span className="font-body text-sm text-neutral-600">
                {badge.label}
              </span>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
