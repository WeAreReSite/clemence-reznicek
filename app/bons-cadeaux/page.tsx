import { Metadata } from "next"
import Image from "next/image"
import { services } from "@/lib/data"
import { formatPrice, formatDuration } from "@/lib/utils"
import { GiftCardForm } from "@/components/forms/GiftCardForm"
import { Gift, Mail, Truck, Clock, Sparkles, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Bons Cadeaux",
  description:
    "Offrez un moment de bien-être avec les bons cadeaux Syl'Vie Bien-Etre. Réflexologie plantaire, drainage lymphatique ou beauté des mains à Pipriac. Validité 12 mois.",
  alternates: {
    canonical: "https://www.sylviebienetre.fr/bons-cadeaux",
  },
}

const giftOptions = [
  {
    id: "amount-60",
    type: "amount",
    value: 60,
    name: "Bon Cadeau 60€",
    description: "Idéal pour un massage express ou un soin visage découverte.",
  },
  {
    id: "amount-100",
    type: "amount",
    value: 100,
    name: "Bon Cadeau 100€",
    description: "Parfait pour un drainage lymphatique ou un massage prénatal.",
  },
  {
    id: "amount-150",
    type: "amount",
    value: 150,
    name: "Bon Cadeau 150€",
    description: "Notre best-seller : offre l'accès au massage signature.",
    popular: true,
  },
  {
    id: "amount-200",
    type: "amount",
    value: 200,
    name: "Bon Cadeau 200€",
    description: "L'option prestige pour un massage duo ou un rituel complet.",
  },
]

const popularGiftServices = services.filter((s) => s.isPopular)

const features = [
  {
    icon: Mail,
    title: "Livraison instantanée",
    description: "Recevez votre bon par email en quelques secondes.",
  },
  {
    icon: Truck,
    title: "Écrin élégant",
    description: "Option livraison dans un coffret raffiné.",
  },
  {
    icon: Clock,
    title: "Validité 12 mois",
    description: "Le temps de choisir le moment idéal.",
  },
  {
    icon: Heart,
    title: "Message personnalisé",
    description: "Ajoutez un mot pour rendre votre cadeau unique.",
  },
]

export default function BonsCadeauxPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/5" />

        <div className="container-spa relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Gift className="w-4 h-4" />
                Offrez du bien-être
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                Bons Cadeaux
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Offrez un moment de pure évasion à vos proches. Nos bons cadeaux sont la promesse
                d&apos;une expérience inoubliable dans notre sanctuaire de bien-être.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
                  alt="Coffret cadeau spa"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-serif text-2xl">12 mois</p>
                    <p className="text-sm text-white/70">de validité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Card Options */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Nos Formules
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Choisissez votre montant
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Le bénéficiaire pourra utiliser son bon pour le soin de son choix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {giftOptions.map((option) => (
              <div
                key={option.id}
                className={`relative bg-card rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  option.popular ? "border-accent" : "border-border/50 hover:border-primary"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Best-seller
                  </div>
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-3xl text-foreground mb-2">
                    {option.value}€
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Or Choose a Service */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl text-foreground mb-2">
              Ou offrez un soin spécifique
            </h3>
            <p className="text-muted-foreground">
              Choisissez parmi nos soins les plus populaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularGiftServices.map((service) => (
              <div
                key={service.id}
                className="bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="relative h-40">
                  <Image
                    src={`https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop&${service.id}`}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-xl text-foreground mb-1">
                    {service.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{formatDuration(service.duration)}</span>
                  </div>
                  <p className="font-serif text-2xl text-accent">
                    {formatPrice(service.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Commander
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Personnalisez votre cadeau
              </h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous pour créer votre bon cadeau personnalisé.
              </p>
            </div>

            <GiftCardForm giftOptions={giftOptions} services={popularGiftServices} />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-spa">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-accent" />
              <span>Paiement 100% sécurisé</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-accent" />
              <span>Livraison instantanée par email</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-accent" />
              <span>Valable 12 mois</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
