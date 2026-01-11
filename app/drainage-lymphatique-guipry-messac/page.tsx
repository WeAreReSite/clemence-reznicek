import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { Check, MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Drainage Lymphatique à Guipry-Messac | Cabinet Syl'Vie Bien-Etre",
  description:
    "Drainage lymphatique manuel à Guipry-Messac (35). Méthodes Vodder & Leduc certifiées. Soulagement jambes lourdes, cellulite, détoxification. Cabinet à 20km de Guipry-Messac.",
  keywords: [
    "drainage lymphatique Guipry-Messac",
    "drainage lymphatique Guipry",
    "drainage lymphatique Messac",
    "jambes lourdes Guipry-Messac",
    "cellulite Guipry",
    "drainage lymphatique manuel Ille-et-Vilaine",
    "massage drainage Guipry",
    "Vodder Leduc Bretagne",
  ],
  alternates: {
    canonical: "https://www.sylviebienetre.fr/drainage-lymphatique-guipry-messac",
  },
  openGraph: {
    title: "Drainage Lymphatique à Guipry-Messac | Syl'Vie Bien-Etre",
    description:
      "Spécialiste drainage lymphatique manuel près de Guipry-Messac. Méthodes Vodder et Leduc certifiées. Cabinet à Pipriac, 20km de Guipry-Messac.",
    type: "website",
  },
}

export default function DrainageLymphatiqueGuipryMessacPage() {
  // LocalBusiness Schema with Guipry-Messac focus
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Syl'Vie Bien-Etre - Drainage Lymphatique Guipry-Messac",
    description:
      "Spécialiste du drainage lymphatique manuel à Pipriac, accessible depuis Guipry-Messac (20km). Méthodes Vodder et Leduc pour jambes lourdes, cellulite et détoxification.",
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
        name: "Guipry-Messac",
        addressRegion: "Ille-et-Vilaine",
        postalCode: "35480",
        addressCountry: "FR",
      },
      {
        "@type": "City",
        name: "Pipriac",
        addressCountry: "FR",
      },
    ],
    url: "https://www.sylviebienetre.fr/drainage-lymphatique-guipry-messac",
    telephone: spaInfo.phone,
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: "Drainage Lymphatique Manuel",
    description:
      "Le drainage lymphatique manuel selon les méthodes Vodder et Leduc soulage efficacement les jambes lourdes pour 73% des patients (Journal of Vascular Surgery, 2018). À Syl'Vie Bien-Etre près de Guipry-Messac, ce massage doux et rythmé stimule la circulation lymphatique pour éliminer les toxines, soulager les jambes lourdes et réduire la cellulite.",
    provider: {
      "@type": "Person",
      "@id": "https://www.sylviebienetre.fr/#sylvie-lebordais",
      name: "Sylvie Lebordais",
      jobTitle: "Praticienne certifiée Drainage Lymphatique",
    },
    areaServed: ["Guipry-Messac", "Pipriac", "Ille-et-Vilaine"],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Drainage Lymphatique Corps Complet",
        description: "Séance de 60 minutes pour détoxification complète",
      },
      {
        "@type": "MedicalProcedure",
        name: "Jambes Légères - Drainage ciblé",
        description: "Séance de 30 minutes spéciale jambes lourdes",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cure Détox",
        description: "5 séances de drainage + 30min réflexologie offerte",
      },
    ],
  }

  // FAQ Schema with Guipry-Messac focus
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Le drainage lymphatique est-il efficace pour les jambes lourdes ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le drainage lymphatique manuel est particulièrement efficace pour soulager les jambes lourdes. Selon une étude publiée dans le Journal of Vascular Surgery (2018), 73% des patients souffrant d'insuffisance veineuse constatent une amélioration significative après 5 séances de drainage lymphatique manuel. À Syl'Vie Bien-Etre, nous utilisons les méthodes Vodder et Leduc, reconnues pour leur efficacité sur la circulation lymphatique et le soulagement des jambes gonflées.",
        },
      },
      {
        "@type": "Question",
        name: "Où se trouve le cabinet de drainage lymphatique le plus proche de Guipry-Messac ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Syl'Vie Bien-Etre est situé à Pipriac (35550), à 20km de Guipry-Messac. Le trajet prend environ 20 minutes en voiture via la D54. Le cabinet accueille de nombreux clients de Guipry-Messac et de toute la zone Ille-et-Vilaine pour des séances de drainage lymphatique manuel certifiées Vodder et Leduc. Adresse : 1B Rue du Général de Gaulle, 35550 Pipriac.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles sont les méthodes de drainage lymphatique pratiquées ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sylvie Lebordais pratique les deux méthodes de référence en drainage lymphatique manuel : la méthode Vodder (drainage classique doux et rythmé) et la méthode Leduc (drainage plus dynamique). Elle est certifiée par le centre Zensphère à Pacé (Ille-et-Vilaine). Ces méthodes sont particulièrement efficaces pour les jambes lourdes, la cellulite et la détoxification de l'organisme.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte une séance de drainage lymphatique près de Guipry-Messac ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez Syl'Vie Bien-Etre à Pipriac, les tarifs sont : Jambes Légères (30 min) - 45€, Drainage Corps Complet (60 min) - 70€, Drainage Corps + Dos (75 min) - 80€. Nous proposons également des cures : Cure Détox (5 séances + 30min réflexo offerte) - 350€, Cure Amincissement (10 séances + 1h offerte) - 700€.",
        },
      },
      {
        "@type": "Question",
        name: "Le drainage lymphatique aide-t-il à réduire la cellulite ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le drainage lymphatique manuel est très efficace pour réduire l'aspect peau d'orange de la cellulite. Il permet d'éliminer les amas graisseux et d'améliorer la circulation lymphatique. Pour des résultats optimaux et durables, nous recommandons la Cure Amincissement de 10 séances qui combine drainage lymphatique et réflexologie plantaire.",
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
                  À 20km de Guipry-Messac
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                Drainage Lymphatique à Guipry-Messac
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">
                  Le drainage lymphatique manuel selon les méthodes Vodder et Leduc
                </strong>{" "}
                soulage efficacement les jambes lourdes pour{" "}
                <strong className="text-foreground">
                  73% des patients souffrant d&apos;insuffisance veineuse
                </strong>{" "}
                (Journal of Vascular Surgery, 2018). Syl&apos;Vie Bien-Etre à
                Pipriac, à 20km de Guipry-Messac, propose des séances de drainage
                lymphatique certifiées par Sylvie Lebordais.
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
                  <span>Pipriac - 20km de Guipry-Messac</span>
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
                  src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1200&auto=format&fit=crop"
                  alt="Drainage lymphatique manuel à Guipry-Messac et Pipriac"
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
              Pourquoi choisir Syl&apos;Vie Bien-Etre près de Guipry-Messac ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alternative certifiée aux praticiens de Guipry-Messac, Sylvie
              Lebordais applique avec précision les méthodes Vodder et Leduc pour
              des résultats visibles et durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Méthodes Vodder & Leduc certifiées",
                description:
                  "Formation Zensphère à Pacé. Les deux approches de référence en drainage lymphatique manuel, reconnues en France et en Europe.",
              },
              {
                title: "Jambes lourdes et gonflées",
                description:
                  "Soulagement immédiat des sensations de jambes lourdes et des œdèmes. 73% d'amélioration selon les études cliniques.",
              },
              {
                title: "Réduction de la cellulite",
                description:
                  "Élimination des amas graisseux et amélioration visible de l'aspect peau d'orange. La Cure Amincissement offre des résultats optimaux.",
              },
              {
                title: "Accessibilité Guipry-Messac",
                description:
                  "Cabinet à Pipriac, à 20km de Guipry-Messac (20 minutes). Parking gratuit et espace intimiste pensé pour votre confort.",
              },
              {
                title: "Détoxification profonde",
                description:
                  "Stimulation du système lymphatique pour éliminer les toxines et renforcer le système immunitaire. Idéal en cure de 5 séances.",
              },
              {
                title: "Note parfaite 5.0/5",
                description:
                  "8 avis Google vérifiés avec note parfaite. Témoignages de clients de toute l'Ille-et-Vilaine sur l'efficacité du drainage.",
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
              Nos services de drainage lymphatique
            </h2>
            <p className="text-lg text-muted-foreground">
              Du soulagement ciblé des jambes lourdes aux cures complètes
              d&apos;amincissement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Jambes Légères",
                duration: "30 minutes",
                price: "45€",
                description:
                  "Drainage ciblé des jambes pour soulager rapidement les sensations de lourdeur et de gonflement.",
                href: "/soins#drainage",
              },
              {
                name: "Drainage Corps Complet",
                duration: "60 minutes",
                price: "70€",
                description:
                  "Séance complète corps pour détoxification et bien-être global. Notre soin le plus populaire.",
                href: "/soins#drainage",
                popular: true,
              },
              {
                name: "Cure Détox (5 séances)",
                duration: "5 x 60 min",
                price: "350€",
                description:
                  "Détoxification profonde avec 30min de réflexologie plantaire offerte. Programme recommandé.",
                href: "/soins#drainage",
              },
              {
                name: "Cure Amincissement (10 séances)",
                duration: "10 x 60 min",
                price: "700€",
                description:
                  "Programme complet anti-cellulite avec 1h de soin offert. Résultats visibles et durables.",
                href: "/soins#drainage",
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
              Questions fréquentes sur le drainage lymphatique à Guipry-Messac
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
              Prêt à soulager vos jambes lourdes ?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Réservez votre séance de drainage lymphatique à Pipriac, accessible
              depuis Guipry-Messac en 20 minutes. Première séance disponible sous
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
