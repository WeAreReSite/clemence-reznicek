"use client"

import { useRef, useEffect, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  distance?: number
  className?: string
  once?: boolean
  threshold?: string
  blur?: boolean
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  className = "",
  once = true,
  threshold = "top 95%",
  blur = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const directionOffset = {
      up: { y: distance, x: 0 },
      down: { y: -distance, x: 0 },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
      none: { x: 0, y: 0 },
    }

    const initialState: gsap.TweenVars = {
      opacity: 0,
      ...directionOffset[direction],
    }

    if (blur) {
      initialState.filter = "blur(10px)"
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        initialState,
        {
          opacity: 1,
          x: 0,
          y: 0,
          filter: blur ? "blur(0px)" : undefined,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: threshold,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [direction, delay, duration, distance, once, threshold, blur])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
