import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"
import { CookieBanner } from "@/components/CookieBanner"
import { MobileBookingBar } from "@/components/MobileBookingBar"
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { spaInfo, testimonials } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
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
  metadataBase: new URL(getCanonicalUrl('')),
  title: {
    default: "Clémence Reznicek | Thérapeute Holistique Jonzac",
    template: "%s | Clémence Reznicek",
  },
  keywords: [
    "thérapeute holistique Jonzac",
    "soins énergétiques Jonzac",
    "constellations familiales Jonzac",
    "constellations familiales Charente-Maritime",
    "coaching holistique Jonzac",
    "massage 5 continents Jonzac",
    "décodage biologique Jonzac",
    "médium Jonzac",
    "LaHoChi Jonzac",
    "magnétisme Jonzac",
    "thérapeute holistique Charente-Maritime",
    "bien-être Jonzac",
    "soins énergétiques Charente-Maritime",
    "Clémence Reznicek",
    "formation quantique",
    "massage bien-être Jonzac",
    "constellation familiale Nouvelle-Aquitaine",
  ],
  description: "Cabinet de thérapie holistique à Jonzac (17500). Clémence Reznicek, thérapeute holistique et médium, vous propose soins énergétiques, constellations familiales, coaching et massages en Charente-Maritime.",
  authors: [{ name: "Clémence Reznicek - Formation Quantique" }],
  creator: "Clémence Reznicek",
  publisher: "Clémence Reznicek",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: getCanonicalUrl(''),
    siteName: "Clémence Reznicek - Thérapeute Holistique",
    title: "Clémence Reznicek | Thérapeute Holistique & Médium à Jonzac",
    description:
      "Cabinet de thérapie holistique à Jonzac (17500). Soins énergétiques, constellations familiales, coaching holistique et massages bien-être par Clémence Reznicek en Charente-Maritime.",
    images: [
      {
        url: getCanonicalUrl('/images/logo.png'),
        width: 1200,
        height: 630,
        alt: "Clémence Reznicek - Thérapeute Holistique & Médium à Jonzac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clémence Reznicek | Thérapeute Holistique & Médium à Jonzac",
    description:
      "Cabinet de thérapie holistique à Jonzac (17500). Soins énergétiques, constellations familiales, coaching holistique et massages bien-être en Charente-Maritime.",
    images: [getCanonicalUrl('/images/logo.png')],
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
    google: "googleae408526a8d46ed6",
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
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#5E4B8B" />
        {/* Language declaration for French site */}
        <link rel="alternate" hrefLang="fr-FR" href={getCanonicalUrl('')} />
        {/* Preload hero LCP image for better performance */}
        <link rel="preload" as="image" href="/images/hero-bg-image.png" fetchPriority="high" />
        {/* Geo meta tags for local SEO */}
        <meta name="geo.region" content="FR-17" />
        <meta name="geo.placename" content="Jonzac, Charente-Maritime" />
        <meta name="geo.position" content="45.4464;-0.4353" />
        <meta name="ICBM" content="45.4464, -0.4353" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-clip">
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
              name: "Clémence Reznicek",
              "@id": getCanonicalUrl(''),
              url: getCanonicalUrl(''),
              telephone: "+33632185259",
              email: "formationquantique111@gmail.com",
              priceRange: "€€",
              image: getCanonicalUrl('/images/logo.png'),
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 avenue Chanzy",
                addressLocality: "Jonzac",
                addressRegion: "Nouvelle-Aquitaine",
                postalCode: "17500",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 45.4464,
                longitude: -0.4353,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:30",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: testimonials.length.toString(),
                bestRating: "5",
              },
              review: testimonials.map((t) => ({
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: t.name,
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: t.rating.toString(),
                  bestRating: "5",
                },
                reviewBody: t.text,
                datePublished: t.date.match(/^\d{4}-\d{2}$/) ? `${t.date}-01` : t.date,
              })),
              sameAs: [
                spaInfo.social.instagram,
                spaInfo.social.facebook,
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de Thérapie Holistique",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Soins Énergétiques",
                      description: "LaHoChi, magnétisme et soins énergétiques pour rééquilibrer vos énergies",
                      areaServed: ["Jonzac", "Saintes", "Charente-Maritime"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Constellations Familiales",
                      description: "Constellations familiales et systémiques pour libérer les mémoires transgénérationnelles",
                      areaServed: ["Jonzac", "Saintes", "Charente-Maritime"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Coaching & Accompagnement",
                      description: "Coaching holistique et accompagnement personnalisé vers votre transformation intérieure",
                      areaServed: ["Jonzac", "Saintes", "Charente-Maritime"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Massages Bien-Être",
                      description: "Massage des 5 continents et Aromatouch pour une détente profonde du corps et de l'esprit",
                      areaServed: ["Jonzac", "Saintes", "Charente-Maritime"]
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Décodage & Exploration Intérieure",
                      description: "Décodage biologique et echoquantique pour comprendre les messages de votre corps",
                      areaServed: ["Jonzac", "Saintes", "Charente-Maritime"]
                    },
                  },
                ],
              },
              founder: {
                "@type": "Person",
                "@id": getCanonicalUrl('/#clemence-reznicek'),
                name: "Clémence Reznicek",
                jobTitle: "Thérapeute Holistique & Médium",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Jonzac",
                  addressRegion: "Nouvelle-Aquitaine",
                  postalCode: "17500",
                  addressCountry: "FR"
                },
                {
                  "@type": "City",
                  name: "Saintes",
                  addressRegion: "Nouvelle-Aquitaine",
                  addressCountry: "FR"
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Charente-Maritime",
                  addressCountry: "FR"
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Nouvelle-Aquitaine",
                  addressCountry: "FR"
                }
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 45.4464,
                  longitude: -0.4353,
                },
                geoRadius: "40000",
                description: "Rayon de 40km autour de Jonzac incluant Saintes et environs"
              },
              knowsAbout: [
                "soins énergétiques",
                "LaHoChi",
                "magnétisme",
                "constellations familiales",
                "coaching holistique",
                "massage des 5 continents",
                "aromatouch",
                "décodage biologique",
                "décodage echoquantique",
                "méditation",
                "aromatologie",
                "médiumnité"
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />

        {/* JSON-LD Structured Data - WebSite Schema for Search Actions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": getCanonicalUrl('/#website'),
              url: getCanonicalUrl(''),
              name: "Clémence Reznicek - Thérapeute Holistique",
              description: "Cabinet de thérapie holistique à Jonzac, Charente-Maritime. Soins énergétiques, constellations familiales, coaching holistique et massages bien-être.",
              publisher: {
                "@id": getCanonicalUrl('')
              },
              inLanguage: "fr-FR",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: getCanonicalUrl('/soins?search={search_term_string}')
                },
                "query-input": "required name=search_term_string"
              }
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
              "@id": getCanonicalUrl('/#clemence-reznicek'),
              name: "Clémence Reznicek",
              givenName: "Clémence",
              familyName: "Reznicek",
              email: "formationquantique111@gmail.com",
              telephone: "+33632185259",
              jobTitle: "Thérapeute Holistique & Médium",
              worksFor: {
                "@type": "HealthAndBeautyBusiness",
                "@id": getCanonicalUrl(''),
                name: "Clémence Reznicek"
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 avenue Chanzy",
                addressLocality: "Jonzac",
                postalCode: "17500",
                addressCountry: "FR"
              },
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Constellations Familiales",
                  dateCreated: "2010",
                  educationalLevel: "Professional"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Aromatouch",
                  dateCreated: "2018",
                  educationalLevel: "Professional"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Massage 5 Continents",
                  dateCreated: "2022",
                  educationalLevel: "Professional"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Décodage Echoquantique",
                  dateCreated: "2023",
                  educationalLevel: "Professional"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Professional Certification",
                  name: "Certification Ennéagramme",
                  dateCreated: "2025",
                  educationalLevel: "Professional"
                }
              ],
              knowsAbout: [
                "soins énergétiques",
                "LaHoChi",
                "magnétisme",
                "constellations familiales",
                "coaching holistique",
                "massage des 5 continents",
                "aromatouch",
                "décodage biologique",
                "décodage echoquantique",
                "méditation",
                "aromatologie",
                "médiumnité"
              ],
              url: getCanonicalUrl('/a-propos'),
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
