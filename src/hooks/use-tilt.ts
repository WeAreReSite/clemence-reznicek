'use client';

import { useEffect, useCallback } from 'react';
import { gsap } from '@/lib/gsap-setup';

const MAX_TILT = 8; // degrees

export function useTiltEffect(containerRef: React.RefObject<HTMLDivElement | null>) {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const card = (e.currentTarget as HTMLElement);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -MAX_TILT;
    const rotateY = ((x - centerX) / centerX) * MAX_TILT;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 800,
    });

    // Radial light gradient
    const light = card.querySelector<HTMLElement>('[data-tilt-light]');
    if (light) {
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      light.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, oklch(0.742 0.1202 79.1 / 0.12), transparent 60%)`;
      light.style.opacity = '1';
    }
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const card = (e.currentTarget as HTMLElement);
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });

    const light = card.querySelector<HTMLElement>('[data-tilt-light]');
    if (light) {
      light.style.opacity = '0';
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (prefersReducedMotion || !isDesktop) return;

    const cards = container.querySelectorAll<HTMLElement>('[data-tilt]');

    cards.forEach((card) => {
      card.style.transformStyle = 'preserve-3d';
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [containerRef, handleMouseMove, handleMouseLeave]);
}
