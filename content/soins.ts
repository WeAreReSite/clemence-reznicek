import type { SoinsPageContent } from "@/types/content";

// =============================================================================
// Soins et Accompagnements Page Content
// =============================================================================

export const soinsPage: SoinsPageContent = {
  heroTitle: "Soins et accompagnements",
  heroSubtitle:
    "Éclairer, accueillir, transformer en douceur",
  heroImage: {
    src: "/images/work/DSC02550.jpg",
    alt: "Soin énergétique et accompagnement holistique",
    width: 1920,
    height: 1080,
  },
  introduction:
    "Au-delà du massage, je propose un éventail d'accompagnements pour répondre à ce qui vit en toi, à l'endroit précis où tu en es. Soins énergétiques, coaching émotionnel, régulation somatique, aromathérapie, constellations familiales : chaque outil est au service de ta transformation. Pas de recette unique. On co-crée ensemble le chemin le plus juste pour toi.",
  categories: [
    {
      title: "Soins énergétiques",
      description:
        "Des approches subtiles qui agissent en profondeur sur le corps, les émotions et le champ énergétique. Pour retrouver harmonie, ancrage et clarté intérieure.",
      services: [
        {
          name: "LaHoChi Multidimensionnel",
          description:
            "Le LaHoChi est un soin énergétique d'une grande douceur. Par imposition des mains, il agit sur les différentes couches de l'être : physique, émotionnelle, mentale et énergétique. C'est un moment de profonde relaxation où le corps peut libérer des tensions anciennes et retrouver son équilibre naturel. Beaucoup de personnes ressentent une chaleur apaisante et un sentiment de paix profonde.",
          price: "60 euros",
          duration: "45 min",
        },
        {
          name: "Décodage quantique",
          description:
            "Le décodage quantique est une lecture intuitive et énergétique qui permet d'éclairer les mécanismes inconscients à l'œuvre dans ta vie. Il aide à comprendre pourquoi certains schémas se répètent et ouvre des pistes de transformation. Ce n'est pas une prédiction, c'est un outil de clarté.",
          price: "60 euros",
          duration: "1h",
        },
      ],
      image: {
        src: "/images/work/DSC02550.jpg",
        alt: "Soin énergétique LaHoChi au cabinet",
        width: 640,
        height: 427,
      },
    },
    {
      title: "Accompagnement émotionnel et somatique",
      description:
        "Un travail en profondeur qui passe par le corps et les émotions pour transformer ce qui se vit à l'intérieur. Pour celles et ceux qui veulent aller au-delà du symptôme.",
      services: [
        {
          name: "1ère séance individuelle",
          description:
            "Un espace de parole et d'écoute pour faire connaissance et explorer ce qui se vit en toi. Ensemble, on éclaire ce qui demande de l'attention et on pose les premières bases de ton accompagnement. C'est le point de départ pour tous les parcours d'accompagnement.",
          price: "60 euros",
          duration: "1h",
        },
        {
          name: "Coaching-accompagnement mieux-être",
          description:
            "Un accompagnement structuré pour explorer tes schémas, comprendre tes fonctionnements et trouver de nouvelles façons de te relier à toi-même et aux autres. Le coaching se fait dans un cadre de sécurité et de bienveillance, à ton rythme.",
          price: "150 euros",
          duration: "1h30",
        },
        {
          name: "Régulation émotionnelle et somatique",
          description:
            "Un travail par le corps pour apprendre à accueillir et réguler tes émotions. En écoutant les sensations physiques, on dénoue ce qui est resté bloqué et on retrouve une capacité naturelle de régulation. C'est un outil puissant pour les personnes qui portent beaucoup de stress ou d'anxiété.",
          price: "150 euros",
          duration: "1h30",
        },
        {
          name: "Médiumnité-oracle-pendule-décodage quantique",
          description:
            "Un éclairage intuitif au service de ta compréhension. La médiumnité, dans ma pratique, n'est pas une boule de cristal. C'est la capacité à percevoir des informations au-delà du visible pour éclairer ce qui demande de l'attention dans ta vie, avec respect et éthique.",
          price: "60 euros",
          duration: "1h",
        },
        {
          name: "Aromathérapie doTERRA",
          description:
            "Une consultation personnalisée pour découvrir comment les huiles essentielles doTERRA peuvent soutenir ton bien-être au quotidien. On identifie ensemble les huiles les plus adaptées à tes besoins du moment.",
          price: "30 euros",
          duration: "30 min",
        },
      ],
      image: {
        src: "/images/work/DSC02384.jpg",
        alt: "Séance d'accompagnement émotionnel",
        width: 640,
        height: 427,
      },
    },
    {
      title: "Constellations familiales",
      description:
        "Un travail systémique pour éclairer les dynamiques qui se transmettent de génération en génération et retrouver ta juste place.",
      services: [
        {
          name: "Constellation familiale individuelle",
          description:
            "En séance individuelle, on explore les dynamiques familiales qui influencent ta vie actuelle. À l'aide de figurines ou de représentation spatiale, les nœuds deviennent visibles et une nouvelle organisation peut se mettre en place. C'est souvent un moment d'une grande intensité et de profonde libération.",
          price: "60 euros",
          duration: "1h",
        },
        {
          name: "Constellation familiale en groupe",
          description:
            "Une journée en groupe pour un travail systémique en profondeur. Le groupe crée un champ de résonance puissant qui amplifie le travail. Chaque participant est à la fois témoin et acteur. C'est une expérience humaine unique dans un cadre sécurisant et bienveillant.",
          price: "333 euros",
          duration: "Journée complète",
        },
      ],
      image: {
        src: "/images/work/DSC02714.jpg",
        alt: "Espace d'atelier et de constellation",
        width: 640,
        height: 427,
      },
    },
    {
      title: "Ateliers collectifs",
      description:
        "Des espaces de partage et de découverte pour explorer ensemble, dans la douceur et la convivialité.",
      services: [
        {
          name: "Atelier méditation",
          description:
            "Un moment de présence partagée pour se retrouver, respirer et se recentrer ensemble. Pas besoin d'expérience préalable. On pratique dans la simplicité et la bienveillance.",
          price: "15 euros",
          duration: "1h",
        },
        {
          name: "Atelier aromathérapie",
          description:
            "Un atelier pour découvrir les huiles essentielles doTERRA, apprendre à les utiliser au quotidien et créer tes propres synergies. Un moment convivial et enrichissant.",
          price: "30 euros",
          duration: "1h30",
        },
        {
          name: "Stage développement spirituel",
          description:
            "Un stage de deux jours pour explorer ta dimension spirituelle, affiner tes perceptions et approfondir ta connexion à toi-même dans un cadre sécurisant et bienveillant.",
          price: "100 euros / journée (stage 2 jours)",
          duration: "2 jours",
        },
        {
          name: "Décodage quantique Cosmo",
          description:
            "Un parcours approfondi de décodage quantique pour explorer les mémoires et les mécanismes profonds qui influencent ta vie, et ouvrir de nouvelles possibilités de transformation.",
          price: "333 euros",
          duration: "Parcours complet",
        },
      ],
      image: {
        src: "/images/establishment/DSC02924.jpg",
        alt: "Espace d'atelier dans le cabinet",
        width: 640,
        height: 427,
      },
    },
  ],
  cta: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
