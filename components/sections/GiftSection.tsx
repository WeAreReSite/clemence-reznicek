"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Gift, Mail, Truck, ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    icon: Mail,
    title: "Livraison instantanée par email",
    description: "Parfait pour les cadeaux de dernière minute",
  },
  {
    icon: Truck,
    title: "Écrin élégant en option",
    description: "Pour une présentation raffinée",
  },
  {
    icon: Gift,
    title: "Validité 12 mois",
    description: "Le temps de choisir le moment idéal",
  },
]

export function GiftSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const priceCardsRef = useRef<HTMLDivElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      // Content reveal
      if (contentRef.current) {
        const elements = contentRef.current.children
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Feature items with icon animation
      featureRefs.current.forEach((feature, index) => {
        if (!feature) return

        gsap.fromTo(
          feature,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.3 + index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )

        // Icon pulse on scroll (only if reduced motion not preferred)
        if (!prefersReducedMotion) {
          const icon = feature.querySelector(".feature-icon")
          if (icon) {
            gsap.fromTo(
              icon,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: 0.5 + index * 0.1,
                ease: "back.out(2)",
                scrollTrigger: {
                  trigger: contentRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            )
          }
        }
      })

      // Image reveal with clip-path
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            clipPath: "inset(0% 100% 0% 0%)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Price cards bounce in
      if (priceCardsRef.current) {
        const cards = priceCardsRef.current.children
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.8,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-spa relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Bons Cadeaux
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Offrez un moment de bonheur
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Que ce soit pour un anniversaire, une occasion spéciale ou simplement pour faire plaisir,
              nos bons cadeaux sont la promesse d&apos;un moment d&apos;évasion inoubliable.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  ref={(el) => { featureRefs.current[index] = el }}
                  className="flex items-center gap-4 group"
                >
                  <div className="feature-icon w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    <feature.icon className="w-5 h-5 text-accent transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground transition-colors duration-300 group-hover:text-primary">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="group w-full sm:w-auto" asChild>
              <Link href="/bons-cadeaux">
                <span>Offrir un bon cadeau</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div
              ref={imageRef}
              className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
                alt="Coffret cadeau spa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>

            {/* Price Cards */}
            <div ref={priceCardsRef} className="absolute -bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 bg-card p-4 rounded-xl shadow-lg text-center border border-border/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-accent font-medium mb-1 text-sm">À partir de</p>
                <p className="font-serif text-3xl text-foreground">60€</p>
              </div>
              <div className="flex-1 bg-primary p-4 rounded-xl shadow-lg text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-accent font-medium mb-1 text-sm">Best-seller</p>
                <p className="font-serif text-3xl text-white">150€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
