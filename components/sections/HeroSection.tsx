"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import { spaInfo } from "@/lib/data"
import { FloatingPetals } from "@/components/ui/floating-petals"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subheadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const floatingElement1 = useRef<HTMLDivElement>(null)
  const floatingElement2 = useRef<HTMLDivElement>(null)
  const floatingElement3 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Main timeline for hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Tagline badge animation
      tl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        0.3
      )

      // Heading word-by-word reveal
      if (headingRef.current) {
        // Use the original tagline from data to avoid reading corrupted DOM text on re-navigation
        const words = spaInfo.tagline.split(" ")
        headingRef.current.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden mr-[0.18em]"><span class="word-span inline-block">${word}</span></span>`)
          .join("")

        const wordSpans = headingRef.current.querySelectorAll(".word-span")
        tl.fromTo(
          wordSpans,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.08 },
          0.5
        )
      }

      // Subheading fade in with blur
      tl.fromTo(
        subheadingRef.current,
        { y: 30, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
        1.0
      )

      // CTA buttons stagger
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          1.3
        )
      }

      // Trust indicators
      tl.fromTo(
        trustRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.6
      )

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.8
      )

      // Floating elements - organic breathing motion
      const floatingElements = [floatingElement1.current, floatingElement2.current, floatingElement3.current]

      floatingElements.forEach((el, index) => {
        if (!el) return

        // Initial fade in
        gsap.fromTo(
          el,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.5, delay: 0.5 + index * 0.2, ease: "elastic.out(1, 0.5)" }
        )

        // Continuous floating animation
        gsap.to(el, {
          y: index % 2 === 0 ? -20 : 20,
          x: index === 1 ? 10 : -10,
          duration: 3 + index * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.3,
        })

        // Subtle rotation
        gsap.to(el, {
          rotation: index % 2 === 0 ? 5 : -5,
          duration: 4 + index * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
      })

      // Parallax effect on scroll for background
      gsap.to(".hero-bg-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      {/* Background Image with Overlay - covers full viewport */}
      <div className="absolute inset-0">
        <div className="hero-bg-image absolute inset-0 scale-110">
          <Image
            src="/images/hero-image.png"
            alt={`Espace bien-être ${spaInfo.name}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Floating Decorative Elements - Zen aesthetic */}
      <div
        ref={floatingElement1}
        className="absolute top-1/4 left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent/20 blur-2xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={floatingElement2}
        className="absolute bottom-1/3 right-[15%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-primary/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={floatingElement3}
        className="absolute top-1/2 left-1/4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-secondary/20 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative circles - subtle organic shapes */}
      <div className="absolute top-20 right-20 w-2 h-2 rounded-full bg-accent/40 hidden md:block" />
      <div className="absolute bottom-40 left-16 w-3 h-3 rounded-full bg-white/20 hidden md:block" />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/50 hidden md:block" />

      {/* Floating Flower Petals - Zen & Cocooning aesthetic */}
      <FloatingPetals />

      <div className="relative z-10 min-h-svh flex flex-col">
        {/* TOP SPACER - Reserved space for navbar (reduced on short viewports) */}
        <div className="h-[80px] md:h-[100px] lg:h-[120px] shrink-0" aria-hidden="true" />

        {/* MAIN CONTENT - Grows to fill available space, centered */}
        <div className="flex-1 flex items-center justify-center px-4 py-4 md:py-8">
          <div className="container-spa text-center text-white">
            <div ref={contentRef} className="max-w-4xl mx-auto">
              {/* Tagline */}
              <div
                ref={taglineRef}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium tracking-wide">Votre espace bien-être à {spaInfo.address.city}</span>
              </div>

              {/* Main Heading */}
              <h1
                ref={headingRef}
                className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 leading-tight"
              >
                {spaInfo.tagline}
              </h1>

              {/* Subheading */}
              <p
                ref={subheadingRef}
                className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {spaInfo.description}
              </p>

              {/* CTAs */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  className="group relative overflow-hidden"
                  asChild
                >
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Réserver un soin
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outline-white"
                  size="lg"
                  className="group"
                  asChild
                >
                  <Link href="/soins">
                    <span className="relative z-10 flex items-center">
                      Découvrir nos soins
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                ref={trustRef}
                className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white/70"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent transition-transform hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }}>★</span>
                    ))}
                  </div>
                  <span className="text-sm">5/5 sur Google</span>
                </div>
                <div className="h-4 w-px bg-white/30 hidden sm:block" />
                <div className="text-sm">
                  <span className="text-white font-medium">8</span> avis clients
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SPACER - Scroll indicator (compact on short viewports) */}
        <div
          ref={scrollIndicatorRef}
          className="h-[60px] md:h-[80px] shrink-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-white/60" aria-hidden="true">
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
