"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SoinsHero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    if (!heroRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate subtitle
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.2
      )
    }

    // Animate title with split text effect (word by word)
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word")
      tl.fromTo(
        words,
        { opacity: 0, y: 40, rotateX: -20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
        },
        0.4
      )
    }

    // Animate description
    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        0.8
      )
    }

  }, { scope: heroRef })

  const titleWords = ["Une", "carte", "de", "soins", "d'exception"]

  return (
    <section
      ref={heroRef}
      className="relative pt-32 pb-24 md:pb-32 bg-gradient-to-br from-primary/10 via-muted/40 to-secondary/10 overflow-hidden"
    >
      {/* Background Pattern - More colorful */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[5%] w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-[10%] w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-44 sm:w-60 md:w-80 h-44 sm:h-60 md:h-80 bg-secondary/15 rounded-full blur-3xl" />
      </div>


      <div className="container-spa relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span
            ref={subtitleRef}
            className="inline-block text-accent font-medium tracking-[0.2em] uppercase text-sm mb-6 opacity-0"
          >
            Nos Soins
          </span>

          <h1
            ref={titleRef}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 perspective-500"
          >
            {titleWords.map((word, i) => (
              <span
                key={i}
                className="word inline-block mr-[0.25em] last:mr-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={descRef}
            className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-0"
          >
            Chaque soin est une invitation au voyage sensoriel. Découvrez nos
            techniques ancestrales et modernes, personnalisées selon vos besoins
            pour retrouver harmonie et sérénité.
          </p>

          {/* Decorative Line */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
