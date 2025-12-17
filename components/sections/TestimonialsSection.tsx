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

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
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
    <section ref={sectionRef} className="section-padding bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full border border-white" />
      </div>

      <div className="container-spa relative">
        <div className="testimonial-content">
          {/* Section Header */}
          <div className="text-center mb-12">
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
          <div className="max-w-4xl mx-auto">
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
                <CarouselPrevious className="left-0 border-white/20 text-white hover:bg-white/10" />
                <CarouselNext className="right-0 border-white/20 text-white hover:bg-white/10" />
              </div>

              <CarouselDots className="[&_button]:bg-white/30 [&_button.w-6]:bg-accent" />
            </Carousel>
          </div>

          {/* Trust Stats */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-accent mb-2">4.9</div>
              <div className="text-white/60 text-sm">Note moyenne</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-white mb-2">250+</div>
              <div className="text-white/60 text-sm">Avis Google</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-white mb-2">98%</div>
              <div className="text-white/60 text-sm">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
