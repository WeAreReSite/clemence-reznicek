import type {
  HeroContent,
  TrustBarContent,
  EntryPointContent,
  IntroductionContent,
  ServiceCategoryContent,
  RMDContent,
  ValueContent,
  PromotionContent,
  FAQContent,
  PracticalInfoContent,
  CTAFinalContent,
} from "@/types/content";

// =============================================================================
// 1. Hero
// =============================================================================

export const hero: HeroContent = {
  headline: "Vous méritez d'aller mieux. Vraiment.",
  subtitle: "",
  description:
    "Je suis Clémence, thérapeute holistique et praticienne en massage à Jonzac. Je vous accompagne vers un mieux-être concret et durable, à travers le corps, les émotions et les dynamiques familiales. Visioconsultation possible en France et en Europe.",
  primaryCTA: {
    label: "Prendre rendez-vous",
    href: "tel:+33632185259",
    variant: "primary",
  },
  secondaryCTA: {
    label: "Découvrir mes pratiques",
    href: "/accompagnements",
    variant: "secondary",
  },
  backgroundImage: {
    src: "/images/work/DSC02941.jpg",
    alt: "Séance de soin dans le cabinet de Clémence Reznicek à Jonzac",
    width: 1920,
    height: 1080,
  },
};

// =============================================================================
// 2. Trust Bar
// =============================================================================

export const trustBar: TrustBarContent = {
  badges: [
    {
      icon: "star",
      value: "59 avis",
      label: "5/5 sur Google",
    },
    {
      icon: "clock",
      value: "10 ans",
      label: "d'expérience",
    },
    {
      icon: "award",
      value: "18",
      label: "formations certifiantes",
    },
    {
      icon: "mapPin",
      value: "Jonzac",
      label: "& visioconsultation partout en France",
    },
  ],
};

// =============================================================================
// 3. Trois Portes d'Entrée
// =============================================================================

export const entryPoints: EntryPointContent = {
  sectionTitle: "Quatre pratiques, un seul but : votre mieux-être",
  sectionSubtitle: "",
  cards: [
    {
      title: "Massages énergétiques",
      description:
        "Quatre approches complémentaires pour libérer les tensions physiques et émotionnelles, rééquilibrer l'énergie et retrouver un ancrage profond. L'Aromatouch applique huit huiles essentielles en séquence le long de la colonne vertébrale, idéal en première approche. Le Shambala agit sur une problématique ciblée avec mantras et son. Le Solar associe massage et soin énergétique LaHoChi pour une régénération globale. Le Massage des 5 Continents traverse corps et mémoires en trois phases pour une transformation en profondeur.",
      price: "À partir de 75 euros",
      duration: "1h à 2h",
      image: {
        src: "/images/work/DSC02663.jpg",
        alt: "Massage énergétique au cabinet de Clémence à Jonzac",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Découvrir les massages",
        href: "/massages",
        variant: "outline",
      },
      slug: "massages-energetiques",
    },
    {
      title: "Accompagnements émotionnels",
      description:
        "Un travail en profondeur pour comprendre, accueillir et transformer ce qui se vit à l'intérieur. Régulation du système nerveux, constellations familiales, décodage quantique, médiumnité : chaque séance mobilise les outils les plus justes pour vous. En cabinet à Jonzac ou à distance.",
      price: "À partir de 60 euros",
      duration: "1h à 1h30",
      image: {
        src: "/images/work/DSC02384.jpg",
        alt: "Accompagnement émotionnel au cabinet de Clémence à Jonzac",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Découvrir les accompagnements",
        href: "/accompagnements",
        variant: "outline",
      },
      slug: "accompagnements-emotionnels",
    },
    {
      title: "SE CHOISIR — Parcours RMD",
      description:
        "Un parcours de 9 séances pour aller au cœur de vos mécanismes, libérer ce qui ne vous sert plus et poser de nouvelles fondations. Né de 10 ans de pratique, le RMD est le chemin le plus complet que je propose pour une transformation profonde et durable.",
      price: "1 333 euros",
      duration: "9 séances",
      image: {
        src: "/images/team/DSC02996.jpg",
        alt: "Programme SE CHOISIR — Parcours RMD Signature de Clémence Reznicek",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Découvrir le parcours",
        href: "/rmd",
        variant: "outline",
      },
      slug: "se-choisir-rmd",
    },
    {
      title: "Formations holistiques",
      description:
        "Des formations en présentiel à Jonzac ou à distance pour développer votre autonomie énergétique et spirituelle. Trois niveaux d'engagement : les stages thématiques pour acquérir des outils concrets, Cosmo pour un décodage quantique intensif, et Quantique 111, un parcours complet en 6 modules pour maîtriser l'énergétique en profondeur.",
      price: "À partir de 100 euros",
      duration: "",
      image: {
        src: "/images/work/formations-holistiques.jpg",
        alt: "Formation holistique avec Clémence Reznicek",
        width: 640,
        height: 427,
      },
      cta: {
        label: "En savoir plus",
        href: "/formations",
        variant: "outline",
      },
      slug: "formations-holistiques",
    },
  ],
};

// =============================================================================
// 4. Introduction Clémence
// =============================================================================

export const introduction: IntroductionContent = {
  sectionTitle: "Qui suis-je",
  headline: "Clémence, thérapeute holistique et praticienne en massage",
  paragraphs: [
    "Je reçois des personnes qui se sentent bloquées, épuisées ou déconnectées d'elles-mêmes, celles qui savent qu'il est temps de changer quelque chose mais ne savent pas par où commencer.",
    "Mon approche est à la fois concrète et profonde. Je travaille avec le corps, les émotions et les dynamiques familiales pour identifier ce qui freine, libérer ce qui pèse et retrouver un rapport à soi plus juste et plus libre.",
    "En cabinet à Jonzac ou à distance, j'accompagne chaque personne à son rythme, avec rigueur et bienveillance.",
  ],
  image: {
    src: "/images/team/DSC02967.jpg",
    alt: "Clémence Reznicek, praticienne en bien-être holistique à Jonzac",
    width: 480,
    height: 600,
  },
  cta: {
    label: "En savoir plus sur mon parcours",
    href: "/a-propos",
    variant: "outline",
  },
  signature: "Clémence",
};

// =============================================================================
// 6. Services Complets
// =============================================================================

export const serviceCategories: ServiceCategoryContent = {
  sectionTitle: "Tous les soins",
  sectionSubtitle:
    "Un éventail d'accompagnements pour répondre à ce que vous vivez, là où vous en êtes.",
  categories: [
    {
      title: "Massages bien-être",
      description:
        "Des soins corporels enveloppants qui invitent le corps à relâcher ce qu'il retient, pour retrouver fluidité et douceur.",
      icon: "hand",
      services: [
        {
          name: "Massage Shambala",
          description:
            "Un massage profond et enveloppant qui allie mouvements fluides, pressions intuitives et travail énergétique.",
          price: "100 euros",
          duration: "1h30",
        },
        {
          name: "Massage Solar",
          description:
            "Un massage chaleureux centré sur la libération des tensions musculaires et le retour à soi.",
          price: "120 euros",
          duration: "2h",
        },
        {
          name: "Massage Aromatouch",
          description:
            "Un protocole aux huiles essentielles doTERRA appliquées le long de la colonne vertébrale et sur les pieds.",
          price: "75 euros",
          duration: "1h",
        },
      ],
      image: {
        src: "/images/work/DSC02663.jpg",
        alt: "Massage bien-être en cabinet",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Voir les massages",
        href: "/massages",
        variant: "outline",
      },
    },
    {
      title: "Accompagnement émotionnel",
      description:
        "Un travail en profondeur pour comprendre, accueillir et transformer ce qui se vit à l'intérieur.",
      icon: "heart",
      services: [
        {
          name: "Coaching-accompagnement mieux-être",
          description:
            "Un accompagnement structuré pour explorer vos schémas et trouver de nouvelles façons de vous relier à vous-même.",
          price: "150 euros",
          duration: "1h30",
        },
        {
          name: "Régulation émotionnelle et somatique",
          description:
            "Un travail par le corps pour apprendre à accueillir et réguler vos émotions dans la sécurité.",
          price: "150 euros",
          duration: "1h30",
        },
        {
          name: "Médiumnité-oracle-pendule-décodage quantique",
          description:
            "Un éclairage intuitif au service de votre compréhension. Non pas pour prédire, mais pour éclairer ce qui demande de l'attention.",
          price: "60 euros",
          duration: "1h",
        },
      ],
      image: {
        src: "/images/work/DSC02384.jpg",
        alt: "Séance d'accompagnement émotionnel",
        width: 640,
        height: 427,
      },
      cta: {
        label: "En savoir plus",
        href: "/accompagnements",
        variant: "outline",
      },
    },
    {
      title: "Constellations familiales",
      description:
        "Des espaces collectifs pour explorer, partager et transformer ensemble dans un cadre contenant.",
      icon: "users",
      services: [
        {
          name: "Constellations familiales individuelles",
          description:
            "Un travail systémique pour éclairer les dynamiques familiales qui influencent votre vie.",
          price: "Me contacter",
          duration: "",
        },
        {
          name: "Constellations familiales en groupe",
          description:
            "Une journée en groupe pour un travail systémique en profondeur, dans un cadre sécurisant et bienveillant.",
          price: "Me contacter",
          duration: "Journée",
        },
        {
          name: "Atelier méditation",
          description:
            "Un moment de présence partagée pour se retrouver, respirer et se recentrer ensemble.",
          price: "Me contacter",
          duration: "",
        },
        {
          name: "Atelier aromathérapie",
          description:
            "Découvrir les huiles essentielles et apprendre à les utiliser au quotidien pour votre bien-être.",
          price: "Me contacter",
          duration: "",
        },
        {
          name: "Stage développement spirituel",
          description:
            "Un stage de deux jours pour explorer votre dimension spirituelle et approfondir votre connexion à vous-même.",
          price: "100 euros / journée",
          duration: "2 jours",
        },
        {
          name: "Décodage quantique Cosmo",
          description:
            "Un parcours approfondi de décodage quantique pour explorer les mémoires et mécanismes profonds qui influencent votre vie.",
          price: "333 euros",
          duration: "Parcours complet",
        },
      ],
      image: {
        src: "/images/work/DSC02714.jpg",
        alt: "Atelier en groupe dans un cadre chaleureux",
        width: 640,
        height: 427,
      },
      cta: {
        label: "En savoir plus",
        href: "/accompagnements",
        variant: "outline",
      },
    },
    {
      title: "Soins énergétiques",
      description:
        "Des approches subtiles qui agissent sur les plans émotionnel et énergétique pour retrouver harmonie et ancrage.",
      icon: "sparkles",
      services: [
        {
          name: "LaHoChi Multidimensionnel",
          description:
            "Un soin énergétique d'une grande douceur qui agit en profondeur sur le corps, les émotions et le champ énergétique.",
          price: "60 euros",
          duration: "45 min",
        },
      ],
      image: {
        src: "/images/work/DSC02550.jpg",
        alt: "Soin énergétique dans le cabinet",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Découvrir les soins",
        href: "/accompagnements",
        variant: "outline",
      },
    },
  ],
};

// =============================================================================
// 7. RMD Signature (Homepage Spotlight)
// =============================================================================

export const rmdSpotlight: RMDContent = {
  sectionTitle: "Le parcours signature",
  headline: "RMD — Résurrection Multi-Dimensionnelle",
  description:
    "Parce qu'il est temps de vous choisir.\n\nUn parcours de 9 séances pour aller au cœur de vos mécanismes, libérer ce qui ne vous sert plus et poser de nouvelles fondations. Né de 10 ans de pratique et de recherche, le RMD est le chemin le plus complet que je propose pour une transformation profonde et durable.",
  highlights: [
    {
      icon: "compass",
      title: "Sur mesure",
      description:
        "Chaque parcours est adapté à votre histoire, vos besoins et votre rythme. Rien n'est imposé, tout se co-crée.",
    },
    {
      icon: "layers",
      title: "Multi-dimensionnel",
      description:
        "Somatique, énergétique, émotionnel et systémique : chaque séance mobilise les outils les plus justes pour vous.",
    },
    {
      icon: "anchor",
      title: "Durable",
      description:
        "L'objectif n'est pas un mieux-être passager, mais une réorganisation profonde qui s'inscrit durablement dans votre quotidien.",
    },
  ],
  price: "1 333 euros",
  priceDetail: "Règlement en plusieurs fois possible",
  sessions: "9 séances",
  image: {
    src: "/images/team/DSC02996.jpg",
    alt: "Programme RMD Signature de Clémence Reznicek",
    width: 640,
    height: 427,
  },
  cta: {
    label: "Découvrir le parcours RMD",
    href: "/rmd",
    variant: "primary",
  },
};

// =============================================================================
// 8. Valeurs et Approche
// =============================================================================

export const values: ValueContent = {
  sectionTitle: "Mon approche",
  sectionSubtitle:
    "Ce qui fonde ma pratique et guide chaque rencontre",
  values: [
    {
      icon: "eye",
      title: "Présence",
      description:
        "Être là, vraiment. Pas en façade, pas en posture. J'accueille ce qui se présente avec écoute, stabilité et justesse, sans masque ni détour.",
    },
    {
      icon: "shield",
      title: "Sécurité intérieure",
      description:
        "Avant d'aller en profondeur, je crée les conditions pour que vous puissiez vous y rendre sans vous perdre. Un espace où le corps se relâche et où les émotions peuvent circuler librement.",
    },
    {
      icon: "flame",
      title: "Transformation douce",
      description:
        "Je ne force rien. Je crois aux réorganisations profondes qui respectent votre rythme, celles qui durent parce qu'elles ont été intégrées, pas imposées.",
    },
  ],
};

// =============================================================================
// 9. Promotions et Actualités
// =============================================================================

export const promotions: PromotionContent = {
  sectionTitle: "Nouveauté",
  headline: "Ateliers méditation & aromathérapie",
  description:
    "Rejoignez-moi pour des moments collectifs de présence, de partage et de découverte. Méditation guidée et huiles essentielles, dans un cadre chaleureux et bienveillant. Cartes cadeaux disponibles pour offrir un atelier à un proche.",
  cta: {
    label: "Me contacter",
    href: "tel:+33632185259",
    variant: "primary",
  },
  badge: "Nouveauté",
  active: true,
};

// =============================================================================
// 10. FAQ
// =============================================================================

export const faq: FAQContent = {
  sectionTitle: "Questions fréquentes",
  sectionSubtitle:
    "Les réponses aux questions que vous vous posez peut-être avant de prendre rendez-vous",
  items: [
    {
      question: "Dois-je savoir ce que je veux travailler avant de venir ?",
      answer:
        "Non. Certaines personnes arrivent avec une problématique précise, d'autres avec une sensation diffuse que quelque chose ne va pas. Les deux sont parfaitement accueillis. Mon rôle est justement d'éclairer ce qui se joue et de trouver le bon angle avec vous.",
    },
    {
      question: "Comment se déroule une séance avec vous ?",
      answer:
        "Chaque séance commence par un temps d'échange pour comprendre ce que vous traversez. J'adapte ensuite les outils les plus justes à ce qui se présente : somatique, énergétique, systémique, coaching. La séance se termine par un temps d'intégration pour que vous repartiez ancré·e et clair·e.",
    },
    {
      question: "Combien de séances sont nécessaires ?",
      answer:
        "Cela dépend de ce que vous traversez et de votre rythme. Certaines personnes ressentent un changement dès la première séance. D'autres ont besoin d'un accompagnement plus régulier. Je ne pousse jamais à la consommation. C'est votre vécu qui guide.",
    },
    {
      question: "Proposez-vous des séances à distance ?",
      answer:
        "Oui. La grande majorité des accompagnements se fait aussi bien à distance qu'en présentiel : régulation du système nerveux, constellations familiales, bilan énergétique et spirituel, formations. Les massages se font uniquement en cabinet à Jonzac.",
    },
    {
      question: "Votre approche est-elle pour moi si je ne suis pas spirituelle ?",
      answer:
        "Oui, tout à fait. Mon approche est avant tout humaine. Je travaille avec le corps, les émotions et les dynamiques familiales. Vous n'avez besoin d'adhérer à aucune croyance pour bénéficier de cet accompagnement.",
    },
    {
      question: "Comment savoir quel accompagnement me correspond ?",
      answer:
        "La séance découverte est faite pour ça. En une heure, nous faisons le point sur votre situation et définissons ensemble le chemin le plus adapté. C'est le meilleur point de départ.",
    },
    {
      question: "Puis-je offrir une séance à un proche ?",
      answer:
        "Oui, vous pouvez offrir une séance découverte ou un massage énergétique. Une carte cadeau au format PDF vous sera envoyée, à imprimer directement si vous le souhaitez. Les autres accompagnements ne sont pas disponibles en carte cadeau. Ils nécessitent le consentement et la démarche personnelle de celui ou celle qui les vit.",
    },
    {
      question: "Travaillez-vous aussi avec les enfants ?",
      answer:
        "Oui, dès la naissance. Les massages se font en présentiel au cabinet à Jonzac. Les bilans énergétiques pour les enfants se font à distance, avec un compte rendu téléphonique aux parents.",
    },
  ],
};

// =============================================================================
// 11. Infos Pratiques
// =============================================================================

export const practicalInfo: PracticalInfoContent = {
  sectionTitle: "Infos pratiques",
  address: {
    street: "5 avenue Chanzy",
    postalCode: "17500",
    city: "Jonzac",
    region: "",
    full: "5 avenue Chanzy, 17500 Jonzac",
  },
  phone: {
    display: "06 32 18 52 59",
    link: "tel:+33632185259",
  },
  email: "clemence.reznicek@gmail.com",
  openingHours: [
    { days: "Lundi - Vendredi", hours: "9h - 18h15" },
    { days: "Samedi", hours: "10h - 12h30" },
    { days: "Dimanche", hours: "Fermé" },
  ],
  accessDetails: [
    "Cabinet situé au 1er étage, sans accès PMR",
    "Merci de venir seul(e), sauf pour les mineurs qui doivent être accompagnés",
    "Pas d'animaux dans le cabinet",
    "Les rendez-vous se prennent facilement : par SMS, via WhatsApp, par appel téléphonique, via l'onglet contact du site ou via Messenger",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.1!2d-0.4367!3d45.4464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5+avenue+Chanzy+17500+Jonzac!5e0!3m2!1sfr!2sfr",
  image: {
    src: "/images/establishment/DSC02779.jpg",
    alt: "Cabinet de Clémence Reznicek à Jonzac",
    width: 640,
    height: 427,
  },
};

// =============================================================================
// 12. CTA Final
// =============================================================================

export const ctaFinal: CTAFinalContent = {
  headline: "Offrez-vous cet espace",
  description:
    "Un premier pas vers vous-même. Que ce soit pour un massage, un accompagnement ou simplement une conversation, je suis là pour vous accueillir avec douceur.",
  primaryCTA: {
    label: "Prendre rendez-vous",
    href: "tel:+33632185259",
    variant: "primary",
  },
  secondaryCTA: {
    label: "Me contacter",
    href: "/contact",
    variant: "secondary",
  },
  backgroundImage: {
    src: "/images/establishment/DSC02924.jpg",
    alt: "Intérieur chaleureux du cabinet de bien-être",
    width: 1920,
    height: 1080,
  },
};
