"use client"

import { useRef } from "react"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SoinsCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !contentRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Background reveal
    tl.fromTo(
      sectionRef.current,
      { clipPath: "inset(0 50% 0 50%)" },
      { clipPath: "inset(0 0% 0 0%)", duration: 0.8, ease: "power3.inOut" },
      0
    )

    // Content fade in
    const elements = contentRef.current.children
    tl.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      },
      0.4
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      id="soins-cta"
      className="relative section-padding bg-primary overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-spa relative z-10">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <span className="inline-block text-accent-light font-medium tracking-widest uppercase text-sm mb-4">
            Prendre soin de vous
          </span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Besoin de conseils personnalisés ?
          </h2>

          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Je suis à votre disposition pour vous guider vers le soin le plus
            adapté à vos besoins et vos attentes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="accent"
              className="w-full sm:w-auto group"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Réserver un soin
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline-white"
              className="w-full sm:w-auto group"
              asChild
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Me contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
