import { Metadata } from "next"
import { Suspense } from "react"
import { BookingWizard } from "@/components/forms/BookingWizard"
import { spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumbs } from "@/components/Breadcrumbs"

export const metadata: Metadata = {
  title: "Réserver",
  description: `Réservez votre soin chez ${spaInfo.name} à ${spaInfo.address.city}. Soins énergétiques, constellations familiales, coaching, massages et décodage biologique.`,
  alternates: {
    canonical: getCanonicalUrl('/reserver'),
  },
  openGraph: {
    title: `Réserver | ${spaInfo.name}`,
    description: `Réservez en ligne votre séance de thérapie holistique à ${spaInfo.address.city}. Prise de rendez-vous simple et rapide.`,
    url: getCanonicalUrl('/reserver'),
    type: "website",
    images: [
      {
        url: getCanonicalUrl('/images/soin-energetique.jpeg'),
        width: 1200,
        height: 630,
        alt: `Réserver un soin - ${spaInfo.name} à ${spaInfo.address.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Réserver | ${spaInfo.name}`,
    description: `Réservez en ligne votre séance de thérapie holistique à ${spaInfo.address.city}.`,
    images: [getCanonicalUrl('/images/soin-energetique.jpeg')],
  },
}

function BookingLoading() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm animate-pulse">
        <div className="h-12 bg-muted rounded mb-8" />
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-24 bg-muted rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ReserverPage() {
  const reservationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Réserver - ${spaInfo.name}`,
    description: `Page de réservation pour ${spaInfo.name}. Réservez votre séance de thérapie holistique, soin énergétique ou massage.`,
    url: getCanonicalUrl('/reserver'),
    isPartOf: {
      "@id": getCanonicalUrl('/#website')
    },
    about: {
      "@id": getCanonicalUrl('')
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: getCanonicalUrl('/reserver'),
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      result: {
        "@type": "Reservation",
        provider: {
          "@id": getCanonicalUrl('')
        }
      }
    }
  }

  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Réserver", href: "/reserver" }
  ]

  return (
    <>
      <JsonLd data={reservationSchema} />
      <div className="min-h-screen bg-muted/30 pt-24 pb-32">
        <div className="container-spa">
          {/* Breadcrumbs for SEO */}
          <div className="pb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>

          <div className="text-center mb-12">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Réservation
            </span>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Réservez votre moment
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sélectionnez votre soin, choisissez votre créneau et préparez-vous à vivre
              une expérience de détente inoubliable.
            </p>
          </div>

          <Suspense fallback={<BookingLoading />}>
            <BookingWizard />
          </Suspense>
        </div>
      </div>
    </>
  )
}
