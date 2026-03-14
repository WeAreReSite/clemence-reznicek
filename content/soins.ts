import type { SoinsPageContent } from "@/types/content";

// =============================================================================
// Accompagnements Page Content
// =============================================================================

export const soinsPage: SoinsPageContent = {
  heroTitle: "Accompagnements holistiques",
  heroSubtitle:
    "Comprendre ce qui freine. Libérer ce qui pèse. Avancer autrement.",
  heroImage: {
    src: "/images/work/DSC02550.jpg",
    alt: "Accompagnement holistique par Clémence Reznicek",
    width: 1920,
    height: 1080,
  },
  introduction:
    "Thérapeute holistique à Jonzac (Charente-Maritime), j'accompagne en cabinet et en visioconsultation les personnes qui se sentent bloquées, épuisées ou déconnectées d'elles-mêmes. Je ne travaille pas sur des symptômes isolés. Je regarde la personne dans sa globalité : son corps, ses émotions, son histoire familiale, ses mémoires. Chaque accompagnement est construit sur mesure, à partir de ce que vous vivez réellement. Que vous soyez à Jonzac, Royan, Saintes ou partout en France en visio, nous choisissons ensemble les outils les plus justes pour vous, à votre rythme.",
  whyHolistic: {
    title: "Pourquoi un accompagnement holistique ?",
    paragraphs: [
      "Vous avez peut-être déjà fait de la psychothérapie, du coaching, ou essayé différentes approches. Mais quelque chose reste bloqué. Les mêmes schémas reviennent. Les mêmes difficultés se répètent.",
    ],
    listIntro: "C'est normal. Parce que certains blocages ne sont pas uniquement dans votre mental. Ils sont aussi dans :",
    listItems: [
      "Votre corps (tensions, mémoires corporelles)",
      "Votre système nerveux (état d'alerte permanent)",
      "Votre énergie (circulation bloquée)",
      "Votre lignée familiale (dynamiques transgénérationnelles)",
    ],
    emphasis: "L'accompagnement holistique travaille sur tous ces plans à la fois.",
    closing: "C'est pour ça qu'il permet des transformations profondes et durables là où la parole seule ne suffit plus.",
    disclaimer: "Mon approche n'est pas là pour remplacer un suivi psychologique si vous en avez besoin, mais pour aller chercher ce que les mots ne peuvent pas atteindre.",
  },
  categories: [
    {
      title: "Accompagnements individuels",
      description:
        "Un travail en profondeur pour comprendre, accueillir et transformer ce qui se vit à l'intérieur.",
      services: [
        {
          name: "Séance découverte",
          description:
            "Avant tout accompagnement, nous prenons le temps de nous rencontrer vraiment. Vous partagez ce que vous traversez, je vous aide à mettre des mots sur ce qui se joue en profondeur. C'est de là que nous partons, ensemble, pour construire la suite.",
          price: "60 euros",
          duration: "1h · En cabinet à Jonzac ou à distance",
          image: {
            src: "/images/work/DSC02243.jpg",
            alt: "Séance découverte — Clémence en échange avec une cliente",
            width: 640,
            height: 960,
          },
        },
        {
          name: "Régulation du système nerveux",
          description:
            "Quand le corps est en alerte permanente, les mots ne suffisent plus. Je travaille directement avec votre système nerveux, par la lecture somatique et le décodage quantique, pour identifier ce qui maintient cet état de tension. Véritable boussole intérieure, ce travail vous permet de reconnaître vos propres signaux et de poser les bases d'une sécurité intérieure profonde et durable.",
          price: "150 euros",
          duration: "1h30",
          image: {
            src: "/images/team/DSC02979.jpg",
            alt: "Régulation du système nerveux — Clémence en méditation",
            width: 640,
            height: 427,
          },
        },
        {
          name: "Blessures d'âme",
          description:
            "Certaines blessures sont si anciennes qu'elles semblent faire partie de vous : la peur d'être rejeté, trahi, abandonné. Ce travail permet de les nommer, de les comprendre et de commencer à s'en libérer, à travers le travail de Lise Bourbeau, les huiles essentielles et le coaching quantique.",
          price: "150 euros",
          duration: "1h30",
          image: {
            src: "/images/product/DSC02925.jpg",
            alt: "Blessures d'âme — huiles essentielles pour la libération émotionnelle",
            width: 640,
            height: 960,
          },
        },
        {
          name: "Constellations familiales",
          description:
            "Nous portons tous, sans le savoir, des dynamiques héritées de notre famille : des loyautés invisibles, des places mal occupées, des histoires non résolues. Praticienne en constellations familiales à Jonzac (Charente-Maritime) et en visioconsultation, je vous accompagne pour éclairer ce qui se transmet. Je m'appuie sur la généalogie, l'origine des prénoms, les grandes dates de l'histoire collective et les dates clés de votre propre famille, la vision de Salomon Sellam sur les maladies, la systémie appliquée, les répétitions des schémas transgénérationnels, la boucle de la vie, la roue chamanique et les positions perceptuelles. Un travail d'une grande précision, souvent d'une intensité inattendue, qui permet une réorganisation en profondeur.",
          price: "150 euros",
          duration: "Individuel : 1h30 · En vision : 1h30 · Groupe : nous contacter",
          image: {
            src: "/images/work/DSC02174.jpg",
            alt: "Constellations familiales — séance en présentiel avec figurines",
            width: 640,
            height: 960,
          },
        },
      ],
      image: {
        src: "/images/work/DSC02275.jpg",
        alt: "Constellations familiales — séance en visio",
        width: 640,
        height: 960,
      },
    },
    {
      title: "Ateliers & rencontres",
      description:
        "Des espaces de partage et de découverte pour explorer ensemble, dans la douceur et la convivialité.",
      services: [
        {
          name: "Méditation",
          description:
            "Un moment de présence partagée pour se retrouver, respirer et se recentrer. Courte mais suffisamment profonde pour favoriser une détente réelle, cette méditation se pratique assis, sans expérience préalable. Simplicité et bienveillance garanties.",
          price: "Voir les dates",
          duration: "45 min · Voir les dates",
        },
        {
          name: "Atelier aromathérapie",
          description:
            "Un atelier convivial et enrichissant pour découvrir les huiles essentielles et apprendre à les utiliser au quotidien. Plusieurs thématiques proposées au fil des saisons : huiles essentielles et émotions, huiles essentielles et enfants, huiles essentielles et concentration, huiles essentielles et énergétique...",
          price: "Voir les dates",
          duration: "1h · Voir les dates",
          image: {
            src: "/images/work/DSC03006.jpg",
            alt: "Atelier aromathérapie — coffret d'huiles essentielles doTERRA",
            width: 640,
            height: 427,
          },
        },
        {
          name: "Constellation familiale en groupe",
          description:
            "Une journée en groupe pour un travail systémique en profondeur. Le groupe crée un champ de résonance puissant qui amplifie le travail. Chaque participant est à la fois témoin et acteur. Une expérience humaine unique, dans un cadre sécurisant et bienveillant.",
          price: "Voir les dates",
          duration: "Journée complète · Voir les dates",
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
    href: "tel:+33632185259",
    variant: "primary",
  },
};
