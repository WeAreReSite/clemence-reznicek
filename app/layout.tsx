import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { CookieBanner } from "@/components/CookieBanner"
import { MobileBookingBar } from "@/components/MobileBookingBar"
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { spaInfo } from "@/lib/data"
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
  metadataBase: new URL("https://www.sylviebienetre.fr"),
  title: {
    default: "Syl'Vie Bien-Etre | Réflexologie & Drainage Lymphatique à Pipriac",
    template: "%s | Syl'Vie Bien-Etre",
  },
  description:
    "Sylvie Lebordais vous accueille à Pipriac (35550) pour des soins de réflexologie plantaire, drainage lymphatique manuel, amma assis et beauté des mains. Cabinet bien-être en Bretagne.",
  keywords: [
    // Tier 1 - PRIMARY target keywords
    "drainage lymphatique Redon",
    "drainage lymphatique Pipriac",
    "drainage lymphatique Ille-et-Vilaine",
    // Tier 2 - SECONDARY target keywords
    "réflexologie plantaire Pipriac",
    "réflexologue Redon",
    "massage bien-être Pipriac",
    // Tier 3 - LONG-TAIL/GEO target keywords
    "drainage lymphatique jambes lourdes Bretagne",
    "massage drainage cellulite Redon",
    "soins bien-être Pipriac Redon",
    // Existing keywords - maintaining current coverage
    "réflexologie Pipriac",
    "bien-être Pipriac",
    "massage Pipriac",
    "réflexologie Ille-et-Vilaine",
    "drainage lymphatique Bretagne",
    "réflexologie abdominale Pipriac",
    "amma assis Pipriac",
    "prothésiste ongulaire Pipriac",
    "beauté des mains Pipriac",
    "réflexologie 35550",
    "massage bien-être Bretagne",
    "drainage lymphatique manuel Bretagne",
    "drainage lymphatique jambes lourdes",
    "Sylvie Lebordais",
    "réflexologie Redon",
    "bien-être Redon",
  ],
  authors: [{ name: "Sylvie Lebordais - Syl'Vie Bien-Etre" }],
  creator: "Syl'Vie Bien-Etre",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.sylviebienetre.fr",
    siteName: "Syl'Vie Bien-Etre",
    title: "Syl'Vie Bien-Etre | Réflexologie & Drainage Lymphatique à Pipriac",
    description:
      "Cabinet de réflexologie et bien-être à Pipriac (Bretagne). Réflexologie plantaire, drainage lymphatique manuel, amma assis et beauté des mains par Sylvie Lebordais.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syl'Vie Bien-Etre - Cabinet de Réflexologie à Pipriac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syl'Vie Bien-Etre | Réflexologie & Drainage Lymphatique à Pipriac",
    description:
      "Cabinet de réflexologie et bien-être à Pipriac (Bretagne). Réflexologie plantaire, drainage lymphatique manuel, amma assis et beauté des mains.",
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
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2D5A4A" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <SmoothScrollProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileBookingBar />
          <CookieBanner />
          <Toaster />
        </SmoothScrollProvider>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Syl'Vie Bien-Etre",
              image: "https://www.sylviebienetre.fr/og-image.jpg",
              "@id": "https://www.sylviebienetre.fr",
              url: "https://www.sylviebienetre.fr",
              telephone: "+33613648705",
              email: "sylviebienetre35@gmail.com",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1B Rue du Général de Gaulle",
                addressLocality: "Pipriac",
                addressRegion: "Bretagne",
                postalCode: "35550",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.7656,
                longitude: -1.9494,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "8",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                spaInfo.social.instagram,
                spaInfo.social.facebook,
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de Bien-Être",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Réflexologie Plantaire",
                      description: "Massage des pieds d'origine chinoise pour rééquilibrer votre corps",
                      areaServed: ["Pipriac", "Redon", "Ille-et-Vilaine"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Drainage Lymphatique Manuel",
                      description: "Massage doux pour éliminer les toxines et soulager les jambes lourdes",
                      areaServed: ["Pipriac", "Redon", "Ille-et-Vilaine"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Réflexologie Abdominale (Qi Nei Tsang)",
                      description: "Massage du ventre pour libérer les tensions du second cerveau",
                      areaServed: ["Pipriac", "Redon", "Ille-et-Vilaine"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Amma Assis",
                      description: "Massage japonais sur chaise ergonomique pour relaxation rapide",
                      areaServed: ["Pipriac", "Redon", "Ille-et-Vilaine"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Beauté des Mains - Prothésiste Ongulaire",
                      description: "Extension en gel, remplissage et soins des ongles",
                      areaServed: ["Pipriac", "Redon", "Ille-et-Vilaine"]
                    },
                  },
                ],
              },
              founder: {
                "@type": "Person",
                "@id": "https://www.sylviebienetre.fr/#sylvie-lebordais",
                name: "Sylvie Lebordais",
                jobTitle: "Praticienne en Réflexologie et Bien-Être",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Pipriac",
                  addressRegion: "Bretagne",
                  postalCode: "35550",
                  addressCountry: "FR"
                },
                {
                  "@type": "City",
                  name: "Redon",
                  addressRegion: "Bretagne",
                  addressCountry: "FR"
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Ille-et-Vilaine",
                  addressCountry: "FR"
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Bretagne",
                  addressCountry: "FR"
                }
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 47.7656,
                  longitude: -1.9494,
                },
                geoRadius: "30000",
                description: "Rayon de 30km autour de Pipriac incluant Redon et environs"
              },
              knowsAbout: [
                "drainage lymphatique manuel",
                "drainage lymphatique Vodder",
                "drainage lymphatique Leduc",
                "réflexologie plantaire",
                "réflexologie palmaire",
                "réflexologie abdominale",
                "réflexologie faciale",
                "jambes lourdes",
                "cellulite",
                "bien-être",
                "massage thérapeutique",
                "Qi Nei Tsang",
                "Amma assis",
                "détoxification"
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />

        {/* JSON-LD Structured Data - Person Schema for E-E-A-T */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.sylviebienetre.fr/#sylvie-lebordais",
              name: "Sylvie Lebordais",
              givenName: "Sylvie",
              familyName: "Lebordais",
              email: "sylviebienetre35@gmail.com",
              telephone: "+33613648705",
              jobTitle: "Praticienne en Réflexologie et Drainage Lymphatique",
              worksFor: {
                "@type": "HealthAndBeautyBusiness",
                "@id": "https://www.sylviebienetre.fr",
                name: "Syl'Vie Bien-Etre"
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "1B Rue du Général de Gaulle",
                addressLocality: "Pipriac",
                postalCode: "35550",
                addressCountry: "FR"
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Réflexologie Plantaire, Palmaire, Pédiatrique et Bol Kansu",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Centre de formation Réflexologie Bretagne",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Pleugeuneuc",
                      addressRegion: "Ille-et-Vilaine",
                      addressCountry: "FR"
                    }
                  },
                  educationalLevel: "Professional"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Drainage Lymphatique Manuel, Réflexologie Abdominale, Réflexologie Faciale et Crânienne, Amma Assis",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Zensphère",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Pacé",
                      addressRegion: "Ille-et-Vilaine",
                      addressCountry: "FR"
                    }
                  },
                  educationalLevel: "Professional"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Prothésiste Ongulaire",
                  recognizedBy: {
                    "@type": "Person",
                    name: "Anaïs Abaakil",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality: "Rennes",
                      addressRegion: "Ille-et-Vilaine",
                      addressCountry: "FR"
                    }
                  },
                  educationalLevel: "Professional"
                }
              ],
              knowsAbout: [
                "Drainage Lymphatique Manuel méthode Vodder",
                "Drainage Lymphatique Manuel méthode Leduc",
                "Réflexologie Plantaire",
                "Réflexologie Palmaire",
                "Réflexologie Pédiatrique",
                "Réflexologie Abdominale Qi Nei Tsang",
                "Réflexologie Faciale et Crânienne",
                "Amma Assis",
                "Bol Kansu",
                "Prothésie Ongulaire",
                "Médecine Traditionnelle Chinoise",
                "Thérapies manuelles bien-être"
              ],
              alumniOf: [
                {
                  "@type": "Organization",
                  name: "Centre de formation Réflexologie Bretagne",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pleugeuneuc",
                    addressCountry: "FR"
                  }
                },
                {
                  "@type": "Organization",
                  name: "Zensphère",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Pacé",
                    addressCountry: "FR"
                  }
                }
              ],
              url: "https://www.sylviebienetre.fr/a-propos",
              sameAs: [
                spaInfo.social.instagram,
                spaInfo.social.facebook
              ]
            }).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  )
}
