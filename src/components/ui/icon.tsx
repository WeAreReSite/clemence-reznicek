import * as React from 'react';
import type { Icon as PhosphorIconType, IconWeight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

/* ----------------------------------------------------------------
   Size map
---------------------------------------------------------------- */
const sizeMap = {
  xs: 14,   // 0.875rem
  sm: 16,   // 1rem
  md: 20,   // 1.25rem
  lg: 24,   // 1.5rem
  xl: 32,   // 2rem
  '2xl': 40, // 2.5rem
  '3xl': 48, // 3rem
} as const;

export type IconSize = keyof typeof sizeMap;

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The Phosphor icon component */
  icon: PhosphorIconType;
  /** Icon weight variant */
  weight?: IconWeight;
  /** Icon size token */
  size?: IconSize;
  /** Override raw pixel size (bypasses size token) */
  pixelSize?: number;
  /** Whether to hide from assistive technology (true for decorative icons) */
  decorative?: boolean;
  /** Accessible label when icon is not decorative */
  label?: string;
}

function Icon({
  icon: PhosphorIcon,
  weight = 'light',
  size = 'md',
  pixelSize,
  decorative = true,
  label,
  className,
  ...props
}: IconProps) {
  const resolvedSize = pixelSize ?? sizeMap[size];

  return (
    <span
      className={cn('inline-flex items-center justify-center shrink-0', className)}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? 'true' : undefined}
      aria-label={!decorative ? label : undefined}
      {...props}
    >
      <PhosphorIcon
        size={resolvedSize}
        weight={weight}
        aria-hidden="true"
      />
    </span>
  );
}

export { Icon, sizeMap };
