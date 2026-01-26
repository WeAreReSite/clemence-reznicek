import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sylviebienetre.fr'

  // Common paths to disallow for all crawlers
  const commonDisallow = ['/api/', '/admin/', '/_next/']

  return {
    rules: [
      // Google - Primary search engine (no crawl delay for priority indexing)
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Bing - Important for Microsoft ecosystem and AI search (no crawl delay)
      {
        userAgent: 'Bingbot',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // AI Search Engines - GEO optimization (2026 best practices)
      // ChatGPT Search and OpenAI crawlers
      {
        userAgent: ['ChatGPT-User', 'OAI-SearchBot'],
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Perplexity AI search
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Claude/Anthropic crawlers
      {
        userAgent: ['ClaudeBot', 'anthropic-ai', 'Claude-Web'],
        allow: ['/'],
        disallow: commonDisallow,
      },
      // GPT training crawler (allow for visibility in AI models)
      {
        userAgent: 'GPTBot',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Common Crawl - used by many AI systems
      {
        userAgent: 'CCBot',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Google AI systems (Gemini, Bard)
      {
        userAgent: 'Google-Extended',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Meta AI crawler
      {
        userAgent: 'FacebookBot',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Cohere AI crawler
      {
        userAgent: 'cohere-ai',
        allow: ['/'],
        disallow: commonDisallow,
      },
      // Default rule for all other crawlers (with crawl delay for server protection)
      {
        userAgent: '*',
        allow: ['/'],
        disallow: commonDisallow,
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
