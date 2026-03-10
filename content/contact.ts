import type { ContactPageContent } from "@/types/content";

// =============================================================================
// Contact Page Content
// =============================================================================

export const contactPage: ContactPageContent = {
  heroTitle: "Contact",
  heroSubtitle:
    "Un premier pas vers vous-même commence ici",
  introText:
    "Que vous ayez une question, une hésitation ou simplement l'envie d'en savoir plus, n'hésitez pas à me contacter. Je réponds personnellement à chaque message. Vous pouvez aussi m'appeler directement, parfois une voix rassure plus qu'un écran. Et si vous savez déjà ce que vous cherchez, prenez rendez-vous en ligne. Je vous accueille avec plaisir.",
  introImage: {
    src: "/images/team/DSC03022.jpg",
    alt: "Clémence Reznicek vous accueille à son cabinet de Jonzac",
    width: 640,
    height: 960,
  },
  phone: {
    display: "06 32 18 52 59",
    link: "tel:+33632185259",
  },
  email: "clemence.reznicek@gmail.com",
  address: "5 avenue Chanzy, 17500 Jonzac",
  siret: "53839714200075",
  openingHours: [
    { days: "Lundi - Vendredi", hours: "9h - 18h15" },
    { days: "Samedi", hours: "10h - 12h30" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.1!2d-0.4367!3d45.4464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5+avenue+Chanzy+17500+Jonzac!5e0!3m2!1sfr!2sfr",
  cta: {
    label: "Prendre rendez-vous",
    href: "tel:+33632185259",
    variant: "primary",
  },
};
