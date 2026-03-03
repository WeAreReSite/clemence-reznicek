import type {
  Testimonial,
  TestimonialSectionContent,
  TestimonialsPageContent,
} from "@/types/content";

// =============================================================================
// All Testimonials
// =============================================================================

export const allTestimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sophie L.",
    text: "Je suis arrivée chez Clémence avec un poids énorme sur les épaules, sans trop savoir ce que j'attendais. Dès les premières minutes, j'ai senti une douceur et une justesse dans son accompagnement qui m'ont permis de me déposer complètement. Trois séances plus tard, quelque chose avait profondément changé en moi.",
    rating: 5,
    date: "2025-11",
    service: "Coaching émotionnel",
  },
  {
    id: "testimonial-2",
    name: "Marc D.",
    text: "Le massage Shambala a été une expérience que je n'oublie pas. Ce n'est pas juste un massage, c'est un voyage. Clémence a une qualité de présence rare, on se sent en sécurité totale. J'y retourne régulièrement et chaque fois, c'est une nouvelle profondeur qui se révèle.",
    rating: 5,
    date: "2025-09",
    service: "Massage Shambala",
  },
  {
    id: "testimonial-3",
    name: "Isabelle R.",
    text: "J'étais sceptique sur les soins énergétiques, mais la bienveillance de Clémence m'a mise en confiance. Le LaHoChi a été une révélation. J'ai senti des tensions anciennes se libérer en douceur. Un vrai moment de grâce que je recommande à toutes les personnes en quête de sérénité.",
    rating: 5,
    date: "2025-10",
    service: "LaHoChi Multidimensionnel",
  },
  {
    id: "testimonial-4",
    name: "Nathalie P.",
    text: "Le programme RMD a transformé ma façon de me relier à moi-même. Séance après séance, j'ai appris à écouter mon corps, à accueillir mes émotions au lieu de les fuir. Clémence accompagne avec une profondeur et une sécurité qui permettent d'aller vraiment au cœur des choses.",
    rating: 5,
    date: "2025-12",
    service: "RMD Signature",
  },
  {
    id: "testimonial-5",
    name: "Thomas B.",
    text: "Je recommande Clémence les yeux fermés. Sa douceur et son intuition font de chaque séance un moment unique. Elle sait exactement où poser son attention pour que la transformation se fasse naturellement, sans forcer. C'est rare et précieux.",
    rating: 5,
    date: "2026-01",
    service: "Soin énergétique",
  },
];

// =============================================================================
// Homepage Testimonials Section
// =============================================================================

export const testimonialSection: TestimonialSectionContent = {
  sectionTitle: "Ce qu'ils en disent",
  sectionSubtitle:
    "Des mots qui témoignent de transformations douces et durables",
  featured: [allTestimonials[0], allTestimonials[1], allTestimonials[2]],
  googleBadgeLabel: "58 avis sur Google",
  cta: {
    label: "Lire tous les témoignages",
    href: "/temoignages",
    variant: "outline",
  },
};

// =============================================================================
// Testimonials Page
// =============================================================================

export const testimonialsPage: TestimonialsPageContent = {
  heroTitle: "Témoignages",
  heroSubtitle:
    "Chaque parcours est unique. Voici les mots de celles et ceux qui ont choisi de se faire accompagner.",
  testimonials: allTestimonials,
  googleReviewsCTA: {
    label: "Voir les 58 avis sur Google",
    href: "https://g.co/kgs/clemencereznicek",
    variant: "secondary",
  },
  contactCTA: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
