import type { MassagesPageContent } from "@/types/content";

// =============================================================================
// Massages Page Content
// =============================================================================

export const massagesPage: MassagesPageContent = {
  heroTitle: "Massages bien-être",
  heroSubtitle:
    "Déposer les tensions, retrouver la douceur du corps",
  heroImage: {
    src: "/images/work/DSC02663.jpg",
    alt: "Massage bien-être dans le cabinet de Clémence Reznicek",
    width: 1920,
    height: 1080,
  },
  introduction:
    "Le massage est souvent la première porte d'entrée vers soi. Par le toucher, le corps commence à relâcher ce qu'il retient : tensions, fatigue, émotions accumulées. Chaque massage que je propose est un voyage. Il ne s'agit pas simplement de détendre les muscles, mais d'inviter tout ton être à se réorganiser, à retrouver sa fluidité naturelle. Ici, chaque geste est posé avec présence et intention.",
  services: [
    {
      name: "Massage Shambala",
      description:
        "Le Shambala est un massage profond et enveloppant qui allie mouvements fluides, pressions intuitives et travail énergétique. Il invite le corps à lâcher en profondeur, couche après couche. C'est un soin complet qui agit autant sur les tensions physiques que sur l'état émotionnel. Beaucoup de personnes décrivent cette expérience comme un voyage intérieur, un moment où le temps suspend son cours.",
      price: "100 euros",
      duration: "1h30",
      image: {
        src: "/images/work/DSC02664.jpg",
        alt: "Massage Shambala en cours au cabinet",
        width: 640,
        height: 427,
      },
    },
    {
      name: "Massage Solar",
      description:
        "Le Solar est un massage chaleureux, centré sur la libération des tensions musculaires profondes et le retour à un état de calme intérieur. Les mouvements sont enveloppants, les pressions adaptées à tes besoins. Ce massage est particulièrement indiqué quand le corps porte beaucoup de fatigue accumulée ou quand tu as besoin de te reconnecter à la chaleur de ton propre corps.",
      price: "120 euros",
      duration: "2h",
      image: {
        src: "/images/work/DSC02636.jpg",
        alt: "Massage Solar avec des gestes chaleureux et précis",
        width: 640,
        height: 427,
      },
    },
    {
      name: "Massage Aromatouch",
      description:
        "L'Aromatouch est un protocole spécifique aux huiles essentielles doTERRA, appliquées le long de la colonne vertébrale et sur les pieds. Huit huiles sont utilisées en séquence, chacune choisie pour ses propriétés de soutien du système immunitaire, d'apaisement du stress et de rééquilibrage énergétique. C'est un soin court mais puissant, idéal comme première approche ou en complément d'un autre accompagnement.",
      price: "75 euros",
      duration: "1h",
      image: {
        src: "/images/product/DSC02925.jpg",
        alt: "Huiles essentielles doTERRA utilisées pour le soin Aromatouch",
        width: 640,
        height: 427,
      },
    },
  ],
  approachTitle: "Mon approche du massage",
  approachText: [
    "Je ne masse pas un corps, j'accompagne une personne. Avant chaque séance, on prend un moment pour échanger sur ce que tu vis, ce que ton corps porte en ce moment. Ce dialogue permet d'adapter le soin à tes besoins réels, pas seulement à tes tensions apparentes.",
    "Pendant le massage, je suis guidée par ce que je perçois sous mes mains, par mon intuition et par ta respiration. C'est un échange silencieux entre ton corps et mes mains. Chaque séance est unique parce que tu es différent à chaque fois que tu viens.",
    "Après le soin, je te laisse le temps de revenir doucement. Il n'y a pas de précipitation. Tu repars quand tu te sens prêt, avec cette sensation de légèreté et de clarté que le corps offre quand on lui donne la permission de se relâcher.",
  ],
  approachImage: {
    src: "/images/work/DSC02702.jpg",
    alt: "Clémence en séance de massage, dans une attention bienveillante",
    width: 640,
    height: 427,
  },
  cta: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
