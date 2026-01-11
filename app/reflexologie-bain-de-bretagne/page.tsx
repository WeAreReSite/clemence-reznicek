import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { Check, MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Réflexologie Plantaire à Bain-de-Bretagne | Syl'Vie Bien-Etre",
  description:
    "Réflexologie plantaire à Bain-de-Bretagne (35470). Massage thérapeutique des pieds selon la médecine traditionnelle chinoise. Cabinet à 22km de Bain-de-Bretagne.",
  keywords: [
    "réflexologie plantaire Bain-de-Bretagne",
    "réflexologue Bain-de-Bretagne",
    "réflexologie Bain-de-Bretagne",
    "massage pieds Bain-de-Bretagne",
    "bien-être Bain-de-Bretagne",
    "réflexologie 35470",
    "massage bien-être Bain-de-Bretagne",
    "médecine chinoise Bretagne",
  ],
  alternates: {
    canonical: "https://www.sylviebienetre.fr/reflexologie-bain-de-bretagne",
  },
  openGraph: {
    title: "Réflexologie Plantaire à Bain-de-Bretagne | Syl'Vie Bien-Etre",
    description:
      "Réflexologie plantaire certifiée près de Bain-de-Bretagne. Médecine traditionnelle chinoise. Cabinet à Pipriac, 22km de Bain-de-Bretagne.",
    type: "website",
  },
}

export default function ReflexologieBainDeBretagnePage() {
  // LocalBusiness Schema with Bain-de-Bretagne focus
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Syl'Vie Bien-Etre - Réflexologie Bain-de-Bretagne",
    description:
      "Réflexologie plantaire à Pipriac, facilement accessible depuis Bain-de-Bretagne (22km). Massage thérapeutique des pieds selon la médecine traditionnelle chinoise.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1B Rue du Général de Gaulle",
      addressLocality: "Pipriac",
      postalCode: "35550",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.7656,
      longitude: -1.9494,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bain-de-Bretagne",
        addressRegion: "Ille-et-Vilaine",
        postalCode: "35470",
        addressCountry: "FR",
      },
      {
        "@type": "City",
        name: "Pipriac",
        addressCountry: "FR",
      },
    ],
    url: "https://www.sylviebienetre.fr/reflexologie-bain-de-bretagne",
    telephone: spaInfo.phone,
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Réflexologie Plantaire",
    description:
      "La réflexologie plantaire est un miroir miniature du corps humain selon la médecine traditionnelle chinoise. Chaque zone réflexe du pied correspond à un organe ou système du corps. Des études cliniques montrent que la réflexologie plantaire peut réduire significativement le rythme cardiaque chez les patients hypertendus et améliorer la qualité du sommeil chez 68% des participants.",
    provider: {
      "@type": "Person",
      "@id": "https://www.sylviebienetre.fr/#sylvie-lebordais",
      name: "Sylvie Lebordais",
      jobTitle: "Réflexologue certifiée",
    },
    areaServed: ["Bain-de-Bretagne", "Pipriac", "Ille-et-Vilaine"],
    offers: {
      "@type": "Offer",
      price: "65",
      priceCurrency: "EUR",
      description: "Séance de réflexologie plantaire 60 minutes",
    },
  }

  // FAQ Schema with Bain-de-Bretagne focus
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Où se trouve le cabinet de réflexologie le plus proche de Bain-de-Bretagne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Syl'Vie Bien-Etre est situé à Pipriac (35550), à 22km de Bain-de-Bretagne. Le trajet prend environ 25 minutes en voiture via la D177. Le cabinet accueille de nombreux clients de Bain-de-Bretagne pour des séances de réflexologie plantaire certifiées. Adresse : 1B Rue du Général de Gaulle, 35550 Pipriac.",
        },
      },
      {
        "@type": "Question",
        name: "La réflexologie plantaire peut-elle soulager le stress ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, la réflexologie plantaire est particulièrement efficace pour réduire le stress et l'anxiété. Selon des études cliniques, elle peut réduire significativement le rythme cardiaque chez les patients stressés et améliorer la qualité du sommeil chez 68% des participants. La réflexologie stimule les zones réflexes du pied correspondant au système nerveux, favorisant ainsi une relaxation profonde.",
        },
      },
      {
        "@type": "Question",
        name: "Quelle est la durée idéale d'une séance de réflexologie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Une séance complète de réflexologie plantaire dure 60 minutes. Cela permet de travailler l'ensemble des zones réflexes des deux pieds et d'obtenir un rééquilibrage global du corps. Pour une première découverte, nous proposons également une séance de 30 minutes. Un temps d'échange est prévu avant et après chaque séance (prévoir 20 minutes supplémentaires).",
        },
      },
      {
        "@type": "Question",
        name: "Quelles sont les qualifications de la réflexologue ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sylvie Lebordais est certifiée en réflexologie plantaire par le Centre de formation Réflexologie Bretagne à Pleugeuneuc. Elle a également suivi des formations en réflexologie palmaire, pédiatrique, abdominale (Qi Nei Tsang), faciale et crânienne auprès de centres reconnus en Bretagne (Zensphère à Pacé). Elle accueille des clients de Bain-de-Bretagne, Pipriac et toute l'Ille-et-Vilaine.",
        },
      },
      {
        "@type": "Question",
        name: "La réflexologie est-elle remboursée par les mutuelles ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Certaines mutuelles proposent un remboursement partiel des séances de réflexologie plantaire dans le cadre des médecines douces ou médecines alternatives. Le montant varie selon votre contrat. N'hésitez pas à vous renseigner auprès de votre mutuelle. Syl'Vie Bien-Etre peut vous fournir une facture détaillée pour vos remboursements.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte une séance de réflexologie près de Bain-de-Bretagne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez Syl'Vie Bien-Etre à Pipriac, les tarifs sont : Réflexologie Plantaire Découverte (30 min) - 40€, Réflexologie Plantaire complète (60 min) - 65€, Réflexologie Abdominale (30 min) - 40€, Réflexologie Abdominale + Plantaire (90 min) - 100€. Nous proposons également d'autres techniques comme la réflexologie faciale et crânienne.",
        },
      },
    ],
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  À 22km de Bain-de-Bretagne
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                Réflexologie Plantaire à Bain-de-Bretagne
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">
                  La réflexologie plantaire est un miroir miniature du corps
                  humain
                </strong>{" "}
                selon la médecine traditionnelle chinoise. Chaque zone réflexe du
                pied correspond à un organe ou système du corps. Des études
                cliniques montrent que la réflexologie plantaire peut{" "}
                <strong className="text-foreground">
                  améliorer la qualité du sommeil chez 68% des participants
                </strong>{" "}
                et réduire significativement le stress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="xl" asChild>
                  <Link href="/contact">
                    Réserver une séance
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <a href={`tel:${spaInfo.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    {spaInfo.phone}
                  </a>
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pipriac - 22km de Bain-de-Bretagne</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Lun-Ven 9h-20h, Sam 9h-13h</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
                  alt="Réflexologie plantaire à Bain-de-Bretagne et Pipriac"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-6">
              Pourquoi choisir Syl&apos;Vie Bien-Etre près de Bain-de-Bretagne ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aucun concurrent établi à Bain-de-Bretagne. Sylvie Lebordais,
              certifiée Réflexologie Bretagne, vous accueille dans un espace
              intimiste à 25 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Certification professionnelle",
                description:
                  "Formation Centre de formation Réflexologie Bretagne à Pleugeuneuc. Certification en réflexologie plantaire, palmaire et pédiatrique.",
              },
              {
                title: "Réduction du stress",
                description:
                  "La réflexologie réduit significativement le rythme cardiaque et favorise la relaxation profonde selon les études cliniques.",
              },
              {
                title: "Amélioration du sommeil",
                description:
                  "68% des participants rapportent une amélioration de la qualité du sommeil après des séances régulières de réflexologie plantaire.",
              },
              {
                title: "Accessible depuis Bain-de-Bretagne",
                description:
                  "Cabinet à Pipriac, 22km de Bain-de-Bretagne (25 minutes). Parking gratuit et espace cocooning pour votre confort.",
              },
              {
                title: "Approche globale",
                description:
                  "Rééquilibrage de l'ensemble des systèmes du corps : digestif, urinaire, locomoteur, nerveux. Vision holistique de la santé.",
              },
              {
                title: "Note parfaite 5.0/5",
                description:
                  "8 avis Google vérifiés. Témoignages sur la douceur, le professionnalisme et l'efficacité des soins de réflexologie.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-6">
              Nos services de réflexologie
            </h2>
            <p className="text-lg text-muted-foreground">
              De la découverte initiale aux séances combinées pour un bien-être
              global
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Réflexologie Plantaire Découverte",
                duration: "30 minutes",
                price: "40€",
                description:
                  "Une première approche de la réflexologie pour découvrir cette technique millénaire et ses bienfaits.",
                href: "/soins#reflexologie",
              },
              {
                name: "Réflexologie Plantaire",
                duration: "60 minutes",
                price: "65€",
                description:
                  "Séance complète pour rééquilibrer votre corps. Massage des pieds selon la médecine traditionnelle chinoise.",
                href: "/soins#reflexologie",
                popular: true,
              },
              {
                name: "Réflexologie Abdominale (Qi Nei Tsang)",
                duration: "30 minutes",
                price: "40€",
                description:
                  "Libérez les tensions de votre « second cerveau ». Technique taoïste chinoise pour troubles digestifs et stress.",
                href: "/soins#reflexologie",
              },
              {
                name: "Réflexologie Abdominale + Plantaire",
                duration: "90 minutes",
                price: "100€",
                description:
                  "Séance combinée pour un rééquilibrage global : ventre et pieds. Détente profonde corps-esprit.",
                href: "/soins#reflexologie",
              },
              {
                name: "Réflexologie Faciale et Crânienne",
                duration: "30 minutes",
                price: "40€",
                description:
                  "Le visage, carte du corps. Pressions douces pour un équilibre naturel et un lifting naturel.",
                href: "/soins#reflexologie",
              },
              {
                name: "Réflexologie Palmaire",
                duration: "30 minutes",
                price: "40€",
                description:
                  "Les bienfaits de la réflexologie par les mains. Soulagement du stress et des maux de tête.",
                href: "/soins#reflexologie",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all"
              >
                {service.popular && (
                  <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">
                    LE PLUS POPULAIRE
                  </div>
                )}
                <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </span>
                  <span className="text-xl font-serif text-accent">
                    {service.price}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-primary text-sm font-medium">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="xl" asChild>
              <Link href="/soins">Voir tous nos soins</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-foreground mb-8 text-center">
              Questions fréquentes sur la réflexologie à Bain-de-Bretagne
            </h2>

            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50"
                >
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Vous avez d&apos;autres questions ?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/faq">Voir toutes les FAQ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-6">
              Prêt à découvrir la réflexologie plantaire ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Réservez votre séance de réflexologie à Pipriac, accessible depuis
              Bain-de-Bretagne en 25 minutes. Première séance disponible sous
              48h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                variant="secondary"
                className="w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Réserver en ligne
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href={`tel:${spaInfo.phone}`}>Appeler : {spaInfo.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
