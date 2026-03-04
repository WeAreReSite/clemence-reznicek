'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ----------------------------------------------------------------
   Brand Signature Easings
---------------------------------------------------------------- */

/** Slight initial resistance then smooth flow — like pushing open a spa door */
export const EASE_WELLNESS_FLOW = 'power3.out';

/** Very slow-in, slow-out — like floating in water, for ambient loops */
export const EASE_BREATHE = 'sine.inOut';

/** Overshoot then cushioned settle — like pressing into a velvet cushion */
export const EASE_SETTLE = 'back.out(1.4)';

/* ----------------------------------------------------------------
   useGsap — scoped GSAP context with cleanup + reduced-motion
---------------------------------------------------------------- */
export function useGsap(callback: (ctx: gsap.Context) => void, deps: React.DependencyList = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Make everything visible immediately — no motion
        gsap.set(el.querySelectorAll('[data-gsap]'), { clearProps: 'all' });
        return;
      }
      callback(ctx!);
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

export { gsap, ScrollTrigger };
