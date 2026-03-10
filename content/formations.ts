import type { FormationsPageContent } from "@/types/content";

// =============================================================================
// Formations Holistiques Page Content
// =============================================================================

export const formationsPage: FormationsPageContent = {
  heroTitle: "Formations holistiques",
  heroSubtitle:
    "Des formations en présentiel à Jonzac ou à distance pour développer votre autonomie énergétique et spirituelle.",
  heroImage: {
    src: "/images/work/DSC02941.jpg",
    alt: "Formation holistique — décodage quantique au pendule",
    width: 1920,
    height: 1080,
  },
  introduction:
    "Je transmets ce que j'ai appris, vécu et intégré au fil de 10 ans de pratique. Chaque formation est conçue pour vous donner des outils concrets, utilisables au quotidien, dans une approche à la fois intuitive et structurée. En présentiel à Jonzac ou à distance.",
  formations: [
    {
      name: "Cosmo — Décodage quantique",
      description:
        "Une approche intuitive et énergétique pour écouter et décoder les informations subtiles présentes dans le corps, l'inconscient et le champ émotionnel. Pour éclairer ce qui ne s'exprime pas toujours par les mots, identifier les blocages et retrouver une meilleure écoute de soi.",
      price: "333 euros",
      duration: "3h · En cabinet à Jonzac ou à distance",
      image: {
        src: "/images/work/DSC02941.jpg",
        alt: "Cosmo — décodage quantique au pendule",
        width: 640,
        height: 960,
      },
    },
    {
      name: "Quantique 111",
      description:
        "Un parcours complet en 6 modules pour maîtriser l'énergétique en profondeur. Quatre après-midis denses et progressifs pour acquérir des outils concrets et développer une pratique autonome.",
      price: "777 euros",
      duration: "Programme complet · En cabinet à Jonzac ou à distance",
      modules: [
        "Module 1 — Le magnétisme",
        "Module 2 — Les fréquences, la purification",
        "Module 3 — Les chakras",
        "Module 4 — Les plans",
        "Module 5 — Les corps",
        "Module 6 — Le soin LaHoChi multidimensionnel",
      ],
      image: {
        src: "/images/establishment/DSC02927.jpg",
        alt: "Formation Quantique 111 — salle de formation au cabinet",
        width: 640,
        height: 427,
      },
    },
    {
      name: "Stage 1 — Fondamentaux énergétiques",
      description:
        "Découvrir les bases du bien-être énergétique et apprendre à communiquer avec son guide spirituel. Techniques de respiration, chakras, lâcher-prise, gratitude, pensée positive.",
      price: "100 euros / jour",
      duration: "2 jours · Jonzac",
      image: {
        src: "/images/team/DSC02961.jpg",
        alt: "Stage Fondamentaux énergétiques — Clémence dans son cabinet",
        width: 640,
        height: 960,
      },
    },
    {
      name: "Stage 2 — Éveil de conscience",
      description:
        "Avancer sur son chemin de réalisation personnelle et spirituelle grâce à des outils de développement avancés. Passage en 5ème dimension, chakras supérieurs, merkabah, découverte de ses dons, création consciente de sa réalité, ouverture du cœur.",
      price: "100 euros / jour",
      duration: "2 jours · Jonzac",
    },
    {
      name: "Stage 3 — Être en lumière",
      description:
        "Un travail plus profond de compréhension de soi. Enfant intérieur, féminin et masculin sacrés, blessures de l'âme, amour inconditionnel, flammes jumelles, protections énergétiques, ouverture de conscience.",
      price: "100 euros / jour",
      duration: "2 jours · Jonzac",
    },
    {
      name: "Stage 4 — Travailler avec son inconscient",
      description:
        "Rentrer dans une nouvelle dimension de conscience et résoudre les difficultés liées à l'inconscient. Communication avec l'inconscient, activation du 3ème œil, évolution des niveaux de conscience.",
      price: "100 euros / jour",
      duration: "2 jours · Jonzac",
    },
    {
      name: "Stage 5 — Pour aller plus loin",
      description:
        "Vies antérieures, communication avec les défunts, abondance, expansion de conscience, purification des lignées, jonctions des espaces-temps.",
      price: "100 euros / jour",
      duration: "2 jours · Jonzac",
    },
  ],
  cta: {
    label: "Voir les dates sur formationquantique.fr",
    href: "https://www.formationquantique.fr",
    variant: "primary",
  },
};
