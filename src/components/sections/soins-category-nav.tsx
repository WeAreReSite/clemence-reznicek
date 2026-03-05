'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface CategoryTab {
  id: string;
  label: string;
}

interface SoinsCategoryNavProps {
  categories: CategoryTab[];
}

export function SoinsCategoryNav({ categories }: SoinsCategoryNavProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '');
  const [headerVisible, setHeaderVisible] = useState(true);
  const isScrollingRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Track header visibility (mirrors sticky-header logic for mobile)
  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      if (y > lastScrollYRef.current && y > 100) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollYRef.current = y;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const sections = categories
      .map((cat) => document.getElementById(cat.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -50% 0px',
        threshold: [0, 0.3],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  // Auto-scroll active pill into view (safe — only scrolls the pills container)
  useEffect(() => {
    const pill = pillRefs.current.get(activeId);
    const container = navRef.current;
    if (!pill || !container) return;

    const pillLeft = pill.offsetLeft;
    const pillWidth = pill.offsetWidth;
    const containerWidth = container.offsetWidth;
    const targetScroll = pillLeft - containerWidth / 2 + pillWidth / 2;

    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
  }, [activeId]);

  const handleClick = useCallback(
    (id: string) => {
      setActiveId(id);

      // Suppress observer during programmatic scroll
      isScrollingRef.current = true;
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);

      const target = document.getElementById(id);
      if (!target) return;

      // Offset: header (3.5rem = 56px) + nav height (~52px) + gap (16px)
      const offset = 56 + 52 + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    },
    []
  );

  return (
    <nav
      className={cn(
        'sticky z-40 bg-bg-warm-white/95 backdrop-blur-[8px] border-b border-neutral-200/60',
        'transition-[top] duration-[350ms] ease-[var(--ease-default)]',
        // On desktop (lg+): header never hides, always offset below it
        'lg:top-[3.5rem]',
        // On mobile: follow the header — slide to top when header hides
        headerVisible ? 'top-[3.5rem]' : 'top-0'
      )}
      aria-label="Catégories de soins"
    >
      <div
        ref={navRef}
        role="tablist"
        aria-label="Navigation par catégorie"
        className={cn(
          'mx-auto max-w-[1200px] px-[clamp(1.25rem,4vw,3rem)]',
          'flex flex-wrap justify-center gap-2 py-3'
        )}
      >
        {categories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              ref={(el) => {
                if (el) pillRefs.current.set(cat.id, el);
              }}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={cat.id}
              onClick={() => handleClick(cat.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-body font-medium text-center',
                'transition-all duration-200 cursor-pointer',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                isActive
                  ? 'bg-indigo-500 text-neutral-50 shadow-[var(--shadow-1)]'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
