"use client"

import { useEffect, useRef, ReactNode } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Initialize Lenis with spa-like smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Slightly slower for luxury feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth expo decay
      smoothWheel: true,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    // Add Lenis raf to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP lag smoothing for smoother animations
    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  // Handle instant scroll to top on route change
  useEffect(() => {
    // Instantly scroll to top when route changes
    window.scrollTo(0, 0)

    // Reset Lenis scroll position if it exists
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return <>{children}</>
}
