import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { Check, MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Réflexologie Plantaire à Redon | Réflexologue Pipriac Ille-et-Vilaine",
  description:
    "Réflexologie plantaire près de Redon (35). Réflexologue certifiée à Pipriac. Massage des pieds pour rééquilibrer le corps. Cabinet à 15km de Redon, Ille-et-Vilaine.",
  keywords: [
    "réflexologue Redon",
    "réflexologie plantaire Redon",
    "réflexologie plantaire Pipriac",
    "réflexologie Ille-et-Vilaine",
    "massage pieds Redon",
    "réflexologie Redon 35",
    "bien-être Redon",
  ],
  alternates: {
    canonical: "https://www.sylviebienetre.fr/reflexologie-redon",
  },
  openGraph: {
    title: "Réflexologie Plantaire à Redon | Syl'Vie Bien-Etre",
    description:
      "Réflexologue certifiée près de Redon. Réflexologie plantaire pour équilibre et détente. Cabinet à Pipriac, 15km de Redon.",
    type: "website",
  },
}

export default function ReflexologieRedonPage() {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Syl'Vie Bien-Etre - Réflexologue Redon",
    description:
      "Réflexologue certifiée à Pipriac, facilement accessible depuis Redon (15km). Réflexologie plantaire selon la médecine traditionnelle chinoise pour rééquilibrer le corps.",
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
        name: "Redon",
        addressCountry: "FR",
      },
      {
        "@type": "City",
        name: "Pipriac",
        addressCountry: "FR",
      },
    ],
    url: "https://www.sylviebienetre.fr/reflexologie-redon",
    telephone: spaInfo.phone,
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Réflexologie Plantaire",
    description:
      "La réflexologie plantaire est un massage des pieds d'origine chinoise. Selon la médecine traditionnelle chinoise, chaque zone réflexe du pied correspond à un organe, une glande ou une partie du corps. Cette pratique ancestrale permet de retrouver un état d'équilibre, d'autorégulation du corps et de bien-être profond.",
    provider: {
      "@type": "Person",
      name: "Sylvie Lebordais",
      jobTitle: "Réflexologue Certifiée",
      worksFor: {
        "@type": "HealthAndBeautyBusiness",
        name: "Syl'Vie Bien-Etre",
      },
    },
    areaServed: ["Redon", "Pipriac", "Ille-et-Vilaine"],
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que la réflexologie plantaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La réflexologie plantaire est une technique ancestrale d'origine chinoise qui consiste à exercer des pressions sur des zones réflexes des pieds. Selon la médecine traditionnelle chinoise, le pied est un miroir miniature du corps humain : chaque zone correspond à un organe ou une fonction. En stimulant ces points précis, la réflexologie permet de rééquilibrer le corps, favoriser la relaxation profonde et soutenir les capacités d'autorégulation naturelles de l'organisme.",
        },
      },
      {
        "@type": "Question",
        name: "Où trouver un réflexologue près de Redon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sylvie Lebordais, réflexologue certifiée par le Centre de formation Réflexologie Bretagne, vous accueille à Pipriac (35550), à seulement 15km de Redon. Le cabinet est facilement accessible et de nombreux clients de Redon viennent régulièrement pour des séances de réflexologie plantaire. Adresse : 1B Rue du Général de Gaulle, 35550 Pipriac.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte une séance de réflexologie plantaire à Redon ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chez Syl'Vie Bien-Etre à Pipriac, une séance complète de réflexologie plantaire (60 minutes) coûte 65€. Nous proposons également une séance découverte de 30 minutes à 40€ pour vous familiariser avec la pratique. Ces tarifs incluent un accueil personnalisé, le temps de soin effectif et un moment de repos après la séance.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les bienfaits de la réflexologie plantaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La réflexologie plantaire offre de nombreux bienfaits : équilibre général du corps, relaxation profonde, amélioration du sommeil, réduction du stress et de l'anxiété, soulagement des tensions musculaires, amélioration de la digestion, et renforcement du système immunitaire. Cette technique agit sur les systèmes digestif, urinaire, locomoteur et nerveux. C'est une approche globale qui considère la personne dans sa totalité : physique, émotionnelle et mentale.",
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
                  Réflexologue à 15km de Redon
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                Réflexologie Plantaire à Redon
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">
                  La réflexologie plantaire
                </strong>{" "}
                est un massage des pieds d&apos;origine chinoise. Selon la
                médecine traditionnelle chinoise, chaque zone réflexe du pied
                correspond à un organe du corps. Cette technique ancestrale
                permet de retrouver l&apos;
                <strong className="text-foreground">
                  équilibre, la relaxation profonde et le bien-être
                </strong>
                .
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

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Pipriac - 15km de Redon</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Séances de 30 ou 60 minutes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1598901845343-0151e5203ad8?q=80&w=1200&auto=format&fit=crop"
                  alt="Réflexologie plantaire à Redon et Pipriac - Massage des pieds"
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

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-6">
              Les bienfaits de la réflexologie plantaire
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Une approche globale pour votre bien-être physique et mental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Équilibre du corps",
                description:
                  "Stimulation des zones réflexes pour favoriser l'autorégulation naturelle du corps et harmoniser les fonctions vitales.",
              },
              {
                title: "Relaxation profonde",
                description:
                  "Libération des tensions physiques et mentales. Effet apaisant immédiat sur le système nerveux.",
              },
              {
                title: "Amélioration du sommeil",
                description:
                  "Réduction du stress et de l'anxiété pour retrouver un sommeil réparateur et de qualité.",
              },
              {
                title: "Digestion harmonieuse",
                description:
                  "Action sur le système digestif pour soulager les troubles intestinaux, ballonnements et constipation.",
              },
              {
                title: "Circulation optimisée",
                description:
                  "Amélioration de la circulation sanguine et lymphatique pour des jambes légères et un corps revitalisé.",
              },
              {
                title: "Système immunitaire renforcé",
                description:
                  "Stimulation des défenses naturelles pour mieux résister aux agressions extérieures.",
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
              Nos séances de réflexologie
            </h2>
            <p className="text-lg text-muted-foreground">
              Accessibles depuis Redon, Pipriac et toute l&apos;Ille-et-Vilaine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Réflexologie Plantaire Découverte",
                duration: "30 minutes",
                price: "40€",
                description:
                  "Première approche de la réflexologie pour découvrir cette technique millénaire.",
                href: "/soins#reflexologie",
              },
              {
                name: "Réflexologie Plantaire Complète",
                duration: "60 minutes",
                price: "65€",
                description:
                  "Séance complète pour un rééquilibrage profond et une relaxation totale. Notre soin phare.",
                href: "/soins#reflexologie",
                popular: true,
              },
              {
                name: "Réflexologie Abdominale et Plantaire",
                duration: "90 minutes",
                price: "100€",
                description:
                  "Combinaison ventre et pieds pour un bien-être digestif complet.",
                href: "/soins#reflexologie",
              },
              {
                name: "Réflexologie Faciale, Crânienne et Plantaire",
                duration: "90 minutes",
                price: "100€",
                description:
                  "Alliance visage et pieds pour un rééquilibrage complet corps-esprit.",
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
              <Link href="/soins">Découvrir tous nos soins</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Practitioner Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl text-foreground mb-6">
                  Sylvie Lebordais
                  <br />
                  <span className="text-primary">Réflexologue Certifiée</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Formée au Centre de formation{" "}
                    <strong>Réflexologie Bretagne</strong> à Pleugeuneuc
                    (Réflexologie Plantaire, Palmaire, Pédiatrique et Bol
                    Kansu), je pratique la réflexologie selon les principes de
                    la médecine traditionnelle chinoise.
                  </p>
                  <p>
                    J&apos;ai créé à Pipriac un espace intimiste et chaleureux
                    où{" "}
                    <strong>
                      écoute, bienveillance et expertise sont au cœur de chaque
                      instant
                    </strong>
                    . Chaque séance est personnalisée selon vos besoins et vos
                    attentes.
                  </p>
                  <p>
                    De nombreux clients de Redon, Guipry-Messac et de toute
                    l&apos;Ille-et-Vilaine me font confiance pour leurs séances
                    de réflexologie.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        Note Google : 5/5
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Basé sur 8 avis vérifiés. Les clients apprécient
                        particulièrement la douceur, le professionnalisme et
                        l&apos;écoute de Sylvie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
                    alt="Sylvie Lebordais - Réflexologue à Pipriac près de Redon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-foreground mb-8 text-center">
              Questions fréquentes
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
              <Button size="lg" asChild>
                <Link href="/faq">Voir toutes les questions</Link>
              </Button>
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
              Réservez votre séance à Pipriac, à seulement 15 minutes de Redon.
              Première séance découverte disponible.
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
