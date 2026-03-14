import { Cormorant_Garamond, Raleway } from 'next/font/google';

export const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const bodyFont = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
  display: 'swap',
});
