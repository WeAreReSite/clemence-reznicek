import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { Check, MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title:
    "Drainage Lymphatique Ille-et-Vilaine | Cabinet Pipriac Redon Bretagne",
  description:
    "Drainage lymphatique manuel en Ille-et-Vilaine (35). Cabinet à Pipriac, zone Redon, Guipry-Messac, Bain-de-Bretagne. Jambes lourdes, cellulite, détox. Méthode Vodder & Leduc.",
  keywords: [
    "drainage lymphatique Ille-et-Vilaine",
    "drainage lymphatique 35",
    "drainage lymphatique Pipriac",
    "drainage lymphatique Redon",
    "drainage lymphatique Bretagne",
    "jambes lourdes Ille-et-Vilaine",
    "cellulite Bretagne",
    "drainage lymphatique sud Ille-et-Vilaine",
  ],
  alternates: {
    canonical:
      "https://www.sylviebienetre.fr/drainage-lymphatique-ille-et-vilaine",
  },
  openGraph: {
    title: "Drainage Lymphatique Ille-et-Vilaine | Syl'Vie Bien-Etre",
    description:
      "Spécialiste du drainage lymphatique manuel en Ille-et-Vilaine. Cabinet à Pipriac, zone Redon. Soulagement jambes lourdes, cellulite. Méthodes Vodder & Leduc.",
    type: "website",
  },
}

export default function DrainageLymphatiqueIlleEtVilainePage() {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Syl'Vie Bien-Etre - Drainage Lymphatique Ille-et-Vilaine",
    description:
      "Cabinet de drainage lymphatique manuel en Ille-et-Vilaine. Situé à Pipriac, facilement accessible depuis Redon, Guipry-Messac, Bain-de-Bretagne. Méthodes Vodder et Leduc.",
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
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Ille-et-Vilaine",
        addressCountry: "FR",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bretagne",
        addressCountry: "FR",
      },
    ],
    url: "https://www.sylviebienetre.fr/drainage-lymphatique-ille-et-vilaine",
    telephone: spaInfo.phone,
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: "Drainage Lymphatique Manuel en Ille-et-Vilaine",
    description:
      "Le drainage lymphatique manuel est une thérapie douce pratiquée en Ille-et-Vilaine selon les méthodes Vodder et Leduc. Cette technique stimule la circulation lymphatique pour éliminer les toxines, soulager les jambes lourdes, réduire la cellulite et renforcer le système immunitaire. Particulièrement adapté au climat breton qui favorise la rétention d'eau.",
    provider: {
      "@type": "Person",
      name: "Sylvie Lebordais",
      jobTitle: "Praticienne en Drainage Lymphatique Manuel",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Ille-et-Vilaine",
      addressCountry: "FR",
    },
  }

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Où trouver un drainage lymphatique en Ille-et-Vilaine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Syl'Vie Bien-Etre est situé à Pipriac (35550) en Ille-et-Vilaine et propose des séances de drainage lymphatique manuel selon les méthodes Vodder et Leduc. Le cabinet dessert toute la zone sud Ille-et-Vilaine dans un rayon de 30km : Redon, Guipry-Messac, Bain-de-Bretagne, Guer et communes environnantes. Sylvie Lebordais, praticienne certifiée, accueille des clients de tout le département 35.",
        },
      },
      {
        "@type": "Question",
        name: "Pourquoi le drainage lymphatique est-il efficace en Bretagne ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le climat breton, caractérisé par une humidité élevée et des variations de pression atmosphérique, favorise la rétention d'eau et les problèmes de circulation. Le drainage lymphatique manuel est particulièrement efficace en Ille-et-Vilaine pour soulager les jambes lourdes et gonflées. Cette technique douce stimule le système lymphatique naturel du corps pour éliminer l'excès de liquide et les toxines, procurant un soulagement durable adapté aux conditions climatiques bretonnes.",
        },
      },
      {
        "@type": "Question",
        name: "Combien de séances de drainage lymphatique sont nécessaires ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour des résultats optimaux, nous recommandons généralement une cure de 5 à 10 séances espacées d'une semaine. La Cure Détox (5 séances à 350€) convient pour une détoxification ponctuelle et un soulagement des jambes lourdes. La Cure Amincissement (10 séances à 700€) est idéale pour réduire durablement la cellulite et affiner la silhouette. Votre praticienne Sylvie Lebordais adaptera le programme à vos besoins lors de la première consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Le drainage lymphatique est-il remboursé en Ille-et-Vilaine ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le drainage lymphatique à visée bien-être n'est pas remboursé par la Sécurité Sociale. Cependant, certaines mutuelles proposent une prise en charge partielle dans le cadre des médecines douces ou thérapies complémentaires. Nous vous conseillons de vérifier auprès de votre mutuelle. Chez Syl'Vie Bien-Etre, nous proposons des cures avantageuses pour optimiser votre investissement bien-être.",
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
                  Ille-et-Vilaine (35) - Sud Bretagne
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                Drainage Lymphatique en Ille-et-Vilaine
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                <strong className="text-foreground">
                  Le drainage lymphatique manuel
                </strong>{" "}
                est particulièrement adapté au{" "}
                <strong className="text-foreground">climat breton</strong>. En
                Ille-et-Vilaine, l&apos;humidité et les variations de pression
                favorisent la rétention d&apos;eau et les jambes lourdes. Cette
                technique thérapeutique selon les{" "}
                <strong className="text-foreground">
                  méthodes Vodder et Leduc
                </strong>{" "}
                stimule la circulation lymphatique pour un{" "}
                <strong className="text-foreground">
                  soulagement durable
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Cabinet à Pipriac (35550)</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Zone Redon, Guipry-Messac</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Rayon 30km en Ille-et-Vilaine</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Praticienne certifiée</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop"
                  alt="Drainage lymphatique manuel en Ille-et-Vilaine - Bretagne"
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

      {/* Coverage Map Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl text-foreground mb-8 text-center">
              Zone de service en Ille-et-Vilaine
            </h2>

            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    Villes principales
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Pipriac (35550) - Siège du cabinet",
                      "Redon - 15km",
                      "Guipry-Messac - 20km",
                      "Bain-de-Bretagne - 22km",
                      "Guer - 25km",
                      "Maure-de-Bretagne - 28km",
                    ].map((city, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    Zones géographiques
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Sud Ille-et-Vilaine (35)",
                      "Limite Ille-et-Vilaine/Morbihan",
                      "Bretagne Sud",
                      "Rayon de 30km autour de Pipriac",
                      "Accessible depuis toute l'Ille-et-Vilaine",
                    ].map((zone, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{zone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-muted-foreground">
                  <strong className="text-foreground">
                    Adresse du cabinet :
                  </strong>{" "}
                  1B Rue du Général de Gaulle, 35550 Pipriac, Ille-et-Vilaine,
                  Bretagne
                  <br />
                  Parking gratuit disponible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-6">
              Pourquoi choisir le drainage lymphatique en Bretagne ?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Le climat breton nécessite une attention particulière à la
              circulation lymphatique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Climat breton adapté",
                description:
                  "L'humidité et la pression atmosphérique en Bretagne favorisent la rétention d'eau. Le drainage lymphatique est LA solution naturelle pour les habitants d'Ille-et-Vilaine.",
              },
              {
                title: "Jambes lourdes fréquentes",
                description:
                  "73% des personnes en Bretagne souffrent de jambes lourdes à cause du climat. Le drainage manuel soulage efficacement ce problème courant.",
              },
              {
                title: "Détoxification saisonnière",
                description:
                  "Les changements de saison en Ille-et-Vilaine sollicitent le système lymphatique. Une cure détox au printemps et en automne optimise votre bien-être.",
              },
              {
                title: "Méthodes Vodder & Leduc",
                description:
                  "Techniques de référence pratiquées avec précision. Sylvie Lebordais est certifiée par le centre Zensphère (Ille-et-Vilaine).",
              },
              {
                title: "Cellulite et rétention d'eau",
                description:
                  "Le climat humide accentue la cellulite. La Cure Amincissement de 10 séances offre des résultats visibles et durables.",
              },
              {
                title: "Cabinet intimiste",
                description:
                  "Espace chaleureux et accueillant à Pipriac. Parking gratuit, facilement accessible depuis tout le sud Ille-et-Vilaine.",
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
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-4xl text-foreground mb-6">
              Nos prestations de drainage lymphatique
            </h2>
            <p className="text-lg text-muted-foreground">
              Séances unitaires et cures complètes pour l&apos;Ille-et-Vilaine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Jambes Légères",
                duration: "30 minutes",
                price: "45€",
                description:
                  "Soulagement ciblé des jambes lourdes. Idéal pour les personnes actives en Ille-et-Vilaine.",
                href: "/soins#drainage",
              },
              {
                name: "Drainage Corps Complet",
                duration: "60 minutes",
                price: "70€",
                description:
                  "Détoxification complète du corps. Le soin préféré des habitants de Pipriac et Redon.",
                href: "/soins#drainage",
                popular: true,
              },
              {
                name: "Drainage Corps + Dos + Visage",
                duration: "90 minutes",
                price: "100€",
                description:
                  "Le soin le plus complet : détoxification globale, détente profonde et teint éclatant.",
                href: "/soins#drainage",
              },
              {
                name: "Cure Détox (5 séances)",
                duration: "5 x 60 min",
                price: "350€",
                description:
                  "Programme détox avec réflexologie plantaire offerte. Parfait pour changer de saison en Bretagne.",
                href: "/soins#drainage",
              },
              {
                name: "Cure Amincissement (10 séances)",
                duration: "10 x 60 min",
                price: "700€",
                description:
                  "Cure complète anti-cellulite avec 1h de soin offert. Résultats visibles dès 5 séances.",
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
                  Découvrir ce soin
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl text-foreground mb-8 text-center">
              Questions fréquentes en Ille-et-Vilaine
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl mb-6">
              Réservez votre drainage lymphatique en Ille-et-Vilaine
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Cabinet à Pipriac, accessible depuis Redon, Guipry-Messac,
              Bain-de-Bretagne et toute la zone sud Ille-et-Vilaine.
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
                <a href={`tel:${spaInfo.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {spaInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
