import { siteConfig } from '../../content/site';
import { faq } from '../../content/homepage';

const BASE_URL = 'https://clemencereznicek.com';

// =============================================================================
// Organization / HealthAndBeautyBusiness Schema
// =============================================================================

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: BASE_URL,
    telephone: siteConfig.phone.link.replace('tel:', ''),
    email: siteConfig.email,
    image: `${BASE_URL}/images/work/DSC02941.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}${siteConfig.logo.src}`,
      width: siteConfig.logo.width,
      height: siteConfig.logo.height,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.4464,
      longitude: -0.4367,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:15',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '12:30',
      },
    ],
    sameAs: siteConfig.socialLinks
      .filter((link) => link.platform !== 'google')
      .map((link) => link.url),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '59',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
  };
}

// =============================================================================
// WebSite Schema
// =============================================================================

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: siteConfig.businessName,
    url: BASE_URL,
    publisher: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
    inLanguage: 'fr-FR',
  };
}

// =============================================================================
// FAQPage Schema (for homepage)
// =============================================================================

export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

// =============================================================================
// BreadcrumbList Schema
// =============================================================================

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: BASE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
}

// =============================================================================
// Service Schema
// =============================================================================

interface ServiceInput {
  name: string;
  description: string;
  price: string;
  duration: string;
}

export function getServiceSchema(
  services: ServiceInput[],
  pageUrl: string
) {
  return services
    .filter((s) => s.price !== 'Me contacter')
    .map((service) => {
      // Extract numeric price from strings like "100 euros", "75 euros"
      const priceMatch = service.price.match(/(\d+)/);
      const price = priceMatch ? priceMatch[1] : undefined;

      const schema: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        url: pageUrl,
        areaServed: {
          '@type': 'City',
          name: 'Jonzac',
        },
      };

      if (price) {
        schema.offers = {
          '@type': 'Offer',
          price,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        };
      }

      return schema;
    });
}
