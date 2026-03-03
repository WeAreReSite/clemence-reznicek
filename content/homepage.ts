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
  headline: "Se connaître et s'aimer dans toutes nos dimensions",
  subtitle: "Espace sacré de bien-être holistique",
  description:
    "Un lieu de douceur et de présence à Jonzac, où tu peux déposer ce qui pèse et retrouver ta clarté intérieure. Massages, soins énergétiques, coaching émotionnel.",
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
      price: "À partir de 45 euros",
      duration: "45 min à 1h30",
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
      duration: "1h",
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
    "Depuis plus de 10 ans, j'accompagne des femmes et des hommes vers une meilleure connaissance d'eux-mêmes. Mon approche allie intuition, travail somatique et vision systémique pour des transformations qui durent.",
    "Ce qui me guide, c'est la justesse. Chaque personne est unique, et chaque séance se déploie selon ce qui se présente, dans un cadre de sécurité intérieure et de bienveillance. Ici, tu n'as rien à prouver. Juste à te laisser accueillir.",
    "Mon cabinet à Jonzac est un espace chaleureux, pensé pour que tu puisses te déposer pleinement. Un lieu où la douceur et la profondeur cohabitent naturellement.",
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
          price: "75 euros / 1h — 120 euros / 1h30",
          duration: "1h ou 1h30",
        },
        {
          name: "Massage Solar",
          description:
            "Un massage chaleureux centré sur la libération des tensions musculaires et le retour à soi.",
          price: "75 euros",
          duration: "1h",
        },
        {
          name: "Aromatouch doTERRA",
          description:
            "Un protocole aux huiles essentielles doTERRA appliquées le long de la colonne vertébrale et sur les pieds.",
          price: "45 euros",
          duration: "45 min",
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
          duration: "1h",
        },
        {
          name: "Décodage quantique",
          description:
            "Une lecture intuitive et énergétique pour éclairer les mécanismes inconscients qui se rejouent dans ta vie.",
          price: "60 euros",
          duration: "1h",
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
    {
      title: "Accompagnement émotionnel",
      description:
        "Un travail en profondeur pour comprendre, accueillir et transformer ce qui se vit à l'intérieur.",
      icon: "heart",
      services: [
        {
          name: "Coaching émotionnel",
          description:
            "Un accompagnement structuré pour explorer tes schémas et trouver de nouvelles façons de te relier à toi-même.",
          price: "60 euros",
          duration: "1h",
        },
        {
          name: "Régulation émotionnelle et somatique",
          description:
            "Un travail par le corps pour apprendre à accueillir et réguler tes émotions dans la sécurité.",
          price: "60 euros",
          duration: "1h",
        },
        {
          name: "Médiumnité",
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
      title: "Ateliers et constellations",
      description:
        "Des espaces collectifs pour explorer, partager et transformer ensemble dans un cadre contenant.",
      icon: "users",
      services: [
        {
          name: "Constellations familiales individuelles",
          description:
            "Un travail systémique pour éclairer les dynamiques familiales qui influencent ta vie.",
          price: "60 euros",
          duration: "1h",
        },
        {
          name: "Constellations familiales en groupe",
          description:
            "Une journée en groupe pour un travail systémique en profondeur, dans un cadre sécurisant et bienveillant.",
          price: "333 euros",
          duration: "Journée",
        },
        {
          name: "Atelier méditation",
          description:
            "Un moment de présence partagée pour se retrouver, respirer et se recentrer ensemble.",
          price: "15 euros",
          duration: "1h",
        },
        {
          name: "Atelier aromathérapie",
          description:
            "Découvrir les huiles essentielles doTERRA et apprendre à les utiliser au quotidien pour ton bien-être.",
          price: "30 euros",
          duration: "1h30",
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
  ],
};

// =============================================================================
// 7. RMD Signature (Homepage Spotlight)
// =============================================================================

export const rmdSpotlight: RMDContent = {
  sectionTitle: "Le programme signature",
  headline: "RMD — Réorganisation en profondeur",
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
  priceDetail: "Paiement échelonné possible",
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
      title: "Présence et écoute",
      description:
        "Être là, pleinement. T'offrir un espace où tu peux te montrer tel que tu es, sans jugement, sans attente. Cette qualité de présence est le socle de chaque soin.",
    },
    {
      icon: "shield",
      title: "Sécurité intérieure",
      description:
        "Avant toute transformation, il faut se sentir en sécurité. Je crée un cadre contenant où ton système nerveux peut se relâcher et où les choses peuvent se déposer naturellement.",
    },
    {
      icon: "flame",
      title: "Transformation douce",
      description:
        "Pas de révolution brutale. Les changements les plus profonds arrivent quand on respecte le rythme du corps et de l'âme. Ici, chaque transformation est accompagnée avec douceur.",
    },
  ],
};

// =============================================================================
// 9. Promotions et Actualités
// =============================================================================

export const promotions: PromotionContent = {
  sectionTitle: "Actualités",
  headline: "Offre découverte : ta première séance à 45 euros",
  description:
    "Pour te permettre de découvrir l'accompagnement en toute sérénité, je te propose une première rencontre à tarif réduit. Un moment pour se connaître, explorer ce qui se vit et voir si le courant passe.",
  cta: {
    label: "En profiter",
    href: "/contact",
    variant: "primary",
  },
  badge: "Offre découverte",
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
      question: "Comment se passe une première séance ?",
      answer:
        "La première séance est un moment d'écoute et d'exploration. On prend le temps de se connaître, de comprendre ce qui t'amène et ce que tu traverses. Je t'explique ma façon de travailler, et ensemble on choisit le chemin le plus juste pour toi. Il n'y a aucune obligation de s'engager après cette première rencontre. C'est un espace libre, sans pression.",
    },
    {
      question:
        "Qu'est-ce que la médiumnité dans ta pratique ?",
      answer:
        "Dans ma pratique, la médiumnité est un outil de clarté, pas de prédiction. Elle me permet de percevoir des informations qui ne sont pas toujours accessibles par le mental : des dynamiques familiales, des mémoires inscrites dans le corps, des schémas qui se répètent. Je m'en sers pour éclairer ce qui demande de l'attention, toujours avec respect et dans un cadre éthique.",
    },
    {
      question: "Est-ce que tu fais des prédictions ?",
      answer:
        "Non, je ne fais pas de prédictions. Mon travail n'est pas de te dire ce qui va se passer, mais de t'aider à comprendre ce qui se joue maintenant. L'avenir se construit à partir de la clarté que tu gagnes sur toi-même et de tes choix. Mon rôle est de t'accompagner dans cette clarté, pas de te donner des certitudes sur demain.",
    },
    {
      question:
        "Quelle est la différence entre un massage et un soin ?",
      answer:
        "Le massage agit principalement par le toucher et le corps physique : il libère les tensions musculaires, fluidifie la circulation et invite le système nerveux à se relâcher. Le soin énergétique, lui, travaille sur un plan plus subtil : les émotions, le champ énergétique, les mémoires inscrites dans le corps. Les deux sont complémentaires et peuvent se combiner selon tes besoins.",
    },
    {
      question: "C'est quoi le RMD ?",
      answer:
        "Le RMD (Réorganisation Multi-Dimensionnelle) est le programme signature que j'ai créé après 10 ans de pratique. C'est un parcours de 9 séances qui combine tous mes outils : somatique, énergétique, coaching, constellations. L'idée est de ne pas rester en surface, mais d'aller au cœur des mécanismes qui se répètent pour les transformer en profondeur. C'est le chemin le plus complet que je propose.",
    },
    {
      question: "Est-ce que ça marche en visio ?",
      answer:
        "Oui, certains accompagnements fonctionnent très bien en visio : le coaching émotionnel, la médiumnité, le décodage quantique et les constellations individuelles. La distance ne diminue pas la qualité de la connexion ni la profondeur du travail. Les massages et soins énergétiques en présentiel nécessitent bien sûr ta présence au cabinet à Jonzac.",
    },
    {
      question: "Combien de séances faut-il ?",
      answer:
        "Il n'y a pas de réponse universelle. Certaines personnes viennent pour un seul massage et repartent apaisées. D'autres ont besoin d'un accompagnement sur plusieurs mois. On définit ensemble ce qui te convient, à ton rythme. Le programme RMD de 9 séances est la formule la plus complète pour un travail en profondeur.",
    },
    {
      question: "Tu travailles avec les enfants ?",
      answer:
        "Oui, j'accompagne aussi les enfants et les adolescents, avec une approche adaptée à leur âge et à leur sensibilité. Les soins énergétiques et le travail somatique sont particulièrement indiqués pour les jeunes qui traversent des périodes difficiles. J'implique toujours les parents dans le processus pour que l'accompagnement soit cohérent.",
    },
    {
      question:
        "Je ne suis pas du tout spirituel, c'est pour moi quand même ?",
      answer:
        "Absolument. Tu n'as besoin de croire en rien de particulier pour bénéficier de ces accompagnements. Mon approche est ancrée dans le corps et dans l'expérience concrète. Ce qui compte, c'est ta disponibilité à t'écouter et à accueillir ce qui se présente. Les outils que j'utilise fonctionnent que tu sois spirituel ou non. Viens comme tu es.",
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
    "Cabinet situé au rez-de-chaussée, accessible aux personnes à mobilité réduite",
    "Parking gratuit à proximité",
    "À 5 minutes à pied du centre-ville de Jonzac",
    "À 1h de Bordeaux, 45 min de Saintes, 30 min de Cognac",
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
