import type { RMDPageContent } from "@/types/content";

// =============================================================================
// RMD Signature Program Page Content
// =============================================================================

export const rmdPage: RMDPageContent = {
  heroTitle: "Programme RMD Signature",
  heroSubtitle:
    "Réorganisation Multi-Dimensionnelle : le chemin vers une transformation profonde et durable",
  heroImage: {
    src: "/images/work/DSC02979.jpg",
    alt: "Accompagnement RMD Signature par Clémence Reznicek",
    width: 1920,
    height: 1080,
  },
  introduction: [
    "Le RMD est né de 10 ans de pratique, de recherche et d'accompagnement. C'est la synthèse de tout ce que j'ai appris, expérimenté et affiné au fil des années. Ce programme est le chemin le plus complet que je propose pour aller au cœur de ce qui se joue en toi.",
    "En 9 séances, on traverse ensemble les différentes couches de ton être : le corps, les émotions, les schémas de pensée, les mémoires familiales, le champ énergétique. L'objectif n'est pas de tout résoudre, mais de créer les conditions pour qu'une réorganisation profonde puisse se faire, à ton rythme, dans la sécurité.",
    "Ce programme s'adresse à celles et ceux qui sentent qu'il est temps d'aller plus loin. Pas pour se réparer — tu n'es pas cassé. Mais pour te connaître dans toutes tes dimensions et trouver une nouvelle façon d'habiter ta vie.",
  ],
  forWhom: {
    title: "Ce programme est pour toi si",
    items: [
      "Tu sens que certains schémas se répètent dans ta vie et tu veux comprendre pourquoi",
      "Tu portes un poids émotionnel qui ne se libère pas malgré tes efforts",
      "Tu cherches un accompagnement profond et structuré, pas juste un soin ponctuel",
      "Tu es prêt à te rencontrer avec honnêteté et bienveillance",
      "Tu veux retrouver un sentiment de clarté et d'ancrage dans ton quotidien",
      "Tu sens qu'il est temps de poser les armes et de te laisser accompagner",
    ],
  },
  process: {
    title: "Le déroulement",
    steps: [
      {
        number: 1,
        title: "Rencontre et exploration",
        description:
          "Une première séance pour faire connaissance, poser ton intention et dessiner ensemble les contours de ton parcours. On identifie ce qui demande de l'attention et on définit le rythme qui te convient.",
      },
      {
        number: 2,
        title: "Traversée des couches",
        description:
          "Au fil des séances, on explore les différentes dimensions : le corps et ses mémoires, les émotions retenues, les schémas familiaux, les croyances qui te limitent. Chaque séance mobilise les outils les plus justes pour ce qui se présente.",
      },
      {
        number: 3,
        title: "Intégration et ancrage",
        description:
          "Les dernières séances sont consacrées à l'intégration de ce qui a bougé. On consolide les changements, on pose de nouveaux repères et on s'assure que la transformation s'inscrit durablement dans ton quotidien.",
      },
    ],
  },
  includes: {
    title: "Ce que comprend le programme",
    items: [
      "9 séances individuelles d'1 heure",
      "Un accompagnement sur mesure combinant somatique, énergétique, coaching et systémique",
      "Un suivi entre les séances par message",
      "Des exercices et des pratiques à intégrer dans ton quotidien",
      "La possibilité de faire certaines séances en visio",
      "Un rythme adapté à tes disponibilités (généralement une séance toutes les 2 à 3 semaines)",
    ],
  },
  price: "1 333 euros",
  priceDetail:
    "Paiement échelonné possible. On en discute ensemble lors de la première rencontre.",
  testimonial: {
    id: "rmd-testimonial",
    name: "Nathalie P.",
    text: "Le programme RMD a transformé ma façon de me relier à moi-même. Séance après séance, j'ai appris à écouter mon corps, à accueillir mes émotions au lieu de les fuir. Clémence accompagne avec une profondeur et une sécurité qui permettent d'aller vraiment au cœur des choses.",
    rating: 5,
    date: "2025-12",
    service: "RMD Signature",
  },
  cta: {
    label: "Prendre rendez-vous pour en discuter",
    href: "/contact",
    variant: "primary",
  },
};
