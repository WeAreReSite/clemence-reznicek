import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center',
    'rounded-full',
    'px-3 py-1',
    'text-xs font-medium font-body',
    'tracking-[0.04em]',
    'whitespace-nowrap',
  ],
  {
    variants: {
      variant: {
        default: 'bg-neutral-100 text-neutral-700',
        accent: 'bg-primary-100 text-primary-700',
        dark: 'bg-indigo-500 text-neutral-50',
        success: 'bg-success/10 text-success',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
