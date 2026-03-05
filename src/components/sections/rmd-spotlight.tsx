'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CompassIcon,
  StackSimpleIcon,
  AnchorIcon,
} from '@phosphor-icons/react/dist/ssr';
import { rmdSpotlight } from '../../../content/homepage';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import { Section, SectionHeader, Button, Badge } from '@/components/ui';

const iconMap = {
  compass: CompassIcon,
  layers: StackSimpleIcon,
  anchor: AnchorIcon,
} as const;

export function RMDSpotlightSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const imageWrapper = el.querySelector<HTMLElement>('[data-rmd-image]');
    const textBlock = el.querySelector<HTMLElement>('[data-rmd-text]');
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const ctx = gsap.context(() => {
      // Diagonal wipe from left on image
      if (imageWrapper) {
        gsap.set(imageWrapper, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' });

        if (isDesktop) {
          gsap.to(imageWrapper, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            ease: 'none',
            scrollTrigger: {
              trigger: imageWrapper,
              start: 'top 75%',
              end: 'top 25%',
              scrub: 0.8,
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: imageWrapper,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.to(imageWrapper, {
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                duration: 1.2,
                ease: EASE_WELLNESS_FLOW,
              });
            },
          });
        }
      }

      // Text entrance
      if (textBlock) {
        gsap.from(textBlock, {
          y: isDesktop ? 50 : 30,
          opacity: 0,
          duration: 0.8,
          ease: EASE_WELLNESS_FLOW,
          scrollTrigger: {
            trigger: textBlock,
            start: 'top 85%',
            once: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section background="roseTint" geometricAccent>
      <SectionHeader
        title={rmdSpotlight.sectionTitle}
        decorative
        animated
      />

      <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text -- 55% on desktop (LEFT) */}
        <div className="w-full lg:w-[55%] order-2 lg:order-1" data-rmd-text>
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

        </div>

        {/* Image -- 45% on desktop (RIGHT) */}
        <div className="w-full lg:w-[45%] order-1 lg:order-2" data-rmd-image>
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
        </div>
      </div>

      {/* Price + CTA — centered below both columns */}
      <div className="mt-10 text-center">
        <div className="flex items-center justify-center flex-wrap gap-4 mb-6">
          <Badge variant="accent" className="text-base px-4 py-2">
            {rmdSpotlight.price}
          </Badge>
          <div className="flex flex-col">
            <span className="font-body text-sm font-medium text-neutral-700">
              {rmdSpotlight.sessions}
            </span>
            <span className="font-body text-xs text-neutral-600">
              {rmdSpotlight.priceDetail}
            </span>
          </div>
        </div>
        <Link href={rmdSpotlight.cta.href}>
          <Button variant="warm" size="lg" data-magnetic>
            {rmdSpotlight.cta.label}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
