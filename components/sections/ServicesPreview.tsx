"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Sparkles } from "lucide-react"
import { featuredServices } from "@/lib/data"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        const badge = headerRef.current.querySelector(".badge")
        const title = headerRef.current.querySelector("h2")
        const subtitle = headerRef.current.querySelector("p")

        gsap.fromTo(
          [badge, title, subtitle],
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 95%",
            },
          }
        )
      }

      // Cards staggered animation
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".service-card")

        cards.forEach((card, index) => {
          const image = card.querySelector(".card-image")
          const highlights = card.querySelectorAll(".highlight-item")

          // Card entrance
          gsap.fromTo(
            card,
            {
              y: 100,
              opacity: 0,
              rotateY: index % 2 === 0 ? -5 : 5
            },
            {
              y: 0,
              opacity: 1,
              rotateY: 0,
              duration: 1,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
              },
            }
          )

          // Image parallax on scroll
          if (image) {
            gsap.fromTo(
              image,
              { scale: 1.2 },
              {
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              }
            )
          }

          // Highlights stagger
          if (highlights.length > 0) {
            gsap.fromTo(
              highlights,
              { x: -20, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                delay: 0.4 + index * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 90%",
                },
              }
            )
          }
        })
      }

      // CTA animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-spa relative">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <span className="badge inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Mes Spécialités
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Des soins pensés pour<br className="hidden sm:block" />
            <span className="text-accent">votre bien-être</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
            Découvrez les trois piliers de mon expertise, chacun conçu pour vous
            offrir une expérience unique de détente et de rééquilibrage.
          </p>
        </div>

        {/* Featured Services Cards */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {featuredServices.map((service, index) => (
            <Link
              key={service.id}
              href={service.href}
              className="service-card group relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
              style={{ perspective: "1000px" }}
            >
              {/* Image Container - Height capped for short viewports */}
              <div className="relative h-[min(16rem,40vh)] md:h-[min(18rem,35vh)] overflow-hidden">
                <div className="card-image absolute inset-0">
                  <Image
                    src={service.image}
                    alt={`Soin de ${service.title.toLowerCase()} à Pipriac près de Redon - ${service.subtitle} - Syl'Vie Bien-Etre`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.accent} opacity-60 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-white font-serif text-lg">0{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="card-content relative p-6 md:p-8">
                {/* Title and subtitle */}
                <div className="mb-4">
                  <p className="text-accent text-sm font-medium mb-1 tracking-wide uppercase">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="highlight-item flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-accent font-medium">
                  <span className="text-sm">Découvrir les soins</span>
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-accent/5 to-transparent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <Button size="lg" className="group w-full sm:w-auto" asChild>
            <Link href="/soins">
              <span>Voir tous les soins</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="group w-full sm:w-auto" asChild>
            <Link href="/contact">
              <span>Réserver maintenant</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
