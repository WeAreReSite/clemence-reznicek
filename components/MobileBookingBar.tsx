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

      // Show after scrolling down 100px
      if (currentScrollY > 100) {
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
        "fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      {/* Background with blur */}
      <div className="bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
        <div className="container-spa py-3">
          <div className="flex items-center gap-3">
            {/* Primary CTA - Book Now */}
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 px-4 rounded-lg font-medium text-sm transition-colors hover:bg-primary-hover"
            >
              <Calendar className="w-4 h-4" />
              Réserver
            </Link>

            {/* Secondary CTA - Call */}
            <a
              href={`tel:${spaInfo.phone}`}
              className="flex items-center justify-center gap-2 bg-accent/10 text-accent py-3.5 px-4 rounded-lg font-medium text-sm transition-colors hover:bg-accent/20"
            >
              <Phone className="w-4 h-4" />
              Appeler
            </a>
          </div>
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="bg-card pb-[env(safe-area-inset-bottom)]" />
    </aside>
  )
}
