'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import { gsap, EASE_BREATHE } from '@/lib/gsap-setup';

const orbs = [
  // rose, haut-gauche
  { top: '5%', left: '5vw', w: 260, color: 'oklch(0.810 0.055 9.0 / 0.50)', colorOuter: 'oklch(0.860 0.04 8.5 / 0.20)', blur: 8 },
  // gold, droite
  { top: '18%', right: '8vw', w: 230, color: 'oklch(0.840 0.09 82.0 / 0.45)', colorOuter: 'oklch(0.892 0.0685 85.7 / 0.15)', blur: 8 },
  // indigo, bas-gauche
  { bottom: '2%', left: '12vw', w: 220, color: 'oklch(0.553 0.1236 282.7 / 0.30)', colorOuter: 'oklch(0.720 0.10 281.5 / 0.10)', blur: 10 },
  // plum, bas-droite
  { bottom: '15%', right: '6vw', w: 250, color: 'oklch(0.594 0.0957 324.7 / 0.35)', colorOuter: 'oklch(0.700 0.08 324.8 / 0.12)', blur: 10 },
  // gold large, milieu-gauche — lg only
  { top: '55%', left: '2vw', w: 300, color: 'oklch(0.840 0.09 82.0 / 0.35)', colorOuter: 'oklch(0.892 0.0685 85.7 / 0.12)', blur: 12, lgOnly: true },
  // rose, haut milieu-droite — lg only
  { top: '8%', right: '22vw', w: 200, color: 'oklch(0.756 0.0624 9.7 / 0.40)', colorOuter: 'oklch(0.860 0.04 8.5 / 0.15)', blur: 10, lgOnly: true },
];

export function VideoAmbient({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const orbEls = el.querySelectorAll<HTMLElement>('[data-orb]');

    const ctx = gsap.context(() => {
      orbEls.forEach((orb, i) => {
        const baseSpeed = 4 + Math.random() * 5;

        gsap.from(orb, {
          opacity: 0,
          scale: 0.3,
          x: (Math.random() - 0.5) * 80,
          y: (Math.random() - 0.5) * 60,
          duration: 2,
          delay: 0.2 + i * 0.25,
          ease: EASE_BREATHE,
        });

        gsap.to(orb, {
          y: `+=${80 + Math.random() * 120}`,
          duration: baseSpeed,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2,
        });

        gsap.to(orb, {
          x: `+=${60 + Math.random() * 100}`,
          duration: baseSpeed * 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 3,
        });

        gsap.to(orb, {
          scale: 1.05 + Math.random() * 0.05,
          duration: baseSpeed * 1.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Orbs — positioned absolute to the Section parent (which is relative w-full) */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          data-orb
          className={`absolute pointer-events-none ${orb.lgOnly ? 'hidden lg:block' : 'hidden sm:block'}`}
          aria-hidden="true"
          style={{
            top: orb.top,
            bottom: orb.bottom,
            left: orb.left,
            right: orb.right,
            width: `${orb.w}px`,
            height: `${orb.w}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, ${orb.colorOuter} 50%, transparent 75%)`,
            filter: `blur(${orb.blur}px)`,
          }}
        />
      ))}

      {/* Video content — isolated from orb transforms */}
      <div className="relative z-[1]" style={{ transform: 'translateZ(0)' }}>
        {children}
      </div>
    </div>
  );
}
