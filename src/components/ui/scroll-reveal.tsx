'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before animation starts after becoming visible */
  delay?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.15,
  as: Comp = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Comp
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[700ms] ease-[var(--ease-breath)]',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6',
        className
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}
