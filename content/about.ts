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
      "Avant de devenir mère, j'ai fait un choix : celui de me préparer vraiment. Je savais que j'allais faire face à un système peu à l'écoute de la singularité de chaque enfant, et je voulais être pleinement autonome dans mes réponses, sur ma place, mon rôle, et le bonheur de mes enfants. Mon but était simple : leur permettre de développer leur plein potentiel, sans dépendre d'un système qui ne les verrait pas tels qu'ils sont.",
      "C'est en cherchant des réponses concrètes pour moi et mes enfants que j'ai découvert, puis maîtrisé, les approches que je propose aujourd'hui. Le massage, les constellations familiales, le décodage quantique, la médiumnité, chaque outil est venu répondre à une question réelle, vécue de l'intérieur avant d'être transmise.",
      "Ce qui distingue mon accompagnement, c'est la qualité de présence que j'offre. Je crée un espace où l'on peut déposer ce qui est lourd, être entendu sans jugement et regarder sa situation sous un angle nouveau. J'allie intuition, travail somatique et vision systémique pour éclairer ce qui se joue en profondeur et ouvrir la voie à des transformations concrètes et durables.",
      "Je reçois dans mon cabinet à Jonzac ainsi qu'à distance.",
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
          "J'offre une présence fine, stable et profondément engagée. Je suis là, vraiment, avec écoute et justesse, pour accueillir ce qui se présente sans masque ni détour.",
      },
      {
        icon: "heart",
        title: "Humanité",
        description:
          "J'accompagne sans surplomb, sans dogme, sans posture de \"sachante\". Je rencontre l'autre dans toute sa complexité, avec douceur, respect et humilité.",
      },
      {
        icon: "sun",
        title: "Clarté",
        description:
          "J'aide à éclairer ce qui était flou, à comprendre ce qui se joue en profondeur, à changer d'angle. La clarté est un fil essentiel dans tout ce que je transmets.",
      },
      {
        icon: "shield",
        title: "Sécurité intérieure",
        description:
          "Je soutiens la régulation, l'apaisement, l'ancrage. Je crée des espaces où le corps peut se relâcher et où les émotions peuvent circuler sans débordement.",
      },
      {
        icon: "feather",
        title: "Transformation douce",
        description:
          "Je crois aux transformations profondes mais non violentes. J'accompagne des réorganisations intérieures qui respectent le rythme de chacun.",
      },
      {
        icon: "sparkles",
        title: "Intuition éclairée",
        description:
          "Mon intuition s'appuie sur mon expérience, ma sensibilité, ma lecture des dynamiques invisibles et ma compréhension du vivant. Elle est ancrée, précise et au service de l'autre.",
      },
      {
        icon: "network",
        title: "Vision systémique",
        description:
          "Je ne regarde jamais un symptôme isolé. J'observe les liens, les héritages, les mouvements, les interactions. Cette vision large permet une compréhension plus juste et plus profonde.",
      },
      {
        icon: "scale",
        title: "Éthique",
        description:
          "Je tiens une ligne claire : pas de promesses, pas de projections, pas de manipulation. J'accompagne avec intégrité, responsabilité et discernement.",
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
        name: "Massage des 5 Continents",
        description: "Formation certifiante en massage holistique des 5 Continents",
      },
      {
        name: "Massage AromaTouch",
        description:
          "Certification au protocole AromaTouch aux huiles essentielles doTERRA",
      },
      {
        name: "Massage Symphonie des Cellules",
        description: "Formation certifiante en massage Symphonie des Cellules",
      },
      {
        name: "Formation Lise Bourbeau, Les 5 blessures de l'âme",
        description:
          "Formation approfondie sur les 5 blessures de l'âme selon Lise Bourbeau",
      },
      {
        name: "Formation LaHoChi",
        description:
          "Formation certifiante en soin énergétique LaHoChi",
      },
      {
        name: "Formation en magnétisme",
        description:
          "Formation en magnétisme et soins énergétiques",
      },
      {
        name: "Formation en développement spirituel avec Havona",
        description: "Formation en développement spirituel et éveil de conscience avec Havona",
      },
      {
        name: "Formation TFT",
        description:
          "Formation en Thought Field Therapy (TFT), technique de libération émotionnelle",
      },
      {
        name: "Formation en décodage quantique",
        description: "Formation en décodage et lecture quantique",
      },
      {
        name: "Formation en aromathérapie doTERRA",
        description:
          "Formation en aromathérapie et utilisation des huiles essentielles doTERRA",
      },
      {
        name: "Formation praticienne en constellations familiales",
        description:
          "Formation approfondie en constellations familiales et travail systémique",
      },
    ],
  },
  cta: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
