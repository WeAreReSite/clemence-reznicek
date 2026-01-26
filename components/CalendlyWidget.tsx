"use client"

import { useEffect, useRef, useCallback } from "react"

// Extend Window to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        prefill?: Record<string, unknown>
        utm?: Record<string, unknown>
      }) => void
    }
  }
}

interface CalendlyWidgetProps {
  /** Calendly URL - can include styling parameters */
  url: string
  /** Custom background color (hex without #) */
  backgroundColor?: string
  /** Custom primary color (hex without #) */
  primaryColor?: string
  /** Widget height */
  height?: number
  /** Minimum width */
  minWidth?: number
  /** Additional CSS classes */
  className?: string
}

/**
 * Reusable Calendly inline widget component
 * Compatible with any wellness business - uses data from lib/data.ts
 *
 * Fixed to properly reinitialize on client-side navigation
 */
export function CalendlyWidget({
  url,
  backgroundColor = "e8777c",
  primaryColor = "ffffff",
  height = 700,
  minWidth = 320,
  className = ""
}: CalendlyWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Build the complete URL with styling parameters
  const buildCalendlyUrl = useCallback(() => {
    const urlObj = new URL(url)

    // Add styling parameters if not already present
    if (!urlObj.searchParams.has('background_color')) {
      urlObj.searchParams.set('background_color', backgroundColor)
    }
    if (!urlObj.searchParams.has('primary_color')) {
      urlObj.searchParams.set('primary_color', primaryColor)
    }

    return urlObj.toString()
  }, [url, backgroundColor, primaryColor])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing widget content using safe DOM method
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    const initWidget = () => {
      if (window.Calendly && container) {
        window.Calendly.initInlineWidget({
          url: buildCalendlyUrl(),
          parentElement: container,
        })
      }
    }

    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')

    if (existingScript && window.Calendly) {
      // Script already loaded and Calendly is ready
      initWidget()
    } else if (existingScript) {
      // Script exists but Calendly not ready yet, wait for it
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly)
          initWidget()
        }
      }, 100)

      // Cleanup interval after 10 seconds max
      const timeoutId = setTimeout(() => clearInterval(checkCalendly), 10000)

      return () => {
        clearInterval(checkCalendly)
        clearTimeout(timeoutId)
      }
    } else {
      // Need to load the script
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.onload = () => {
        initWidget()
      }
      document.body.appendChild(script)
    }
  }, [buildCalendlyUrl])

  return (
    <div className={`calendly-widget-container w-full ${className}`}>
      <div
        ref={containerRef}
        style={{
          minWidth: minWidth ? `min(100%, ${minWidth}px)` : '100%',
          height: `${height}px`
        }}
      />
    </div>
  )
}
