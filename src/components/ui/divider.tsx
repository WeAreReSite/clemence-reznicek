import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const dividerVariants = cva('', {
  variants: {
    variant: {
      plain: 'block w-full h-px bg-neutral-200 my-8',
      decorative: 'flex items-center justify-center my-8',
    },
  },
  defaultVariants: {
    variant: 'plain',
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof dividerVariants> {
  /** Accessible label; defaults to hidden for decorative dividers */
  label?: string;
}

function Divider({ className, variant = 'plain', label, ...props }: DividerProps) {
  if (variant === 'decorative') {
    return (
      <div
        role="separator"
        aria-label={label}
        aria-hidden={label ? undefined : 'true'}
        className={cn(dividerVariants({ variant }), className)}
        {...props}
      >
        {/* Left line */}
        <span className="block flex-1 max-w-[84px] h-px bg-secondary-400/40" />

        {/* Diamond motif */}
        <span className="mx-3 flex items-center justify-center" aria-hidden="true">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="5"
              y="0.5"
              width="6.36"
              height="6.36"
              rx="0.5"
              transform="rotate(45 5 0.5)"
              fill="oklch(0.742 0.1202 79.1 / 0.40)"
            />
          </svg>
        </span>

        {/* Right line */}
        <span className="block flex-1 max-w-[84px] h-px bg-secondary-400/40" />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      className={cn(dividerVariants({ variant }), 'border-none', className)}
      {...props}
    />
  );
}

export { Divider, dividerVariants };
