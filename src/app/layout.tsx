import type { Metadata } from 'next';
import { headingFont, bodyFont } from '@/lib/fonts';
import { StickyHeader } from '@/components/sections';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clemence-reznicek.fr'),
  title: {
    default: 'Clemence Reznicek — Bien-etre holistique a Jonzac',
    template: '%s | Clemence Reznicek',
  },
  description:
    'Accompagnement en bien-etre holistique a Jonzac. Massages Shambala et Solar, soins energetiques LaHoChi, coaching emotionnel et regulation somatique. 58 avis 5/5 sur Google.',
  keywords: [
    'bien-etre Jonzac',
    'massage Jonzac',
    'soin energetique Charente-Maritime',
    'coaching emotionnel',
    'LaHoChi',
    'Clemence Reznicek',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://clemence-reznicek.fr',
    siteName: 'Clemence Reznicek',
    title: 'Clemence Reznicek — Bien-etre holistique a Jonzac',
    description:
      'Accompagnement en bien-etre holistique a Jonzac. Massages, soins energetiques, coaching emotionnel.',
    images: [
      {
        url: '/images/work/DSC02941.jpg',
        width: 1920,
        height: 1080,
        alt: 'Clemence Reznicek — Bien-etre holistique a Jonzac',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clemence Reznicek — Bien-etre holistique a Jonzac',
    description:
      'Accompagnement en bien-etre holistique a Jonzac. Massages, soins energetiques, coaching emotionnel.',
    images: ['/images/work/DSC02941.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="font-body text-neutral-800 bg-bg-cream antialiased">
        <StickyHeader />
        <main id="main-content">{children}</main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
