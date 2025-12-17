"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift } from "lucide-react"
import gsap from "gsap"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    const ctx = gsap.context(() => {
      // Animate hero content
      gsap.from(contentRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Background Image with Overlay - covers full viewport */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop"
          alt="Spa massage relaxant"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/*
        LAYOUT STRUCTURE:
        - Fixed navbar spacer at top (100px mobile, 120px desktop)
        - Main content area
        - Fixed scroll indicator spacer at bottom (80px)
        - Total min-height = 100vh
      */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* TOP SPACER - Reserved space for navbar - NEVER overlaps */}
        <div className="h-[100px] md:h-[120px] shrink-0" aria-hidden="true" />

        {/* MAIN CONTENT - Grows to fill available space, centered */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="container-spa text-center text-white">
            <div ref={contentRef} className="max-w-4xl mx-auto">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium tracking-wide">Sanctuaire de Bien-être à Paris</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                Retrouvez votre
                <span className="block text-accent-light">essence</span>
              </h1>

              {/* Subheading */}
              <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
                Découvrez un havre de paix où chaque soin est une invitation au voyage intérieur.
                Massages signature, rituels ancestraux et soins d&apos;exception vous attendent.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="group"
                  asChild
                >
                  <Link href="/reserver">
                    Réserver un soin
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline-white"
                  size="lg"
                  asChild
                >
                  <Link href="/bons-cadeaux">
                    <Gift className="w-4 h-4 mr-2" />
                    Offrir un moment
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                  <span className="text-sm">4.9/5 sur Google</span>
                </div>
                <div className="h-4 w-px bg-white/30 hidden sm:block" />
                <div className="text-sm">
                  <span className="text-white">250+</span> avis clients
                </div>
                <div className="h-4 w-px bg-white/30 hidden sm:block" />
                <div className="text-sm">
                  Certifié <span className="text-accent">FFMBE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SPACER - Reserved space for scroll indicator - NEVER overlaps */}
        <div className="h-[80px] shrink-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs tracking-widest uppercase hidden sm:block">Découvrir</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
