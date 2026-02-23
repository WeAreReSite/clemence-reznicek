import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { therapists, spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez ${therapists[0].name}, thérapeute holistique et médium à ${spaInfo.address.city}, Charente-Maritime. Spécialités : soins énergétiques, constellations familiales, coaching, massages, décodage biologique.`,
  alternates: {
    canonical: getCanonicalUrl('/a-propos'),
  },
  openGraph: {
    title: `À Propos | ${spaInfo.name}`,
    description: `Découvrez ${therapists[0].name}, thérapeute holistique et médium à ${spaInfo.address.city}. Soins énergétiques, constellations familiales, coaching, massages et décodage biologique.`,
    url: getCanonicalUrl('/a-propos'),
    type: "profile",
    images: [
      {
        url: getCanonicalUrl('/images/clemence-reznicek.jpeg'),
        width: 1200,
        height: 630,
        alt: `${therapists[0].name} - Thérapeute Holistique & Médium à ${spaInfo.address.city}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `À Propos | ${spaInfo.name}`,
    description: `Découvrez ${therapists[0].name}, thérapeute holistique et médium à ${spaInfo.address.city}. Soins énergétiques, constellations familiales, coaching et massages.`,
    images: [getCanonicalUrl('/images/clemence-reznicek.jpeg')],
  },
}

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    description:
      "Chaque personne est unique. Je crée un espace de confiance et d\u2019écoute pour vous accompagner avec douceur et respect.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Formée depuis 2010 en thérapies holistiques, je combine de multiples disciplines pour une approche globale et personnalisée.",
  },
  {
    icon: Leaf,
    title: "Globalité",
    description:
      "J\u2019aborde l\u2019être dans sa totalité : physique, émotionnel, mental et spirituel, pour une transformation durable.",
  },
  {
    icon: Users,
    title: "Authenticité",
    description:
      "Je cultive des relations sincères, basées sur la transparence et l\u2019écoute profonde de ce qui se joue en vous.",
  },
]

const milestones = [
  { year: "2010", title: "Constellations Familiales", description: "Certification en Constellations Familiales et Systémiques." },
  { year: "2017", title: "Début de l\u2019activité", description: "Ouverture du cabinet de thérapie holistique à Jonzac." },
  { year: "2018", title: "Massage Aromatouch\u00AE", description: "Certification en massage aux huiles essentielles Aromatouch\u00AE." },
  { year: "2022", title: "Massage des 5 Continents\u00AE", description: "Diplôme en Massage des 5 Continents\u00AE, un voyage sensoriel unique." },
  { year: "2023", title: "Décodage Echoquantique", description: "Certification en décodage Echoquantique, approche quantique innovante." },
  { year: "2025", title: "Ennéagramme", description: "Formation à l\u2019Ennéagramme pour enrichir l\u2019accompagnement." },
]

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "À Propos", href: "/a-propos" }
  ]

  // AboutPage schema for SEO
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `À Propos - ${spaInfo.name}`,
    description: `Découvrez ${therapists[0].name}, thérapeute holistique et médium à ${spaInfo.address.city}. Soins énergétiques, constellations familiales, coaching, massages et décodage biologique.`,
    url: getCanonicalUrl('/a-propos'),
    isPartOf: {
      "@id": getCanonicalUrl('/#website')
    },
    about: {
      "@id": getCanonicalUrl('/#clemence-reznicek')
    },
    mainEntity: {
      "@type": "Person",
      "@id": getCanonicalUrl('/#clemence-reznicek'),
      name: therapists[0].name,
      jobTitle: therapists[0].title,
      description: therapists[0].bio,
      worksFor: {
        "@id": getCanonicalUrl('')
      },
      knowsAbout: [
        "Médiumnité",
        "Constellations Familiales",
        "Soins Énergétiques",
        "Massage des 5 Continents",
        "Décodage Biologique",
        "Coaching"
      ]
    }
  }

  return (
    <>
      <JsonLd data={aboutPageSchema} />
      {/* Breadcrumbs for SEO */}
      <div className="container-spa pt-24 pb-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-20 lg:pb-32 overflow-hidden">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Mon Approche
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
                Un espace dédié à votre transformation
              </h1>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Bienvenue, je suis {therapists[0].name}, thérapeute holistique
                  et médium à {spaInfo.address.city}.
                </p>
                <p>
                  Depuis 2017, j&apos;accompagne les personnes en quête de sens,
                  de paix ou de transformation à travers une approche globale
                  centrée sur l&apos;écoute, le bien-être et la reconnexion à soi.
                </p>
                <p>
                  Mon cabinet est un espace de confiance et de bienveillance où
                  chaque séance est un moment unique, adapté à vos besoins et à
                  votre rythme.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:pb-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/soin-energetique.jpeg"
                      alt={`Soin énergétique par ${therapists[0].name} à ${spaInfo.address.city}`}
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                  <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/constellation-familiale.jpeg"
                      alt={`Constellation familiale avec ${therapists[0].name} à ${spaInfo.address.city}`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/coaching.jpeg"
                      alt={`Coaching et accompagnement holistique à ${spaInfo.address.city}`}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Stats Card - Desktop: Overlapping, Mobile: Below images */}
              {/* Desktop version - absolutely positioned */}
              <div className="hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white p-5 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-6 sm:gap-8">
                  <div className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl text-accent">16</div>
                    <div className="text-xs sm:text-sm text-white/70">soins</div>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl">24</div>
                    <div className="text-xs sm:text-sm text-white/70">avis</div>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl text-accent">4.9</div>
                    <div className="text-xs sm:text-sm text-white/70">étoiles</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card - Mobile: Full width below images */}
            <div className="sm:hidden mt-6 bg-primary text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="font-serif text-2xl text-accent">16</div>
                  <div className="text-xs text-white/70">soins</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <div className="font-serif text-2xl">24</div>
                  <div className="text-xs text-white/70">avis</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <div className="font-serif text-2xl text-accent">4.9</div>
                  <div className="text-xs text-white/70">étoiles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Mes Valeurs
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Ce qui m&apos;anime
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quatre piliers fondamentaux guident chaque jour mon approche du bien-être.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card p-8 rounded-2xl text-center card-hover border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Mon Parcours
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Les étapes clés
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

            {milestones.map((milestone, index) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl border border-border/50 inline-block">
                    <span className="text-accent font-medium">{milestone.year}</span>
                    <h3 className="font-serif text-xl text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background absolute left-1/2 -translate-x-1/2" />

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="section-padding bg-muted/30 scroll-mt-24">
        <div className="container-spa">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Votre Praticienne
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Des mains expertes à votre service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formée en thérapies holistiques depuis 2010, je combine expertise
              intuitive et approches multidimensionnelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-card rounded-2xl overflow-hidden card-hover border border-border/50"
              >
                {/* Image */}
                <div className="relative h-72">
                  <Image
                    src={therapist.image}
                    alt={`${therapist.name}, ${therapist.title} à ${spaInfo.address.city}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-1">
                    {therapist.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mb-4">
                    {therapist.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {therapist.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Formations certifiées</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Une expertise reconnue
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Depuis 2010, ma passion pour le bien-être et la compréhension de
                  l&apos;être humain m&apos;a amenée à me former en thérapies
                  holistiques auprès de multiples écoles et formateurs. Constellations
                  Familiales, Massage Aromatouch&reg;, Massage des 5 Continents&reg;,
                  Décodage Echoquantique, Ennéagramme : chaque certification enrichit
                  mon approche globale.
                </p>
                <p>
                  Chaque soin que je propose est le fruit d&apos;un apprentissage
                  rigoureux et d&apos;une pratique attentive, toujours au service de
                  votre transformation et de votre bien-être.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="accent" className="w-full sm:w-auto" asChild>
                  <Link href="/soins">
                    Découvrir mes soins
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-accent mb-2">6</div>
                <div className="text-white/70 text-sm">certifications</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl mb-2">16</div>
                <div className="text-white/70 text-sm">soins proposés</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-accent mb-2">4.9</div>
                <div className="text-white/70 text-sm">étoiles Resalib</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl mb-2">100%</div>
                <div className="text-white/70 text-sm">écoute et bienveillance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-spa text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Prêt(e) à me rencontrer ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Venez découvrir mon univers et laissez-vous guider vers le soin qui vous correspond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/contact">
                Réserver un soin
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/contact">
                Me contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
