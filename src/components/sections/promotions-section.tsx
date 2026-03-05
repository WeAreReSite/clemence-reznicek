'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { promotions } from '../../../content/homepage';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW, EASE_BREATHE } from '@/lib/gsap-setup';
import { Section, Button, Badge } from '@/components/ui';

export function PromotionsSection() {
  const boxRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!promotions.active) return;

    const box = boxRef.current;
    const shimmer = shimmerRef.current;
    if (!box) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Entrance: scale from 0.92
      gsap.set(box, { scale: 0.92, opacity: 0 });

      ScrollTrigger.create({
        trigger: box,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(box, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: EASE_WELLNESS_FLOW,
          });

          // Start shimmer loop after entrance (paused when off-screen)
          if (shimmer) {
            gsap.set(shimmer, { x: '-100%' });
            const shimmerTween = gsap.to(shimmer, {
              x: '200%',
              duration: 1.5,
              ease: EASE_BREATHE,
              repeat: -1,
              repeatDelay: 3,
              delay: 0.8,
            });

            ScrollTrigger.create({
              trigger: box,
              start: 'top bottom',
              end: 'bottom top',
              onEnter: () => shimmerTween.play(),
              onLeave: () => shimmerTween.pause(),
              onEnterBack: () => shimmerTween.play(),
              onLeaveBack: () => shimmerTween.pause(),
            });
          }
        },
      });
    }, box);

    return () => ctx.revert();
  }, []);

  if (!promotions.active) {
    return null;
  }

  return (
    <Section background="indigoDeep">
      <div className="max-w-[640px] mx-auto text-center">
        {/* Gold border box with shimmer */}
        <div
          ref={boxRef}
          className="relative border border-secondary-400/30 rounded-lg p-8 lg:p-12 overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.742 0.1202 79.1 / 0.04), transparent 60%)',
          }}
        >
          {/* Shimmer pseudo-element */}
          <div
            ref={shimmerRef}
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'linear-gradient(90deg, transparent, oklch(0.742 0.1202 79.1 / 0.15), transparent)',
              width: '50%',
            }}
          />

          {/* Optional badge */}
          {promotions.badge && (
            <Badge variant="accent" className="mb-6">
              {promotions.badge}
            </Badge>
          )}

          <h2 className="font-heading text-2xl font-semibold text-neutral-50 mb-4">
            {promotions.headline}
          </h2>

          <p className="font-body text-base text-neutral-200 leading-relaxed mb-8">
            {promotions.description}
          </p>

          <Link href={promotions.cta.href}>
            <Button variant="warmOnDark" size="lg" data-magnetic>
              {promotions.cta.label}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
