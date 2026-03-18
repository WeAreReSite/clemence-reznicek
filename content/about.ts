import type { AboutPageContent } from "@/types/content";

// =============================================================================
// A propos Page Content
// =============================================================================

export const aboutPage: AboutPageContent = {
  heroTitle: "À propos",
  heroSubtitle:
    "10 ans de présence au service de votre transformation",
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
          "J'accompagne sans surplomb, sans dogme, sans posture d'experte. Je rencontre l'autre dans toute sa complexité, avec douceur, respect et humilité.",
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
          "Mon objectif est que vous n'ayez plus besoin de moi. Chaque accompagnement vise votre autonomie et votre souveraineté.",
      },
    ],
  },
  certifications: {
    title: "Certifications & Formations",
    items: [
      { name: "Constellations familiales · 2 ans", description: "Michèle Duhamel / FFPCS" },
      { name: "Systémie · 2 ans" },
      { name: "Accompagnement en parentalité · 3 week-ends", description: "Isabelle Filliozat" },
      { name: "Généalogie & décodage des prénoms · 6 mois" },
      { name: "Certification Montessori 0-6 ans · 2 semaines", description: "Le potentiel de l'enfant, Papachapito" },
      { name: "Ennéagramme & déblocage · 20h", description: "Isabelle Thomas, psychologue en Gestalt thérapie" },
      { name: "Blessures d'âme · 14h", description: "Lise Bourbeau" },
      { name: "Écho Quantique — Décodage du champ informationnel · 72h", description: "Aurélie Surmely" },
      { name: "Développement spirituel & énergétique Havona · 18 jours" },
      { name: "Massage des 5 Continents · 2 jours" },
      { name: "Massage Aromatouch · 2 jours" },
      { name: "Massage SOC — Symphonie of the Cells · 2 jours" },
      { name: "Numérologie quantique · 2 jours", description: "Bénédicte Graft" },
      { name: "Aromathérapie émotionnelle et énergétique · 7h" },
      { name: "LaHoChi · 5h", description: "Morgane Louis" },
      { name: "TFT — Thérapie du Champ Mental · 5h", description: "Sophie Magenta" },
      { name: "Magnétisme · 3h", description: "Madelrieux" },
      { name: "Allaitement au travail", description: "Université de Bordeaux" },
    ],
  },
  affiliations: {
    title: "Affiliations & Certifications",
    items: [
      { name: "Membre FFPCS", description: "Fédération Française des Praticiens en Constellations Systémiques", url: "https://ffpcs.org/annuaire-praticiens/" },
      { name: "Conseillère doTERRA", description: "Aromathérapie émotionnelle et énergétique" },
      { name: "Praticienne certifiée Massage des 5 Continents", url: "https://massagedes5continents.com/membres/8906/prev/" },
    ],
  },
  blog: {
    text: "Je partage régulièrement mes réflexions, outils et découvertes sur mon blog.",
    url: "https://www.formationquantique.fr",
    label: "Lire le blog",
  },
  photographerCredit: "Photos : Lucas Poisson",
  cta: {
    label: "Prendre rendez-vous",
    href: "tel:+33632185259",
    variant: "primary",
  },
};
