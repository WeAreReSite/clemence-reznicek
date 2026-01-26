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

  return staticPages
}
