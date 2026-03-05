'use client';

import { useRef, useEffect, useState } from 'react';
import {
  StarIcon,
  ClockIcon,
  CertificateIcon,
  MapPinIcon,
} from '@phosphor-icons/react/dist/ssr';
import { trustBar } from '../../../content/homepage';
import { gsap, ScrollTrigger } from '@/lib/gsap-setup';
import { Section } from '@/components/ui';

const iconMap = {
  star: StarIcon,
  clock: ClockIcon,
  award: CertificateIcon,
  mapPin: MapPinIcon,
} as const;

const SCRAMBLE_CHARS = '0123456789!@#$%&*';

function AnimatedBadge({ badge, index }: { badge: typeof trustBar.badges[number]; index: number }) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(false);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayed(true);
      return;
    }

    const ctx = gsap.context(() => {
      // Icon elastic entrance
      if (iconRef.current) {
        gsap.set(iconRef.current, { scale: 0, opacity: 0 });
      }
      if (valueRef.current) {
        gsap.set(valueRef.current, { opacity: 0 });
      }

      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          const staggerDelay = index * 0.15;

          // Icon pop
          if (iconRef.current) {
            gsap.to(iconRef.current, {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'elastic.out(1, 0.5)',
              delay: staggerDelay,
            });
          }

          // Scramble text animation for value
          if (valueRef.current) {
            gsap.to(valueRef.current, { opacity: 1, duration: 0.1, delay: staggerDelay });

            const target = badge.value;
            const chars = target.split('');
            let frame = 0;
            const maxFrames = 12;

            const interval = setInterval(() => {
              frame++;
              const progress = frame / maxFrames;
              const resolved = Math.floor(progress * chars.length);

              const result = chars.map((char, ci) => {
                if (ci < resolved) return char;
                // Keep non-numeric chars as-is
                if (!/\d/.test(char)) return char;
                return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
              }).join('');

              if (valueRef.current) {
                valueRef.current.textContent = result;
              }

              if (frame >= maxFrames) {
                clearInterval(interval);
                if (valueRef.current) {
                  valueRef.current.textContent = target;
                }
                setDisplayed(true);
              }
            }, 50);
          }
        },
      });
    });

    return () => ctx.revert();
  }, [badge.value, index]);

  const IconComponent = iconMap[badge.icon as keyof typeof iconMap];

  return (
    <div
      ref={badgeRef}
      className="flex flex-col items-center text-center gap-2"
    >
      {IconComponent && (
        <span ref={iconRef} className="inline-flex items-center justify-center text-secondary-500" aria-hidden="true">
          <IconComponent size={28} weight="light" />
        </span>
      )}
      <span
        ref={valueRef}
        className="font-heading text-lg font-semibold text-indigo-500"
        role="status"
        aria-label={badge.value}
      >
        {displayed ? badge.value : '\u00A0'}
      </span>
      <span className="font-body text-sm text-neutral-600">
        {badge.label}
      </span>
    </div>
  );
}

export function TrustBarSection() {
  return (
    <Section background="roseTint" className="!py-8 lg:!py-10" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {trustBar.badges.map((badge, index) => (
          <AnimatedBadge key={badge.label} badge={badge} index={index} />
        ))}
      </div>
    </Section>
  );
}
