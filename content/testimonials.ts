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
    name: "Davina V.",
    text: "Je suis heureuse d'avoir rencontré Clémence. C'est une vraie Humaine dotée d'une énergie incroyable et d'une bienveillance sincère. Ses mots sont toujours très justes et touchants - je garderai longtemps en mémoire certaines de nos séances.",
    rating: 5,
    date: "2026-03",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-2",
    name: "Sandrine B.",
    text: "Très belle personne à l'écoute. Séance agréable. Je la recommande vivement.",
    rating: 5,
    date: "2026-01",
    service: "Séance individuelle",
  },
  {
    id: "testimonial-3",
    name: "Salomon D.",
    text: "Clémence est d'une douceur infini et d'une incroyable justesse, elle est très professionnelle et m'a mis très facilement à l'aise. Le travail que nous avons fait ensemble ces six derniers mois est allé chercher en profondeur, des peurs et des blocages qui m'empêchaient d'avancer. Je me sens aujourd'hui libérée d'un poid, plus alignée et optimiste. Je ne peux que la recommander les yeux fermer.",
    rating: 5,
    date: "2026-01",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-4",
    name: "Thérèse S.",
    text: "Clémence vous accompagne avec une grande douceur.... Elle trouve les mots justes.... La libération est incroyable. La reconnection est immédiate, le soulagement instantané. Il me manque les mots pour décrire ce que j'ai vécue... Il faut le vivre.",
    rating: 5,
    date: "2025-11",
    service: "Soin énergétique",
  },
  {
    id: "testimonial-5",
    name: "Nathalie P.",
    text: "Une très belle découverte avec une personne solaire et passionnée. Clemence a mis le doigt sur une problématique que je n'entrevoyait pas. Merci beaucoup pour cette entrevue et ce temps consacré.",
    rating: 5,
    date: "2025-10",
    service: "Bilan énergétique",
  },
  {
    id: "testimonial-6",
    name: "Laurent B.",
    text: "Bienveillance et accompagnement personnalisé. Clémence m'a aidé à mettre des mots sur mes maux et tout cela dans la bonne humeur ! Merci.",
    rating: 5,
    date: "2025-01",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-7",
    name: "Micheline R.",
    text: "Super accueil de Clémence ! Un massage pour libérer les émotions et atténuer mes douleurs dos et genoux. Je vais bien mieux. Merci pour tout. Je recommande.",
    rating: 5,
    date: "2024-09",
    service: "Massage bien-être",
  },
  {
    id: "testimonial-8",
    name: "Aurélien B.",
    text: "Rien à redire, Clémence est très accueillante, sympathique, extrêmement douée, elle a énormément de talent, un relationnel extraordinaire, et des mains de fée pour le massage ! Personnellement je reviendrais, mais je recommande vivement, parce que je dois avouer que ce rendez-vous a changé quelque chose !",
    rating: 5,
    date: "2024-04",
    service: "Massage bien-être",
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
  googleBadgeLabel: "59 avis sur Google",
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
    label: "Voir les 59 avis sur Google",
    href: "https://g.co/kgs/clemencereznicek",
    variant: "secondary",
  },
  contactCTA: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
