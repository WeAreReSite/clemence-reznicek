'use client';

import { useId, useCallback } from 'react';
import Image from 'next/image';
import { CaretDownIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { Badge, buttonVariants } from '@/components/ui';
import type { ImageData } from '@/types/content';

interface ServiceMenuItemProps {
  name: string;
  description: string;
  price: string;
  duration: string;
  isOpen: boolean;
  onToggle: () => void;
  ctaHref?: string;
  ctaLabel?: string;
  ctaExternal?: boolean;
  image?: ImageData;
}

export function ServiceMenuItem({
  name,
  description,
  price,
  duration,
  isOpen,
  onToggle,
  ctaHref = 'tel:+33632185259',
  ctaLabel = 'Prendre rendez-vous',
  ctaExternal = false,
  image,
}: ServiceMenuItemProps) {
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle]
  );

  return (
    <div data-gsap>
      {/* Trigger row */}
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className={cn(
          'group flex w-full items-start gap-3 py-4 text-left min-h-[3rem]',
          'cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2 rounded-sm'
        )}
      >
        {/* Name + dotted leader + price/duration */}
        <span className="flex flex-1 items-center gap-2 md:gap-3 min-w-0 flex-wrap md:flex-nowrap">
          <span className="font-heading text-base md:text-lg font-semibold text-indigo-500">
            {name}
          </span>

          {/* Dotted leader — desktop only */}
          <span
            className="hidden md:block flex-1 border-b border-dotted border-neutral-300 min-w-[2rem]"
            aria-hidden="true"
          />

          {/* Price + duration row */}
          <span className="flex items-center gap-2 md:gap-3 flex-wrap">
            <span className="font-body text-sm md:text-base font-semibold text-neutral-800">
              {price}
            </span>
            <Badge variant="default">{duration}</Badge>
          </span>
        </span>

        {/* Caret — aligns with first line of text */}
        <span
          className={cn(
            'shrink-0 mt-1 transition-transform duration-[350ms] ease-[var(--ease-default)]',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        >
          <CaretDownIcon
            size={18}
            weight="light"
            className="text-neutral-400 group-hover:text-indigo-500 transition-colors duration-200"
          />
        </span>
      </button>

      {/* Expandable panel */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-[grid-template-rows] duration-[350ms] ease-[var(--ease-default)]',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              'pb-5 pl-0 md:pl-1',
              'transition-opacity duration-[200ms] ease-[var(--ease-default)]',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
          >
            <div className={cn(image ? 'flex flex-col sm:flex-row gap-5' : '')}>
              {image && (
                <div className="shrink-0 w-full sm:w-[240px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 640px) 100vw, 240px"
                  />
                </div>
              )}
              <div className="flex-1">
                <p className="font-body text-base text-neutral-600 leading-relaxed max-w-[600px] mb-4">
                  {description}
                </p>
                <a
                  href={ctaHref}
                  className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}
                  {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {ctaLabel}
                  <span className="shrink-0" aria-hidden="true">
                    <ArrowRightIcon size={16} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
