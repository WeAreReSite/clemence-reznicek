"use client"

import { useRef, useEffect, ReactNode } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  stagger?: number
  blur?: boolean
  once?: boolean
}

export function TextReveal({
  children,
  delay = 0,
  duration = 1,
  className = "",
  stagger = 0.02,
  blur = true,
  once = true,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const text = textRef.current.textContent || ""
    const words = text.split(" ")

    // Clear and rebuild with word spans
    textRef.current.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="word-inner inline-block">${word}</span></span>`)
      .join(" ")

    const wordInners = textRef.current.querySelectorAll(".word-inner")

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordInners,
        {
          yPercent: 100,
          opacity: 0,
          filter: blur ? "blur(8px)" : "blur(0px)",
        },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [delay, duration, stagger, blur, once, children])

  return (
    <div ref={containerRef} className={className}>
      <span ref={textRef}>{children}</span>
    </div>
  )
}
