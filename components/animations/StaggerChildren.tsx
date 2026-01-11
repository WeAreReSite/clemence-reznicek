"use client"

import { useRef, useEffect, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  stagger?: number
  duration?: number
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: number
  once?: boolean
  threshold?: string
}

export function StaggerChildren({
  children,
  className = "",
  stagger = 0.1,
  duration = 0.8,
  delay = 0,
  direction = "up",
  distance = 40,
  once = true,
  threshold = "top 95%",
}: StaggerChildrenProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const items = containerRef.current.children

    const directionOffset = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          ...directionOffset[direction],
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: threshold,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [stagger, duration, delay, direction, distance, once, threshold])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}
