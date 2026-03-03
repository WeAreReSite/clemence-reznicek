import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/* ----------------------------------------------------------------
   Card root variants
---------------------------------------------------------------- */
const cardVariants = cva(
  [
    'bg-bg-warm-white',
    'border border-neutral-100',
    'rounded-lg',
    'shadow-[var(--shadow-1)]',
    'p-6',
    'transition-all duration-[350ms] ease-[var(--ease-default)]',
  ],
  {
    variants: {
      interactive: {
        true: [
          'cursor-pointer',
          'hover:shadow-[var(--shadow-2)]',
          'hover:-translate-y-0.5 hover:scale-[1.01]',
          'hover:border-secondary-400/30',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
        ],
        false: [],
      },
    },
    defaultVariants: {
      interactive: false,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ interactive }), className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

/* ----------------------------------------------------------------
   CardHeader
---------------------------------------------------------------- */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-1.5 mb-4', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

/* ----------------------------------------------------------------
   CardTitle
---------------------------------------------------------------- */
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'font-heading text-xl font-semibold text-indigo-500 leading-tight tracking-[var(--tracking-headings)]',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

/* ----------------------------------------------------------------
   CardDescription
---------------------------------------------------------------- */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('font-body text-sm text-neutral-500 leading-relaxed', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

/* ----------------------------------------------------------------
   CardContent
---------------------------------------------------------------- */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('font-body text-neutral-700', className)} {...props} />
));
CardContent.displayName = 'CardContent';

/* ----------------------------------------------------------------
   CardFooter
---------------------------------------------------------------- */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};
