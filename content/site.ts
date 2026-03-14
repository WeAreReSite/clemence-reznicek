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
    "J'accompagne celles et ceux qui se sentent bloqués, épuisés ou déconnectés d'eux-mêmes à retrouver un mieux-être concret et durable. Ensemble, nous travaillons à comprendre ce qui freine, libérer ce qui pèse et retrouver confiance en soi et en la vie.",
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
      url: "https://www.facebook.com/clemencereznicek",
      label: "Suivre sur Facebook",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/clemence_reznicek/",
      label: "Suivre sur Instagram",
    },
    {
      platform: "youtube",
      url: "https://www.youtube.com/@clemencereznicek111",
      label: "Voir les vidéos sur YouTube",
    },
    {
      platform: "google",
      url: "https://share.google/5AokZamfqtL3yUJWZ",
      label: "Voir les avis Google",
    },
  ],
  logo: {
    src: "/images/logos/infinity-tech.png",
    alt: "Clémence Reznicek - Bien-être holistique",
    width: 180,
    height: 60,
  },
  url: "https://clemencereznicek.com",
};

// =============================================================================
// Navigation
// =============================================================================

export const navigation: NavigationContent = {
  items: [
    { label: "Accueil", href: "/" },
    {
      label: "Accompagnements",
      href: "/accompagnements",
      children: [
        { label: "Massages énergétiques", href: "/massages" },
        { label: "Accompagnements émotionnels", href: "/accompagnements" },
        { label: "Se choisir", href: "/rmd" },
        { label: "Formations holistiques", href: "/formations" },
      ],
    },
    { label: "À propos", href: "/a-propos" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Prendre rendez-vous",
    href: "tel:+33632185259",
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
      title: "Accompagnements",
      links: [
        { label: "Massages énergétiques", href: "/massages" },
        { label: "Accompagnements émotionnels", href: "/accompagnements" },
        { label: "Se choisir", href: "/rmd" },
        { label: "Formations holistiques", href: "/formations" },
      ],
    },
    {
      title: "Informations",
      links: [
        { label: "À propos", href: "/a-propos" },
        { label: "Témoignages", href: "/temoignages" },
        { label: "Contact", href: "/contact" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "CGV", href: "/cgv" },
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
    { label: "CGV", href: "/cgv" },
    { label: "Politique de confidentialité", href: "/mentions-legales#confidentialite" },
  ],
  socialLinks: siteConfig.socialLinks,
  description:
    "J'accompagne celles et ceux qui se sentent bloqués, épuisés ou déconnectés d'eux-mêmes à retrouver un mieux-être concret et durable. Ensemble, nous travaillons à comprendre ce qui freine, libérer ce qui pèse et retrouver confiance en soi et en la vie.",
};
