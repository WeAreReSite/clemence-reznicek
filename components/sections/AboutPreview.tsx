"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Content reveal
      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-background overflow-hidden">
      <div className="container-spa">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <div ref={imageRef} className="absolute inset-0 scale-110">
                <Image
                  src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000&auto=format&fit=crop"
                  alt="L'intérieur de notre spa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card p-6 rounded-xl shadow-lg max-w-[280px]">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-serif text-xl text-accent">12</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Années</p>
                  <p className="text-muted-foreground text-sm">d&apos;expertise</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Plus de 10 000 clients nous ont fait confiance depuis 2012.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Notre Histoire
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Un sanctuaire dédié à votre bien-être
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="leading-relaxed">
                Fondé en 2012, L&apos;Éther est né d&apos;une vision simple : créer un espace
                où le temps s&apos;arrête, où chaque soin devient un voyage intérieur.
              </p>
              <p className="leading-relaxed">
                Notre équipe de praticiens passionnés, tous certifiés par la Fédération
                Française de Massages Bien-Être, combine savoir-faire ancestral et
                techniques modernes pour vous offrir des expériences uniques.
              </p>
              <p className="leading-relaxed">
                Au cœur de Paris, notre spa vous accueille dans un cadre raffiné et
                apaisant, pensé pour éveiller vos sens et restaurer votre équilibre.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/a-propos">
                  Découvrir notre histoire
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/a-propos#equipe">
                  Rencontrer l&apos;équipe
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
