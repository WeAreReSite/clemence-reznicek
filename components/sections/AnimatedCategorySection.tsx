"use client"

import { useRef, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Clock, ArrowRight, Sparkles, Check, X, Calendar, ChevronDown } from "lucide-react"
import { Service } from "@/lib/store"
import { formatPrice, formatDuration } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { services as allServices } from "@/lib/data"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Category {
  id: string
  name: string
  description: string
  image?: string
  images?: string[]
}

interface AnimatedCategorySectionProps {
  category: Category
  services: Service[]
  index: number
}

// Category accent colors for expanded cards - Warm, cocooning, feminine palette
const categoryAccents: Record<string, { bg: string; text: string; gradient: string }> = {
  reflexologie: {
    bg: "bg-primary",
    text: "text-primary",
    gradient: "from-primary/15 via-primary/10 to-secondary-light/20",
  },
  drainage: {
    bg: "bg-primary",
    text: "text-primary",
    gradient: "from-primary/15 via-secondary-light/15 to-accent-light/20",
  },
  amma: {
    bg: "bg-secondary",
    text: "text-secondary-dark",
    gradient: "from-secondary/15 via-secondary-light/15 to-primary/10",
  },
  "massages-mixtes": {
    bg: "bg-accent",
    text: "text-accent",
    gradient: "from-accent/15 via-secondary-light/15 to-primary/10",
  },
  "beaute-mains": {
    bg: "bg-secondary",
    text: "text-secondary-dark",
    gradient: "from-secondary/20 via-secondary-light/15 to-accent-light/15",
  },
}

// Expandable service item (replaces the link to individual pages)
function ExpandableServiceItem({
  service,
  index,
  isExpanded,
  onToggle,
}: {
  service: Service
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const itemRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLUListElement>(null)

  const accent = categoryAccents[service.category] || categoryAccents.reflexologie

  useGSAP(() => {
    if (!itemRef.current) return

    gsap.fromTo(
      itemRef.current,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        delay: index * 0.08,
      }
    )
  }, { scope: itemRef })

  // Animate benefits when expanded
  useGSAP(() => {
    if (isExpanded && benefitsRef.current) {
      const items = benefitsRef.current.children
      gsap.fromTo(
        items,
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.15,
        }
      )
    }
  }, [isExpanded])

  // Get related services
  const relatedServices = allServices
    .filter((s) => s.category === service.category && s.id !== service.id && !s.isAddon)
    .slice(0, 3)

  return (
    <div
      ref={itemRef}
      className={`
        rounded-xl transition-all duration-500 opacity-0
        ${isExpanded
          ? "bg-card border border-primary/20 shadow-lg"
          : "hover:bg-primary/5"
        }
      `}
    >
      {/* Header - Always visible */}
      <button
        onClick={onToggle}
        className={`
          w-full flex items-center justify-between py-4 px-4 text-left
          ${isExpanded ? "" : ""}
        `}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-1 h-5 rounded-full ${accent.bg}`} />
            <h4 className={`font-medium transition-colors ${isExpanded ? "text-primary" : "text-foreground"}`}>
              {service.name}
            </h4>
            {service.isPopular && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full shrink-0">
                <Sparkles className="w-3 h-3" />
                Populaire
              </span>
            )}
          </div>
          {!isExpanded && (
            <p className="text-sm text-muted-foreground line-clamp-1 ml-3">
              {service.shortDescription}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 ml-4 shrink-0">
          <div className="text-right hidden sm:block">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-0.5">
              <Clock className="w-3 h-3" />
              {formatDuration(service.duration)}
            </div>
            <div className="font-semibold text-primary">
              {formatPrice(service.price)}
            </div>
          </div>
          <div
            className={`
              p-2 rounded-full transition-all duration-300
              ${isExpanded
                ? "bg-primary text-white rotate-180"
                : "bg-primary/10 text-primary hover:bg-primary/20"
              }
            `}
          >
            {isExpanded ? (
              <X className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <div
        ref={contentRef}
        className={`
          overflow-hidden transition-all duration-500 ease-out
          ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pb-6 space-y-6">
          {/* Gradient Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Abstract Background for Expanded Content */}
          <div className={`relative rounded-xl p-6 bg-gradient-to-br ${accent.gradient} overflow-hidden`}>
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Full Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Benefits */}
              <div>
                <h5 className="font-medium text-foreground mb-3">Bienfaits</h5>
                <ul ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 opacity-0">
                      <div className={`w-5 h-5 rounded-full ${accent.bg}/20 flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${accent.text}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 sm:flex-none" asChild>
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Reserver ce soin
              </Link>
            </Button>
          </div>

          {/* Related Suggestions */}
          {relatedServices.length > 0 && (
            <div className="pt-4 border-t border-border/50">
              <h5 className="font-medium text-foreground mb-3 text-sm">Vous pourriez aussi aimer</h5>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map((related) => (
                  <button
                    key={related.id}
                    onClick={(e) => {
                      e.stopPropagation()
                      // Scroll to the related service
                      const element = document.getElementById(`service-${related.id}`)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" })
                        // Trigger click after scroll
                        setTimeout(() => {
                          const button = element.querySelector("button")
                          if (button) button.click()
                        }, 500)
                      }
                    }}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all text-sm"
                  >
                    <span className="text-foreground">{related.name}</span>
                    <span className="text-primary font-medium">{formatPrice(related.price)}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Regular category section with single image
function RegularCategorySection({
  category,
  services,
  index,
}: AnimatedCategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null)

  // Image on right for even index (0, 2, 4), left for odd index (1, 3)
  const imageOnRight = index % 2 === 0

  // Alternate backgrounds - Warm, cocooning feel
  const bgClass = index % 2 === 0
    ? "bg-gradient-to-br from-primary-light/15 via-muted/30 to-background"
    : "bg-gradient-to-br from-secondary-light/20 via-accent-light/10 to-muted/20"

  useGSAP(() => {
    if (!sectionRef.current) return

    // Image reveal with parallax
    if (imageRef.current) {
      const img = imageRef.current.querySelector("img")
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.3 },
          {
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        )
      }

      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          x: imageOnRight ? 60 : -60,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      )
    }

    // Content reveal
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: imageOnRight ? -40 : 40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          delay: 0.2,
        }
      )
    }
  }, { scope: sectionRef })

  const handleToggle = useCallback((serviceId: string) => {
    setExpandedServiceId((prev) => (prev === serviceId ? null : serviceId))
  }, [])

  const imageElement = (
    <div
      ref={imageRef}
      className="relative h-[min(400px,65vh)] md:h-[min(500px,60vh)] lg:h-[min(600px,55vh)] rounded-3xl overflow-hidden opacity-0 shadow-2xl"
    >
      {category.image && (
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  )

  const contentElement = (
    <div ref={contentRef} className="opacity-0">
      {/* Category Header */}
      <div className="mb-8">
        <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs mb-3">
          {String(index + 1).padStart(2, "0")} — {category.name}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          {category.name}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {category.description}
        </p>
      </div>

      {/* Services List - Expandable */}
      <div className="divide-y divide-border/50">
        {services.map((service, serviceIndex) => (
          <div key={service.id} id={`service-${service.id}`}>
            <ExpandableServiceItem
              service={service}
              index={serviceIndex}
              isExpanded={expandedServiceId === service.id}
              onToggle={() => handleToggle(service.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id={category.id}
      className={`section-padding scroll-mt-40 ${bgClass}`}
    >
      <div className="container-spa">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${imageOnRight ? "" : "lg:grid-flow-dense"}`}>
          <div className={imageOnRight ? "order-1" : "order-1 lg:order-2"}>
            {contentElement}
          </div>
          <div className={`${imageOnRight ? "order-2" : "order-2 lg:order-1"} lg:sticky lg:top-32`}>
            {imageElement}
          </div>
        </div>
      </div>
    </section>
  )
}

// Special beaute des mains section with 3-image parallax gallery
function BeauteMainsSection({
  category,
  services,
  index,
}: AnimatedCategorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const image1Ref = useRef<HTMLDivElement>(null)
  const image2Ref = useRef<HTMLDivElement>(null)
  const image3Ref = useRef<HTMLDivElement>(null)
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null)

  const images = category.images || []

  useGSAP(() => {
    if (!sectionRef.current) return

    // Content reveal
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      )
    }

    // Staggered image reveals with different parallax speeds
    const imageRefs = [image1Ref, image2Ref, image3Ref]
    const delays = [0, 0.15, 0.3]
    const parallaxSpeeds = [15, 25, 20] // Different speeds for depth effect

    imageRefs.forEach((ref, i) => {
      if (!ref.current) return

      // Initial reveal animation
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          delay: delays[i],
        }
      )

      // Parallax scroll effect
      gsap.to(ref.current, {
        yPercent: -parallaxSpeeds[i],
        ease: "none",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Image scale on scroll
      const img = ref.current.querySelector("img")
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.2 },
          {
            scale: 1.05,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        )
      }
    })
  }, { scope: sectionRef })

  const handleToggle = useCallback((serviceId: string) => {
    setExpandedServiceId((prev) => (prev === serviceId ? null : serviceId))
  }, [])

  // Separate main services and addons
  const mainServices = services.filter(s => !s.isAddon)
  const addonServices = services.filter(s => s.isAddon)

  return (
    <section
      ref={sectionRef}
      id={category.id}
      className="section-padding scroll-mt-40 bg-gradient-to-b from-secondary-light/25 via-accent-light/15 to-muted/20 overflow-hidden"
    >
      <div className="container-spa">
        {/* Header */}
        <div ref={contentRef} className="text-center mb-16 opacity-0">
          <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs mb-3">
            {String(index + 1).padStart(2, "0")} — {category.name}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {category.name}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* 3-Image Parallax Gallery - Height capped for short viewports */}
        <div
          ref={galleryRef}
          className="relative h-auto md:h-[min(600px,65vh)] lg:h-[min(700px,60vh)] mb-16 flex flex-col md:block gap-4 md:gap-0"
        >
          {/* Image 1 - Full picture visible */}
          <div
            ref={image1Ref}
            className="relative md:absolute left-0 top-0 w-full md:w-[45%] h-[min(300px,40vh)] sm:h-[min(350px,45vh)] md:h-[70%] rounded-2xl overflow-hidden shadow-2xl opacity-0 z-10 bg-secondary-light/30"
          >
            {images[0] && (
              <Image
                src={images[0]}
                alt={`${category.name} - Image 1`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-light/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Image 2 - Full picture visible */}
          <div
            ref={image2Ref}
            className="relative md:absolute right-0 top-0 md:top-[5%] w-full md:w-[40%] h-[min(250px,35vh)] sm:h-[min(300px,40vh)] md:h-[55%] rounded-2xl overflow-hidden shadow-xl opacity-0 z-10 bg-accent-light/30"
          >
            {images[1] && (
              <Image
                src={images[1]}
                alt={`${category.name} - Image 2`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-light/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Image 3 - Full picture visible */}
          <div
            ref={image3Ref}
            className="relative md:absolute left-0 md:left-1/2 md:-translate-x-1/2 bottom-0 w-full md:w-[35%] h-[min(250px,35vh)] sm:h-[min(300px,40vh)] md:h-[50%] rounded-2xl overflow-hidden shadow-xl opacity-0 z-20 bg-primary-light/30"
          >
            {images[2] && (
              <Image
                src={images[2]}
                alt={`${category.name} - Image 3`}
                fill
                className="object-contain p-2"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-light/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Services in two columns: Main services + Addons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Main Services */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6">Nos prestations</h3>
            <div className="divide-y divide-border/50 bg-card/50 rounded-2xl p-4">
              {mainServices.map((service, serviceIndex) => (
                <div key={service.id} id={`service-${service.id}`}>
                  <ExpandableServiceItem
                    service={service}
                    index={serviceIndex}
                    isExpanded={expandedServiceId === service.id}
                    onToggle={() => handleToggle(service.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Addon Services */}
          {addonServices.length > 0 && (
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">Options & supplements</h3>
              <div className="grid grid-cols-1 gap-3">
                {addonServices.map((service) => (
                  <div
                    key={service.id}
                    className="p-4 rounded-xl bg-card/60 border border-border/50 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">
                          {service.name}
                        </h4>
                        <p className="text-muted-foreground text-xs line-clamp-2">
                          {service.shortDescription}
                        </p>
                      </div>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">
                        +{service.price < 1 ? `${service.price * 100}c` : `${service.price}€`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function AnimatedCategorySection(props: AnimatedCategorySectionProps) {
  // Use special layout for beaute des mains (has multiple images)
  if (props.category.images && props.category.images.length > 1) {
    return <BeauteMainsSection {...props} />
  }

  return <RegularCategorySection {...props} />
}
