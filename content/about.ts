import type { AboutPageContent } from "@/types/content";

// =============================================================================
// A propos Page Content
// =============================================================================

export const aboutPage: AboutPageContent = {
  heroTitle: "À propos",
  heroSubtitle:
    "10 ans de présence au service de ta transformation",
  heroImage: {
    src: "/images/team/DSC02960.jpg",
    alt: "Clémence Reznicek dans son cabinet à Jonzac",
    width: 1920,
    height: 1080,
  },
  story: {
    title: "Mon chemin",
    paragraphs: [
      "Tout a commencé par un appel. Pas un appel spectaculaire, mais cette sensation tenace que quelque chose de plus juste m'attendait. Après des années dans un quotidien qui ne me ressemblait plus, j'ai fait le choix de me tourner vers ce qui faisait vibrer mon cœur : l'accompagnement de l'humain.",
      "Depuis plus de 10 ans, je me forme, j'explore et j'affine ma pratique. Massage, soins énergétiques, travail somatique, constellations familiales, aromathérapie, médiumnité, décodage quantique : chaque outil que j'ai intégré est venu répondre à un besoin réel rencontré sur le terrain, dans l'accompagnement de personnes comme toi.",
      "Ce qui me définit le plus, c'est peut-être ma qualité de présence. Être là, pleinement, pour ce qui se présente. Sans jugement, sans agenda caché. Mon intuition me guide, mais elle est toujours au service de la justesse — jamais de l'esbroufe. Chaque personne que j'accueille reçoit un espace où elle peut se montrer telle qu'elle est.",
      "Aujourd'hui, je reçois dans mon cabinet à Jonzac, en Charente-Maritime. Un lieu chaleureux et enveloppant, à l'image de ma pratique. Un espace sacré où la douceur et la profondeur cohabitent naturellement. C'est ici que je t'invite à venir déposer ce qui pèse et retrouver la clarté qui t'habite déjà.",
    ],
    image: {
      src: "/images/team/DSC02967.jpg",
      alt: "Portrait de Clémence Reznicek",
      width: 480,
      height: 600,
    },
  },
  values: {
    title: "Ce qui guide ma pratique",
    items: [
      {
        icon: "eye",
        title: "Présence",
        description:
          "Être là, pleinement, à chaque instant de la séance. Cette qualité d'attention est le fondement de tout ce que je propose.",
      },
      {
        icon: "heart",
        title: "Humanité",
        description:
          "Avant les techniques, il y a la rencontre. Je t'accueille dans ta totalité, avec ce qui va et ce qui va moins bien.",
      },
      {
        icon: "sun",
        title: "Clarté",
        description:
          "Mon rôle est de t'aider à y voir plus clair. Pas de te donner des réponses, mais d'éclairer le chemin pour que tu trouves les tiennes.",
      },
      {
        icon: "shield",
        title: "Sécurité intérieure",
        description:
          "Avant de pouvoir changer, il faut se sentir en sécurité. Je crée un cadre contenant où ton système peut se relâcher.",
      },
      {
        icon: "feather",
        title: "Transformation douce",
        description:
          "Les changements les plus profonds arrivent sans forcer. Je respecte le rythme de ton corps et de ton âme.",
      },
      {
        icon: "sparkles",
        title: "Intuition éclairée",
        description:
          "Mon intuition est un outil précieux, mais elle est toujours mise au service de la justesse et de l'éthique.",
      },
      {
        icon: "network",
        title: "Vision systémique",
        description:
          "Tu n'existes pas en isolation. Je prends en compte les dynamiques familiales et relationnelles qui te traversent.",
      },
      {
        icon: "scale",
        title: "Éthique",
        description:
          "Transparence, respect des limites, honnêteté intellectuelle. Pas de promesses impossibles, pas de dépendance.",
      },
      {
        icon: "bird",
        title: "Liberté",
        description:
          "Mon objectif est que tu n'aies plus besoin de moi. Chaque accompagnement vise ton autonomie et ta souveraineté.",
      },
    ],
  },
  certifications: {
    title: "Formations et certifications",
    items: [
      {
        name: "Massage Shambala",
        description: "Formation certifiante en massage holistique Shambala",
      },
      {
        name: "Massage Solar",
        description: "Formation certifiante en massage bien-être Solar",
      },
      {
        name: "Aromatouch doTERRA",
        description:
          "Certification au protocole Aromatouch aux huiles essentielles doTERRA",
      },
      {
        name: "LaHoChi Multidimensionnel",
        description:
          "Formation certifiante en soin énergétique LaHoChi Multidimensionnel",
      },
      {
        name: "Coaching émotionnel",
        description: "Formation en coaching émotionnel et accompagnement",
      },
      {
        name: "Régulation émotionnelle et somatique",
        description:
          "Certification en régulation émotionnelle par le corps et le système nerveux",
      },
      {
        name: "Aromathérapie doTERRA",
        description:
          "Formation en aromathérapie et utilisation des huiles essentielles doTERRA",
      },
      {
        name: "Constellations familiales et systémiques",
        description:
          "Formation approfondie en constellations familiales et travail systémique",
      },
      {
        name: "Médiumnité",
        description:
          "Formation et développement des capacités intuitives et médiumniques",
      },
      {
        name: "Décodage quantique",
        description: "Certification en décodage et lecture quantique",
      },
      {
        name: "Accompagnement somatique",
        description:
          "Formation en approches somatiques et travail avec le système nerveux",
      },
    ],
  },
  cta: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
