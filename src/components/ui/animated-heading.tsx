'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap-setup';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function AnimatedHeading({ text, className, as: Tag = 'h2' }: AnimatedHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Split text into characters manually (no SplitText plugin needed)
    const originalText = el.textContent || '';
    el.innerHTML = '';

    // Wrap each word's characters in spans, keeping whitespace as-is
    const words = originalText.split(/(\s+)/);
    words.forEach((segment) => {
      if (/^\s+$/.test(segment)) {
        el.appendChild(document.createTextNode(segment));
        return;
      }
      const wordSpan = document.createElement('span');
      wordSpan.style.display = 'inline-block';
      wordSpan.style.whiteSpace = 'nowrap';

      segment.split('').forEach((char) => {
        const charSpan = document.createElement('span');
        charSpan.textContent = char;
        charSpan.style.display = 'inline-block';
        charSpan.style.transformOrigin = 'center center -80px';
        wordSpan.appendChild(charSpan);
      });

      el.appendChild(wordSpan);
    });

    const chars = el.querySelectorAll('span > span');

    const ctx = gsap.context(() => {
      gsap.set(chars, { rotateX: -90, opacity: 0 });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(chars, {
            rotateX: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.02,
            ease: 'expo.out',
          });
        },
      });
    });

    return () => ctx.revert();
  }, [text]);

  return (
    <Tag ref={headingRef} className={cn('perspective-[600px]', className)}>
      {text}
    </Tag>
  );
}
