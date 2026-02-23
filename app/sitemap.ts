import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.formationquantique.fr'

  // Static pages that actually exist in the app directory
  const staticPages: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    // Main service pages - high priority for SEO
    { url: `${baseUrl}/soins`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/reserver`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // Secondary pages
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    // Legal pages - low priority
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  return staticPages
}
