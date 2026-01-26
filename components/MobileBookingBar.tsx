"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Calendar, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { spaInfo } from "@/lib/data"

export function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  // Hide on booking page
  const isBookingPage = pathname.startsWith("/reserver")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if near bottom of page (within 150px of footer)
      const isNearBottom = currentScrollY + windowHeight >= documentHeight - 150

      // Show after scrolling down 100px, but hide near footer
      if (isNearBottom) {
        setIsVisible(false)
      } else if (currentScrollY > 100) {
        // Hide when scrolling up fast, show when scrolling down or slow scroll
        if (currentScrollY > lastScrollY || currentScrollY - lastScrollY < 50) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  if (isBookingPage) return null

  return (
    <aside
      role="complementary"
      aria-label="Actions rapides de réservation"
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Floating pill container */}
      <div className="bg-card/95 backdrop-blur-md border border-border shadow-xl rounded-full px-2 py-2">
        <div className="flex items-center gap-2">
          {/* Primary CTA - Book Now */}
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-5 rounded-full font-medium text-sm transition-colors hover:bg-primary-hover"
          >
            <Calendar className="w-4 h-4" />
            Réserver
          </Link>

          {/* Secondary CTA - Call */}
          <a
            href={`tel:${spaInfo.phone}`}
            className="flex items-center justify-center gap-2 bg-accent/10 text-accent py-3 px-5 rounded-full font-medium text-sm transition-colors hover:bg-accent/20"
          >
            <Phone className="w-4 h-4" />
            Appeler
          </a>
        </div>
      </div>
    </aside>
  )
}
