"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Clock, MapPin } from "lucide-react"
import { spaInfo } from "@/lib/data"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const decorativeRefs = useRef<(HTMLDivElement | null)[]>([])

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
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Info cards stagger
      if (cardsRef.current) {
        const cards = cardsRef.current.children
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Decorative elements floating (only if reduced motion not preferred)
      if (!prefersReducedMotion) {
        decorativeRefs.current.forEach((el, index) => {
          if (!el) return

          gsap.to(el, {
            y: index % 2 === 0 ? -20 : 20,
            x: index === 1 ? 15 : -10,
            duration: 4 + index,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.3,
          })
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div
        ref={(el) => { decorativeRefs.current[0] = el }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={(el) => { decorativeRefs.current[1] = el }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-spa relative">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Prêt(e) à vous détendre ?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Votre moment de bien-être vous attend
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Réservez dès maintenant et laissez-vous transporter dans un univers de détente et de sérénité.
            Notre équipe est impatiente de vous accueillir.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="xl" className="group w-full sm:w-auto sm:min-w-[220px]" asChild>
              <Link href="/contact">
                <span>Réserver maintenant</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="group w-full sm:w-auto sm:min-w-[220px]" asChild>
              <a href={`tel:${spaInfo.phone}`}>
                <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                Nous appeler
              </a>
            </Button>
          </div>
        </div>

        {/* Info Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group bg-card p-6 rounded-xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
              <Clock className="w-6 h-6 text-accent transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="font-medium text-foreground mb-2 text-center">Horaires</h3>
            <p className="text-muted-foreground text-sm text-center">
              Lun - Ven : {spaInfo.hours.weekdays}<br />
              Sam : {spaInfo.hours.saturday}<br />
              Dim : {spaInfo.hours.sunday}
            </p>
          </div>
          <div className="group bg-card p-6 rounded-xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
              <MapPin className="w-6 h-6 text-accent transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="font-medium text-foreground mb-2 text-center">Adresse</h3>
            <p className="text-muted-foreground text-sm text-center">
              {spaInfo.address.street}<br />
              {spaInfo.address.postalCode} {spaInfo.address.city}
            </p>
          </div>
          <div className="group bg-card p-6 rounded-xl shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
              <Phone className="w-6 h-6 text-accent transition-colors duration-300 group-hover:text-white" />
            </div>
            <h3 className="font-medium text-foreground mb-2 text-center">Contact</h3>
            <p className="text-muted-foreground text-sm text-center">
              {spaInfo.phone}<br />
              {spaInfo.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
