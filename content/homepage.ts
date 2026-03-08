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
    "Je suis Clémence, thérapeute holistique et praticienne en massage à Jonzac. Je vous accompagne vers un mieux-être concret et durable, à travers le corps, les émotions et les dynamiques familiales. Téléconsultation possible en France et en Europe.",
  primaryCTA: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
  secondaryCTA: {
    label: "Découvrir les soins",
    href: "/soins",
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
      value: "58 avis",
      label: "5/5 sur Google",
    },
    {
      icon: "clock",
      value: "10 ans",
      label: "d'expérience",
    },
    {
      icon: "award",
      value: "11",
      label: "certifications",
    },
    {
      icon: "mapPin",
      value: "Jonzac",
      label: "Charente-Maritime",
    },
  ],
};

// =============================================================================
// 3. Trois Portes d'Entrée
// =============================================================================

export const entryPoints: EntryPointContent = {
  sectionTitle: "Trois portes pour commencer",
  sectionSubtitle:
    "Choisis le chemin qui te parle. Chaque soin est une invitation à te retrouver.",
  cards: [
    {
      title: "Massage",
      description:
        "Un moment pour déposer les tensions, lâcher le mental et laisser le corps se réorganiser en douceur. Shambala, Solar ou Aromatouch : chaque massage est un voyage.",
      price: "À partir de 75 euros",
      duration: "1h à 2h",
      image: {
        src: "/images/work/DSC02663.jpg",
        alt: "Massage bien-être au cabinet de Clémence à Jonzac",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Découvrir les massages",
        href: "/massages",
        variant: "outline",
      },
      slug: "massages",
    },
    {
      title: "Soin énergétique",
      description:
        "Le LaHoChi Multidimensionnel est un soin d'une grande douceur qui agit en profondeur. Il aide à libérer les tensions inscrites dans le corps et à retrouver un ancrage intérieur.",
      price: "60 euros",
      duration: "45 min",
      image: {
        src: "/images/work/DSC02550.jpg",
        alt: "Soin énergétique LaHoChi dans un cadre apaisant",
        width: 640,
        height: 427,
      },
      cta: {
        label: "En savoir plus",
        href: "/soins",
        variant: "outline",
      },
      slug: "soins-energetiques",
    },
    {
      title: "Première séance",
      description:
        "Un espace de parole et d'écoute pour explorer ce qui se vit en toi. Ensemble, on éclaire ce qui demande de l'attention et on pose les premières bases de ton accompagnement.",
      price: "60 euros",
      duration: "1h",
      image: {
        src: "/images/work/DSC02979.jpg",
        alt: "Première rencontre et exploration dans le cabinet",
        width: 640,
        height: 427,
      },
      cta: {
        label: "Prendre rendez-vous",
        href: "/contact",
        variant: "outline",
      },
      slug: "premiere-seance",
    },
  ],
};

// =============================================================================
// 4. Introduction Clémence
// =============================================================================

export const introduction: IntroductionContent = {
  sectionTitle: "Qui suis-je",
  headline: "Clémence, praticienne en bien-être holistique",
  paragraphs: [
    "Je guide celles et ceux qui ont perdu leur élan à retrouver l'envie de vivre pleinement. Ma présence ouvre un espace où la joie revient, où la lumière se rallume, où la respiration se fait plus large. J'accompagne chacun à reprendre sa place dans sa propre vie, à accueillir ses émotions, à lâcher le contrôle et à retrouver confiance dans le mouvement naturel de l'existence.",
    "Mon rôle est de réactiver la vie là où elle s'était figée. J'aide à transformer la peur en ouverture, la confusion en clarté, la lourdeur en légèreté. Je rappelle que la joie n'est pas un luxe : c'est une force de transformation profonde.",
    "Je ne pousse pas : j'illumine. Je ne force pas : j'ouvre. Je ne transforme pas : je réveille. Je suis celle qui rallume l'envie de vivre.",
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
    "Un éventail d'accompagnements pour répondre à ce qui vit en toi, là où tu en es.",
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
            "Un accompagnement structuré pour explorer tes schémas et trouver de nouvelles façons de te relier à toi-même.",
          price: "150 euros",
          duration: "1h30",
        },
        {
          name: "Régulation émotionnelle et somatique",
          description:
            "Un travail par le corps pour apprendre à accueillir et réguler tes émotions dans la sécurité.",
          price: "150 euros",
          duration: "1h30",
        },
        {
          name: "Médiumnité-oracle-pendule-décodage quantique",
          description:
            "Un éclairage intuitif au service de ta compréhension. Non pas pour prédire, mais pour éclairer ce qui demande de l'attention.",
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
        href: "/soins",
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
            "Un travail systémique pour éclairer les dynamiques familiales qui influencent ta vie.",
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
            "Découvrir les huiles essentielles doTERRA et apprendre à les utiliser au quotidien pour ton bien-être.",
          price: "Me contacter",
          duration: "",
        },
        {
          name: "Stage développement spirituel",
          description:
            "Un stage de deux jours pour explorer ta dimension spirituelle et approfondir ta connexion à toi-même.",
          price: "100 euros / journée",
          duration: "2 jours",
        },
        {
          name: "Décodage quantique Cosmo",
          description:
            "Un parcours approfondi de décodage quantique pour explorer les mémoires et mécanismes profonds qui influencent ta vie.",
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
        label: "Découvrir les ateliers",
        href: "/soins",
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
        href: "/soins",
        variant: "outline",
      },
    },
  ],
};

// =============================================================================
// 7. RMD Signature (Homepage Spotlight)
// =============================================================================

export const rmdSpotlight: RMDContent = {
  sectionTitle: "Le programme signature",
  headline: "RMD : Réorganisation en profondeur",
  description:
    "Un parcours de 9 séances pour aller au cœur de tes mécanismes, libérer ce qui ne te sert plus et poser les fondations d'un nouveau rapport à toi-même. Le RMD est né de 10 ans de pratique et de recherche. C'est le chemin le plus complet que je propose pour une transformation profonde et durable.",
  highlights: [
    {
      icon: "compass",
      title: "Sur mesure",
      description:
        "Chaque parcours est adapté à ton histoire, tes besoins et ton rythme. Rien n'est imposé, tout se co-crée.",
    },
    {
      icon: "layers",
      title: "Multi-dimensionnel",
      description:
        "Somatique, énergétique, émotionnel et systémique : chaque séance mobilise les outils les plus justes pour toi.",
    },
    {
      icon: "anchor",
      title: "Durable",
      description:
        "L'objectif n'est pas un mieux-être passager, mais une réorganisation profonde qui s'inscrit dans ton quotidien.",
    },
  ],
  price: "1 333 euros",
  priceDetail: "Règlement en plusieurs fois",
  sessions: "9 séances",
  image: {
    src: "/images/work/DSC02979.jpg",
    alt: "Programme RMD Signature de Clémence Reznicek",
    width: 640,
    height: 427,
  },
  cta: {
    label: "Découvrir le programme RMD",
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
        "J'offre une présence fine, stable et profondément engagée. Je suis là, vraiment, avec écoute et justesse, pour accueillir ce qui se présente sans masque ni détour.",
    },
    {
      icon: "shield",
      title: "Sécurité intérieure",
      description:
        "Je soutiens la régulation, l'apaisement, l'ancrage. Je crée des espaces où le corps peut se relâcher et où les émotions peuvent circuler sans débordement.",
    },
    {
      icon: "flame",
      title: "Transformation douce",
      description:
        "Je crois aux transformations profondes mais non violentes. J'accompagne des réorganisations intérieures qui respectent le rythme de chacun.",
    },
  ],
};

// =============================================================================
// 9. Promotions et Actualités
// =============================================================================

export const promotions: PromotionContent = {
  sectionTitle: "Actualités",
  headline: "Ateliers méditation et aromathérapie",
  description:
    "Retrouve-moi pour des ateliers collectifs de méditation et d'aromathérapie doTERRA. Des moments de partage, de présence et de découverte dans un cadre chaleureux. Cartes cadeaux disponibles pour offrir un soin à un proche.",
  cta: {
    label: "Me contacter",
    href: "/contact",
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
    "Les réponses aux questions que tu te poses peut-être avant de prendre rendez-vous",
  items: [
    {
      question: "Comment se déroule une séance avec toi ?",
      answer:
        "Chaque séance commence par un temps d'échange pour comprendre ce qui t'amène. Ensuite, je t'accompagne avec les outils les plus adaptés : somatique, systémie, intuition, lecture des dynamiques invisibles, massages ou soins énergétiques selon le cadre choisi. La séance se termine par une intégration pour que tu repartes ancré et clair. À partir de là, je t'indique combien de séances seront nécessaires pour accompagner ton processus de manière juste, respectueuse de ton rythme et cohérente avec ton objectif.",
    },
    {
      question: "Dois-je savoir ce que je veux travailler avant de venir ?",
      answer:
        "Non. Certaines personnes arrivent avec une problématique précise, d'autres avec une sensation diffuse. Les deux sont parfaitement accueillis. Mon rôle est d'éclairer ce qui se joue et de t'aider à trouver le bon angle.",
    },
    {
      question: "Est-ce que tu fais de la médiumnité ?",
      answer:
        "Oui, mais toujours dans un cadre éthique, ancré et non prédictif. Je lis les dynamiques, les mouvements, les mémoires, jamais l'avenir. Mon intention est d'apporter de la clarté, pas de créer de la dépendance.",
    },
    {
      question: "Quelle est la différence entre une séance RMD et un massage ?",
      answer:
        "RMD travaille sur toutes les dimensions de l'être : émotionnelle, somatique, transgénérationnelle, énergétique. Le massage, lui, agit principalement par le corps, mais il peut aussi libérer des mémoires et soutenir la régulation. Les deux approches se complètent, mais n'ont pas la même profondeur ni le même objectif.",
    },
    {
      question: "Combien de séances sont nécessaires ?",
      answer:
        "Cela dépend de ton rythme et de ce que tu traverses. Certaines personnes sentent un changement dès la première séance, d'autres préfèrent un accompagnement plus régulier. Je ne pousse jamais à la consommation : c'est ton corps et ton vécu qui guident.",
    },
    {
      question: "Est-ce que tu accompagnes aussi en ligne ?",
      answer:
        "Oui. Les séances RMD, la lecture intuitive, la systémie et la régulation somatique se font très bien à distance. Les massages, évidemment, se font uniquement en présentiel.",
    },
    {
      question: "Est-ce que je dois préparer quelque chose avant la séance ?",
      answer:
        "Rien de particulier. Viens comme tu es, avec ce que tu vis. L'essentiel est d'arriver disponible pour toi.",
    },
    {
      question: "Est-ce que c'est pour moi si je ne suis pas spirituel·le ?",
      answer:
        "Oui. Mon approche est humaine avant tout. Je travaille avec le corps, les émotions, les dynamiques familiales et les mémoires. Tu n'as besoin d'adhérer à aucune croyance.",
    },
    {
      question: "Est-ce que tu fais des diagnostics ou des prédictions ?",
      answer:
        "Non. Je ne remplace ni un médecin ni un thérapeute. Je t'accompagne dans la compréhension de ce que tu vis, dans la régulation et dans la transformation intérieure.",
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
    region: "Charente-Maritime",
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
  headline: "Offre-toi cet espace",
  description:
    "Un premier pas vers toi-même. Que ce soit pour un massage, un soin ou simplement une conversation, je suis là pour t'accueillir avec douceur.",
  primaryCTA: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
  secondaryCTA: {
    label: "Me contacter",
    href: "tel:+33632185259",
    variant: "outline",
  },
  backgroundImage: {
    src: "/images/establishment/DSC02924.jpg",
    alt: "Intérieur chaleureux du cabinet de bien-être",
    width: 1920,
    height: 1080,
  },
};
