import { siteConfig } from '../../content/site';
import { faq } from '../../content/homepage';
import { rmdPage } from '../../content/rmd';
import { aboutPage } from '../../content/about';
import { allTestimonials } from '../../content/testimonials';

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

// =============================================================================
// FAQPage Schema (for RMD page)
// =============================================================================

export function getRMDFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: rmdPage.faq.items.map((item) => ({
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
// Person Schema (for Clemence Reznicek)
// =============================================================================

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: siteConfig.businessName,
    url: `${BASE_URL}/a-propos`,
    image: `${BASE_URL}${aboutPage.story.image.src}`,
    jobTitle: 'Praticienne en bien-être holistique',
    description: aboutPage.heroSubtitle,
    telephone: siteConfig.phone.link.replace('tel:', ''),
    email: siteConfig.email,
    worksFor: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: 'FR',
    },
    sameAs: siteConfig.socialLinks
      .filter((link) => link.platform !== 'google')
      .map((link) => link.url),
    knowsAbout: aboutPage.certifications.items.map((cert) => cert.name),
    areaServed: {
      '@type': 'City',
      name: 'Jonzac',
    },
  };
}

// =============================================================================
// Review Schemas (for testimonials page)
// =============================================================================

export function getReviewSchemas() {
  return allTestimonials.map((testimonial) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewBody: testimonial.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    itemReviewed: {
      '@id': `${BASE_URL}/#localbusiness`,
    },
    ...(testimonial.date
      ? { datePublished: `${testimonial.date}-01` }
      : {}),
  }));
}

// =============================================================================
// Course Schemas (for formations page)
// =============================================================================

interface FormationInput {
  name: string;
  description: string;
  price: string;
  duration: string;
  modules?: string[];
}

export function getCourseSchemas(formations: FormationInput[]) {
  return formations.map((formation) => {
    const priceMatch = formation.price.match(/(\d+)/);
    const price = priceMatch ? priceMatch[1] : undefined;

    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: formation.name,
      description: formation.description,
      provider: {
        '@id': `${BASE_URL}/#localbusiness`,
      },
      url: `${BASE_URL}/formations`,
      inLanguage: 'fr',
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: formation.duration.includes('distance')
          ? 'Mixed'
          : 'InPerson',
        location: {
          '@type': 'Place',
          name: 'Cabinet Clémence Reznicek',
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.postalCode,
            addressCountry: 'FR',
          },
        },
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
