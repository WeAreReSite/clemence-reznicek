"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  containerClassName?: string
  speed?: number
  scale?: number
  priority?: boolean
  sizes?: string
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  speed = 0.3,
  scale = 1.2,
  priority = false,
  sizes = "100vw",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={containerRef} className={`overflow-hidden ${containerClassName}`}>
      <div ref={imageRef} className="relative h-full w-full" style={{ transform: `scale(${scale})` }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      </div>
    </div>
  )
}
