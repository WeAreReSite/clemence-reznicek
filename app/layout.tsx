import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { CookieBanner } from "@/components/CookieBanner"
import { MobileBookingBar } from "@/components/MobileBookingBar"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lether-spa.fr"),
  title: {
    default: "L'Éther Spa | Massages & Soins Bien-être à Paris",
    template: "%s | L'Éther Spa",
  },
  description:
    "Découvrez L'Éther, votre sanctuaire de bien-être à Paris. Massages signature, Japanese Head Spa, soins du visage et rituels détox par des praticiens certifiés FFMBE.",
  keywords: [
    "spa paris",
    "massage bien-être",
    "massage relaxant paris",
    "japanese head spa",
    "drainage lymphatique",
    "soins du visage paris",
    "massage deep tissue",
    "rituel détox",
    "massage duo paris",
    "bon cadeau spa",
  ],
  authors: [{ name: "L'Éther Spa" }],
  creator: "L'Éther Spa",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lether-spa.fr",
    siteName: "L'Éther Spa",
    title: "L'Éther Spa | Massages & Soins Bien-être à Paris",
    description:
      "Découvrez L'Éther, votre sanctuaire de bien-être à Paris. Massages signature, Japanese Head Spa, soins du visage et rituels détox.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "L'Éther Spa - Sanctuaire de Bien-être",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'Éther Spa | Massages & Soins Bien-être à Paris",
    description:
      "Découvrez L'Éther, votre sanctuaire de bien-être à Paris. Massages signature, Japanese Head Spa, soins du visage et rituels détox.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2D5A4A" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileBookingBar />
        <CookieBanner />
        <Toaster />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DaySpa",
              name: "L'Éther Spa",
              image: "https://lether-spa.fr/og-image.jpg",
              "@id": "https://lether-spa.fr",
              url: "https://lether-spa.fr",
              telephone: "+33 1 42 00 00 00",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Rue de la Paix",
                addressLocality: "Paris",
                postalCode: "75002",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.8698,
                longitude: 2.3311,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "11:00",
                  closes: "19:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "250",
              },
              sameAs: [
                "https://instagram.com/lether_spa",
                "https://facebook.com/letherspa",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
