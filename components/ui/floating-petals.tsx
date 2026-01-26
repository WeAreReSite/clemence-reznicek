"use client"

import { useEffect, useRef, useMemo } from "react"
import gsap from "gsap"

interface Petal {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  color: string
}

// Seeded random number generator for consistent results
function seededRandom(seed: number): () => number {
  return function() {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
}

// Pre-generated petal data outside of component for stability - Warmer tones
const PETAL_COLORS = [
  "rgba(196, 145, 143, 0.6)",  // Rich dusty rose
  "rgba(221, 188, 186, 0.55)", // Warm blush
  "rgba(168, 117, 115, 0.45)", // Deep rose
  "rgba(212, 187, 168, 0.5)",  // Warm sand/rose gold
  "rgba(184, 144, 122, 0.45)", // Terracotta rose
]

function generatePetals(): Petal[] {
  const random = seededRandom(42) // Fixed seed for consistent rendering
  return Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: random() * 100,
    y: -10 - random() * 20,
    size: 12 + random() * 16,
    rotation: random() * 360,
    color: PETAL_COLORS[Math.floor(random() * 5)],
  }))
}

const INITIAL_PETALS = generatePetals()

export function FloatingPetals() {
  const containerRef = useRef<HTMLDivElement>(null)
  const petalsRef = useRef<(HTMLDivElement | null)[]>([])

  // Use stable pre-generated petals
  const petals = useMemo(() => INITIAL_PETALS, [])

  useEffect(() => {
    if (!containerRef.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    // Track if component is still mounted
    let isMounted = true

    const ctx = gsap.context(() => {
      petalsRef.current.forEach((petal, index) => {
        if (!petal) return

        const delay = index * 0.8 + Math.random() * 2
        const duration = 8 + Math.random() * 6

        // Main falling animation
        gsap.to(petal, {
          y: "120vh",
          x: `+=${(Math.random() - 0.5) * 150}`,
          rotation: `+=${180 + Math.random() * 360}`,
          duration,
          delay,
          ease: "none",
          repeat: -1,
          onRepeat: function() {
            // Only reset if component is still mounted
            if (!isMounted || !petal.isConnected) return
            // Reset position for infinite loop
            gsap.set(petal, {
              y: "-10vh",
              x: `${Math.random() * 100}vw`,
            })
          },
        })

        // Gentle swaying motion
        gsap.to(petal, {
          x: `+=${20 + Math.random() * 30}`,
          duration: 2 + Math.random() * 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: delay + Math.random(),
        })

        // Slight scale breathing
        gsap.to(petal, {
          scale: 0.8 + Math.random() * 0.4,
          duration: 3 + Math.random() * 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        })
      })
    }, containerRef)

    return () => {
      isMounted = false
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <div
          key={petal.id}
          ref={(el) => { petalsRef.current[index] = el }}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            width: petal.size,
            height: petal.size * 1.3,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          {/* Petal SVG shape */}
          <svg
            viewBox="0 0 20 26"
            fill="none"
            className="w-full h-full"
            style={{ filter: "blur(0.5px)" }}
          >
            <path
              d="M10 0C10 0 0 8 0 16C0 20 4 26 10 26C16 26 20 20 20 16C20 8 10 0 10 0Z"
              fill={petal.color}
            />
            <path
              d="M10 4C10 4 10 20 10 24"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
