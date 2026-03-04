import type {
  Testimonial,
  TestimonialSectionContent,
  TestimonialsPageContent,
} from "@/types/content";

// =============================================================================
// All Testimonials
// =============================================================================

// --- Les 5 meilleurs avis choisis par la cliente (featured on homepage) ---
export const allTestimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Salomon D.",
    text: "Clémence est d'une douceur infini et d'une incroyable justesse, elle est très professionnelle et m'a mis très facilement à l'aise. Le travail que nous avons fait ensemble ces six derniers mois est allé chercher en profondeur, des peurs et des blocages qui m'empêchaient d'avancer. Je me sens aujourd'hui libérée d'un poid, plus alignée et optimiste. Je ne peux que la recommander les yeux fermer.",
    rating: 5,
    date: "2026-01",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-2",
    name: "Thérèse S.",
    text: "Clémence vous accompagne avec une grande douceur.... Elle trouve les mots justes.... La libération est incroyable. La reconnection est immédiate, le soulagement instantané 🌈 Il me manque les mots pour décrire ce que j'ai vécue... Il faut le vivre 💫",
    rating: 5,
    date: "2025-11",
    service: "Soin énergétique",
  },
  {
    id: "testimonial-3",
    name: "Nathalie P.",
    text: "Une très belle découverte avec une personne solaire et passionnée. Clemence a mis le doigt sur une problématique que je n'entrevoyait pas. Merci beaucoup pour cette entrevue et ce temps consacré 🙏",
    rating: 5,
    date: "2025-10",
    service: "Bilan énergétique",
  },
  {
    id: "testimonial-4",
    name: "Caroline T.",
    text: "Pour moi, il y a eu un avant et un après la constellation du 14 juillet. Mon intention était de me libérer des peurs et des croyances qui ne m'appartenaient pas. Dès le lendemain, et toute la semaine qui a suivi, j'ai eu des prises de conscience, des peurs libérées et une confiance en moi et à l'avenir qui s'est installée. À mon avis, le processus ne fait que commencer ! Merci Clémence pour ta bienveillance et ton accompagnement 🙏",
    rating: 5,
    date: "2025-07",
    service: "Constellation familiale",
  },
  {
    id: "testimonial-5",
    name: "Mickael J.",
    text: "Clémence m'a appris qui j'étais réellement toujours dans la bien vaillance et à l'écoute dans la bonne humeur un vrai rayon de soleil qui fait beaucoup de bien au moral je la recommande. Personne très compétente qui connaît bien son travail et le fait avec beaucoup de sérieux très professionnels. Un grand merci 😊",
    rating: 5,
    date: "2025-02",
    service: "Accompagnement holistique",
  },
  // --- Autres avis Google ---
  {
    id: "testimonial-6",
    name: "Davina V.",
    text: "Je suis heureuse d'avoir rencontré Clémence. C'est une vraie Humaine dotée d'une énergie incroyable et d'une bienveillance sincère. Ses mots sont toujours très justes et touchants - je garderai longtemps en mémoire certaines de nos séances. Étrangement (ou pas) je l'ai contactée par hasard... Merci Clémence ✨️",
    rating: 5,
    date: "2026-03",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-7",
    name: "Sandrine B.",
    text: "Très belle personne à l'écoute. Séance agréable. Je la recommande vivement.",
    rating: 5,
    date: "2026-01",
    service: "Séance individuelle",
  },
  {
    id: "testimonial-8",
    name: "Laurent B.",
    text: "Bienveillance et accompagnement personnalisé. Clémence m'a aidé à mettre des mots sur mes maux et tout cela dans la bonne humeur ! Merci.",
    rating: 5,
    date: "2025-01",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-9",
    name: "Micheline R.",
    text: "Super accueil de Clémence ! Un massage pour libérer les émotions et atténuer mes douleurs dos et genoux. Je vais bien mieux. Merci pour tout. Je recommande.",
    rating: 5,
    date: "2024-09",
    service: "Massage bien-être",
  },
  {
    id: "testimonial-10",
    name: "Aurélien B.",
    text: "Rien à redire, Clémence est très accueillante, sympathique, extrêmement douée, elle a énormément de talent, un relationnel extraordinaire, et des mains de fée pour le massage ! 😌 Personnellement je reviendrais, mais je recommande vivement, parce que je dois avouer que ce rendez vous a changé quelque chose ! À bientôt Clémence et merci encore 😊",
    rating: 5,
    date: "2024-04",
    service: "Massage bien-être",
  },
  {
    id: "testimonial-11",
    name: "Véronique F.",
    text: "Des le premier rendez-vous avec Clémence, j'ai senti qu'elle allait bousculer ma vie. Très bienveillante, toujours souriante et passionnée par ce qu'elle fait. Quelle belle rencontre! Il ne faut pas hésiter à passer la porte de son cabinet, on ressort ressourcé!!!",
    rating: 5,
    date: "2024-05",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-12",
    name: "Jessica C.",
    text: "Suite à mon rdv avec Clémence sur la Transmission LaHoChi Multidimensionnel je tenais à lui exprimer ma gratitude pour ce magnifique moment de partage et d apprentissage que j ai reçu dans la bienveillance, la joie et la convivialité. J ai vécu une expérience intense énergétiquement, spirituellement et émotionnellement. Je me sens apaisée, alignée, sûre de moi, prête à oser être moi 😊 Merci infiniment 🙏 Clémence.",
    rating: 5,
    date: "2024-09",
    service: "LaHoChi Multidimensionnel",
  },
  {
    id: "testimonial-13",
    name: "Clarisse M.",
    text: "Clémence a effectué un bilan énergétique avec bienveillance elle est très investie. J'ai été extrêmement satisfaite de son travail. Cette femme a beaucoup de connaissances elle est passionnante. Merci Clémence je suis heureuse de vous avoir rencontrée.",
    rating: 5,
    date: "2024-03",
    service: "Bilan énergétique",
  },
  {
    id: "testimonial-14",
    name: "Maryse M.",
    text: "Clémence est resplendissante, qui vous met à l aise , sait vous écouter et répondre à vos attentes. Maintenant je recommence à me sentir belle et peut de nouveau regarder mon corps dans le miroir. Satisfaite de mes séances avec elle je recommande grandement.",
    rating: 5,
    date: "2024-04",
    service: "Séance individuelle",
  },
  {
    id: "testimonial-15",
    name: "Martin C.",
    text: "Bonjour, je conseille fortement d'aller voir clémence.. c'est une femme pétillante qui met en confiance qui vous écoute sans vous juger .. elle ressent des choses très fortes rien quand vous parlant... Elle est exceptionnelle",
    rating: 5,
    date: "2024-07",
    service: "Médiumnité",
  },
  {
    id: "testimonial-16",
    name: "Fanny G.",
    text: "Clémence est une personne solaire et généreuse. J'ai eu l'occasion de la rencontrer à plusieurs reprise lors de séances en cabinet et lors d'une méditation aquatique collective. Des moments hors du temps, qui nous recentre sur nous-mêmes et nous aide à prendre du recul sur nos expériences vécues. Merci ✨",
    rating: 5,
    date: "2023-08",
    service: "Méditation aquatique",
  },
  {
    id: "testimonial-17",
    name: "Maria S.",
    text: "La 1ère fois que j'ai rencontré Clémence c'était pour des méditations aux Antilles, c'était génial. C'est une personne qui déborde de joie de vivre, travaille avec bienveillance et à l'écoute. J'adore la rencontrer, sa joie est communicative. Je vous la recommande sans hésitation.",
    rating: 5,
    date: "2024-04",
    service: "Méditation",
  },
  {
    id: "testimonial-18",
    name: "Bénédicte R.",
    text: "Clémence est une personne tellement bienveillante et à l'écoute. Elle déborde de bonne humeur, de joie de vivre. Il suffit de l'écouter pour se sentir déjà quelque peu apaisée. Merci pour votre écoute vos conseils et votre chaleur humaine.",
    rating: 5,
    date: "2023-11",
    service: "Accompagnement holistique",
  },
  {
    id: "testimonial-19",
    name: "Florence C.",
    text: "Clémence est une personne très à l'écoute avec une pêche d'enfer qui est communicative! Ses soins sont efficaces, elle a sens inné pour dénicher ce qui gratouille et chatouille mais toujours avec une grande bienveillance. On se confie facilement car on ne se sent en confiance! Je lui souhaite le meilleur !! et je referai appel à ses services avec plaisir :)",
    rating: 5,
    date: "2023-07",
    service: "Soins énergétiques",
  },
  {
    id: "testimonial-20",
    name: "Guillaume P.",
    text: "Je vous conseil vivement de découvrir les spécialités et le professionnalisme de Clemence Un peu septique au départ par méconnaissance mais de très bon résultats réalisé par ses soins Je recommande vivement",
    rating: 5,
    date: "2024-05",
    service: "Soins énergétiques",
  },
];

// =============================================================================
// Homepage Testimonials Section
// =============================================================================

export const testimonialSection: TestimonialSectionContent = {
  sectionTitle: "Ce qu'ils en disent",
  sectionSubtitle:
    "Des mots qui témoignent de transformations douces et durables",
  featured: [allTestimonials[0], allTestimonials[1], allTestimonials[2]],
  googleBadgeLabel: "59 avis sur Google",
  cta: {
    label: "Lire tous les témoignages",
    href: "/temoignages",
    variant: "outline",
  },
};

// =============================================================================
// Testimonials Page
// =============================================================================

export const testimonialsPage: TestimonialsPageContent = {
  heroTitle: "Témoignages",
  heroSubtitle:
    "Chaque parcours est unique. Voici les mots de celles et ceux qui ont choisi de se faire accompagner.",
  testimonials: allTestimonials,
  googleReviewsCTA: {
    label: "Voir les 59 avis sur Google",
    href: "https://g.co/kgs/clemencereznicek",
    variant: "secondary",
  },
  contactCTA: {
    label: "Prendre rendez-vous",
    href: "/contact",
    variant: "primary",
  },
};
