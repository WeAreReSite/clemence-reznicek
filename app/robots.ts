import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sylviebienetre.fr'

  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['ChatGPT-User', 'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot'],
        allow: ['/'],
        disallow: ['/admin/'],
      },
      {
        userAgent: ['GPTBot', 'anthropic-ai', 'CCBot'],
        allow: ['/'],
        disallow: ['/admin/'],
      },
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
