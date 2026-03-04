'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { StarIcon } from '@phosphor-icons/react/dist/ssr';
import { testimonialSection } from '../../../content/testimonials';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW, EASE_BREATHE } from '@/lib/gsap-setup';
import { Section, SectionHeader, Card, Button } from '@/components/ui';

const CARD_ENTRANCES = [
  { y: 80, rotateZ: -2, scale: 0.95 },
  { y: 100, rotateZ: 1, scale: 0.9 },
  { y: 60, rotateZ: -1, scale: 0.95 },
];

const FLOAT_DURATIONS = [3, 3.7, 4.2];
const FLOAT_Y = [6, 8, 5];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} etoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          size={16}
          weight={i < rating ? 'fill' : 'regular'}
          className={i < rating ? 'text-secondary-400' : 'text-neutral-400'}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = el.querySelectorAll<HTMLElement>('[data-testimonial-card]');

    const ctx = gsap.context(() => {
      // Set initial states
      cards.forEach((card, i) => {
        const entrance = CARD_ENTRANCES[i] || CARD_ENTRANCES[0];
        gsap.set(card, {
          y: entrance.y,
          rotateZ: entrance.rotateZ,
          scale: entrance.scale,
          opacity: 0,
        });
      });

      // Entrance animation
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          cards.forEach((card, i) => {
            gsap.to(card, {
              y: 0,
              rotateZ: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: EASE_WELLNESS_FLOW,
              delay: i * 0.15,
              onComplete: () => {
                // Continuous float after entrance
                gsap.to(card, {
                  y: FLOAT_Y[i] || 6,
                  duration: FLOAT_DURATIONS[i] || 3,
                  ease: EASE_BREATHE,
                  yoyo: true,
                  repeat: -1,
                });
              },
            });
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section background="indigoDeep">
      <SectionHeader
        title={testimonialSection.sectionTitle}
        subtitle={testimonialSection.sectionSubtitle}
        decorative
        dark
        animated
      />

      {/* Google review badge */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="flex items-center gap-0.5" aria-label="5 etoiles sur 5">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} size={20} weight="fill" className="text-secondary-400" />
          ))}
        </div>
        {testimonialSection.googleBadgeLabel && (
          <span className="font-body text-sm text-neutral-200">
            {testimonialSection.googleBadgeLabel}
          </span>
        )}
      </div>

      {/* Testimonial cards */}
      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {testimonialSection.featured.map((testimonial) => (
          <div key={testimonial.id} data-testimonial-card className="h-full">
            <Card
              className="!bg-neutral-50/[0.06] !border-neutral-50/10 backdrop-blur-sm flex flex-col h-full"
            >
              <StarRating rating={testimonial.rating} />

              <blockquote className="font-body text-sm text-neutral-200 leading-relaxed italic mt-4 mb-4 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <footer className="flex flex-col gap-1 mt-auto">
                <cite className="font-heading text-base font-semibold text-neutral-50 not-italic">
                  {testimonial.name}
                </cite>
                {testimonial.service && (
                  <span className="font-body text-xs text-neutral-300">
                    {testimonial.service}
                  </span>
                )}
              </footer>
            </Card>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href={testimonialSection.cta.href}>
          <Button variant="warmOnDark" size="lg" data-magnetic>
            {testimonialSection.cta.label}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
