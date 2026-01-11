"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { therapists } from "@/lib/data"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const floatingCardRef = useRef<HTMLDivElement>(null)
  const decorativeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      // Parallax effect on image
      if (!prefersReducedMotion && imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
      }

      // Image container reveal with clip-path
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Floating card animation
      if (floatingCardRef.current) {
        gsap.fromTo(
          floatingCardRef.current,
          { x: 50, opacity: 0, scale: 0.9 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.5)",
            delay: 0.6,
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )

        // Gentle floating motion (only if reduced motion not preferred)
        if (!prefersReducedMotion) {
          gsap.to(floatingCardRef.current, {
            y: -10,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          })
        }
      }

      // Decorative element animation
      if (decorativeRef.current && !prefersReducedMotion) {
        gsap.fromTo(
          decorativeRef.current,
          { scale: 0, rotation: -90, opacity: 0 },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            delay: 0.3,
            scrollTrigger: {
              trigger: imageContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Content reveal with stagger
      const contentElements = [taglineRef.current, headingRef.current, textRef.current, buttonsRef.current]

      contentElements.forEach((el, index) => {
        if (!el) return

        gsap.fromTo(
          el,
          {
            y: 40,
            opacity: 0,
            filter: index < 2 ? "blur(5px)" : "blur(0px)",
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const sylvie = therapists[0]

  return (
    <section ref={sectionRef} className="section-padding py-16 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container-spa">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div
              ref={imageContainerRef}
              className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div ref={imageRef} className="absolute inset-0 scale-105">
                <Image
                  src={sylvie.image}
                  alt={`${sylvie.title} certifiée en réflexologie plantaire`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Card with Certifications */}
            <div
              ref={floatingCardRef}
              className="absolute -bottom-4 right-2 sm:-right-4 lg:-right-8 bg-card p-3 rounded-lg shadow-xl max-w-[160px] border border-border/50"
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-1.5 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <p className="font-serif text-sm text-foreground">Certifiée</p>
                <p className="text-muted-foreground text-[10px] leading-tight mt-0.5">
                  Réflexologie Bretagne
                </p>
                <div className="flex gap-0.5 mt-1.5 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-[10px]">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div
              ref={decorativeRef}
              className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/40 rounded-2xl -z-10"
            />
            {/* Additional decorative circles */}
            <div className="absolute top-1/4 -left-8 w-4 h-4 rounded-full bg-accent/30 hidden lg:block" />
            <div className="absolute bottom-1/3 -left-12 w-2 h-2 rounded-full bg-primary/40 hidden lg:block" />
          </div>

          {/* Content Column */}
          <div ref={contentRef}>
            <span
              ref={taglineRef}
              className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4"
            >
              {sylvie.title}
            </span>
            <h2
              ref={headingRef}
              className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight"
            >
              {sylvie.name}
            </h2>
            <div ref={textRef} className="space-y-4 text-muted-foreground mb-8">
              <p className="leading-relaxed text-lg">
                {sylvie.bio}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {sylvie.specialties.slice(0, 2).map((specialty) => (
                  <span
                    key={specialty}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent/10 text-accent font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group w-full sm:w-auto" asChild>
                <Link href="/a-propos">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group w-full sm:w-auto" asChild>
                <Link href="/soins">
                  Découvrir les soins
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
