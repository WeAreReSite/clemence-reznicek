import type { ContactPageContent, ContactFormContent } from "@/types/content";

// =============================================================================
// Contact Page Content
// =============================================================================

export const contactForm: ContactFormContent = {
  fields: {
    prenom: { label: "Ton prénom" },
    telephone: { label: "Ton téléphone", placeholder: "06 XX XX XX XX" },
    typeSoin: {
      label: "Ce qui t'intéresse",
      placeholder: "Choisis une option",
      options: ["Massage", "Soin énergétique", "1ère séance", "Autre"],
    },
    message: { label: "Un mot pour moi (facultatif)" },
  },
  submitLabel: "Envoyer ma demande",
  successTitle: "Merci",
  successMessage:
    "Ta demande a bien été envoyée. Je te recontacte très vite pour convenir d'un rendez-vous.",
  validation: {
    prenomRequired: "Le prénom est requis",
    prenomMinLength: "Le prénom doit contenir au moins 2 caractères",
    telephoneRequired: "Le téléphone est requis",
    telephoneInvalid: "Numéro de téléphone invalide",
    typeSoinRequired: "Merci de choisir un type de soin",
  },
};

export const contactPage: ContactPageContent = {
  heroTitle: "Contact",
  heroSubtitle:
    "Un premier pas vers toi-même commence ici",
  introText:
    "Que tu aies une question, une hésitation ou simplement l'envie d'en savoir plus, n'hésite pas à me contacter. Je réponds personnellement à chaque message. Tu peux aussi m'appeler directement. Parfois une voix rassure plus qu'un écran. Et si tu sais déjà ce que tu cherches, prends rendez-vous en ligne. Je t'accueille avec plaisir.",
  phone: {
    display: "06 32 18 52 59",
    link: "tel:+33632185259",
  },
  email: "clemence.reznicek@gmail.com",
  address: "5 avenue Chanzy, 17500 Jonzac",
  openingHours: [
    { days: "Lundi - Vendredi", hours: "9h - 18h15" },
    { days: "Samedi", hours: "10h - 12h30" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.1!2d-0.4367!3d45.4464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5+avenue+Chanzy+17500+Jonzac!5e0!3m2!1sfr!2sfr",
  cta: {
    label: "Prendre rendez-vous",
    href: "/contact#rendez-vous",
    variant: "primary",
  },
};
