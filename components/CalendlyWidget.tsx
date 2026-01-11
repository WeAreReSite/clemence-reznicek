"use client"

import { useEffect } from "react"

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
 */
export function CalendlyWidget({
  url,
  backgroundColor = "e8777c",
  primaryColor = "ffffff",
  height = 700,
  minWidth = 320,
  className = ""
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    const existingScript = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')

    if (!existingScript) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  // Build the complete URL with styling parameters
  const buildCalendlyUrl = () => {
    const urlObj = new URL(url)

    // Add styling parameters if not already present
    if (!urlObj.searchParams.has('background_color')) {
      urlObj.searchParams.set('background_color', backgroundColor)
    }
    if (!urlObj.searchParams.has('primary_color')) {
      urlObj.searchParams.set('primary_color', primaryColor)
    }

    return urlObj.toString()
  }

  return (
    <div className={`calendly-widget-container w-full ${className}`}>
      <div
        className="calendly-inline-widget w-full"
        data-url={buildCalendlyUrl()}
        style={{
          minWidth: minWidth ? `min(100%, ${minWidth}px)` : '100%',
          height: `${height}px`
        }}
      />
    </div>
  )
}