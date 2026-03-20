'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { introduction } from '../../../content/homepage';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import { Section, SectionHeader, buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

export function IntroductionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const imageWrapper = el.querySelector<HTMLElement>('[data-intro-image]');
    const textBlock = el.querySelector<HTMLElement>('[data-intro-text]');

    const ctx = gsap.context(() => {
      // Curtain-drop reveal from top on portrait
      if (imageWrapper) {
        gsap.set(imageWrapper, { clipPath: 'inset(100% 0 0 0)' });
        ScrollTrigger.create({
          trigger: imageWrapper,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(imageWrapper, {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: EASE_WELLNESS_FLOW,
            });
          },
        });
      }

      // Text slides up
      if (textBlock) {
        gsap.from(textBlock, {
          y: 40,
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
    <Section background="cream">
      <SectionHeader
        title={introduction.sectionTitle}
        decorative
        animated
      />

      <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image -- 40% on desktop */}
        <div className="w-full lg:w-[40%] shrink-0" data-intro-image>
          <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-2)]">
            <Image
              src={introduction.image.src}
              alt={introduction.image.alt}
              width={introduction.image.width}
              height={introduction.image.height}
              className="object-cover object-top w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Text -- 60% on desktop */}
        <div className="w-full lg:w-[60%]" data-intro-text>

          <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-6">
            {introduction.headline}
          </h3>

          {introduction.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-base text-neutral-700 leading-relaxed mb-4 last:mb-6"
            >
              {paragraph}
            </p>
          ))}

          {/* Signature */}
          <p className="font-heading text-lg italic text-primary-600 mb-6">
            {introduction.signature}
          </p>

          {/* CTA */}
          <a href={introduction.cta.href} className={cn(buttonVariants({ variant: 'secondary', size: 'md' }))} data-magnetic>
            {introduction.cta.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
