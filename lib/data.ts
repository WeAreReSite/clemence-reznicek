import { Service, Therapist } from './store'

export const services: Service[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // SOINS ÉNERGÉTIQUES - Rétablir l'harmonie et la circulation de l'énergie
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'soin-energetique',
    name: 'Soin Énergétique',
    slug: 'soin-energetique',
    category: 'soins-energetiques',
    description: 'Un soin énergétique pour rétablir l\'harmonie de vos centres d\'énergie et favoriser la libre circulation de votre énergie vitale. Par l\'imposition des mains et le travail sur les différents corps subtils, ce soin permet de libérer les blocages énergétiques, de réduire le stress et de retrouver un sentiment de paix intérieure. Chaque séance est unique et adaptée à vos besoins du moment.',
    shortDescription: 'Rétablissez l\'harmonie de vos centres d\'énergie.',
    duration: 60,
    price: 70,
    image: '/images/soin-energetique.jpeg',
    benefits: [
      'Libération des blocages énergétiques',
      'Réduction du stress et de l\'anxiété',
      'Paix intérieure retrouvée',
      'Rééquilibrage des centres d\'énergie'
    ],
    isPopular: true
  },
  {
    id: 'soin-lahochi',
    name: 'Soin LaHoChi',
    slug: 'soin-lahochi',
    category: 'soins-energetiques',
    description: 'Le LaHoChi est une technique de soins énergétiques par imposition des mains qui canalise une énergie de guérison à très haute fréquence. Cette énergie de lumière et d\'amour travaille en profondeur sur vos corps physique, émotionnel, mental et spirituel. Le LaHoChi ouvre et nettoie le système des chakras, restructure et équilibre les corps subtils et renforce le système immunitaire. Un soin profond et doux qui favorise la guérison à tous les niveaux de l\'être.',
    shortDescription: 'Énergie de guérison à haute fréquence par imposition des mains.',
    duration: 60,
    price: 70,
    image: '/images/soin-energetique.jpeg',
    benefits: [
      'Nettoyage du système des chakras',
      'Rééquilibrage des corps subtils',
      'Renforcement du système immunitaire',
      'Guérison en profondeur'
    ]
  },
  {
    id: 'soin-multidimensionnel',
    name: 'Soin Multidimensionnel',
    slug: 'soin-multidimensionnel',
    category: 'soins-energetiques',
    description: 'Le soin multidimensionnel est un travail énergétique avancé qui agit sur les différentes dimensions de votre être. En accédant aux plans subtils, ce soin permet de libérer des mémoires profondes, de transmuter des énergies lourdes et de restaurer votre alignement. Un soin particulièrement puissant pour les personnes qui ressentent des blocages persistants ou des schémas répétitifs dans leur vie. Inclut un temps d\'échange avant et après la séance.',
    shortDescription: 'Un soin profond qui agit sur toutes les dimensions de votre être.',
    duration: 90,
    price: 100,
    image: '/images/soin-energetique.jpeg',
    benefits: [
      'Libération des mémoires profondes',
      'Transmutation des énergies lourdes',
      'Restauration de l\'alignement',
      'Travail sur les schémas répétitifs'
    ]
  },
  {
    id: 'magnetisme',
    name: 'Séance de Magnétisme',
    slug: 'seance-magnetisme',
    category: 'soins-energetiques',
    description: 'Le magnétisme est une technique ancestrale de soin par transmission d\'énergie. Par l\'imposition des mains, le magnétiseur transmet son énergie vitale pour soulager les douleurs, apaiser les troubles fonctionnels et favoriser le processus naturel de guérison du corps. Une séance de magnétisme peut aider à soulager le stress, les douleurs musculaires, les troubles du sommeil et bien d\'autres déséquilibres.',
    shortDescription: 'Technique ancestrale de soin par transmission d\'énergie.',
    duration: 60,
    price: 70,
    image: '/images/soin-energetique.jpeg',
    benefits: [
      'Soulagement des douleurs',
      'Apaisement des troubles fonctionnels',
      'Favorise la guérison naturelle',
      'Détente profonde'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // CONSTELLATIONS FAMILIALES - Explorer et libérer les mémoires familiales
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'constellation-individuelle',
    name: 'Constellation Familiale Individuelle',
    slug: 'constellation-familiale-individuelle',
    category: 'constellations',
    description: 'La constellation familiale individuelle permet de mettre en lumière les dynamiques inconscientes qui se jouent dans votre système familial. À travers un processus guidé, nous explorons les loyautés invisibles, les intrications et les mémoires transgénérationnelles qui peuvent influencer votre vie actuelle. Cette séance de 2 heures permet de débloquer des schémas répétitifs, de libérer des fardeaux hérités et de retrouver votre juste place dans votre lignée. Un travail profond et transformateur.',
    shortDescription: 'Explorez et libérez les dynamiques familiales inconscientes.',
    duration: 120,
    price: 150,
    image: '/images/constellation-familiale.jpeg',
    benefits: [
      'Mise en lumière des schémas familiaux',
      'Libération des loyautés invisibles',
      'Déblocage des schémas répétitifs',
      'Retrouver sa juste place'
    ],
    isPopular: true
  },
  {
    id: 'exploration-genealogique',
    name: 'Exploration Généalogique',
    slug: 'exploration-genealogique',
    category: 'constellations',
    description: 'Une séance d\'exploration approfondie de votre arbre généalogique pour identifier les mémoires, les événements marquants et les schémas qui se transmettent de génération en génération. Cette lecture de votre lignée permet de comprendre certains comportements, blocages ou répétitions dans votre vie. Un travail de compréhension et de libération qui intègre médiumnité et systémique.',
    shortDescription: 'Explorez votre arbre généalogique et ses mémoires cachées.',
    duration: 90,
    price: 120,
    image: '/images/constellation-familiale.jpeg',
    benefits: [
      'Compréhension de votre lignée',
      'Identification des mémoires transgénérationnelles',
      'Libération des schémas hérités',
      'Lecture intuitive de l\'arbre'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COACHING & ACCOMPAGNEMENT - Programmes de transformation personnelle
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'seance-coaching',
    name: 'Séance de Coaching Individuel',
    slug: 'seance-coaching-individuel',
    category: 'coaching',
    description: 'Un accompagnement personnalisé pour vous aider à traverser une période de transition, clarifier vos objectifs ou surmonter un blocage. Chaque séance combine écoute active, questionnement, outils de coaching et approche intuitive pour vous guider vers vos propres réponses. Que ce soit pour une problématique professionnelle, relationnelle ou personnelle, cette séance vous apporte clarté et direction.',
    shortDescription: 'Accompagnement personnalisé vers la clarté et la transformation.',
    duration: 60,
    price: 80,
    image: '/images/coaching.jpeg',
    benefits: [
      'Clarté et prise de recul',
      'Déblocage des situations',
      'Guidance personnalisée',
      'Outils concrets'
    ]
  },
  {
    id: 'accompagnement-6-seances',
    name: 'Accompagnement 6 Séances',
    slug: 'accompagnement-6-seances',
    category: 'coaching',
    description: 'Un accompagnement individuel en 6 séances combinant approche systémique, médiumnité, massage énergétique et méditation guidée. Ce parcours structuré vous permet d\'aller en profondeur dans votre processus de transformation. Chaque séance s\'inscrit dans une progression cohérente, adaptée à votre rythme et à vos besoins. Idéal pour les personnes qui souhaitent un suivi régulier et un travail approfondi sur elles-mêmes.',
    shortDescription: 'Parcours de 6 séances pour une transformation en profondeur.',
    duration: 60,
    price: 420,
    image: '/images/coaching.jpeg',
    benefits: [
      'Suivi personnalisé et régulier',
      'Combinaison de plusieurs approches',
      'Transformation en profondeur',
      'Progression à votre rythme'
    ],
    isPopular: true
  },
  {
    id: 'programme-liberation',
    name: 'Programme Libération (4 mois)',
    slug: 'programme-liberation-4-mois',
    category: 'coaching',
    description: 'Un programme intensif de 4 mois pour lever vos fardeaux sur toutes les dimensions et vous libérer de ce qui vous empêche d\'avancer. Ce programme combine des séances individuelles régulières, un travail sur les mémoires familiales, des soins énergétiques et des outils pratiques pour ancrer les changements dans votre quotidien. Un engagement envers vous-même pour une transformation durable et profonde.',
    shortDescription: 'Programme de 4 mois pour lever vos fardeaux et vous libérer.',
    duration: 60,
    price: 560,
    image: '/images/coaching.jpeg',
    benefits: [
      'Libération des fardeaux',
      'Transformation sur 4 mois',
      'Approche multidimensionnelle',
      'Ancrage des changements'
    ]
  },
  {
    id: 'programme-renaissance',
    name: 'Programme Renaissance (9 mois)',
    slug: 'programme-renaissance-9-mois',
    category: 'coaching',
    description: 'Le programme le plus complet : 9 mois pour renaître, vous reconnecter à votre nord, votre boussole, votre identité profonde. Ce parcours transformateur inclut des séances régulières, un travail approfondi sur vos mémoires et schémas, des soins énergétiques, de la déprogrammation de mémoires collectives, familiales et personnelles. Un voyage de reconnexion à votre essence véritable pour créer la vie qui vous ressemble.',
    shortDescription: 'Programme de 9 mois pour renaître et vous reconnecter à votre essence.',
    duration: 60,
    price: 1200,
    image: '/images/coaching.jpeg',
    benefits: [
      'Renaissance profonde',
      'Reconnexion identitaire',
      'Déprogrammation des mémoires',
      'Création de votre nouvelle vie'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MASSAGES BIEN-ÊTRE - Techniques corporelles pour la détente et l'harmonie
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'massage-5-continents',
    name: 'Massage des 5 Continents\u00AE',
    slug: 'massage-5-continents',
    category: 'massages',
    description: 'Le Massage des 5 Continents\u00AE est un voyage sensoriel unique qui réunit les techniques de massage traditionnelles des cinq continents du monde. Ce soin holistique combine les effleurages européens, les pressions asiatiques, les percussions africaines, les étirements amérindiens et les mouvements enveloppants océaniens. Un massage complet du corps qui procure une détente profonde tout en revitalisant l\'énergie. Une expérience de bien-être globale et enveloppante.',
    shortDescription: 'Un voyage sensoriel réunissant les techniques des 5 continents.',
    duration: 75,
    price: 90,
    image: '/images/massage-bien-etre.jpeg',
    benefits: [
      'Détente profonde du corps entier',
      'Revitalisation de l\'énergie',
      'Voyage sensoriel unique',
      'Harmonisation corps-esprit'
    ],
    isPopular: true
  },
  {
    id: 'massage-aromatouch',
    name: 'Massage Aromatouch\u00AE',
    slug: 'massage-aromatouch',
    category: 'massages',
    description: 'L\'Aromatouch\u00AE est une technique de massage unique qui utilise 8 huiles essentielles certifiées pures appliquées le long de la colonne vertébrale et sous les pieds. Chaque huile est choisie pour ses propriétés spécifiques : gestion du stress, renforcement immunitaire, réduction de l\'inflammation et équilibre du système nerveux autonome. Ce massage doux et enveloppant procure une détente immédiate et des bienfaits durables.',
    shortDescription: 'Massage aux 8 huiles essentielles pour un bien-être complet.',
    duration: 45,
    price: 70,
    image: '/images/massage-bien-etre.jpeg',
    benefits: [
      'Bienfaits des huiles essentielles pures',
      'Gestion du stress',
      'Renforcement immunitaire',
      'Équilibre du système nerveux'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DÉCODAGE & EXPLORATION INTÉRIEURE - Comprendre les messages du corps et de l'âme
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'decodage-biologique',
    name: 'Décodage Biologique',
    slug: 'decodage-biologique',
    category: 'decodage',
    description: 'Le décodage biologique permet de comprendre le sens des symptômes et des maladies en identifiant le conflit émotionnel à leur origine. Cette approche part du principe que chaque symptôme est une réponse biologique à un stress non résolu. En remontant au ressenti initial, on peut libérer l\'émotion bloquée et permettre au corps de retrouver son équilibre. Une séance d\'1h30 incluant un temps d\'échange approfondi.',
    shortDescription: 'Comprenez les messages de votre corps et libérez les conflits émotionnels.',
    duration: 90,
    price: 100,
    image: '/images/decodage.jpeg',
    benefits: [
      'Compréhension des symptômes',
      'Identification des conflits émotionnels',
      'Libération des émotions bloquées',
      'Rétablissement de l\'équilibre'
    ]
  },
  {
    id: 'decodage-echoquantique',
    name: 'Décodage Echoquantique',
    slug: 'decodage-echoquantique',
    category: 'decodage',
    description: 'Le décodage Echoquantique est une méthode innovante qui combine les principes de la physique quantique et de la biologie pour accéder aux informations stockées dans vos cellules. Cette technique permet d\'identifier et de libérer des mémoires cellulaires, des programmes inconscients et des schémas limitants qui impactent votre santé et votre bien-être. Un travail subtil et profond pour une transformation à la source.',
    shortDescription: 'Libérez vos mémoires cellulaires grâce à l\'approche quantique.',
    duration: 60,
    price: 80,
    image: '/images/decodage.jpeg',
    benefits: [
      'Accès aux mémoires cellulaires',
      'Libération des programmes inconscients',
      'Transformation à la source',
      'Approche quantique innovante'
    ]
  },
  {
    id: 'meditation-guidee',
    name: 'Méditation Guidée',
    slug: 'meditation-guidee',
    category: 'decodage',
    description: 'Une séance de méditation guidée pour vous reconnecter à votre intériorité, apaiser votre mental et accéder à un état de conscience élargi. Clémence vous guide à travers des visualisations, des respirations et des exercices de pleine conscience adaptés à vos besoins. Que vous soyez débutant ou pratiquant expérimenté, cette séance vous offre un espace de calme et de ressourcement profond.',
    shortDescription: 'Reconnectez-vous à votre intériorité grâce à la méditation.',
    duration: 60,
    price: 60,
    image: '/images/meditation.jpeg',
    benefits: [
      'Apaisement du mental',
      'Reconnexion intérieure',
      'État de conscience élargi',
      'Ressourcement profond'
    ]
  },
  {
    id: 'consultation-aromatologie',
    name: 'Consultation Aromatologie',
    slug: 'consultation-aromatologie',
    category: 'decodage',
    description: 'Découvrez le pouvoir des huiles essentielles avec une consultation personnalisée en aromatologie. Clémence vous guide dans l\'utilisation des huiles essentielles adaptées à vos besoins : gestion du stress, troubles du sommeil, douleurs, soutien émotionnel ou simplement bien-être au quotidien. Repartez avec des conseils pratiques et un protocole personnalisé pour intégrer les huiles essentielles dans votre vie.',
    shortDescription: 'Découvrez les huiles essentielles adaptées à vos besoins.',
    duration: 60,
    price: 70,
    image: '/images/meditation.jpeg',
    benefits: [
      'Protocole personnalisé',
      'Conseils pratiques',
      'Huiles adaptées à vos besoins',
      'Bien-être au quotidien'
    ]
  }
]

export const categories = [
  {
    id: 'soins-energetiques',
    name: 'Soins Énergétiques',
    description: 'Rétablir l\'harmonie et la circulation de l\'énergie',
    image: '/images/soin-energetique.jpeg'
  },
  {
    id: 'constellations',
    name: 'Constellations Familiales',
    description: 'Explorer et libérer les mémoires familiales',
    image: '/images/constellation-familiale.jpeg'
  },
  {
    id: 'coaching',
    name: 'Coaching & Accompagnement',
    description: 'Programmes de transformation personnelle',
    image: '/images/coaching.jpeg'
  },
  {
    id: 'massages',
    name: 'Massages Bien-Être',
    description: 'Techniques corporelles pour la détente et l\'harmonie',
    image: '/images/massage-bien-etre.jpeg'
  },
  {
    id: 'decodage',
    name: 'Décodage & Exploration Intérieure',
    description: 'Comprendre les messages du corps et de l\'âme',
    image: '/images/decodage.jpeg'
  }
]

export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Clémence Reznicek',
    title: 'Thérapeute Holistique & Médium',
    image: '/images/clemence-reznicek.jpeg',
    specialties: ['Médiumnité', 'Constellations Familiales', 'Soins Énergétiques', 'Massage des 5 Continents\u00AE', 'Décodage Biologique', 'Coaching'],
    bio: 'Thérapeute holistique et médium, j\'accompagne depuis 2017 les personnes en quête de sens, de paix ou de transformation. Mon approche globale intègre la médiumnité, les constellations familiales et systémiques, les soins énergétiques (LaHoChi, magnétisme, multidimensionnel), le massage des 5 continents\u00AE, le décodage biologique et Echoquantique, la méditation et l\'aromatologie. Formée en Constellations Familiales et Systémiques, Massage Aromatouch\u00AE, Massage des 5 Continents\u00AE, Décodage Echoquantique et Ennéagramme, j\'intègre de multiples disciplines pour une approche véritablement holistique. Mon cabinet à Jonzac est un espace de confiance et de bienveillance où chaque séance est un moment unique.'
  }
]

export const testimonials = [
  {
    id: '1',
    name: 'Laurent B.',
    rating: 5,
    text: 'Bienveillance et accompagnement personnalisé. Clémence m\'a aidé à mettre des mots sur mes maux. Un vrai déclic dans ma compréhension de moi-même.',
    service: 'Coaching',
    date: '2025-01'
  },
  {
    id: '2',
    name: 'Muriel B.',
    rating: 5,
    text: 'Son empathie est grande et permet de se livrer en toute confiance dans une bulle de bienveillance. Mme Reznicek a compris avec tout son savoir-faire et savoir-être comment alléger mon fardeau.',
    service: 'Constellation Familiale',
    date: '2025-09'
  },
  {
    id: '3',
    name: 'Patricia P.',
    rating: 5,
    text: 'S\'offrir ce temps de découverte de soi, un beau cadeau que nous permet Clémence. Une expérience profonde et libératrice.',
    service: 'Accompagnement',
    date: '2025-09'
  },
  {
    id: '4',
    name: 'Delphine B.',
    rating: 5,
    text: 'Merveilleuse journée avec Clémence qui a permis de mettre en lumière et débloquer des schémas. Un travail en profondeur remarquable.',
    service: 'Constellation Familiale',
    date: '2025-08'
  },
  {
    id: '5',
    name: 'Damien C.',
    rating: 5,
    text: 'Vraiment incroyable, elle trouve immédiatement de quel côté il faut aller creuser. Une capacité de lecture exceptionnelle.',
    service: 'Soin Énergétique',
    date: '2025-05'
  },
  {
    id: '6',
    name: 'Camille G.',
    rating: 5,
    text: 'J\'ai beaucoup aimé le premier contact avec Clémence, elle m\'a scannée de suite avec justesse. Une thérapeute d\'exception.',
    service: 'Soin Énergétique',
    date: '2025-06'
  },
  {
    id: '7',
    name: 'Patricia R.',
    rating: 5,
    text: 'Clémence a vraiment une énergie incroyable et sait la mettre au service des personnes. Une belle rencontre.',
    service: 'Soin Énergétique',
    date: '2025-07'
  },
  {
    id: '8',
    name: 'Georgina L.',
    rating: 5,
    text: 'Super énergie, très solaire et pleine de bienveillance. Je recommande vivement.',
    service: 'Massage des 5 Continents',
    date: '2025-07'
  },
  {
    id: '9',
    name: 'Jennifer J.',
    rating: 5,
    text: 'Très belle personne à l\'écoute, beaucoup d\'évolution depuis presque un an de suivi. Clémence accompagne avec justesse et douceur.',
    service: 'Accompagnement',
    date: '2025-02'
  }
]

export const faqs = [
  {
    question: 'Comment se déroule une première séance ?',
    answer: 'La première séance commence par un temps d\'échange approfondi pour comprendre votre parcours, vos besoins et vos attentes. Ensemble, nous définissons l\'approche la plus adaptée à votre situation. Que ce soit un soin énergétique, une constellation familiale ou un coaching, chaque séance est unique et personnalisée. Prévoyez une tenue confortable et venez simplement comme vous êtes.'
  },
  {
    question: 'Quelles sont vos qualifications ?',
    answer: 'Je suis formée en Constellations Familiales et Systémiques (2010), Massage Aromatouch\u00AE (2018), Massage des 5 Continents\u00AE (2022), Décodage Echoquantique (2023) et Ennéagramme (2025). Je suis également formée en réflexologie, magnétisme, soins énergétiques LaHoChi, hypnose, aromatologie, diététique et massage bébé. J\'exerce en tant que thérapeute holistique depuis 2017.'
  },
  {
    question: 'Les séances se font-elles en présentiel ou à distance ?',
    answer: 'Je propose les deux modalités. Les séances en présentiel se déroulent dans mon cabinet à Jonzac (5 avenue Chanzy). Les séances à distance se font par visioconférence et sont tout aussi efficaces pour le coaching, les constellations familiales et certains soins énergétiques. Nous définissons ensemble le format le plus adapté à votre situation.'
  },
  {
    question: 'Qu\'est-ce qu\'une constellation familiale ?',
    answer: 'La constellation familiale est un outil thérapeutique qui permet de mettre en lumière les dynamiques inconscientes au sein de votre système familial. Elle révèle les loyautés invisibles, les intrications et les mémoires transgénérationnelles qui influencent votre vie actuelle. En séance individuelle, nous travaillons avec des figurines ou des marqueurs au sol pour représenter votre système et permettre une libération en profondeur.'
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer: 'Cela dépend de votre problématique et de vos objectifs. Certaines personnes ressentent un changement significatif dès la première séance. Pour un travail en profondeur, je recommande un accompagnement de 6 séances minimum. Les programmes de 4 ou 9 mois sont idéaux pour une transformation durable. Nous évaluons ensemble l\'avancement à chaque séance.'
  },
  {
    question: 'Les soins peuvent-ils remplacer un traitement médical ?',
    answer: 'Non, toutes les prestations proposées sont des techniques de bien-être complémentaires et ne peuvent en aucun cas se substituer à une consultation médicale ou à un traitement prescrit par votre médecin. Elles visent à favoriser l\'équilibre, le bien-être et la reconnexion à soi en complément d\'un suivi médical si nécessaire.'
  },
  {
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer: 'J\'accepte les paiements par chèque, espèces et virement bancaire. Le règlement s\'effectue à la fin de chaque séance. Pour les programmes (4 mois et 9 mois), un échelonnement du paiement est possible. N\'hésitez pas à me contacter pour en discuter.'
  },
  {
    question: 'Où se situe votre cabinet ?',
    answer: 'Mon cabinet se trouve au 5 avenue Chanzy, 1er étage droite, 17500 Jonzac, en Charente-Maritime. Un espace calme et confidentiel, propice à la reconnexion à soi. Jonzac est facilement accessible depuis Saintes, Cognac, Royan et Bordeaux.'
  },
  {
    question: 'Quels sont vos horaires ?',
    answer: 'Je vous accueille du lundi au vendredi de 9h à 18h30 (le mercredi jusqu\'à 18h). Le cabinet est fermé le samedi et le dimanche. Pour prendre rendez-vous, contactez-moi par téléphone au 06 32 18 52 59 ou par email.'
  },
  {
    question: 'Pour qui sont ces séances ?',
    answer: 'Mes séances s\'adressent à tous : adultes, adolescents, enfants, nourrissons, femmes enceintes et seniors. Chaque approche est adaptée à l\'âge et aux besoins de la personne. Que vous traversiez une période difficile, que vous cherchiez à vous comprendre ou simplement à vous offrir un moment de bien-être, vous êtes les bienvenus.'
  }
]

// Featured services to highlight on homepage (client's main specialties)
export const featuredServices = [
  {
    id: 'soins-energetiques',
    title: 'Soins Énergétiques',
    subtitle: 'LaHoChi \u2022 Magnétisme \u2022 Multidimensionnel',
    description: 'Rétablissez l\'harmonie de vos centres d\'énergie et libérez les blocages qui vous empêchent d\'avancer. Des soins profonds et personnalisés.',
    image: '/images/soin-energetique.jpeg',
    href: '/soins#soins-energetiques',
    highlights: ['\u00C9quilibre \u00e9nerg\u00e9tique', 'Lib\u00e9ration des blocages', 'Paix int\u00e9rieure'],
    accent: 'from-violet-500/20 to-indigo-500/20'
  },
  {
    id: 'constellations',
    title: 'Constellations Familiales',
    subtitle: 'Systémiques & Généalogiques',
    description: 'Explorez les dynamiques inconscientes de votre système familial et libérez-vous des schémas hérités pour retrouver votre juste place.',
    image: '/images/constellation-familiale.jpeg',
    href: '/soins#constellations',
    highlights: ['Libération des schémas', 'Mémoires familiales', 'Transformation profonde'],
    accent: 'from-amber-500/20 to-orange-500/20'
  },
  {
    id: 'coaching',
    title: 'Coaching & Accompagnement',
    subtitle: 'Programmes 4 & 9 mois',
    description: 'Un accompagnement sur mesure combinant systémique, médiumnité, soins énergétiques et méditation pour une transformation durable.',
    image: '/images/coaching.jpeg',
    href: '/soins#coaching',
    highlights: ['Accompagnement personnalisé', 'Transformation durable', 'Reconnexion à soi'],
    accent: 'from-teal-500/20 to-emerald-500/20'
  }
]

export const spaInfo = {
  name: 'Clémence Reznicek',
  tagline: 'Thérapeute Holistique & Médium à Jonzac',
  calendlyUrl: 'https://www.resalib.fr/praticien/101076-clemence-reznicek-therapeute-holistique-jonzac',
  description: 'Cabinet de thérapie holistique à Jonzac (17). Soins énergétiques, constellations familiales, coaching, massages et décodage biologique. Un espace de confiance et de bienveillance pour votre transformation.',
  welcomeText: 'Bienvenue, je suis Clémence Reznicek, thérapeute holistique et médium à Jonzac. Depuis 2017, j\'accompagne les personnes en quête de sens, de paix ou de transformation à travers une approche globale centrée sur l\'écoute, le bien-être et la reconnexion à soi. Mon cabinet est un espace de confiance et de bienveillance où chaque séance est un moment unique, adapté à vos besoins. Que vous souhaitiez explorer vos mémoires familiales, libérer des blocages énergétiques, ou simplement vous offrir un moment de détente profonde, je vous accueille avec douceur et professionnalisme.',
  address: {
    street: '5 avenue Chanzy, 1er étage droite',
    city: 'Jonzac',
    postalCode: '17500',
    country: 'France'
  },
  phone: '0632185259',
  email: 'formationquantique111@gmail.com',
  website: 'formationquantique.fr',
  hours: {
    weekdays: '9h-18h30',
    saturday: 'Fermé',
    sunday: 'Fermé',
    detailed: {
      monday: '9h-18h30',
      tuesday: '9h-18h30',
      wednesday: '9h-18h',
      thursday: '9h-18h30',
      friday: '9h-18h30',
      saturday: 'Fermé',
      sunday: 'Fermé'
    }
  },
  social: {
    instagram: '',
    facebook: 'https://www.facebook.com/clemencereznicek'
  }
}

export const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00'
]

export const giftCardData = {
  title: 'Offrez un Moment de Transformation',
  subtitle: 'Le cadeau qui change la vie',
  description: 'Offrez bien plus qu\'un simple cadeau : offrez une parenthèse de reconnexion à soi, un moment de transformation et de bien-être profond. Les cartes cadeaux sont valables sur l\'ensemble des soins (soins énergétiques, constellations, massages, coaching) et s\'adaptent à tous les besoins.',
  features: [
    'Valable sur tous les soins',
    'Validité 6 mois',
    'Au montant de votre choix',
    'Envoi par email ou courrier'
  ],
  ctaText: 'Commander une carte cadeau',
  ctaHref: '/contact',
  details: {
    validity: '6 mois à compter de la date d\'achat',
    denominations: 'Montant libre ou montant d\'un soin spécifique',
    format: 'Carte physique ou dématérialisée',
    personalization: 'Message personnalisé sur demande',
    usage: 'Mentionner la carte cadeau lors de la prise de rendez-vous',
    purchase: 'Contactez-moi par téléphone (06 32 18 52 59) ou email pour commander votre carte cadeau'
  }
}
