'use client';

import { useRef, useEffect } from 'react';
import {
  EyeIcon,
  ShieldIcon,
  FlameIcon,
} from '@phosphor-icons/react/dist/ssr';
import { values } from '../../../content/homepage';
import { gsap, ScrollTrigger } from '@/lib/gsap-setup';
import { Section, SectionHeader } from '@/components/ui';

const iconMap = {
  eye: EyeIcon,
  shield: ShieldIcon,
  flame: FlameIcon,
} as const;

export function ValuesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const items = el.querySelectorAll<HTMLElement>('[data-value-item]');

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        const icon = item.querySelector('[data-value-icon]');
        const text = item.querySelector('[data-value-text]');

        if (icon) {
          gsap.set(icon, { scale: 0, rotation: -180, opacity: 0 });
        }
        if (text) {
          gsap.set(text, { y: 20, opacity: 0 });
        }

        ScrollTrigger.create({
          trigger: item,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const delay = i * 0.2;

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)',
                delay,
              });
            }

            if (text) {
              gsap.to(text, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power3.out',
                delay: delay + 0.1,
              });
            }
          },
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section background="warmWhite">
      <SectionHeader
        title={values.sectionTitle}
        subtitle={values.sectionSubtitle}
        decorative
        animated
      />

      <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {values.values.map((value) => {
          const IconComponent = iconMap[value.icon as keyof typeof iconMap];

          return (
            <div key={value.title} data-value-item className="text-center">
              {/* Icon with gold accent */}
              {IconComponent && (
                <span
                  data-value-icon
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-50 text-secondary-500 mb-5"
                  aria-hidden="true"
                >
                  <IconComponent size={28} weight="light" />
                </span>
              )}

              <div data-value-text>
                <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-3">
                  {value.title}
                </h3>

                <p className="font-body text-sm text-neutral-600 leading-relaxed max-w-[340px] mx-auto">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
