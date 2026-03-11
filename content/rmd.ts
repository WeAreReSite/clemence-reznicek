import type { RMDPageContent } from "@/types/content";

// =============================================================================
// RMD — Résurrection Multi-Dimensionnelle Page Content
// =============================================================================

export const rmdPage: RMDPageContent = {
  heroTitle: "RMD — Résurrection Multi-Dimensionnelle",
  heroSubtitle:
    "Parce qu'il est temps de vous choisir.",
  heroImage: {
    src: "/images/work/DSC02264.jpg",
    alt: "RMD — Clémence Reznicek et le phénix, symbole de résurrection",
    width: 1920,
    height: 1080,
  },
  quote:
    "Je ne cherche pas à vous transformer. Je crée un espace suffisamment sécurisé pour que vous osiez vous retrouver.",
  introduction: [
    "Le RMD est la synthèse de 10 ans de pratique, de recherche et d'accompagnement. Il rassemble tout ce qui fait la singularité de mon regard : l'intuition, la lecture des dynamiques invisibles, le travail somatique, les mémoires familiales et une présence profondément humaine.",
    "En 9 séances, nous traversons ensemble les différentes couches de votre être : le corps, les émotions, les schémas de pensée, les mémoires familiales, le champ énergétique. L'objectif n'est pas de tout résoudre, mais de créer les conditions pour qu'une réorganisation profonde puisse se faire, à votre rythme, en sécurité.",
  ],
  introImage: {
    src: "/images/team/DSC02996.jpg",
    alt: "Le phénix — symbole du parcours RMD, renaître de ses cendres",
    width: 640,
    height: 960,
  },
  forWhom: {
    title: "Ce parcours est pour vous si...",
    items: [
      "Vous voulez apprendre à vous sentir en sécurité en toutes circonstances",
      "Vous souhaitez réguler vos émotions sans être débordée par elles",
      "Vous aspirez à une autonomie et une maturité émotionnelles durables",
      "Vous cherchez plus de clarté dans vos choix et vos relations",
      "Vous avez besoin d'un ancrage et d'un enracinement profonds",
      "Vous sentez qu'il est temps de vous choisir, vraiment",
    ],
    image: {
      src: "/images/work/DSC02273.jpg",
      alt: "Parcours RMD — génogramme et figurines systémiques",
      width: 640,
      height: 960,
    },
  },
  dimensions: {
    title: "Le travail s'articule sur trois plans",
    items: [
      "Transgénérationnel · ce qui se transmet de génération en génération",
      "Gestationnel · ce qui s'est joué avant même la naissance",
      "Infantile · ce qui s'est construit dans la petite enfance",
    ],
    movement: "De soi à l'autre · De l'autre à soi · De soi à soi",
  },
  process: {
    title: "Les trois temps du parcours",
    steps: [
      {
        number: 1,
        title: "Sécuriser",
        description:
          "Les premières séances posent les fondations. Dès la première rencontre, nous élaborons ensemble votre génogramme, une cartographie de votre histoire familiale qui éclaire ce qui se transmet et se répète. Nous créons un espace de sécurité intérieure indispensable pour aller en profondeur sans se perdre.",
        image: {
          src: "/images/work/DSC02251.jpg",
          alt: "Sécuriser — cliente en introspection lors des premières séances",
          width: 640,
          height: 960,
        },
      },
      {
        number: 2,
        title: "Libérer",
        description:
          "Au cœur du parcours, nous traversons les couches : mémoires du corps, émotions retenues, schémas familiaux, croyances héritées. Ce qui était figé commence à bouger.",
      },
      {
        number: 3,
        title: "Poser de nouvelles fondations",
        description:
          "Les dernières séances sont consacrées à la construction. Grâce au coaching, nous ancrons de nouveaux repères, de nouvelles façons d'être et d'agir, pour que la transformation s'inscrive durablement dans votre vie.",
      },
    ],
  },
  includes: {
    title: "Ce que comprend le parcours",
    items: [
      "6 séances d'1h30 : travail en profondeur sur les trois plans",
      "3 séances de 30 minutes : intégration et exercices de coaching",
      "Dès la première séance : élaboration de votre génogramme pour cartographier votre histoire familiale",
      "Des exercices de coaching à réaliser entre chaque séance pour ancrer les transformations dans votre quotidien",
      "Un suivi entre les séances par message",
      "La possibilité de faire certaines séances à distance",
      "Un rythme d'une séance par mois pour une intégration profonde et durable",
    ],
  },
  price: "Sur échange uniquement",
  priceDetail:
    "Parcours complet · 9 mois · 9 séances\nContactez-moi pour en discuter ensemble. Je vous présente le programme lors d'un premier appel, sans engagement.",
  faq: [
    {
      question: "Quelle est la différence entre le parcours RMD et une séance individuelle ?",
      answer:
        "Une séance individuelle répond à un besoin ponctuel : une tension, une question, un moment difficile. Le parcours RMD est un travail en profondeur sur 9 mois, structuré en trois temps : sécuriser, libérer, poser de nouvelles fondations. Il s'adresse à celles et ceux qui veulent une transformation durable, pas juste un soulagement passager.",
    },
    {
      question: "Comment connaître le tarif du parcours RMD ?",
      answer:
        "Le tarif et les modalités de règlement sont présentés lors d'un premier échange téléphonique. Cela me permet de vous expliquer le programme en détail et de répondre à toutes vos questions. Appelez-moi, c'est sans engagement.",
    },
  ],
  testimonial: {
    id: "testimonial-1",
    name: "Salomon D.",
    text: "Clémence est d'une douceur infini et d'une incroyable justesse, elle est très professionnelle et m'a mis très facilement à l'aise. Le travail que nous avons fait ensemble ces six derniers mois est allé chercher en profondeur, des peurs et des blocages qui m'empêchaient d'avancer. Je me sens aujourd'hui libérée d'un poid, plus alignée et optimiste. Je ne peux que la recommander les yeux fermer.",
    rating: 5,
    date: "2026-01",
    service: "Accompagnement holistique",
  },
  cta: {
    label: "Je veux me choisir",
    href: "tel:+33632185259",
    variant: "primary",
  },
};
