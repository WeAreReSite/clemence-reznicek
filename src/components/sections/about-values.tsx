'use client';

import { useEffect, useRef } from 'react';
import {
  Eye as EyeIcon,
  Heart as HeartIcon,
  Sun as SunIcon,
  ShieldCheck as ShieldCheckIcon,
  Feather as FeatherIcon,
  Sparkle as SparkleIcon,
  ArrowsSplit as ArrowsSplitIcon,
  Scales as ScalesIcon,
  Bird as BirdIcon,
} from '@phosphor-icons/react';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import { SectionHeader } from '@/components/ui';
import type { ValueCard } from '@/types/content';

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

// Rotating color accents for each card
const cardAccents = [
  { bg: 'bg-primary-50/60', iconBg: 'bg-primary-100', iconColor: 'text-primary-600', numColor: 'text-primary-100' },
  { bg: 'bg-indigo-50/60', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-500', numColor: 'text-indigo-100' },
  { bg: 'bg-secondary-50/60', iconBg: 'bg-secondary-100', iconColor: 'text-secondary-700', numColor: 'text-secondary-100' },
];

interface AboutValuesProps {
  title: string;
  values: ValueCard[];
}

export function AboutValues({ title, values }: AboutValuesProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el.querySelectorAll('[data-gsap]'), { clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      const cards = el.querySelectorAll('[data-animate="value-card"]');
      gsap.set(cards, { opacity: 0, y: 32, scale: 0.97 });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: {
              amount: 0.5,
              from: 'start',
            },
            ease: EASE_WELLNESS_FLOW,
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <SectionHeader title={title} decorative animated />

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {values.map((value, index) => {
          const accent = cardAccents[index % 3];
          const IconComponent = iconMap[value.icon] ?? EyeIcon;
          const number = String(index + 1).padStart(2, '0');

          return (
            <div
              key={value.title}
              data-animate="value-card"
              className={`relative overflow-hidden rounded-xl p-6 ${accent.bg} border border-neutral-100/60 transition-all duration-[350ms] ease-[var(--ease-default)] hover:shadow-[var(--shadow-2)] hover:-translate-y-0.5`}
            >
              {/* Large background number watermark */}
              <span
                className={`absolute -top-3 -right-1 font-heading text-[5rem] font-bold leading-none ${accent.numColor} select-none pointer-events-none`}
                aria-hidden="true"
              >
                {number}
              </span>

              {/* Content */}
              <div className="relative z-[1]">
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${accent.iconBg} mb-4`}
                >
                  <IconComponent size={22} weight="light" className={accent.iconColor} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-800 mb-2">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
