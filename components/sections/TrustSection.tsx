"use client"

import { useRef, useEffect } from "react"
import { Award, Shield, Heart, Leaf } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const trustPoints = [
  {
    icon: Award,
    title: "Praticiens Certifiés",
    description: "Tous nos praticiens sont certifiés FFMBE avec plus de 200 heures de formation professionnelle.",
  },
  {
    icon: Leaf,
    title: "Produits Biologiques",
    description: "Nous utilisons exclusivement des huiles essentielles et produits biologiques de haute qualité.",
  },
  {
    icon: Heart,
    title: "Soins Personnalisés",
    description: "Chaque soin est adapté à vos besoins spécifiques pour une expérience sur mesure.",
  },
  {
    icon: Shield,
    title: "Satisfaction Garantie",
    description: "Votre bien-être est notre priorité. Si vous n'êtes pas satisfait, nous ferons tout pour y remédier.",
  },
]

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!itemsRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(itemsRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-muted/50">
      <div className="container-spa">
        <div
          ref={itemsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
