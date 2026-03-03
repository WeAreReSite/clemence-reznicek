import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ----------------------------------------------------------------
   Section header wrapper
---------------------------------------------------------------- */
const sectionHeaderVariants = cva(
  'mb-8 md:mb-12',
  {
    variants: {
      align: {
        center: 'text-center mx-auto',
        left: 'text-left',
      },
    },
    defaultVariants: {
      align: 'center',
    },
  }
);

/* ----------------------------------------------------------------
   Decorative divider (geometric lines + diamond)
---------------------------------------------------------------- */
function DecorativeDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="flex items-center justify-center gap-3 mt-3 mb-4"
      aria-hidden="true"
    >
      <span
        className={cn(
          'block h-px w-12',
          dark ? 'bg-secondary-400/50' : 'bg-secondary-400/40'
        )}
      />
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="0.343"
          width="5.2"
          height="5.2"
          rx="0.4"
          transform="rotate(45 4 0.343)"
          fill={dark ? 'oklch(0.742 0.1202 79.1 / 0.60)' : 'oklch(0.742 0.1202 79.1 / 0.40)'}
        />
      </svg>
      <span
        className={cn(
          'block h-px w-12',
          dark ? 'bg-secondary-400/50' : 'bg-secondary-400/40'
        )}
      />
    </div>
  );
}

/* ----------------------------------------------------------------
   SectionHeader component
---------------------------------------------------------------- */
export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionHeaderVariants> {
  title: string;
  subtitle?: string;
  /** Show decorative geometric divider below title */
  decorative?: boolean;
  /** Light text for dark backgrounds */
  dark?: boolean;
}

function SectionHeader({
  title,
  subtitle,
  decorative = false,
  dark = false,
  align = 'center',
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(sectionHeaderVariants({ align }), className)}
      {...props}
    >
      <h2
        className={cn(
          'font-heading text-2xl font-semibold tracking-[var(--tracking-headings)] leading-tight',
          dark ? 'text-neutral-50' : 'text-indigo-500'
        )}
      >
        {title}
      </h2>

      {decorative && <DecorativeDivider dark={dark} />}

      {subtitle && (
        <p
          className={cn(
            'font-body text-md font-light leading-relaxed',
            decorative ? '' : 'mt-3',
            dark ? 'text-neutral-200' : 'text-neutral-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionHeader, sectionHeaderVariants };
