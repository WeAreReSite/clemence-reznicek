import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-body font-medium',
    'tracking-[0.04em]',
    'rounded-[var(--radius-DEFAULT)]',
    'border border-transparent',
    'transition-all duration-[200ms] ease-[var(--ease-default)]',
    'select-none cursor-pointer',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
    'active:scale-[0.98] active:shadow-[var(--shadow-1)]',
    'disabled:bg-neutral-300 disabled:text-neutral-500 disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-none disabled:translate-y-0',
  ],
  {
    variants: {
      variant: {
        warm: [
          'bg-secondary-400 text-neutral-900 shadow-[var(--shadow-1)]',
          'hover:bg-secondary-500 hover:-translate-y-px hover:shadow-[var(--shadow-2)]',
        ],
        primary: [
          'bg-indigo-500 text-neutral-50 shadow-[var(--shadow-1)]',
          'hover:bg-indigo-600 hover:-translate-y-px hover:shadow-[var(--shadow-2)]',
        ],
        secondary: [
          'bg-transparent text-indigo-500 border-indigo-500',
          'hover:bg-indigo-500/[0.06] hover:border-indigo-600',
        ],
        ghost: [
          'bg-transparent text-indigo-500 border-transparent',
          'hover:underline',
        ],
        warmOnDark: [
          'bg-secondary-400 text-neutral-900',
          'hover:bg-secondary-500 hover:-translate-y-px hover:shadow-[var(--shadow-2)]',
        ],
      },
      size: {
        sm: 'text-sm px-4 py-2 min-h-[2.25rem]',
        md: 'text-base px-[1.75rem] py-[0.875rem] min-h-[2.75rem]',
        lg: 'text-md px-[2.25rem] py-4 min-h-[3.25rem]',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'warm',
      size: 'md',
      fullWidth: false,
    },
  }
);
