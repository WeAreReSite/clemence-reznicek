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

export function GiftSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".gift-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-muted/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-spa relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="gift-content">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Bons Cadeaux
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Offrez un moment de bonheur
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Que ce soit pour un anniversaire, une occasion spéciale ou simplement pour faire plaisir,
              nos bons cadeaux sont la promesse d&apos;un moment d&apos;évasion inoubliable.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Livraison instantanée par email</p>
                  <p className="text-muted-foreground text-sm">Parfait pour les cadeaux de dernière minute</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Écrin élégant en option</p>
                  <p className="text-muted-foreground text-sm">Pour une présentation raffinée</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Validité 12 mois</p>
                  <p className="text-muted-foreground text-sm">Le temps de choisir le moment idéal</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/bons-cadeaux">
                Offrir un bon cadeau
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop"
                alt="Coffret cadeau spa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Price Cards */}
            <div className="absolute -bottom-6 left-6 right-6 flex gap-4">
              <div className="flex-1 bg-card p-4 rounded-xl shadow-lg text-center">
                <p className="text-accent font-medium mb-1">À partir de</p>
                <p className="font-serif text-3xl text-foreground">60€</p>
              </div>
              <div className="flex-1 bg-primary p-4 rounded-xl shadow-lg text-center">
                <p className="text-accent font-medium mb-1">Best-seller</p>
                <p className="font-serif text-3xl text-white">150€</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
