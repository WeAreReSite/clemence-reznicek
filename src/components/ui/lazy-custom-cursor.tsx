'use client';

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
  () => import('./custom-cursor').then((mod) => ({ default: mod.CustomCursor })),
  { ssr: false }
);

export function LazyCustomCursor() {
  return <CustomCursor />;
}
