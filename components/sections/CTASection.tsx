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

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 30,
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
    <section ref={sectionRef} className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-spa relative">
        <div className="max-w-4xl mx-auto text-center cta-content">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Prêt(e) à vous détendre ?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Votre moment de bien-être vous attend
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Réservez dès maintenant et laissez-vous transporter dans un univers de détente et de sérénité.
            Notre équipe est impatiente de vous accueillir.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="xl" className="w-full sm:w-auto sm:min-w-[220px]" asChild>
              <Link href="/reserver">
                Réserver maintenant
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto sm:min-w-[220px]" asChild>
              <a href={`tel:${spaInfo.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Nous appeler
              </a>
            </Button>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <Clock className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-1">Horaires</h3>
              <p className="text-muted-foreground text-sm">
                Lun - Ven : {spaInfo.hours.weekdays}<br />
                Sam : {spaInfo.hours.saturday}<br />
                Dim : {spaInfo.hours.sunday}
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <MapPin className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-1">Adresse</h3>
              <p className="text-muted-foreground text-sm">
                {spaInfo.address.street}<br />
                {spaInfo.address.postalCode} {spaInfo.address.city}
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <Phone className="w-6 h-6 text-accent mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-1">Contact</h3>
              <p className="text-muted-foreground text-sm">
                {spaInfo.phone}<br />
                {spaInfo.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
