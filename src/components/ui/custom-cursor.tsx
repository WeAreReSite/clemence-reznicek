'use client';

import { useEffect, useRef } from 'react';
import { gsap, EASE_SETTLE } from '@/lib/gsap-setup';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isDesktop = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Only show on desktop with fine pointer
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mq.matches) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    isDesktop.current = true;
    cursor.style.display = 'block';

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });

    function onMouseMove(e: MouseEvent) {
      xTo(e.clientX);
      yTo(e.clientY);
    }

    function onMouseEnterMagnetic(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      gsap.to(cursor, { scale: 3, opacity: 0.6, duration: 0.3 });

      target.addEventListener('mousemove', onMagneticMove);
    }

    function onMagneticMove(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) * 0.35;
      const dy = (e.clientY - centerY) * 0.35;

      gsap.to(target, {
        x: dx,
        y: dy,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    function onMouseLeaveMagnetic(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      gsap.to(cursor, { scale: 1, opacity: 0.8, duration: 0.3 });
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: EASE_SETTLE,
      });
      target.removeEventListener('mousemove', onMagneticMove);
    }

    function onMouseEnterLink() {
      gsap.to(cursor, { scale: 0.5, opacity: 1, duration: 0.2 });
    }

    function onMouseLeaveLink() {
      gsap.to(cursor, { scale: 1, opacity: 0.8, duration: 0.2 });
    }

    window.addEventListener('mousemove', onMouseMove);

    // Bind to magnetic buttons
    const magnetics = document.querySelectorAll<HTMLElement>('[data-magnetic]');
    magnetics.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterMagnetic);
      el.addEventListener('mouseleave', onMouseLeaveMagnetic);
    });

    // Bind to links (non-magnetic)
    const links = document.querySelectorAll<HTMLElement>('a:not([data-magnetic])');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      magnetics.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterMagnetic);
        el.removeEventListener('mouseleave', onMouseLeaveMagnetic);
        el.removeEventListener('mousemove', onMagneticMove);
      });
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden"
      style={{
        width: 12,
        height: 12,
        marginLeft: -6,
        marginTop: -6,
        borderRadius: '50%',
        background: 'oklch(0.742 0.1202 79.1 / 0.7)',
        filter: 'blur(1px)',
        opacity: 0.8,
        willChange: 'transform',
      }}
      aria-hidden="true"
    />
  );
}
