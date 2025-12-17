import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { therapists, spaInfo } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Award, Heart, Leaf, Users, ArrowRight, User } from "lucide-react"

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire de L'Éther Spa, notre philosophie du bien-être et notre équipe de praticiens certifiés FFMBE. Un sanctuaire dédié à votre sérénité.",
}

const values = [
  {
    icon: Heart,
    title: "Bienveillance",
    description:
      "Chaque client est unique. Nous prenons le temps d'écouter vos besoins pour créer une expérience sur mesure.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nos praticiens sont certifiés FFMBE et se forment continuellement aux dernières techniques de bien-être.",
  },
  {
    icon: Leaf,
    title: "Naturalité",
    description:
      "Nous sélectionnons avec soin des produits biologiques et éco-responsables pour respecter votre corps et la planète.",
  },
  {
    icon: Users,
    title: "Authenticité",
    description:
      "Nous cultivons des relations sincères avec nos clients, basées sur la confiance et le respect mutuel.",
  },
]

const milestones = [
  { year: "2012", title: "Fondation", description: "Ouverture de L'Éther dans le 2ème arrondissement de Paris." },
  { year: "2015", title: "Certification FFMBE", description: "Reconnaissance de notre engagement qualité." },
  { year: "2018", title: "Agrandissement", description: "Ouverture de notre espace détente et sauna." },
  { year: "2020", title: "Innovation", description: "Lancement du Japanese Head Spa, une première à Paris." },
  { year: "2023", title: "10 000 clients", description: "Un cap symbolique de confiance renouvelée." },
  { year: "2024", title: "Excellence", description: "Élu meilleur spa bien-être de Paris." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Notre Histoire
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
                Un sanctuaire né d&apos;une passion
              </h1>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  L&apos;Éther est né en 2012 d&apos;une vision simple mais ambitieuse : créer
                  un espace où le temps suspend son vol, où chaque soin devient un voyage
                  vers soi-même.
                </p>
                <p>
                  Fondé par une équipe de passionnés du bien-être, notre spa s&apos;est
                  construit autour d&apos;une conviction profonde : le bien-être authentique
                  ne peut naître que de la rencontre entre expertise et bienveillance.
                </p>
                <p>
                  Aujourd&apos;hui, plus de 10 000 clients nous ont fait confiance, et chacun
                  d&apos;entre eux a contribué à faire de L&apos;Éther ce qu&apos;il est :
                  un lieu où l&apos;excellence rime avec humanité.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600&auto=format&fit=crop"
                      alt="Intérieur du spa"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop"
                      alt="Soin massage"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop"
                      alt="Produits spa"
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-primary text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="font-serif text-3xl text-accent">12</div>
                    <div className="text-sm text-white/70">années</div>
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-serif text-3xl">10k+</div>
                    <div className="text-sm text-white/70">clients</div>
                  </div>
                  <div className="h-12 w-px bg-white/20" />
                  <div className="text-center">
                    <div className="font-serif text-3xl text-accent">4.9</div>
                    <div className="text-sm text-white/70">étoiles</div>
                  </div>
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
              Nos Valeurs
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Ce qui nous anime
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quatre piliers fondamentaux guident chaque jour notre approche du bien-être.
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
              Notre Parcours
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
                key={milestone.year}
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
              Notre Équipe
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Des mains expertes à votre service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tous certifiés par la Fédération Française de Massages Bien-Être, nos praticiens
              combinent expertise technique et sensibilité humaine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-card rounded-2xl overflow-hidden card-hover border border-border/50"
              >
                {/* Image */}
                <div className="relative h-72 bg-muted flex items-center justify-center">
                  <User className="w-24 h-24 text-muted-foreground/30" />
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

      {/* FFMBE Certification */}
      <section className="section-padding bg-primary text-white">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-6">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Certification FFMBE</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                Un gage de qualité et d&apos;éthique
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  L&apos;Éther est fier d&apos;être membre de la Fédération Française de
                  Massages Bien-Être. Cette certification garantit que tous nos praticiens
                  ont suivi une formation rigoureuse de plus de 200 heures.
                </p>
                <p>
                  Elle atteste également de notre engagement envers un code de déontologie
                  strict, plaçant votre bien-être et votre sécurité au cœur de notre pratique.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="accent" className="w-full sm:w-auto" asChild>
                  <Link href="/soins">
                    Découvrir nos soins
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-accent mb-2">200+</div>
                <div className="text-white/70 text-sm">heures de formation</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl mb-2">100%</div>
                <div className="text-white/70 text-sm">praticiens certifiés</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl text-accent mb-2">Bio</div>
                <div className="text-white/70 text-sm">produits naturels</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="font-serif text-4xl mb-2">12</div>
                <div className="text-white/70 text-sm">ans d&apos;expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-spa text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Prêt(e) à nous rencontrer ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Venez découvrir notre univers et laissez-vous guider vers le soin qui vous correspond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/reserver">
                Réserver un soin
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
