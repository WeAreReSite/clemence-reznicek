import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { therapists, spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos",
  description: `Rencontrez ${therapists[0].name}, ${therapists[0].title} à ${spaInfo.address.city}. Formée en réflexologie plantaire, drainage lymphatique et prothésie ongulaire. Cabinet en Bretagne.`,
  alternates: {
    canonical: getCanonicalUrl('/a-propos'),
  },
}

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    description:
      "Chaque client est unique. Je prends le temps d'écouter vos besoins pour créer une expérience sur mesure.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Formée dans les meilleurs centres de Bretagne et en formation continue pour vous offrir des soins de qualité.",
  },
  {
    icon: Leaf,
    title: "Naturalité",
    description:
      "Je sélectionne avec soin des produits de qualité professionnelle pour respecter votre corps.",
  },
  {
    icon: Users,
    title: "Authenticité",
    description:
      "Je cultive des relations sincères avec mes clients, basées sur la confiance et le respect mutuel.",
  },
]

const milestones = [
  { year: "Formation", title: "Réflexologie Bretagne", description: "Formation en Réflexologie Plantaire, Palmaire, Pédiatrique et Bol Kansu à Pleugeuneuc." },
  { year: "Formation", title: "Zensphère", description: "Formation en Drainage Lymphatique Manuel, Réflexologie Abdominale, Faciale et Crânienne, Amma Assis à Pacé." },
  { year: "Formation", title: "Prothésie Ongulaire", description: "Formation auprès d'Anaïs Abaakil à Rennes." },
  { year: "2025", title: "Syl'Vie Bien-Etre", description: "Ouverture du cabinet à Pipriac, un espace intimiste dédié au bien-être." },
  { year: "2026", title: "Excellence", description: "5 étoiles sur Google avec 8 avis clients enthousiastes." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 lg:pb-32 overflow-hidden">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Mon Histoire
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
                Un espace né d&apos;une passion
              </h1>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
                <p>
                  Bienvenue chez Syl&apos;Vie Bien-Etre. Je suis Sylvie, fondatrice de cet espace
                  dédié à votre bien-être, spécialisée en Réflexologie, Drainage Lymphatique
                  Manuel, Amma Assis et Prothésiste Ongulaire.
                </p>
                <p>
                  J&apos;ai créé un espace intimiste et chaleureux pour vous offrir bien plus
                  qu&apos;une simple prestation : l&apos;alliance du bien-être et de la beauté.
                  Chaque rendez-vous est un moment unique.
                </p>
                <p>
                  Je prends le temps de vous écouter et de comprendre vos besoins et vos attentes.
                  Accordez-vous cette parenthèse de sérénité, où écoute, bienveillance et
                  expertise sont au cœur de chaque instant.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:pb-0">
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/bol-kansu.jpeg"
                      alt="Massage Bol Kansu ayurvédique à Pipriac - Syl'Vie Bien-Etre"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                  <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/reflexologie-abdominale.jpeg"
                      alt="Réflexologie abdominale Qi Nei Tsang près de Redon"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                    <Image
                      src="/images/reflexologie-faciale-et-cranienne.jpeg"
                      alt="Soin réflexologie faciale et crânienne à Pipriac"
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
                    <div className="font-serif text-2xl sm:text-3xl text-accent">29</div>
                    <div className="text-xs sm:text-sm text-white/70">soins</div>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl">8</div>
                    <div className="text-xs sm:text-sm text-white/70">avis</div>
                  </div>
                  <div className="h-10 sm:h-12 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-serif text-2xl sm:text-3xl text-accent">5.0</div>
                    <div className="text-xs sm:text-sm text-white/70">étoiles</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card - Mobile: Full width below images */}
            <div className="sm:hidden mt-6 bg-primary text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="font-serif text-2xl text-accent">29</div>
                  <div className="text-xs text-white/70">soins</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <div className="font-serif text-2xl">8</div>
                  <div className="text-xs text-white/70">avis</div>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <div className="font-serif text-2xl text-accent">5.0</div>
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
              Formée auprès des meilleurs centres de formation en Bretagne,
              je combine expertise technique et sensibilité humaine.
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
                    alt="Sylvie praticienne certifiée en réflexologie et drainage lymphatique à Pipriac - Syl'Vie Bien-Etre"
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
                  Ma passion pour le bien-être m&apos;a amenée à me former auprès des meilleurs
                  centres de formation en Bretagne. J&apos;ai obtenu mes certifications en
                  Réflexologie, Drainage Lymphatique Manuel et Prothésie Ongulaire.
                </p>
                <p>
                  Chaque soin que je propose est le fruit d&apos;un apprentissage rigoureux
                  et d&apos;une pratique attentive, toujours au service de votre bien-être.
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
                <div className="font-serif text-4xl text-accent mb-2">3</div>
                <div className="text-white/70 text-sm">centres de formation</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl mb-2">29</div>
                <div className="text-white/70 text-sm">soins proposés</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-accent mb-2">5.0</div>
                <div className="text-white/70 text-sm">étoiles Google</div>
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
