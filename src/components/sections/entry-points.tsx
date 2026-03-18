'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { entryPoints } from '../../../content/homepage';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import {
  Section,
  SectionHeader,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  buttonVariants,
} from '@/components/ui';
import { cn } from '@/lib/utils';

const borderColors: Record<string, string> = {
  'massages-energetiques': 'border-t-primary-400',
  'accompagnements-emotionnels': 'border-t-plum-400',
  'se-choisir-rmd': 'border-t-indigo-400',
  'formations-holistiques': 'border-t-secondary-400',
  massages: 'border-t-primary-400',
  'soins-energetiques': 'border-t-plum-400',
  'premiere-seance': 'border-t-indigo-400',
};

export function EntryPointsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const images = el.querySelectorAll<HTMLElement>('[data-clip-reveal]');
    const cards = el.querySelectorAll<HTMLElement>('[data-card]');
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const ctx = gsap.context(() => {
      if (isDesktop) {
        // Scrub-driven iris reveal on desktop
        images.forEach((img) => {
          gsap.set(img, { clipPath: 'circle(0% at 50% 50%)' });
          gsap.to(img, {
            clipPath: 'circle(100% at 50% 50%)',
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.8,
            },
          });
        });
      } else {
        // Triggered reveal on mobile
        images.forEach((img) => {
          gsap.set(img, { clipPath: 'circle(0% at 50% 50%)' });
          ScrollTrigger.create({
            trigger: img,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.to(img, {
                clipPath: 'circle(100% at 50% 50%)',
                duration: 1,
                ease: EASE_WELLNESS_FLOW,
              });
            },
          });
        });

        // Subtle scale pulse on mobile scroll
        cards.forEach((card) => {
          gsap.to(card, {
            scale: 1.02,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.6,
            },
          });
          gsap.to(card, {
            scale: 1.0,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 40%',
              end: 'top 10%',
              scrub: 0.6,
            },
          });
        });
      }

      // Fade-in card content
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: isDesktop ? 60 : 30,
          opacity: 0,
          duration: 0.8,
          ease: EASE_WELLNESS_FLOW,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
          delay: isDesktop ? i * 0.15 : 0,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section background="warmWhite">
      <SectionHeader
        title={entryPoints.sectionTitle}
        subtitle={entryPoints.sectionSubtitle}
        decorative
        animated
      />

      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {entryPoints.cards.map((card) => (
          <div key={card.slug} data-card className="h-full group">
            <Card
              className={`border-t-4 ${borderColors[card.slug] ?? 'border-t-primary-400'} overflow-hidden !p-0 flex flex-col h-full transition-[transform,box-shadow] duration-[400ms] ease-[var(--ease-default)] hover:-translate-y-1 hover:shadow-[var(--shadow-3)]`}
            >
              {/* Card image with clip-path reveal */}
              <div className="relative aspect-[16/9] w-full overflow-hidden" data-clip-reveal>
                {/* Blurred background layer — matches image edges, uses tiny size since heavily blurred */}
                <Image
                  src={card.image.src}
                  alt=""
                  width={card.image.width}
                  height={card.image.height}
                  className="absolute inset-0 w-full h-full object-cover scale-[1.2] blur-[24px] saturate-[1.2] brightness-[1.05]"
                  sizes="256px"
                  quality={75}
                  aria-hidden="true"
                />
                {/* Actual image — fully visible */}
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  width={card.image.width}
                  height={card.image.height}
                  className="relative w-full h-full object-contain transition-transform duration-700 ease-[var(--ease-default)] group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-semibold">
                    {card.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>

                <div className="px-6 pb-2 pt-3 mt-2 border-t border-neutral-200 flex items-center flex-wrap gap-3">
                  <span className="font-heading text-base font-semibold text-indigo-500">{card.price}</span>
                  {card.duration && (
                    <>
                      <span className="text-neutral-400" aria-hidden="true">&middot;</span>
                      <span className="text-sm text-neutral-600">{card.duration}</span>
                    </>
                  )}
                </div>

                <CardFooter className="mt-auto">
                  {card.cta.href.startsWith('tel:') ? (
                    <a href={card.cta.href} className={cn(buttonVariants({ variant: 'secondary', size: 'sm', fullWidth: true }), 'w-full')} data-magnetic>
                      {card.cta.label}
                    </a>
                  ) : (
                    <Link href={card.cta.href} className={cn(buttonVariants({ variant: 'secondary', size: 'sm', fullWidth: true }), 'w-full')} data-magnetic>
                      {card.cta.label}
                    </Link>
                  )}
                </CardFooter>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-10 lg:mt-14 text-center">
        <p className="font-heading text-xl lg:text-2xl font-semibold text-neutral-800 mb-3">
          Une question ?
        </p>
        <p className="font-body text-base text-neutral-600 mb-6">
          Je suis disponible pour échanger et vous guider vers l&#39;accompagnement qui vous correspond.
        </p>
        <a href="tel:+33632185259" className={cn(buttonVariants({ variant: 'warm', size: 'lg' }))} data-magnetic>
          Contactez-moi
        </a>
      </div>
    </Section>
  );
}
