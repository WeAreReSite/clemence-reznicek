import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ----------------------------------------------------------------
   Section background variants
---------------------------------------------------------------- */
const sectionVariants = cva(
  // Fluid section padding using inline style for clamp — see below
  'relative w-full',
  {
    variants: {
      background: {
        cream: 'bg-bg-cream text-neutral-800',
        roseTint: 'bg-bg-rose-tint text-neutral-800',
        indigoDeep: 'bg-bg-indigo-deep text-neutral-50',
        warmWhite: 'bg-bg-warm-white text-neutral-800',
      },
    },
    defaultVariants: {
      background: 'warmWhite',
    },
  }
);

/* ----------------------------------------------------------------
   Container width variants
---------------------------------------------------------------- */
const containerVariants = cva(
  'mx-auto w-full px-[clamp(1.25rem,4vw,3rem)]',
  {
    variants: {
      container: {
        content: 'max-w-[1200px]',
        narrow: 'max-w-[720px]',
        wide: 'max-w-[1400px]',
        full: 'max-w-none',
      },
    },
    defaultVariants: {
      container: 'content',
    },
  }
);

/* ----------------------------------------------------------------
   Geometric background accent — subtle radial/diamond pattern
   Applied to roseTint sections per design spec
---------------------------------------------------------------- */
function GeometricAccent() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="absolute top-0 right-0 w-[400px] h-[400px] opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="150" stroke="oklch(0.742 0.1202 79.1)" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="100" stroke="oklch(0.742 0.1202 79.1)" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="50" stroke="oklch(0.742 0.1202 79.1)" strokeWidth="0.5" />
        <line x1="50" y1="200" x2="350" y2="200" stroke="oklch(0.742 0.1202 79.1)" strokeWidth="0.5" />
        <line x1="200" y1="50" x2="200" y2="350" stroke="oklch(0.742 0.1202 79.1)" strokeWidth="0.5" />
        <rect x="150" y="150" width="100" height="100" rx="2" transform="rotate(45 200 200)" stroke="oklch(0.742 0.1202 79.1)" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants>,
    VariantProps<typeof containerVariants> {
  /** HTML id for anchor navigation */
  id?: string;
  /** Override the outer element tag (defaults to <section>) */
  as?: React.ElementType;
  /** Show subtle geometric background accent */
  geometricAccent?: boolean;
}

function Section({
  className,
  background,
  container,
  id,
  as: Comp = 'section',
  geometricAccent = false,
  children,
  ...props
}: SectionProps) {
  return (
    <Comp
      id={id}
      style={
        {
          paddingTop: 'clamp(3rem, 8vw, 7rem)',
          paddingBottom: 'clamp(3rem, 8vw, 7rem)',
        } as React.CSSProperties
      }
      className={cn(sectionVariants({ background }), className)}
      {...props}
    >
      {geometricAccent && <GeometricAccent />}
      <div className={cn('relative z-[1]', containerVariants({ container }))}>{children}</div>
    </Comp>
  );
}

export { Section, sectionVariants, containerVariants };
