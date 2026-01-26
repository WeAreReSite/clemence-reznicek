import { Metadata } from "next"
import { spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ContactPageClient } from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Contactez ${spaInfo.name} à ${spaInfo.address.city}. ${spaInfo.address.street}, ${spaInfo.address.postalCode}. Téléphone : ${spaInfo.phone}. Horaires : Lun-Ven ${spaInfo.hours.weekdays}, Sam ${spaInfo.hours.saturday}.`,
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
  openGraph: {
    title: `Contact | ${spaInfo.name}`,
    description: `Prenez rendez-vous chez ${spaInfo.name} à ${spaInfo.address.city}. Téléphone : ${spaInfo.phone}. Adresse : ${spaInfo.address.street}.`,
    url: getCanonicalUrl('/contact'),
    type: "website",
    images: [
      {
        url: getCanonicalUrl('/images/hero-background.jpeg'),
        width: 1200,
        height: 630,
        alt: `Contact - ${spaInfo.name} à ${spaInfo.address.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${spaInfo.name}`,
    description: `Contactez ${spaInfo.name} à ${spaInfo.address.city}. Téléphone : ${spaInfo.phone}.`,
    images: [getCanonicalUrl('/images/hero-background.jpeg')],
  },
}

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact - ${spaInfo.name}`,
    description: `Page de contact pour ${spaInfo.name}. Prenez rendez-vous pour vos soins de réflexologie et drainage lymphatique.`,
    url: getCanonicalUrl('/contact'),
    mainEntity: {
      "@id": getCanonicalUrl('')
    }
  }

  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <>
      <JsonLd data={contactPageSchema} />
      <div className="container-spa pt-24 pb-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <ContactPageClient />
    </>
  )
}
