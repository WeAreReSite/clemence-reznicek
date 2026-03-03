import type {
  SiteConfig,
  NavigationContent,
  FooterContent,
} from "@/types/content";

// =============================================================================
// Site Configuration
// =============================================================================

export const siteConfig: SiteConfig = {
  businessName: "Clémence Reznicek",
  tagline: "Bien-être holistique et émotionnel",
  description:
    "Accompagnement en bien-être holistique à Jonzac. Massages, soins énergétiques, coaching émotionnel et régulation somatique. Un espace de douceur pour retrouver ta clarté intérieure.",
  businessType: "HealthAndBeautyBusiness",
  phone: {
    display: "06 32 18 52 59",
    link: "tel:+33632185259",
  },
  email: "clemence.reznicek@gmail.com",
  address: {
    street: "5 avenue Chanzy",
    postalCode: "17500",
    city: "Jonzac",
    region: "Charente-Maritime",
    country: "France",
    full: "5 avenue Chanzy, 17500 Jonzac, Charente-Maritime",
  },
  openingHours: [
    { days: "Lundi - Vendredi", hours: "9h - 18h15" },
    { days: "Samedi", hours: "10h - 12h30" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  socialLinks: [
    {
      platform: "facebook",
      url: "https://www.facebook.com/clemence.reznicek",
      label: "Suivre sur Facebook",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/clemence.reznicek",
      label: "Suivre sur Instagram",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/@clemencereznicek",
      label: "Voir les vidéos sur YouTube",
    },
    {
      platform: "google",
      url: "https://g.co/kgs/clemencereznicek",
      label: "Voir les avis Google",
    },
  ],
  logo: {
    src: "/images/logos/infinity tech.png",
    alt: "Clémence Reznicek - Bien-être holistique",
    width: 180,
    height: 60,
  },
  url: "https://clemence-reznicek.fr",
};

// =============================================================================
// Navigation
// =============================================================================

export const navigation: NavigationContent = {
  items: [
    { label: "Accueil", href: "/" },
    {
      label: "Soins",
      href: "/soins",
      children: [
        { label: "Massages", href: "/massages" },
        { label: "Soins et accompagnements", href: "/soins" },
        { label: "RMD Signature", href: "/rmd" },
      ],
    },
    { label: "À propos", href: "/a-propos" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
  mobileMenuLabel: "Menu",
};

// =============================================================================
// Footer
// =============================================================================

export const footer: FooterContent = {
  columns: [
    {
      title: "Soins",
      links: [
        { label: "Massages", href: "/massages" },
        { label: "Soins énergétiques", href: "/soins" },
        { label: "RMD Signature", href: "/rmd" },
        { label: "Coaching émotionnel", href: "/soins" },
      ],
    },
    {
      title: "Informations",
      links: [
        { label: "À propos", href: "/a-propos" },
        { label: "Témoignages", href: "/temoignages" },
        { label: "Contact", href: "/contact" },
        { label: "Mentions légales", href: "/mentions-legales" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "06 32 18 52 59", href: "tel:+33632185259" },
        {
          label: "clemence.reznicek@gmail.com",
          href: "mailto:clemence.reznicek@gmail.com",
        },
        {
          label: "5 avenue Chanzy, 17500 Jonzac",
          href: "https://maps.google.com/?q=5+avenue+Chanzy+17500+Jonzac",
        },
      ],
    },
  ],
  copyright: "Clémence Reznicek. Tous droits réservés.",
  legalLinks: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/mentions-legales#confidentialite" },
  ],
  socialLinks: siteConfig.socialLinks,
  description:
    "Accompagnement en bien-être holistique à Jonzac. Un espace de douceur et de présence pour retrouver ta clarté intérieure.",
};
