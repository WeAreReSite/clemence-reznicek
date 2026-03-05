'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
  GoogleLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import { ctaFinal } from '../../../content/homepage';
import { siteConfig } from '../../../content/site';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW, EASE_SETTLE } from '@/lib/gsap-setup';
import { Button } from '@/components/ui';
import type { SocialLink } from '@/types/content';

const socialIconMap = {
  facebook: FacebookLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
  google: GoogleLogoIcon,
} as const;

export function CTAFinalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const headline = el.querySelector<HTMLElement>('[data-cta-headline]');
    const description = el.querySelector<HTMLElement>('[data-cta-description]');
    const buttons = el.querySelectorAll<HTMLElement>('[data-cta-button]');

    const ctx = gsap.context(() => {
      if (headline) {
        gsap.set(headline, { scale: 0.85, opacity: 0 });
      }
      if (description) {
        gsap.set(description, { y: 20, opacity: 0 });
      }
      buttons.forEach((btn) => {
        gsap.set(btn, { y: 40, opacity: 0 });
      });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          if (headline) {
            gsap.to(headline, {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: EASE_WELLNESS_FLOW,
            });
          }

          if (description) {
            gsap.to(description, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: EASE_WELLNESS_FLOW,
              delay: 0.2,
            });
          }

          buttons.forEach((btn, i) => {
            gsap.to(btn, {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: EASE_SETTLE,
              delay: 0.4 + i * 0.15,
            });
          });
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ padding: 'clamp(4rem, 10vw, 8rem) 0' }}>
      {/* Optional background image with cream overlay */}
      {ctaFinal.backgroundImage && (
        <>
          <Image
            src={ctaFinal.backgroundImage.src}
            alt={ctaFinal.backgroundImage.alt}
            fill
            className="object-cover object-top sm:object-[center_30%]"
            sizes="100vw"
            quality={75}
          />
          <div
            className="absolute inset-0 z-[1]"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(to bottom, oklch(0.980 0.0062 75.4 / 0.88), oklch(0.980 0.0062 75.4 / 0.92))',
            }}
          />
        </>
      )}

      <div ref={sectionRef} className="relative z-[2] mx-auto max-w-[640px] px-[clamp(1.25rem,4vw,3rem)] text-center">
        {/* Headline */}
        <h2 data-cta-headline className="font-heading text-2xl font-semibold text-indigo-500 mb-4">
          {ctaFinal.headline}
        </h2>

        {/* Description */}
        <p data-cta-description className="font-body text-base text-neutral-600 leading-relaxed mb-8">
          {ctaFinal.description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div data-cta-button>
            <Link href={ctaFinal.primaryCTA.href}>
              <Button variant="warm" size="lg" data-magnetic>
                {ctaFinal.primaryCTA.label}
              </Button>
            </Link>
          </div>
          <div data-cta-button>
            <a href={ctaFinal.secondaryCTA.href}>
              <Button variant="secondary" size="md" data-magnetic>
                {ctaFinal.secondaryCTA.label}
              </Button>
            </a>
          </div>
        </div>

        {/* Phone number visible */}
        <p className="font-body text-sm text-neutral-500 mb-6">
          <a
            href={siteConfig.phone.link}
            className="text-indigo-500 hover:text-indigo-600 transition-colors underline-offset-2 hover:underline"
          >
            {siteConfig.phone.display}
          </a>
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {siteConfig.socialLinks.map((social: SocialLink) => {
            const IconComponent = socialIconMap[social.platform as keyof typeof socialIconMap];

            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
              >
                {IconComponent && <IconComponent size={20} weight="light" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
