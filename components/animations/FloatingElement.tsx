"use client"

import { useRef, useEffect, ReactNode } from "react"
import gsap from "gsap"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  amplitude?: number
  duration?: number
  delay?: number
  direction?: "vertical" | "horizontal" | "circular"
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 15,
  duration = 4,
  delay = 0,
  direction = "vertical",
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    let animation: gsap.core.Tween | gsap.core.Timeline

    if (direction === "circular") {
      // Circular floating motion
      animation = gsap.to(ref.current, {
        keyframes: [
          { x: amplitude * 0.5, y: -amplitude, duration: duration * 0.25 },
          { x: amplitude, y: 0, duration: duration * 0.25 },
          { x: amplitude * 0.5, y: amplitude, duration: duration * 0.25 },
          { x: 0, y: 0, duration: duration * 0.25 },
        ],
        ease: "sine.inOut",
        repeat: -1,
        delay,
      })
    } else if (direction === "horizontal") {
      animation = gsap.to(ref.current, {
        x: amplitude,
        duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      })
    } else {
      // Vertical floating (default)
      animation = gsap.to(ref.current, {
        y: -amplitude,
        duration,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay,
      })
    }

    return () => {
      animation.kill()
    }
  }, [amplitude, duration, delay, direction])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
