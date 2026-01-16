"use client"

import { useRef, useEffect } from "react"
import { spaInfo, faqs, therapists } from "@/lib/data"
import { CalendlyWidget } from "@/components/CalendlyWidget"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Calendar, Instagram, Facebook, Sparkles } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ContactPageClient() {
  const heroRef = useRef<HTMLElement>(null)
  const heroContentRef = useRef<HTMLDivElement>(null)
  const blobRefs = useRef<(HTMLDivElement | null)[]>([])
  const quickLinksRef = useRef<HTMLDivElement>(null)
  const infoCardsRef = useRef<HTMLDivElement>(null)
  const faqSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      // Hero content stagger
      if (heroContentRef.current) {
        const elements = heroContentRef.current.children
        gsap.fromTo(
          elements,
          { y: 60, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3,
          }
        )
      }

      // Floating blobs animation
      if (!prefersReducedMotion) {
        blobRefs.current.forEach((blob, index) => {
          if (!blob) return
          gsap.to(blob, {
            x: index % 2 === 0 ? "+=30" : "-=20",
            y: index === 1 ? "-=25" : "+=20",
            scale: 1 + (index * 0.05),
            duration: 8 + index * 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          })
        })
      }

      // Quick links reveal
      if (quickLinksRef.current) {
        gsap.fromTo(
          quickLinksRef.current.children,
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            delay: 0.8,
            ease: "back.out(1.4)",
          }
        )
      }

      // Info cards
      if (infoCardsRef.current) {
        gsap.fromTo(
          infoCardsRef.current.children,
          { y: 60, opacity: 0, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: infoCardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }


      // FAQ section
      if (faqSectionRef.current) {
        const faqItems = faqSectionRef.current.querySelectorAll(".faq-item")
        gsap.fromTo(
          faqItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faqSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const therapist = therapists[0]

  return (
    <>
      {/* Hero Section - Artistic & Immersive */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-28 lg:pt-32">
        {/* Layered Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />

        {/* Animated Organic Blobs */}
        <div
          ref={(el) => { blobRefs.current[0] = el }}
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-emerald-400/10 to-transparent blur-3xl"
        />
        <div
          ref={(el) => { blobRefs.current[1] = el }}
          className="absolute bottom-[15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/15 via-rose-400/10 to-transparent blur-3xl"
        />
        <div
          ref={(el) => { blobRefs.current[2] = el }}
          className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-secondary/20 to-transparent blur-3xl"
        />

        {/* Geometric Accents */}
        <div className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-primary/60 animate-pulse-slow" />
        <div className="absolute top-[30%] right-[25%] w-2 h-2 rounded-full bg-accent/50" />
        <div className="absolute bottom-[35%] left-[40%] w-4 h-4 rounded-full border-2 border-primary/30" />
        <div className="absolute top-[60%] right-[10%] w-1.5 h-1.5 rounded-full bg-secondary/60" />

        {/* Content */}
        <div className="container-spa relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Left Content */}
            <div className="min-w-0 w-full max-w-2xl">
              <div ref={heroContentRef}>
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-8 opacity-0">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-primary text-sm font-medium">Bienvenue</span>
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>

                {/* Main Heading - Artistic Typography */}
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[0.95] tracking-tight opacity-0">
                  Parlons de
                  <span className="block text-gradient">votre bien-</span>
                  <span className="block">
                    <span className="text-gradient">être</span>
                  </span>
                </h1>

                {/* Subtext */}
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 opacity-0">
                  Je suis {therapist.name}, praticienne passionnée. Chaque rencontre est
                  unique, chaque soin est personnalisé pour vous accompagner vers le bien-être.
                </p>

                {/* Quick Action Link */}
                <div ref={quickLinksRef} className="flex flex-wrap gap-4">
                  <Button size="xl" variant="outline" className="group backdrop-blur-sm bg-background/50" asChild>
                    <a href={`tel:${spaInfo.phone}`}>
                      <Phone className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                      {spaInfo.phone}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Calendly Widget */}
            <div className="min-w-0 w-full">
              <div className="booking-card bg-card rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border border-border/50 relative overflow-hidden">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/5 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground">Prendre rendez-vous</h3>
                      <p className="text-sm text-muted-foreground">Sélectionnez votre créneau préféré</p>
                    </div>
                  </div>

                  <CalendlyWidget
                    url={spaInfo.calendlyUrl}
                    backgroundColor="e8777c"
                    primaryColor="ffffff"
                    height={500}
                    className="rounded-xl overflow-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Info Cards Section - Bento Grid Style */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        <div className="container-spa relative">
          <div
            ref={infoCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
            style={{ perspective: "1000px" }}
          >
            {/* Phone - Featured Card */}
            <a
              href={`tel:${spaInfo.phone}`}
              className="group md:col-span-2 lg:col-span-1 lg:row-span-2 bg-primary text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="mb-4">
                  <p className="text-white/70 text-sm mb-1">Téléphone</p>
                  <p className="text-2xl font-serif">{spaInfo.phone}</p>
                </div>
                <p className="text-white/60 text-sm">
                  Appel direct pour réserver ou poser vos questions
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${spaInfo.email}`}
              className="group bg-card rounded-3xl p-5 sm:p-6 border border-border/50 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-accent group-hover:scale-110">
                  <Mail className="w-6 h-6 text-accent transition-colors group-hover:text-white" />
                </div>
                <p className="text-muted-foreground text-xs mb-1">Email</p>
                <p className="text-foreground font-medium text-sm break-words overflow-hidden">{spaInfo.email}</p>
              </div>
            </a>

            {/* Hours */}
            <div className="bg-card rounded-3xl p-5 sm:p-6 border border-border/50 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-muted-foreground text-xs mb-2">Horaires</p>
                <div className="space-y-1 text-sm">
                  <p><span className="text-foreground font-medium">Lun-Ven</span> <span className="text-muted-foreground">{spaInfo.hours.weekdays}</span></p>
                  <p><span className="text-foreground font-medium">Sam</span> <span className="text-muted-foreground">{spaInfo.hours.saturday}</span></p>
                </div>
              </div>
            </div>

            {/* Address */}
            <a
              href={`https://maps.google.com/?q=${spaInfo.address.street}, ${spaInfo.address.postalCode} ${spaInfo.address.city}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group md:col-span-2 lg:col-span-1 bg-card rounded-3xl p-5 sm:p-6 border border-border/50 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-rose-500 group-hover:scale-110">
                  <MapPin className="w-6 h-6 text-rose-500 transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">Adresse</p>
                  <p className="text-foreground font-medium text-sm">{spaInfo.address.street}</p>
                  <p className="text-muted-foreground text-sm">{spaInfo.address.postalCode} {spaInfo.address.city}</p>
                </div>
              </div>
            </a>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-secondary/20 to-accent/10 rounded-3xl p-5 sm:p-6 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-muted-foreground text-xs mb-4">Suivez-moi</p>
                <div className="flex gap-3">
                  <a
                    href={spaInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={spaInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section - Minimal & Elegant */}
      <section ref={faqSectionRef} className="section-padding bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs mb-4">
                Questions fréquentes
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                Tout savoir avant
                <br />
                <span className="text-gradient">votre visite</span>
              </h2>
            </div>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="faq-item bg-card rounded-2xl px-6 border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md data-[state=open]:shadow-lg data-[state=open]:border-primary/20 data-[state=open]:bg-card"
                >
                  <AccordionTrigger className="text-left py-5 hover:no-underline [&[data-state=open]]:text-primary transition-colors duration-300">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Vous avez d&apos;autres questions ?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a href={`mailto:${spaInfo.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Écrivez-moi
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={`tel:${spaInfo.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Appelez-moi
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
