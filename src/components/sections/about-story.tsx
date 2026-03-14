'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import type { ImageData } from '@/types/content';

interface AboutStoryProps {
  title: string;
  paragraphs: string[];
  image: ImageData;
  pullQuote?: string;
}

export function AboutStory({ title, paragraphs, image, pullQuote }: AboutStoryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el.querySelectorAll('[data-gsap]'), { clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      // Staggered paragraph reveal
      const paras = el.querySelectorAll('[data-animate="paragraph"]');
      gsap.set(paras, { opacity: 0, y: 24 });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.to(paras, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: EASE_WELLNESS_FLOW,
          });
        },
      });

      // Image scale reveal
      const img = el.querySelector('[data-animate="image"]');
      if (img) {
        gsap.set(img, { opacity: 0, scale: 0.96 });
        ScrollTrigger.create({
          trigger: img,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(img, {
              opacity: 1,
              scale: 1,
              duration: 0.9,
              ease: EASE_WELLNESS_FLOW,
            });
          },
        });
      }

      // Pull quote fade-in
      const quote = el.querySelector('[data-animate="quote"]');
      if (quote) {
        gsap.set(quote, { opacity: 0, y: 16 });
        ScrollTrigger.create({
          trigger: quote,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(quote, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: EASE_WELLNESS_FLOW,
            });
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
        {/* Portrait — 2/5 width on desktop */}
        <div className="lg:col-span-2" data-animate="image">
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
            {/* Decorative border accent */}
            <div
              className="absolute -inset-1.5 rounded-2xl opacity-40"
              style={{
                background:
                  'linear-gradient(135deg, oklch(0.860 0.0400 8.5 / 0.5), transparent 50%, oklch(0.892 0.0685 85.7 / 0.5))',
              }}
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-cover object-top w-full h-full"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Text — 3/5 width on desktop */}
        <div className="lg:col-span-3">
          <h2 className="font-heading text-2xl font-semibold text-indigo-500 tracking-[var(--tracking-headings)] leading-tight mb-6">
            {title}
          </h2>
          <div className="flex flex-col gap-5">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                data-animate="paragraph"
                className="font-body text-base text-neutral-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Pull quote */}
      {pullQuote && (
        <div
          data-animate="quote"
          className="mt-12 lg:mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="relative px-8 py-6">
            <span
              className="absolute top-0 left-2 font-heading text-6xl text-secondary-300/30 leading-none select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-heading text-xl lg:text-2xl text-indigo-500/80 leading-relaxed italic">
              {pullQuote}
            </p>
            <span
              className="absolute bottom-0 right-2 font-heading text-6xl text-secondary-300/30 leading-none select-none"
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
