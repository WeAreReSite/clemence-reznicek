'use client';

import { useRef, useEffect, Fragment } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-setup';
import Image from 'next/image';
import Link from 'next/link';
import { hero } from '../../../content/homepage';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const headlineWords = hero.headline.split(' ');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      gsap.set(
        [
          overlayRef.current,
          subtitleRef.current,
          descriptionRef.current,
          ctaRef.current,
          auraRef.current,
        ].filter(Boolean),
        { opacity: 1, y: 0 }
      );
      gsap.set(imageRef.current, { scale: 1 });
      const wordEls = headlineRef.current?.querySelectorAll('.hero-word');
      if (wordEls) gsap.set(wordEls, { y: '0%', opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Set initial states
      gsap.set(
        [subtitleRef.current, descriptionRef.current, ctaRef.current].filter(Boolean),
        { opacity: 0, y: 30 }
      );
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(imageRef.current, { scale: 1.12 });
      gsap.set(auraRef.current, { opacity: 0, scale: 0.8 });

      // Word elements for headline split
      const wordEls = headlineRef.current?.querySelectorAll('.hero-word');
      if (wordEls) {
        gsap.set(wordEls, { y: '110%', opacity: 0 });
      }

      // === ENTRANCE TIMELINE ===

      // Ken Burns zoom-out on background image
      tl.to(
        imageRef.current,
        { scale: 1, duration: 2.8, ease: 'power1.out' },
        0
      );

      // Overlay fade in
      tl.to(overlayRef.current, { opacity: 1, duration: 1.2 }, 0);

      // Breathing aura glow expands
      tl.to(
        auraRef.current,
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
        0.3
      );

      // Subtitle slides up
      if (subtitleRef.current) {
        tl.to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 0.8 },
          0.4
        );
      }

      // Headline: word-by-word reveal (the signature animation)
      if (wordEls) {
        tl.to(
          wordEls,
          {
            y: '0%',
            opacity: 1,
            duration: 0.8,
            stagger: 0.09,
            ease: 'power3.out',
          },
          0.6
        );
      }

      // Description fades in
      tl.to(
        descriptionRef.current,
        { opacity: 1, y: 0, duration: 0.8 },
        1.1
      );

      // CTAs spring up with overshoot
      tl.to(
        ctaRef.current,
        { opacity: 1, y: 0, duration: 0.9, ease: 'back.out(1.4)' },
        1.3
      );

      // === CONTINUOUS AMBIENT ANIMATIONS (paused when off-screen) ===

      // Breathing aura: soft scale + opacity pulse (like meditation breathing)
      const auraTween = gsap.to(auraRef.current, {
        scale: 1.1,
        opacity: 0.65,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5,
        paused: true,
      });

      // Subtle continuous background drift (living image feel)
      const driftTween = gsap.to(imageRef.current, {
        scale: 1.04,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        delay: 2.8,
        paused: true,
      });

      // Pause infinite animations when hero is off-screen
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => { auraTween.play(); driftTween.play(); },
        onLeave: () => { auraTween.pause(); driftTween.pause(); },
        onEnterBack: () => { auraTween.play(); driftTween.play(); },
        onLeaveBack: () => { auraTween.pause(); driftTween.pause(); },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[70vh] lg:min-h-screen flex items-center overflow-hidden pt-[4.5rem]"
    >
      {/* Background image container — wraps image for Ken Burns transform */}
      <div
        ref={imageRef}
        className="absolute inset-[-8%] will-change-transform"
      >
        <Image
          src={hero.backgroundImage.src}
          alt={hero.backgroundImage.alt}
          fill
          priority
          className="object-cover object-top sm:object-[center_30%]"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Gradient overlay — rose-tinted fading to cream at bottom */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.756 0.0624 9.7 / 0.10) 0%, oklch(0.270 0.0850 278.0 / 0.35) 40%, oklch(0.270 0.0850 278.0 / 0.65) 70%, oklch(0.980 0.0062 75.4 / 0.95) 100%)',
        }}
      />

      {/* Breathing aura glow — signature wellness atmosphere element */}
      <div
        ref={auraRef}
        className="absolute z-[1] pointer-events-none will-change-transform"
        aria-hidden="true"
        style={{
          top: '25%',
          left: '50%',
          width: '70vw',
          height: '70vw',
          maxWidth: '700px',
          maxHeight: '700px',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse at center, oklch(0.742 0.1202 79.1 / 0.14) 0%, oklch(0.756 0.0624 9.7 / 0.07) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Content — positioned in the lower portion */}
      <div className="relative z-[2] w-full px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,4vw,3rem)]">
        <div className="mx-auto max-w-[720px] text-center">
          {/* Subtitle */}
          {hero.subtitle && (
            <p
              ref={subtitleRef}
              className="font-body text-sm uppercase tracking-[0.08em] text-neutral-200 mb-4"
              style={{ textShadow: '0 1px 3px oklch(0 0 0 / 0.3)' }}
            >
              {hero.subtitle}
            </p>
          )}

          {/* Headline — word-by-word split for staggered reveal */}
          <h1
            ref={headlineRef}
            className="font-heading text-4xl lg:text-5xl font-semibold text-neutral-50 leading-tight mb-6"
            style={{ textShadow: '0 2px 8px oklch(0 0 0 / 0.25)' }}
          >
            {headlineWords.map((word, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden align-bottom">
                  <span className="hero-word inline-block">{word}</span>
                </span>
                {i < headlineWords.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className={cn(
              'font-body text-md text-neutral-200 leading-relaxed mb-8 max-w-[600px] mx-auto'
            )}
            style={{ textShadow: '0 1px 3px oklch(0 0 0 / 0.25)' }}
          >
            {hero.description}
          </p>

          {/* CTA buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href={hero.primaryCTA.href}>
              <Button variant="warm" size="lg">
                {hero.primaryCTA.label}
              </Button>
            </Link>
            <Link href={hero.secondaryCTA.href}>
              <Button
                variant="ghost"
                size="lg"
                className="text-neutral-100 hover:text-neutral-50"
              >
                {hero.secondaryCTA.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
