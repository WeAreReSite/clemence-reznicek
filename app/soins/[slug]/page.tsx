import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { services, therapists } from "@/lib/data"
import { formatPrice, formatDuration } from "@/lib/utils"
import { Clock, Check, ArrowLeft, ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return {
      title: "Soin non trouvé",
    }
  }

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | L'Éther Spa`,
      description: service.shortDescription,
      type: "website",
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const relatedServices = services
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  const availableTherapists = therapists.filter((t) =>
    t.specialties.some((s) => service.name.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(service.name.toLowerCase().split(' ')[0]))
  )

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-muted/30">
        <div className="container-spa">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/soins" className="hover:text-foreground transition-colors">
              Nos Soins
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 bg-muted/30">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden sticky top-28">
                <Image
                  src={`https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop&${service.id}`}
                  alt={service.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:py-8">
              {/* Back Link */}
              <Link
                href="/soins"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux soins
              </Link>

              {/* Title & Price */}
              <div className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  {service.name}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg">{formatDuration(service.duration)}</span>
                  </div>
                  <div className="h-6 w-px bg-border" />
                  <span className="text-2xl font-serif text-accent">
                    {formatPrice(service.price)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg text-muted-foreground mb-8">
                <p className="leading-relaxed">{service.description}</p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="font-serif text-xl text-foreground mb-4">Bienfaits</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Accordion */}
              <div className="mb-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="preparation">
                    <AccordionTrigger>Comment me préparer ?</AccordionTrigger>
                    <AccordionContent>
                      Arrivez 10 minutes avant votre rendez-vous pour profiter d&apos;un moment
                      de détente dans notre espace d&apos;accueil. Évitez de manger un repas
                      copieux juste avant le soin. Des vestiaires et des peignoirs sont à votre
                      disposition.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="duration">
                    <AccordionTrigger>Que comprend la durée indiquée ?</AccordionTrigger>
                    <AccordionContent>
                      La durée inclut le temps de soin effectif. Prévoyez environ 15 minutes
                      supplémentaires pour l&apos;accueil, le déshabillage et un temps de repos
                      après le soin.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="contraindications">
                    <AccordionTrigger>Y a-t-il des contre-indications ?</AccordionTrigger>
                    <AccordionContent>
                      Certaines conditions peuvent nécessiter un avis médical préalable :
                      grossesse, problèmes cardiaques, inflammations cutanées, fièvre.
                      N&apos;hésitez pas à nous consulter en cas de doute.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="products">
                    <AccordionTrigger>Quels produits utilisez-vous ?</AccordionTrigger>
                    <AccordionContent>
                      Nous utilisons exclusivement des huiles essentielles et produits biologiques
                      de haute qualité, sélectionnés pour leurs vertus thérapeutiques et leur
                      respect de votre peau.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" className="flex-1" asChild>
                  <Link href={`/reserver?service=${service.slug}`}>
                    <Calendar className="w-5 h-5 mr-2" />
                    Réserver ce soin
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link href="/contact">
                    Une question ?
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapists */}
      {availableTherapists.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-spa">
            <h2 className="font-serif text-3xl text-foreground mb-8">
              Nos praticiens pour ce soin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableTherapists.map((therapist) => (
                <div
                  key={therapist.id}
                  className="bg-card rounded-xl p-6 border border-border/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">
                        {therapist.name}
                      </h3>
                      <p className="text-accent text-sm mb-2">{therapist.title}</p>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {therapist.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-muted/30">
          <div className="container-spa">
            <h2 className="font-serif text-3xl text-foreground mb-8">
              Vous pourriez aussi aimer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((relService) => (
                <Link
                  key={relService.id}
                  href={`/soins/${relService.slug}`}
                  className="group bg-card rounded-xl overflow-hidden card-hover border border-border/50"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop&${relService.id}`}
                      alt={relService.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span>{formatDuration(relService.duration)}</span>
                      <span>•</span>
                      <span className="text-accent">{formatPrice(relService.price)}</span>
                    </div>
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                      {relService.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
