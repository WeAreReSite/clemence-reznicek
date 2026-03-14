// =============================================================================
// Content Type Interfaces
// All TypeScript interfaces for the Clemence Reznicek bien-etre website
// =============================================================================

// --- Shared / Atomic Types ---

export interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
}

export interface LinkData {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "google";
  url: string;
  label: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

// --- Site-Wide Configuration ---

export interface SiteConfig {
  businessName: string;
  tagline: string;
  description: string;
  businessType: string;
  phone: {
    display: string;
    link: string;
  };
  email: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    region: string;
    country: string;
    full: string;
  };
  openingHours: OpeningHours[];
  socialLinks: SocialLink[];
  logo: ImageData;
  url: string;
}

// --- Navigation ---

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface NavigationContent {
  items: NavigationItem[];
  cta: CTAButton;
  mobileMenuLabel: string;
}

// --- Footer ---

export interface FooterColumn {
  title: string;
  links: LinkData[];
}

export interface FooterContent {
  columns: FooterColumn[];
  copyright: string;
  legalLinks: LinkData[];
  socialLinks: SocialLink[];
  description: string;
}

// --- Homepage Sections ---

export interface HeroContent {
  headline: string;
  subtitle: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  backgroundImage: ImageData;
}

export interface TrustBadge {
  icon: string;
  value: string;
  label: string;
}

export interface TrustBarContent {
  badges: TrustBadge[];
}

export interface EntryPointCard {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: ImageData;
  cta: CTAButton;
  slug: string;
}

export interface EntryPointContent {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: EntryPointCard[];
}

export interface IntroductionContent {
  sectionTitle: string;
  headline: string;
  paragraphs: string[];
  image: ImageData;
  cta: CTAButton;
  signature: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  date?: string;
  service?: string;
}

export interface TestimonialSectionContent {
  sectionTitle: string;
  sectionSubtitle: string;
  featured: Testimonial[];
  googleBadgeLabel?: string;
  cta: CTAButton;
}

export interface Service {
  name: string;
  description: string;
  price: string;
  duration: string;
  slug?: string;
  image?: ImageData;
}

export interface ServiceCategory {
  title: string;
  description: string;
  icon: string;
  services: Service[];
  image: ImageData;
  cta: CTAButton;
}

export interface ServiceCategoryContent {
  sectionTitle: string;
  sectionSubtitle: string;
  categories: ServiceCategory[];
}

export interface RMDHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface RMDContent {
  sectionTitle: string;
  headline: string;
  description: string;
  highlights: RMDHighlight[];
  price: string;
  priceDetail: string;
  sessions: string;
  image: ImageData;
  cta: CTAButton;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export interface ValueContent {
  sectionTitle: string;
  sectionSubtitle: string;
  values: ValueCard[];
}

export interface PromotionContent {
  sectionTitle: string;
  headline: string;
  description: string;
  cta: CTAButton;
  image?: ImageData;
  badge?: string;
  active: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  sectionTitle: string;
  sectionSubtitle: string;
  items: FAQItem[];
}

export interface PracticalInfoContent {
  sectionTitle: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    region: string;
    full: string;
  };
  phone: {
    display: string;
    link: string;
  };
  email: string;
  openingHours: OpeningHours[];
  accessDetails: string[];
  mapEmbedUrl: string;
  image: ImageData;
}

export interface CTAFinalContent {
  headline: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
  backgroundImage?: ImageData;
}

export interface YouTubeVideo {
  videoId: string;
  title: string;
}

export interface MidPageCTAContent {
  headline: string;
  description: string;
  cta: CTAButton;
}

// --- Inner Pages ---

export interface MassagesPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: ImageData;
  introduction: string;
  services: Service[];
  approachTitle: string;
  approachText: string[];
  approachImage: ImageData;
  cta: CTAButton;
}

export interface SoinsPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: ImageData;
  introduction: string;
  whyHolistic?: {
    title: string;
    paragraphs: string[];
    listIntro: string;
    listItems: string[];
    emphasis: string;
    closing: string;
    disclaimer: string;
  };
  categories: Array<{
    title: string;
    description: string;
    services: Service[];
    image: ImageData;
  }>;
  cta: CTAButton;
}

export interface RMDTestimonial {
  name: string;
  text: string;
  afterText?: string;
  source: string;
}

export interface RMDDimension {
  title: string;
  description: string;
  method: string;
}

export interface RMDTimelineStep {
  label: string;
  title: string;
  description: string;
}

export interface RMDDifferentiator {
  title: string;
  paragraphs: string[];
  testimonialQuote?: string;
  listItems?: string[];
}

export interface RMDPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: ImageData;
  trustBadges: string[];
  painPoint: {
    title: string;
    paragraphs: string[];
    question: string;
    answer: string;
    closingLine: string;
  };
  forWhom: {
    title: string;
    items: string[];
    image?: ImageData;
  };
  whyRMD: {
    title: string;
    classical: {
      title: string;
      intro: string;
      limitations: string[];
      result: string[];
    };
    holistic: {
      title: string;
      intro: string;
      levels: string[];
      closingLines: string[];
    };
  };
  testimonials: {
    title: string;
    items: RMDTestimonial[];
    appreciations: {
      title: string;
      items: string[];
    };
  };
  process: {
    title: string;
    acronym: string;
    intro: string;
    dimensionsTitle: string;
    dimensionsIntro: string[];
    dimensions: RMDDimension[];
    customNote: string[];
    timeline: {
      title: string;
      steps: RMDTimelineStep[];
    };
    betweenSessions: {
      title: string;
      paragraphs: string[];
    };
    image?: ImageData;
  };
  location: {
    title: string;
    cabinet: {
      title: string;
      address: string[];
      advantages: string[];
    };
    visio: {
      title: string;
      advantages: string[];
      testimonial: string;
    };
  };
  duration: {
    title: string;
    summary: string;
    rhythm: string;
    rhythmExplanation: string[];
    sessionDuration: string;
  };
  investment: {
    title: string;
    price: string;
    paymentNote: string;
    whyTitle: string;
    whyParagraphs: string[];
    reimbursement: {
      question: string;
      answer: string;
    };
  };
  unique: {
    title: string;
    items: RMDDifferentiator[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  discoveryCall: {
    title: string;
    subtitle: string;
    description: string[];
    benefits: string[];
    closing: string[];
    phone: string;
    email: string;
  };
  finalCTA: {
    title: string;
    paragraphs: string[];
    closingLines: string[];
    buttonLabel: string;
    phone: string;
    email: string;
  };
  cta: CTAButton;
}

// --- Formations Page ---

export interface FormationService {
  name: string;
  description: string;
  price: string;
  duration: string;
  modules?: string[];
  image?: ImageData;
}

export interface FormationsPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: ImageData;
  introduction: string;
  formations: FormationService[];
  cta: CTAButton;
}

export interface AboutPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: ImageData;
  story: {
    title: string;
    paragraphs: string[];
    image: ImageData;
  };
  values: {
    title: string;
    items: ValueCard[];
  };
  certifications: {
    title: string;
    items: Array<{
      name: string;
      year?: string;
      description?: string;
    }>;
  };
  blog?: {
    text: string;
    url: string;
    label: string;
  };
  affiliations?: {
    title: string;
    items: Array<{
      name: string;
      description?: string;
      url?: string;
    }>;
  };
  photographerCredit?: string;
  cta: CTAButton;
}

export interface TestimonialsPageContent {
  heroTitle: string;
  heroSubtitle: string;
  testimonials: Testimonial[];
  googleReviewsCTA: CTAButton;
  youtubeSection?: {
    title: string;
    subtitle: string;
    videos: YouTubeVideo[];
  };
  youtubeCTA?: CTAButton;
  contactCTA: CTAButton;
}

export interface ContactFormContent {
  fields: {
    prenom: { label: string; placeholder?: string };
    nom: { label: string; placeholder?: string };
    email: { label: string; placeholder?: string };
    telephone: { label: string; placeholder?: string };
    typeSoin: {
      label: string;
      placeholder: string;
      options: string[];
    };
    message: { label: string };
  };
  consentLabel: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  validation: {
    prenomRequired: string;
    prenomMinLength: string;
    nomRequired: string;
    nomMinLength: string;
    emailRequired: string;
    emailInvalid: string;
    telephoneInvalid: string;
    typeSoinRequired: string;
    consentRequired: string;
  };
}

export interface ContactPageContent {
  heroTitle: string;
  heroSubtitle: string;
  introText: string;
  introImage?: ImageData;
  phone: {
    display: string;
    link: string;
  };
  email: string;
  address: string;
  siret?: string;
  openingHours: OpeningHours[];
  mapEmbedUrl: string;
  form?: ContactFormContent;
  cta: CTAButton;
}

export interface LegalPageContent {
  title: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
}

// --- SEO / Metadata ---

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export interface MetadataContent {
  home: PageMetadata;
  massages: PageMetadata;
  soins: PageMetadata;
  rmd: PageMetadata;
  formations: PageMetadata;
  about: PageMetadata;
  testimonials: PageMetadata;
  contact: PageMetadata;
  legal: PageMetadata;
}
