import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sylviebienetre.fr'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/soins`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/reserver`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/mentions-legales`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/confidentialite`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/cgv`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  // Location-specific landing pages (GEO optimization)
  const locationPages = [
    // Tier 1 - PRIMARY GEO pages (Redon + Departmental)
    { url: `${baseUrl}/drainage-lymphatique-redon`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.90 },
    { url: `${baseUrl}/reflexologie-redon`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/drainage-lymphatique-ille-et-vilaine`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.85 },
    // Tier 2 - EXPANSION GEO pages (Guipry-Messac, Bain-de-Bretagne)
    { url: `${baseUrl}/drainage-lymphatique-guipry-messac`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.80 },
    { url: `${baseUrl}/reflexologie-bain-de-bretagne`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.80 },
  ]

  return [...staticPages, ...locationPages]
}
