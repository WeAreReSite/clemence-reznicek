import {
  EyeIcon,
  ShieldIcon,
  FlameIcon,
} from '@phosphor-icons/react/dist/ssr';
import { values } from '../../../content/homepage';
import { Section, SectionHeader, ScrollReveal } from '@/components/ui';

const iconMap = {
  eye: EyeIcon,
  shield: ShieldIcon,
  flame: FlameIcon,
} as const;

export function ValuesSection() {
  return (
    <Section background="warmWhite">
      <SectionHeader
        title={values.sectionTitle}
        subtitle={values.sectionSubtitle}
        decorative
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {values.values.map((value) => {
          const IconComponent = iconMap[value.icon as keyof typeof iconMap];

          return (
            <ScrollReveal key={value.title} className="text-center">
              {/* Icon with gold accent */}
              {IconComponent && (
                <span
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-50 text-secondary-500 mb-5"
                  aria-hidden="true"
                >
                  <IconComponent size={28} weight="light" />
                </span>
              )}

              <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-3">
                {value.title}
              </h3>

              <p className="font-body text-sm text-neutral-600 leading-relaxed max-w-[340px] mx-auto">
                {value.description}
              </p>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
