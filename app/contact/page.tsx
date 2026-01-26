import { Metadata } from "next"
import { spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { ContactPageClient } from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Contactez ${spaInfo.name} à ${spaInfo.address.city}. ${spaInfo.address.street}, ${spaInfo.address.postalCode}. Téléphone : ${spaInfo.phone}. Horaires : Lun-Ven ${spaInfo.hours.weekdays}, Sam ${spaInfo.hours.saturday}.`,
  alternates: {
    canonical: getCanonicalUrl('/contact'),
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
