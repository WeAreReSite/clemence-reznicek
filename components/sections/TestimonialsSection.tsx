"use client"

import { useRef, useEffect } from "react"
import { testimonials } from "@/lib/data"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const decorativeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        const elements = headerRef.current.children
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
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Carousel fade in
      if (carouselRef.current) {
        gsap.fromTo(
          carouselRef.current,
          { y: 50, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Stats counter animation
      if (statsRef.current) {
        const statItems = statsRef.current.children
        gsap.fromTo(
          statItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Decorative elements floating animation (only if reduced motion not preferred)
      if (!prefersReducedMotion) {
        decorativeRefs.current.forEach((el, index) => {
          if (!el) return

          gsap.to(el, {
            y: index % 2 === 0 ? -15 : 15,
            x: index === 1 ? 10 : -5,
            duration: 4 + index,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.5,
          })

          gsap.to(el, {
            scale: 1 + (index * 0.05),
            duration: 3 + index,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          })
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Helper function to convert date format to ISO
  const convertDateToISO = (date: string) => {
    // Convert "2025-08" to "2025-08-01"
    if (date.match(/^\d{4}-\d{2}$/)) {
      return `${date}-01`
    }
    return date
  }

  // Review Schema - references main HealthAndBeautyBusiness from layout.tsx
  // Uses @id reference to avoid duplicate LocalBusiness schema
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://syl-vie-bien-etre.fr/",
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      "@id": `https://syl-vie-bien-etre.fr/#review-${testimonial.id}`,
      author: {
        "@type": "Person",
        name: testimonial.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: testimonial.text,
      datePublished: convertDateToISO(testimonial.date),
    })),
  }

  return (
    <section ref={sectionRef} className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Reviews Schema - references main business entity */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema).replace(/</g, '\\u003c'),
        }}
      />
      {/* Background Pattern - Decorative circles */}
      <div
        ref={(el) => { decorativeRefs.current[0] = el }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white/5 pointer-events-none"
      />
      <div
        ref={(el) => { decorativeRefs.current[1] = el }}
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white/5 pointer-events-none"
      />
      <div
        ref={(el) => { decorativeRefs.current[2] = el }}
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-white/3 pointer-events-none"
      />

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-black/10 to-transparent pointer-events-none" />

      <div className="container-spa relative">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Témoignages
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Découvrez les expériences de ceux qui nous ont fait confiance.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div ref={carouselRef} className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-full">
                  <div className="px-4 md:px-8 py-4">
                    <div className="relative text-center">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-xl">★</span>
                        ))}
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-xl md:text-2xl font-serif text-white/95 leading-relaxed mb-8">
                        &ldquo;{testimonial.text}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-white/60 text-sm">{testimonial.service}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300" />
              <CarouselNext className="right-0 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300" />
            </div>

            <CarouselDots className="[&_button]:bg-white/30 [&_button.w-6]:bg-accent" />
          </Carousel>
        </div>

        {/* Trust Stats */}
        <div ref={statsRef} className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center group">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2 transition-transform duration-300 group-hover:scale-110">5.0</div>
            <div className="text-white/60 text-sm">Note moyenne</div>
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center group">
            <div className="font-serif text-4xl md:text-5xl text-white mb-2 transition-transform duration-300 group-hover:scale-110">8</div>
            <div className="text-white/60 text-sm">Avis Google</div>
          </div>
          <div className="h-12 w-px bg-white/20 hidden sm:block" />
          <div className="text-center group">
            <div className="font-serif text-4xl md:text-5xl text-white mb-2 transition-transform duration-300 group-hover:scale-110">100%</div>
            <div className="text-white/60 text-sm">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </section>
  )
}
