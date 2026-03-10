import type { MassagesPageContent } from "@/types/content";

// =============================================================================
// Massages Page Content
// =============================================================================

export const massagesPage: MassagesPageContent = {
  heroTitle: "Massages énergétiques",
  heroSubtitle:
    "Libérer les tensions, rééquilibrer le corps et l'énergie",
  heroImage: {
    src: "/images/work/DSC02663.jpg",
    alt: "Massage énergétique dans le cabinet de Clémence Reznicek",
    width: 1920,
    height: 1080,
  },
  introduction:
    "Le massage énergétique va au-delà de la détente musculaire. Par le toucher, l'intention et la lecture du champ énergétique, nous travaillons ensemble sur ce que le corps retient : tensions, mémoires émotionnelles, blocages invisibles. Chaque massage que je propose est choisi et adapté à ce que vous vivez au moment de la séance. Chaque geste est posé avec présence, intuition et intention, pour inviter votre être tout entier à retrouver son équilibre naturel.",
  services: [
    {
      name: "Massage Shambala",
      description:
        "Un massage puissant, axé sur une problématique ciblée, avec huiles essentielles, mantras dessinés au doigt et son adapté à votre état. Chaque geste est une intention déposée pour rétablir la connexion entre corps, sens et conscience. Recommandé pour retrouver confiance en soi et foi en la vie.",
      price: "100 euros",
      duration: "1h30",
      image: {
        src: "/images/work/DSC02736.jpg",
        alt: "Massage Shambala — Clémence en soin énergétique",
        width: 640,
        height: 960,
      },
    },
    {
      name: "Aromatouch",
      description:
        "Un protocole aux huiles essentielles appliquées en séquence le long de la colonne vertébrale et sur les pieds. Huit huiles soigneusement choisies pour soutenir le système immunitaire, apaiser le stress et rééquilibrer l'énergie. Court mais puissant, idéal en première approche ou en complément d'un autre accompagnement.",
      price: "75 euros",
      duration: "1h",
      image: {
        src: "/images/work/DSC02608.jpg",
        alt: "Soin Aromatouch — massage des pieds aux huiles essentielles",
        width: 640,
        height: 960,
        objectPosition: "center 65%",
      },
    },
    {
      name: "Massage-soin Solar",
      description:
        "Un rituel complet associant 45 minutes de massage bien-être et 45 minutes de soin énergétique LaHoChi. Le corps se détend en profondeur tandis que les énergies se réharmonisent pour une régénération globale, là où relaxation et élévation vibratoire se rencontrent.",
      price: "120 euros",
      duration: "2h",
      image: {
        src: "/images/work/DSC02636.jpg",
        alt: "Massage-soin Solar — Clémence en séance de massage des pieds",
        width: 640,
        height: 960,
      },
    },
    {
      name: "Massage des 5 Continents",
      description:
        "Un massage complet associant les meilleures techniques venues du monde entier, le magnétisme et les huiles essentielles. En trois phases successives (désintoxication, lâcher-prise, revitalisation), il libère les tensions physiques, les mémoires émotionnelles et revitalise l'énergie en profondeur.",
      price: "120 euros",
      duration: "2h",
      image: {
        src: "/images/work/DSC02663.jpg",
        alt: "Massage des 5 Continents — soin crânien avec huiles essentielles",
        width: 640,
        height: 960,
      },
    },
  ],
  approachTitle: "Mon approche du massage",
  approachText: [
    "Je ne masse pas un corps, j'accompagne une personne. Avant chaque séance, nous prenons un moment pour échanger sur ce que vous vivez, ce que votre corps porte en ce moment. Ce dialogue permet d'adapter le soin à vos besoins réels, pas seulement à vos tensions apparentes.",
    "Pendant le massage, je suis guidée par ce que je perçois sous mes mains, par mon intuition et par votre respiration. C'est un échange silencieux entre votre corps et mes mains. Chaque séance est unique parce que vous êtes différent à chaque fois que vous venez.",
    "Après le soin, je vous laisse le temps de revenir doucement. Il n'y a pas de précipitation. Vous repartez quand vous vous sentez prêt, avec cette sensation de légèreté et de clarté que le corps offre quand on lui donne la permission de se relâcher.",
  ],
  approachImage: {
    src: "/images/work/DSC02766.jpg",
    alt: "Clémence en séance de massage, sourire bienveillant",
    width: 640,
    height: 960,
  },
  cta: {
    label: "Prendre rendez-vous",
    href: "tel:+33632185259",
    variant: "primary",
  },
};
