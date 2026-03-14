import type { Metadata } from 'next';
import { headingFont, bodyFont } from '@/lib/fonts';
import { StickyHeader } from '@/components/sections';
import { Footer } from '@/components/layout/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { getLocalBusinessSchema, getWebSiteSchema } from '@/lib/schema';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clemencereznicek.com'),
  title: {
    default: 'Clémence Reznicek — Bien-être holistique à Jonzac',
    template: '%s | Clémence Reznicek',
  },
  description:
    'Clémence Reznicek, praticienne en bien-être holistique à Jonzac. Massages, soins énergétiques LaHoChi, coaching émotionnel et régulation somatique.',
  keywords: [
    'bien-être Jonzac',
    'massage Jonzac',
    'soin énergétique Jonzac',
    'coaching émotionnel',
    'LaHoChi',
    'Clémence Reznicek',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://clemencereznicek.com',
    siteName: 'Clémence Reznicek',
    title: 'Clémence Reznicek — Bien-être holistique à Jonzac',
    description:
      'Accompagnement en bien-être holistique à Jonzac. Massages, soins énergétiques, coaching émotionnel.',
    images: [
      {
        url: '/images/team/DSC02823.jpg',
        width: 1200,
        height: 1800,
        alt: 'Clémence Reznicek — Bien-être holistique à Jonzac',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clémence Reznicek — Bien-être holistique à Jonzac',
    description:
      'Accompagnement en bien-être holistique à Jonzac. Massages, soins énergétiques, coaching émotionnel.',
    images: ['/images/work/DSC02941.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = JSON.stringify(getLocalBusinessSchema());
const webSiteSchema = JSON.stringify(getWebSiteSchema());

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessSchema }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: webSiteSchema }}
        />
      </head>
      <body className="font-body text-neutral-800 bg-bg-cream antialiased">
        <StickyHeader />
        <main id="main-content">{children}</main>
        <Footer />
        <CustomCursor />
        <Analytics />
      </body>
    </html>
  );
}
