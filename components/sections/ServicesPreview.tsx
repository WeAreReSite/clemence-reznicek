"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Sparkles } from "lucide-react"
import { services } from "@/lib/data"
import { formatPrice, formatDuration, cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const popularServices = services.filter((s) => s.isPopular)

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent pointer-events-none" />

      <div className="container-spa relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Nos Soins d&apos;Exception
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Une expérience sur mesure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez notre sélection de soins signature, conçus pour répondre à vos besoins
            et vous offrir un moment de pure évasion.
          </p>
        </div>

        {/* Bento Grid of Popular Services */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {popularServices.map((service, index) => (
            <Link
              key={service.id}
              href={`/soins/${service.slug}`}
              className={cn(
                "group relative bg-card rounded-2xl overflow-hidden card-hover",
                index === 0 && "lg:col-span-2 lg:row-span-2"
              )}
            >
              {/* Image */}
              <div className={cn(
                "relative overflow-hidden",
                index === 0 ? "h-[400px] lg:h-full" : "h-[280px]"
              )}>
                <Image
                  src={service.image.startsWith('/')
                    ? `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop`
                    : service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Badge */}
              {service.isPopular && (
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  Populaire
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{formatDuration(service.duration)}</span>
                  <span className="mx-2">•</span>
                  <span className="text-accent font-medium">{formatPrice(service.price)}</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2 group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">
                  {service.shortDescription}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Découvrir</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16 pt-4">
          <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/soins">
              Voir tous nos soins
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
