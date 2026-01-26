import { Metadata } from "next"
import { Suspense } from "react"
import { BookingWizard } from "@/components/forms/BookingWizard"
import { spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Réserver",
  description: `Réservez votre soin bien-être chez ${spaInfo.name} à ${spaInfo.address.city}. Choisissez parmi réflexologie plantaire, drainage lymphatique, amma assis ou beauté des mains.`,
  alternates: {
    canonical: getCanonicalUrl('/reserver'),
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
  return (
    <div className="min-h-screen bg-muted/30 pt-24 pb-32">
      <div className="container-spa">
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
  )
}
