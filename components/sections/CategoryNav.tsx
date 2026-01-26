"use client"

import { useRef, useState, useEffect } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  description: string
}

interface CategoryNavProps {
  categories: Category[]
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const navRef = useRef<HTMLElement>(null)
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || "")
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<Map<string, HTMLAnchorElement>>(new Map())
  const isScrollingRef = useRef(false)

  // Update indicator position
  useEffect(() => {
    if (!indicatorRef.current || !activeCategory) return

    const activeButton = buttonsRef.current.get(activeCategory)
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton
      gsap.to(indicatorRef.current, {
        left: offsetLeft,
        width: offsetWidth,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }, [activeCategory])

  // Scroll detection to update active category and visibility
  useEffect(() => {
    const handleScroll = () => {
      // Don't update during programmatic scrolling (from clicks)
      if (isScrollingRef.current) return

      // Check if we're in the CTA section or footer - hide navigation
      const ctaSection = document.getElementById("soins-cta")
      if (ctaSection) {
        const ctaSectionTop = ctaSection.offsetTop - 100 // Hide a bit before reaching CTA
        const currentScrollPosition = window.scrollY

        if (currentScrollPosition >= ctaSectionTop) {
          setIsHidden(true)
          return
        } else {
          setIsHidden(false)
        }
      }

      // Find which section is currently in view
      // Account for sticky header + nav (approximately 150px)
      const scrollPosition = window.scrollY + 200

      let currentCategory = categories[0]?.id || ""

      // Check each category section to find which one is in view
      for (const category of categories) {
        const section = document.getElementById(category.id)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          // If scroll position is within this section, it's active
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentCategory = category.id
            break
          }
        }
      }

      setActiveCategory(currentCategory)
    }

    // Throttle scroll events for performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener, { passive: true })

    // Set initial active category
    handleScroll()

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [categories])

  useGSAP(() => {
    // Entrance animation for nav items
    const buttons = navRef.current?.querySelectorAll(".nav-item")
    if (buttons) {
      gsap.fromTo(
        buttons,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.5,
        }
      )
    }
  }, { scope: navRef })

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
    e.preventDefault()

    // Immediately set active category on click
    setActiveCategory(categoryId)

    const section = document.getElementById(categoryId)
    if (section) {
      // Disable scroll detection during smooth scroll
      isScrollingRef.current = true

      const offset = 150 // Account for sticky header + nav
      const top = section.offsetTop - offset

      window.scrollTo({
        top,
        behavior: "smooth",
      })

      // Re-enable scroll detection after smooth scroll completes
      // Smooth scroll typically takes 500-1000ms depending on distance
      setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }
  }

  return (
    <nav
      ref={navRef}
      className={cn(
        "py-4 border-b border-primary/10 sticky top-[72px] bg-gradient-to-r from-primary/5 via-background to-secondary/5 backdrop-blur-md z-30 transition-all duration-500",
        isHidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
      )}
    >
      <div className="container-spa">
        <div className="relative flex justify-start sm:justify-center gap-2 overflow-x-scroll sm:overflow-x-visible no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ WebkitOverflowScrolling: 'touch' }}>
          {/* Active Indicator */}
          <div
            ref={indicatorRef}
            className="absolute bottom-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full transition-all"
            style={{ left: 0, width: 0 }}
          />

          {categories.map((category) => (
            <a
              key={category.id}
              ref={(el) => {
                if (el) buttonsRef.current.set(category.id, el)
              }}
              href={`#${category.id}`}
              onClick={(e) => handleClick(e, category.id)}
              className={cn(
                "nav-item px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-300 opacity-0",
                activeCategory === category.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
