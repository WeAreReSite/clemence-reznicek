'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { StarIcon } from '@phosphor-icons/react';
import { testimonialSection } from '../../../content/testimonials';
import { Card } from '@/components/ui';
import { cn } from '@/lib/utils';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          size={16}
          weight={i < rating ? 'fill' : 'regular'}
          className={i < rating ? 'text-secondary-400' : 'text-neutral-400'}
        />
      ))}
    </div>
  );
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const testimonials = testimonialSection.featured;

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.offsetWidth;

    // Calculate which item is most visible
    const newIndex = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(newIndex, testimonials.length - 1));
  }, [testimonials.length]);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.offsetWidth;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = Math.max(0, activeIndex - 1);
        scrollToIndex(prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = Math.min(testimonials.length - 1, activeIndex + 1);
        scrollToIndex(next);
      }
    },
    [activeIndex, testimonials.length, scrollToIndex]
  );

  // Attach scroll listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      role="region"
      aria-label="Témoignages clients"
      className="lg:hidden"
      onKeyDown={handleKeyDown}
    >
      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className={cn(
          'flex gap-4 overflow-x-auto',
          'snap-x snap-mandatory',
          'px-[clamp(1.25rem,4vw,3rem)]',
          '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden'
        )}
        tabIndex={0}
        aria-live="polite"
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={cn(
              'shrink-0 w-[calc(100%-2rem)] snap-center',
              '!bg-neutral-50/[0.06] !border-neutral-50/10 backdrop-blur-sm',
              'flex flex-col'
            )}
            aria-label={`Témoignage ${index + 1} sur ${testimonials.length}`}
          >
            <StarRating rating={testimonial.rating} />

            <blockquote className="font-body text-sm text-neutral-200 leading-relaxed italic mt-4 mb-4 flex-1">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            <footer className="flex flex-col gap-1 mt-auto">
              <cite className="font-heading text-base font-semibold text-neutral-50 not-italic">
                {testimonial.name}
              </cite>
              {testimonial.service && (
                <span className="font-body text-xs text-neutral-300">
                  {testimonial.service}
                </span>
              )}
            </footer>
          </Card>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Aller au témoignage ${index + 1}`}
            className={cn(
              'flex items-center justify-center w-7 h-7',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 rounded-full',
            )}
          >
            <span
              className={cn(
                'block rounded-full transition-all duration-[200ms] ease-[var(--ease-default)]',
                index === activeIndex
                  ? 'w-3 h-3 bg-secondary-400'
                  : 'w-2 h-2 bg-secondary-400/40'
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
