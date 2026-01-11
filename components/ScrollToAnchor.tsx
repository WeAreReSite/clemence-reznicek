"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export function ScrollToAnchor() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash

    if (hash) {
      // Remove the # and get the element
      const id = hash.replace("#", "")
      const element = document.getElementById(id)

      if (element) {
        // Scroll instantly to the element
        setTimeout(() => {
          const offset = 150 // Account for sticky header + nav
          const elementPosition = element.offsetTop - offset

          window.scrollTo({
            top: elementPosition,
            behavior: "auto", // Instant scroll
          })
        }, 100)
      }
    }
  }, [searchParams])

  return null
}
