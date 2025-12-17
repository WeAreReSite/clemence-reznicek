import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { services, categories } from "@/lib/data"
import { formatPrice, formatDuration, cn } from "@/lib/utils"
import { Clock, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nos Soins",
  description:
    "Découvrez notre carte des soins : massages signature, Japanese Head Spa, drainage lymphatique, soins visage et rituels détox. Réservez votre moment de bien-être.",
}

export default function SoinsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Nos Soins
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Une carte de soins d&apos;exception
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Chaque soin est une invitation au voyage. Nos praticiens certifiés vous guident
              à travers des expériences sensorielles uniques, personnalisées selon vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-sm z-30">
        <div className="container-spa">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category.id)
        if (categoryServices.length === 0) return null

        return (
          <section
            key={category.id}
            id={category.id}
            className="section-padding scroll-mt-32"
          >
            <div className="container-spa">
              {/* Category Header */}
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {categoryServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/soins/${service.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden card-hover border border-border/50"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={`https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop&${service.id}`}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {service.isPopular && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                          <Sparkles className="w-3 h-3" />
                          Populaire
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{formatDuration(service.duration)}</span>
                        <span className="mx-1">•</span>
                        <span className="text-accent font-medium">{formatPrice(service.price)}</span>
                      </div>

                      <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {service.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Découvrir</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-spa text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Besoin de conseils ?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Notre équipe est à votre disposition pour vous guider vers le soin
            le plus adapté à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="accent" className="w-full sm:w-auto" asChild>
              <Link href="/reserver">
                Réserver un soin
              </Link>
            </Button>
            <Button size="lg" variant="outline-white" className="w-full sm:w-auto" asChild>
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
