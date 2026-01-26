import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { spaInfo } from "./data"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `https://www.${spaInfo.website}${cleanPath}`
}

export function formatPhoneNumber(phone: string): string {
  // Format "0613648705" → "06 13 64 87 05"
  return phone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5')
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  if (remainingMinutes === 0) {
    return `${hours}h`
  }
  return `${hours}h${remainingMinutes}`
}
