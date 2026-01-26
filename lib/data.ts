import { Service, Therapist } from './store'

export const services: Service[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // RÉFLEXOLOGIE - Techniques de pression pour rééquilibrer le corps
  // ═══════════════════════════════════════════════════════════════════════════

  // --- Réflexologie Plantaire ---
  {
    id: 'reflex-plant-decouverte',
    name: 'Réflexologie Plantaire Découverte',
    slug: 'reflexologie-plantaire-decouverte',
    category: 'reflexologie',
    description: 'Une première approche de la réflexologie plantaire pour découvrir cette technique millénaire. En 30 minutes, profitez d\'un massage des pieds ciblé qui vous permettra de vous familiariser avec les bienfaits de cette pratique. Un moment de détente idéal pour tester la réflexologie avant de vous engager dans une séance complète.',
    shortDescription: 'Découvrez la réflexologie plantaire en 30 minutes.',
    duration: 30,
    price: 40,
    image: '/images/reflexologie-plantaire.jpeg',
    benefits: [
      'Introduction à la réflexologie',
      'Relaxation des pieds',
      'Bien-être général',
      'Découverte des points réflexes'
    ]
  },
  {
    id: 'reflex-plantaire',
    name: 'Réflexologie Plantaire',
    slug: 'reflexologie-plantaire',
    category: 'reflexologie',
    description: 'La réflexologie plantaire est un massage des pieds d\'origine chinoise. Selon la médecine traditionnelle chinoise, chaque zone réflexe correspondrait à un organe, une glande ou une partie du corps qui se projetterait sur la plante des pieds. Le pied serait donc un "miroir" miniature du corps humain. La réflexologie plantaire permet de retrouver un état d\'équilibre, d\'autorégulation du corps, de bien-être, de relaxation et peut avoir des bienfaits sur l\'ensemble des systèmes du corps (digestif, urinaire, reproducteur, locomoteur, ORL, etc.). La réflexologie plantaire consiste à exercer des points de pression et des massages au niveau des pieds. Un temps d\'échange est nécessaire avant et après chaque séance, prévoir 20 minutes supplémentaires. Prévoir une tenue que l\'on peut remonter à mi-mollet.',
    shortDescription: 'Le massage plantaire ancestral pour votre bien-être.',
    duration: 60,
    price: 65,
    image: '/images/reflexologie-plantaire.jpeg',
    benefits: [
      'Équilibre et autorégulation du corps',
      'Bienfaits sur les systèmes digestif, urinaire, reproducteur, locomoteur, ORL',
      'Relaxation et bien-être',
      'Temps d\'échange personnalisé'
    ],
    isPopular: true
  },

  // --- Réflexologie Palmaire ---
  {
    id: 'reflex-palmaire',
    name: 'Réflexologie Palmaire',
    slug: 'reflexologie-palmaire',
    category: 'reflexologie',
    description: 'La réflexologie palmaire consiste à exercer des points de pression et des massages au niveau des mains. Cette technique de bien-être est basée sur les principes de la réflexologie et favorise la détente et la relaxation.',
    shortDescription: 'La réflexologie par les mains pour votre détente.',
    duration: 30,
    price: 40,
    image: '/images/reflexologie-palmaire.jpeg',
    benefits: [
      'Détente et relaxation',
      'Apaisement des tensions',
      'Bien-être des mains',
      'Sensation de calme'
    ]
  },

  // --- Réflexologie Abdominale ---
  {
    id: 'reflex-abdominale',
    name: 'Réflexologie Abdominale',
    slug: 'reflexologie-abdominale',
    category: 'reflexologie',
    description: 'Le Qi Nei Tsang est une technique de massage issue de la tradition taoïste chinoise. Qi Nei Tsang veut littéralement dire "travailler l\'énergie des organes internes". Ce massage vise à débloquer les points de tension principalement sur la région abdominale appelée aussi "le second cerveau" car c\'est par là que se trouvent de nombreux organes vitaux où les tensions profondes, les émotions et notre vitalité s\'accumulent. À l\'aide de pressions douces, de gestes circulaires et d\'étirements spécifiques, ce massage vise à libérer les tensions accumulées dans les organes internes (foie, intestins, estomac, rate...) à favoriser la circulation de l\'énergie (Qi) et à rétablir un meilleur équilibre global. Ce massage est bénéfique pour divers problèmes de santé, notamment les troubles digestifs, le stress, l\'anxiété, les douleurs abdominales et les déséquilibres énergétiques. En résumé : soulager les tensions abdominales (ballonnements, maux de ventre fonctionnels, inconfort digestif), améliorer la digestion et l\'élimination, libérer les émotions stockées dans le ventre (stress, anxiété, fatigue émotionnelle, surcharge mentale), stimuler la circulation énergétique et lymphatique, améliorer la respiration et la détente profonde, harmonisation du corps et de l\'esprit.',
    shortDescription: 'Un massage traditionnel pour le bien-être abdominal.',
    duration: 30,
    price: 40,
    image: '/images/reflexologie-abdominale.jpeg',
    benefits: [
      'Soulager les tensions abdominales',
      'Améliorer la digestion et l\'élimination',
      'Libérer les émotions stockées dans le ventre',
      'Stimuler la circulation énergétique et lymphatique'
    ]
  },

  // --- Réflexologie Faciale et Crânienne ---
  {
    id: 'reflex-faciale-cranienne',
    name: 'Réflexologie Faciale et Crânienne',
    slug: 'reflexologie-faciale-cranienne',
    category: 'reflexologie',
    description: 'La réflexologie faciale est une méthode de bien-être qui repose sur un principe simple : le visage est une véritable carte du corps. Chaque zone, chaque point correspond à un organe, une fonction ou une partie du corps. En stimulant ces points précis par des pressions douces et ciblées, on aide l\'organisme à retrouver son équilibre naturel. À la fois relaxante et ré-énergisante, la réflexologie faciale agit sur le système nerveux, favorise la détente profonde et soutient les capacités d\'auto-régulation du corps. Elle est utilisée aussi bien pour apaiser le stress, les tensions et la fatigue que pour accompagner certains déséquilibres fonctionnels, lifting naturel. Accessible à tous, non invasive et pratiquée habillé, la réflexologie faciale offre un moment de lâcher prise tout en travaillant en profondeur. C\'est une approche globale qui considère la personne dans sa totalité : physique, émotionnelle et mentale.',
    shortDescription: 'Le visage, carte du corps : pressions douces pour un équilibre naturel.',
    duration: 30,
    price: 40,
    image: '/images/reflexologie-faciale-et-cranienne.jpeg',
    benefits: [
      'Détente profonde du système nerveux',
      'Apaisement du stress et des tensions',
      'Lifting naturel',
      'Rééquilibrage global corps-esprit'
    ]
  },
  {
    id: 'reflex-faciale-cranienne-plantaire',
    name: 'Réflexologie Faciale, Crânienne et Plantaire',
    slug: 'reflexologie-faciale-cranienne-plantaire',
    category: 'reflexologie',
    description: 'Une séance complète d\'1h30 associant les bienfaits de la réflexologie faciale et crânienne à ceux de la réflexologie plantaire. Cette combinaison puissante travaille sur les deux extrémités du corps pour un rééquilibrage global. Le visage, véritable carte du corps, et les pieds, miroir de l\'organisme, sont stimulés en synergie pour une détente profonde et une harmonisation complète. Un soin d\'exception pour ceux qui recherchent un bien-être total.',
    shortDescription: 'L\'alliance visage et pieds pour un rééquilibrage complet.',
    duration: 90,
    price: 100,
    image: '/images/reflexologie-faciale-et-cranienne.jpeg',
    benefits: [
      'Rééquilibrage global du corps',
      'Détente profonde',
      'Harmonisation complète',
      'Bien-être total'
    ]
  },
  {
    id: 'reflex-faciale-cranienne-palmaire',
    name: 'Réflexologie Faciale, Crânienne et Palmaire',
    slug: 'reflexologie-faciale-cranienne-palmaire',
    category: 'reflexologie',
    description: 'Une séance complète d\'une heure associant les bienfaits de la réflexologie faciale, crânienne et palmaire. Ce soin global procure une relaxation profonde en agissant sur plusieurs zones réflexes. Idéal pour évacuer le stress et retrouver sérénité et clarté d\'esprit.',
    shortDescription: 'Un trio de réflexologies pour une détente complète.',
    duration: 60,
    price: 65,
    image: '/images/reflexologie-faciale-et-cranienne.jpeg',
    benefits: [
      'Relaxation profonde',
      'Évacuation du stress',
      'Clarté d\'esprit',
      'Harmonisation globale'
    ]
  },

  // --- Réflexologie Pédiatrique ---
  {
    id: 'reflex-pediatrique',
    name: 'Réflexologie Pédiatrique',
    slug: 'reflexologie-pediatrique',
    category: 'reflexologie',
    description: 'Je vous apprends des gestes de massage adaptés aux bébés et enfants pour favoriser leur détente et leur bien-être au quotidien. Un nouveau-né peut être massé dès les premiers jours de sa naissance. Le massage permet de créer un moment privilégié avec son bébé et de consolider le lien parents-bébé. Une approche douce et bienveillante pour accompagner le bien-être de vos enfants.',
    shortDescription: 'Apprenez des gestes de massage pour le bien-être de vos enfants.',
    duration: 60,
    price: 65,
    image: '/images/reflexologie-pediatrique.jpeg',
    benefits: [
      'Moment de détente pour bébé',
      'Favorise le calme et l\'apaisement',
      'Renforcement lien parent-enfant',
      'Bien-être des nouveaux-nés'
    ]
  },

  // --- Réflexologie Combinée ---
  {
    id: 'reflex-abdominale-plantaire',
    name: 'Réflexologie Abdominale et Plantaire',
    slug: 'reflexologie-abdominale-plantaire',
    category: 'reflexologie',
    description: 'Une séance complète de 1h30 combinant la réflexologie abdominale et plantaire. Cette approche globale permet de travailler en profondeur sur votre bien-être digestif tout en harmonisant l\'ensemble de votre corps par les points réflexes des pieds. Un moment de détente absolue pour retrouver votre équilibre intérieur.',
    shortDescription: 'Une approche complète alliant ventre et pieds pour un bien-être global.',
    duration: 90,
    price: 100,
    image: '/images/reflexologie-abdominale.jpeg',
    benefits: [
      'Bien-être digestif complet',
      'Équilibre corps-esprit',
      'Détente profonde',
      'Harmonisation énergétique'
    ]
  },

  // --- Bol Kansu ---
  {
    id: 'bol-kansu',
    name: 'Bol Kansu',
    slug: 'bol-kansu',
    category: 'reflexologie',
    description: 'Le bol utilisé pour le massage s\'appelle KANSU, constitué d\'un alliage de 5 métaux (cuivre, zinc, argent, or et étain). On utilise du Ghee (beurre clarifié) car il équilibre l\'élément Feu. Équilibrer l\'élément Feu permet d\'améliorer la santé des yeux, de favoriser le sommeil et d\'apporter calme et bien-être. Il atténue la colère, la nervosité et l\'angoisse. C\'est un massage simple avec un effet relaxant apprécié.',
    shortDescription: 'Un massage ancestral aux 5 métaux pour l\'équilibre intérieur.',
    duration: 30,
    price: 40,
    image: '/images/bol-kansu.jpeg',
    benefits: [
      'Calme et bien-être',
      'Amélioration du sommeil',
      'Réduction nervosité et angoisse',
      'Équilibre énergétique'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DRAINAGE LYMPHATIQUE MANUEL - Stimuler la circulation et éliminer les toxines
  // ═══════════════════════════════════════════════════════════════════════════

  // --- Soins unitaires (du plus court au plus long) ---
  {
    id: 'drainage-jambes',
    name: 'Jambes Légères',
    slug: 'jambes-legeres',
    category: 'drainage',
    description: 'Un drainage ciblé des jambes pour retrouver légèreté et confort. Cette séance de 30 minutes se concentre sur la circulation lymphatique des membres inférieurs, idéale pour soulager rapidement les sensations de jambes lourdes et retrouver du bien-être au quotidien.',
    shortDescription: 'Drainage ciblé pour des jambes légères et reposées.',
    duration: 30,
    price: 45,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Soulagement jambes lourdes',
      'Amélioration circulation',
      'Sensation de légèreté',
      'Effet rapide'
    ]
  },
  {
    id: 'drainage-jambes-dos',
    name: 'Jambes Légères + Dos',
    slug: 'jambes-legeres-dos',
    category: 'drainage',
    description: 'Associez le drainage des jambes à un travail sur le dos pour une détente encore plus complète. En 45 minutes, profitez d\'un soulagement des jambes lourdes couplé à la relaxation du dos, zone où se concentrent souvent les tensions.',
    shortDescription: 'Drainage des jambes et détente du dos en une séance.',
    duration: 45,
    price: 55,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Jambes légères',
      'Détente du dos',
      'Bien-être global',
      'Relaxation musculaire'
    ]
  },
  {
    id: 'drainage-corps',
    name: 'Drainage Lymphatique Manuel Corps',
    slug: 'drainage-corps',
    category: 'drainage',
    description: 'Le drainage lymphatique manuel est un massage du corps, doux et rythmé. Basé sur les méthodes Vodder et Leduc, il consiste à réaliser des pressions légères pour favoriser la circulation lymphatique. C\'est un massage de bien-être qui favorise la détente et la relaxation profonde.',
    shortDescription: 'Un massage manuel pour favoriser votre bien-être et votre détente.',
    duration: 60,
    price: 70,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Détente profonde',
      'Sensation de légèreté',
      'Relaxation du corps',
      'Bien-être général'
    ],
    isPopular: true
  },
  {
    id: 'drainage-corps-dos',
    name: 'Drainage Lymphatique Manuel Corps + Dos',
    slug: 'drainage-corps-dos',
    category: 'drainage',
    description: 'Un drainage lymphatique manuel complet du corps enrichi d\'un massage du dos. Cette séance de 1h15 combine les bienfaits détoxifiants du drainage avec la détente musculaire procurée par le massage du dos. Un moment de bien-être global pour votre corps.',
    shortDescription: 'Drainage manuel complet + massage du dos pour un bien-être total.',
    duration: 75,
    price: 80,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Détoxification profonde',
      'Détente musculaire',
      'Soulagement du dos',
      'Bien-être complet'
    ]
  },
  {
    id: 'drainage-corps-dos-visage',
    name: 'Drainage Lymphatique Manuel Corps + Dos + Visage',
    slug: 'drainage-corps-dos-visage',
    category: 'drainage',
    description: 'Le soin le plus complet de drainage lymphatique manuel. En 1h30, bénéficiez d\'un drainage de tout le corps, d\'un massage relaxant du dos et d\'un drainage du visage pour un teint éclatant. Une expérience globale de détoxification et de détente absolue.',
    shortDescription: 'Le soin le plus complet : corps, dos et visage drainés manuellement.',
    duration: 90,
    price: 100,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Détoxification complète',
      'Teint éclatant',
      'Détente totale',
      'Bien-être global'
    ]
  },

  // --- Cures (forfaits) ---
  {
    id: 'cure-detox',
    name: 'Cure Détox',
    slug: 'cure-detox',
    category: 'drainage',
    description: 'Une cure de 5 séances de drainage lymphatique manuel pour une détoxification en profondeur de votre organisme. Idéale pour relancer votre métabolisme, éliminer les toxines accumulées et retrouver vitalité et légèreté. Comprend une séance de 30 minutes de réflexologie plantaire offerte pour optimiser les résultats.',
    shortDescription: 'Cure de 5 séances avec réflexologie offerte pour détoxifier en profondeur.',
    duration: 60,
    price: 350,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Détoxification profonde',
      'Relance du métabolisme',
      'Élimination des toxines',
      'Bonus réflexologie 30min offert'
    ]
  },
  {
    id: 'cure-amincissement',
    name: 'Cure Amincissement',
    slug: 'cure-amincissement',
    category: 'drainage',
    description: 'Une cure complète de 10 séances de drainage lymphatique manuel spécialement conçue pour accompagner votre objectif d\'amincissement. Cette cure permet de réduire la cellulite, affiner la silhouette et retrouver des jambes légères. Comprend 1 heure de soin offerte (réflexologie plantaire ou drainage) pour maximiser vos résultats.',
    shortDescription: 'Cure de 10 séances avec 1h offerte pour sculpter votre silhouette.',
    duration: 60,
    price: 700,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Réduction cellulite',
      'Affinement silhouette',
      'Jambes légères durables',
      'Bonus 1h de soin offert'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // AMMA ASSIS - Relaxation rapide sur chaise ergonomique
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'amma-assis',
    name: 'Amma Assis',
    slug: 'amma-assis',
    category: 'amma',
    description: 'Massage assis sur chaise ergonomique, technique japonaise de relaxation rapide et efficace. En 30 minutes, ce massage habillé se concentre sur le haut du corps (dos, nuque, épaules, bras, tête) pour libérer rapidement les tensions et procurer un regain d\'énergie immédiat.',
    shortDescription: 'Massage japonais sur chaise pour une relaxation express.',
    duration: 30,
    price: 40,
    image: '/images/amma-assis-new.jpeg',
    benefits: [
      'Relaxation rapide',
      'Diminution du stress',
      'Regain d\'énergie',
      'Idéal pause bien-être'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MASSAGES COMBINÉS - Combinaisons de soins pour un bien-être complet
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'combo-amma-reflex-plantaire',
    name: 'Amma Assis + Réflexologie Plantaire',
    slug: 'amma-assis-reflexologie-plantaire',
    category: 'massages-mixtes',
    description: 'Une combinaison énergisante associant le massage Amma Assis et la réflexologie plantaire. Commencez par une relaxation du haut du corps sur chaise ergonomique, puis prolongez avec une séance de réflexologie plantaire pour un rééquilibrage complet. Un soin d\'1h30 pour libérer les tensions et retrouver votre vitalité.',
    shortDescription: 'Relaxation du haut du corps et rééquilibrage par les pieds.',
    duration: 90,
    price: 100,
    image: '/images/amma-assis-new.jpeg',
    benefits: [
      'Relaxation complète haut et bas du corps',
      'Libération des tensions',
      'Rééquilibrage énergétique',
      'Regain de vitalité'
    ]
  },
  {
    id: 'combo-reflex-jambes',
    name: 'Réflexologie Plantaire + Jambes Légères',
    slug: 'reflexologie-jambes-legeres',
    category: 'massages-mixtes',
    description: 'Une combinaison parfaite pour soulager vos jambes et retrouver votre équilibre. Cette séance d\'une heure associe les bienfaits de la réflexologie plantaire et du drainage des jambes. Idéale pour les personnes souffrant de jambes lourdes tout en bénéficiant d\'un rééquilibrage global du corps.',
    shortDescription: 'Alliance réflexologie et drainage pour des jambes légères.',
    duration: 60,
    price: 75,
    image: '/images/reflexologie-plantaire.jpeg',
    benefits: [
      'Jambes légères et reposées',
      'Équilibre du corps',
      'Détente profonde',
      'Soin complet pieds-jambes'
    ]
  },
  {
    id: 'combo-drainage-reflex-90',
    name: 'Drainage Lymphatique Manuel Corps + Réflexologie Plantaire 1h30',
    slug: 'drainage-reflexologie-90min',
    category: 'massages-mixtes',
    description: 'Une séance de 1h30 combinant un drainage lymphatique manuel complet du corps et une réflexologie plantaire. Cette alliance permet de détoxifier l\'organisme tout en rééquilibrant vos systèmes internes. Un moment de bien-être global pour retrouver légèreté et harmonie.',
    shortDescription: 'Détox et rééquilibrage en 1h30 de pure détente.',
    duration: 90,
    price: 100,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Détoxification complète',
      'Rééquilibrage énergétique',
      'Bien-être global',
      'Soin corps-pieds harmonieux'
    ]
  },
  {
    id: 'combo-drainage-reflex-120',
    name: 'Drainage Lymphatique Manuel Corps + Réflexologie Plantaire 2h',
    slug: 'drainage-reflexologie-120min',
    category: 'massages-mixtes',
    description: 'Le soin le plus complet : 2 heures dédiées à votre bien-être profond. Un drainage lymphatique manuel intégral suivi d\'une réflexologie plantaire approfondie. Cette séance exceptionnelle vous offre une détoxification maximale, un rééquilibrage complet et une relaxation absolue. Un véritable voyage vers le bien-être.',
    shortDescription: 'Le soin ultime : 2h de détox et rééquilibrage profond.',
    duration: 120,
    price: 120,
    image: '/images/drainage-lymphatique-manuel.jpeg',
    benefits: [
      'Détoxification maximale',
      'Rééquilibrage profond',
      'Relaxation absolue',
      'Expérience bien-être complète'
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // BEAUTÉ DES MAINS - Soins et sublimation de vos ongles
  // ═══════════════════════════════════════════════════════════════════════════

  // --- Poses principales ---
  {
    id: 'ongles-extension-gel',
    name: 'Extension en Gel',
    slug: 'extension-gel',
    category: 'beaute-mains',
    description: 'Sublimez vos mains avec une extension en gel de haute qualité. Cette technique permet d\'obtenir des ongles longs, résistants et d\'apparence naturelle. Chaque pose est personnalisée selon vos envies : longueur, forme, couleur. Un soin minutieux pour des mains impeccables pendant plusieurs semaines.',
    shortDescription: 'Des ongles longs et résistants pour sublimer vos mains.',
    duration: 120,
    price: 60,
    image: '/images/beaute-des-mains.jpeg',
    benefits: [
      'Ongles longs et résistants',
      'Résultat naturel',
      'Tenue longue durée',
      'Personnalisation complète'
    ]
  },
  {
    id: 'ongles-semi-permanent',
    name: 'Pose Semi-Permanent avec Renfort',
    slug: 'semi-permanent-renfort',
    category: 'beaute-mains',
    description: 'Une pose de vernis semi-permanent avec renfort pour des ongles naturels sublimés et protégés. Le renfort renforce la structure de l\'ongle naturel tandis que le vernis apporte couleur et brillance longue durée. Idéal pour des ongles fragiles ou cassants.',
    shortDescription: 'Vernis longue durée avec renfort pour ongles renforcés.',
    duration: 60,
    price: 45,
    image: '/images/beaute-des-mains.jpeg',
    benefits: [
      'Renforcement de l\'ongle',
      'Couleur longue durée',
      'Protection des ongles fragiles',
      'Brillance éclatante'
    ]
  },

  // --- Entretien ---
  {
    id: 'ongles-remplissage',
    name: 'Remplissage Gel',
    slug: 'remplissage-gel',
    category: 'beaute-mains',
    description: 'Entretenez vos extensions en gel avec un remplissage professionnel. À effectuer toutes les 3-4 semaines maximum pour maintenir la beauté et la solidité de vos ongles. Le remplissage permet de combler la repousse et de rafraîchir la couleur pour des mains toujours impeccables.',
    shortDescription: 'Entretenez vos extensions pour des ongles toujours parfaits.',
    duration: 90,
    price: 50,
    image: '/images/beaute-des-mains-2.jpeg',
    benefits: [
      'Maintien de la beauté',
      'Solidité préservée',
      'Ongles impeccables',
      'Entretien régulier'
    ]
  },

  // --- Déposes ---
  {
    id: 'ongles-depose-gel',
    name: 'Dépose Gel + Soins',
    slug: 'depose-gel-soins',
    category: 'beaute-mains',
    description: 'Retirez vos extensions en gel en douceur et profitez d\'un soin nourrissant pour vos ongles naturels. Cette prestation inclut la dépose professionnelle sans abîmer l\'ongle naturel, suivie d\'un soin hydratant et fortifiant. Vos mains retrouvent douceur et santé. Sans nouvelle pose.',
    shortDescription: 'Dépose douce avec soin réparateur pour vos ongles.',
    duration: 45,
    price: 25,
    image: '/images/beaute-des-mains-3.jpeg',
    benefits: [
      'Dépose sans abîmer',
      'Soin nourrissant',
      'Ongles en bonne santé',
      'Hydratation profonde'
    ]
  },
  {
    id: 'ongles-depose-gel-ext',
    name: 'Dépose Gel Extérieure + Soins',
    slug: 'depose-gel-exterieure-soins',
    category: 'beaute-mains',
    description: 'Vous avez fait poser vos ongles ailleurs ? Nous prenons soin de les retirer en douceur, quelle que soit leur provenance. Cette prestation inclut la dépose complète et un soin réparateur pour restaurer la santé de vos ongles naturels. Sans nouvelle pose.',
    shortDescription: 'Dépose de vos extensions extérieures avec soin réparateur.',
    duration: 60,
    price: 35,
    image: '/images/beaute-des-mains-3.jpeg',
    benefits: [
      'Dépose professionnelle',
      'Tous types de pose acceptés',
      'Soin réparateur inclus',
      'Restauration de l\'ongle'
    ]
  },
  {
    id: 'ongles-depose-semi',
    name: 'Dépose Semi-Permanent + Soins',
    slug: 'depose-semi-permanent-soins',
    category: 'beaute-mains',
    description: 'Retirez votre vernis semi-permanent en toute sécurité et profitez d\'un soin hydratant. Cette prestation respecte vos ongles naturels grâce à une technique de dépose douce, suivie d\'un soin nourrissant pour restaurer leur santé. Sans nouvelle pose.',
    shortDescription: 'Dépose douce de votre semi-permanent avec soin.',
    duration: 30,
    price: 20,
    image: '/images/beaute-des-mains-2.jpeg',
    benefits: [
      'Dépose sans agression',
      'Soin hydratant',
      'Respect de l\'ongle naturel',
      'Mains douces'
    ]
  },
  {
    id: 'ongles-depose-ext-repose',
    name: 'Dépose Extérieure avant Repose',
    slug: 'depose-exterieure-repose',
    category: 'beaute-mains',
    description: 'Si vous souhaitez une nouvelle pose mais avez un vernis semi-permanent posé ailleurs, cette prestation vous permet de retirer l\'ancien vernis avant d\'appliquer le nouveau. Un service pratique pour assurer une pose impeccable.',
    shortDescription: 'Retrait de votre semi-permanent extérieur avant nouvelle pose.',
    duration: 20,
    price: 10,
    image: '/images/beaute-des-mains-3.jpeg',
    benefits: [
      'Préparation optimale',
      'Nouvelle pose facilitée',
      'Service rapide',
      'Résultat impeccable'
    ]
  },

  // --- Options et suppléments (10 doigts) ---
  {
    id: 'option-babyboomer-10',
    name: 'Babyboomer/Babycolor 10 doigts',
    slug: 'babyboomer-babycolor',
    category: 'beaute-mains',
    description: 'Sublimez vos ongles avec un effet Babyboomer (dégradé blanc naturel) ou Babycolor (dégradé coloré) sur 10 doigts. Cette technique tendance apporte élégance et raffinement à votre manucure. À ajouter à votre pose gel ou semi-permanent.',
    shortDescription: 'Effet dégradé élégant pour une manucure raffinée.',
    duration: 15,
    price: 5,
    image: '/images/beaute-des-mains.jpeg',
    benefits: [
      'Look tendance',
      'Élégance naturelle',
      'Effet dégradé',
      'Supplément manucure'
    ],
    isAddon: true
  },
  {
    id: 'option-french-10',
    name: 'French 10 doigts',
    slug: 'french-10-doigts',
    category: 'beaute-mains',
    description: 'L\'indémodable French manucure sur 10 doigts. Cette technique classique et élégante convient à toutes les occasions. À ajouter à votre pose gel ou semi-permanent pour un résultat chic et intemporel.',
    shortDescription: 'La French classique pour une élégance intemporelle.',
    duration: 15,
    price: 5,
    image: '/images/beaute-des-mains-2.jpeg',
    benefits: [
      'Style classique',
      'Élégance assurée',
      'Convient à toutes occasions',
      'Supplément manucure'
    ],
    isAddon: true
  },
  {
    id: 'option-effets-10',
    name: 'Effet Chrome, Sirène ou Sucre 10 doigts',
    slug: 'effets-speciaux',
    category: 'beaute-mains',
    description: 'Osez l\'originalité avec des effets spéciaux sur vos 10 doigts : Chrome pour un effet miroir métallique, Sirène pour des reflets irisés, ou Sucre pour une texture mat et veloutée. À ajouter à votre pose gel ou semi-permanent pour un look unique.',
    shortDescription: 'Effets spéciaux tendance pour des ongles exceptionnels.',
    duration: 15,
    price: 5,
    image: '/images/beaute-des-mains-3.jpeg',
    benefits: [
      'Look unique',
      'Effets tendance',
      'Résultat spectaculaire',
      'Supplément manucure'
    ],
    isAddon: true
  },

  // --- Options et suppléments (par ongle) ---
  {
    id: 'option-babyboomer-1',
    name: 'Babyboomer/Babycolor par doigt',
    slug: 'babyboomer-par-doigt',
    category: 'beaute-mains',
    description: 'Effet Babyboomer ou Babycolor à l\'unité. Idéal pour personnaliser quelques doigts seulement avec un dégradé élégant. Tarif par doigt.',
    shortDescription: 'Dégradé Babyboomer à l\'unité.',
    duration: 5,
    price: 0.5,
    image: '/images/beaute-des-mains.jpeg',
    benefits: [
      'Personnalisation',
      'Tarif à l\'unité',
      'Flexibilité'
    ],
    isAddon: true
  },
  {
    id: 'option-french-1',
    name: 'French par doigt',
    slug: 'french-par-doigt',
    category: 'beaute-mains',
    description: 'French manucure à l\'unité. Parfait pour ajouter la French sur quelques doigts seulement. Tarif par doigt.',
    shortDescription: 'French classique à l\'unité.',
    duration: 5,
    price: 0.5,
    image: '/images/beaute-des-mains-2.jpeg',
    benefits: [
      'Personnalisation',
      'Tarif à l\'unité',
      'Flexibilité'
    ],
    isAddon: true
  },
  {
    id: 'option-effets-1',
    name: 'Effet Chrome, Sirène ou Sucre par doigt',
    slug: 'effets-speciaux-par-doigt',
    category: 'beaute-mains',
    description: 'Effets spéciaux (Chrome, Sirène ou Sucre) à l\'unité. Personnalisez quelques doigts avec ces effets tendance. Tarif par doigt.',
    shortDescription: 'Effets spéciaux à l\'unité.',
    duration: 5,
    price: 0.5,
    image: '/images/beaute-des-mains-3.jpeg',
    benefits: [
      'Personnalisation',
      'Tarif à l\'unité',
      'Flexibilité'
    ],
    isAddon: true
  },
  {
    id: 'option-paillettes',
    name: 'Paillettes libres par ongle',
    slug: 'paillettes-par-ongle',
    category: 'beaute-mains',
    description: 'Ajoutez des paillettes libres pour un effet scintillant et festif. Idéal pour illuminer quelques ongles et apporter une touche de brillance à votre manucure. Tarif par ongle.',
    shortDescription: 'Paillettes scintillantes à l\'unité.',
    duration: 5,
    price: 0.5,
    image: '/images/beaute-des-mains.jpeg',
    benefits: [
      'Effet scintillant',
      'Look festif',
      'Personnalisation'
    ],
    isAddon: true
  },
  {
    id: 'option-nail-art',
    name: 'Déco Nail Art simple (stamping) par ongle',
    slug: 'nail-art-stamping',
    category: 'beaute-mains',
    description: 'Décorez vos ongles avec un motif nail art simple réalisé en stamping. Une technique rapide pour ajouter des motifs élégants à votre manucure. Tarif par ongle.',
    shortDescription: 'Motif nail art stamping à l\'unité.',
    duration: 5,
    price: 0.5,
    image: '/images/beaute-des-mains-2.jpeg',
    benefits: [
      'Motifs tendance',
      'Personnalisation',
      'Résultat professionnel'
    ],
    isAddon: true
  },
  {
    id: 'option-incrustation',
    name: 'Incrustation sur construction gel par ongle',
    slug: 'incrustation-gel',
    category: 'beaute-mains',
    description: 'Incrustez des éléments décoratifs (strass, pierres, décors) directement dans la construction gel de vos ongles. Une personnalisation haut de gamme pour un résultat unique et durable. Tarif par ongle.',
    shortDescription: 'Incrustation décorative dans le gel.',
    duration: 10,
    price: 4,
    image: '/images/beaute-des-mains-3.jpeg',
    benefits: [
      'Personnalisation haut de gamme',
      'Résultat unique',
      'Tenue longue durée'
    ],
    isAddon: true
  }
]

export const categories = [
  {
    id: 'reflexologie',
    name: 'Réflexologie',
    description: 'Techniques de pression pour rééquilibrer le corps',
    image: '/images/reflexologie-plantaire.jpeg'
  },
  {
    id: 'drainage',
    name: 'Drainage Lymphatique Manuel',
    description: 'Stimuler la circulation et éliminer les toxines',
    image: '/images/drainage-lymphatique-manuel.jpeg'
  },
  {
    id: 'amma',
    name: 'Amma Assis',
    description: 'Relaxation rapide sur chaise ergonomique',
    image: '/images/amma-assis-new.jpeg'
  },
  {
    id: 'massages-mixtes',
    name: 'Massages Combinés',
    description: 'Combinaisons de soins pour un bien-être complet',
    image: '/images/drainage-lymphatique-manuel.jpeg'
  },
  {
    id: 'beaute-mains',
    name: 'Beauté des Mains',
    description: 'Soins et sublimation de vos ongles',
    images: [
      '/images/beaute-des-mains.jpeg',
      '/images/beaute-des-mains-2.jpeg',
      '/images/beaute-des-mains-3.jpeg'
    ]
  }
]

export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Sylvie Lebordais',
    title: 'Praticienne en Réflexologie et Bien-Être',
    image: '/images/photo-de-sylive.jpeg',
    specialties: ['Réflexologie Plantaire', 'Drainage Lymphatique Manuel', 'Amma Assis', 'Prothésiste Ongulaire'],
    bio: 'Formée au Centre de formation « Réflexologie Bretagne » à Pleugeuneuc (Réflexologie Plantaire, Palmaire, Pédiatrique et Bol Kansu), à Zensphère à Pacé (Drainage Lymphatique Manuel, Réflexologie Abdominale, Faciale et Crânienne, Amma Assis) et auprès d\'Anaïs Abaakil à Rennes (Prothésiste Ongulaire). Passionnée par le bien-être, j\'ai créé un espace intimiste où écoute, bienveillance et expertise sont au cœur de chaque instant.'
  }
]

export const testimonials = [
  {
    id: '1',
    name: 'Audrey Briere',
    rating: 5,
    text: 'Deux rendez-vous manucures avec Sylvie, le résultat est toujours impeccable et beau ! Sylvie est professionnelle et très consciencieuse. Je recommande sans hésiter.',
    service: 'Beauté des mains',
    date: '2025-01'
  },
  {
    id: '2',
    name: 'Alexandra Elisas',
    rating: 5,
    text: 'Belle expérience en réflexologie avec Sylvie. C\'est une personne très douce et très professionnelle. Si vous avez besoin d\'un soin en réflexologie plantaire, je recommande vivement.',
    service: 'Réflexologie Plantaire',
    date: '2025-04'
  },
  {
    id: '3',
    name: 'Marie DeJeg',
    rating: 5,
    text: 'Drainage lymphatique réalisé début août. Le résultat est top ! Un mois plus tard, je n\'ai toujours aucune sensation de jambes lourdes. Un vrai soulagement et une légèreté retrouvée. Je recommande vivement !',
    service: 'Drainage Lymphatique Manuel',
    date: '2025-08'
  },
  {
    id: '4',
    name: 'Karine Lambert',
    rating: 5,
    text: 'Merci beaucoup pour ce magnifique moment de détente en réflexologie plantaire. Sylvie est une personne bienveillante et très professionnelle. Je recommande +++',
    service: 'Réflexologie Plantaire',
    date: '2025-05'
  },
  {
    id: '5',
    name: 'Coralie Gautier',
    rating: 5,
    text: 'Sylvie est une personne douce, à l\'écoute et passionnée. Vous pouvez y aller les yeux fermés. Merci Sylvie à bientôt.',
    service: 'Réflexologie Plantaire',
    date: '2025-04'
  },
  {
    id: '6',
    name: 'Orane Le Moal',
    rating: 5,
    text: 'J\'ai effectué une séance de réflexologie plantaire d\'une heure avec Sylvie. Un pur moment de détente. Je recommande les yeux fermés.',
    service: 'Réflexologie Plantaire',
    date: '2025-03'
  },
  {
    id: '7',
    name: 'Céline Kergosien',
    rating: 5,
    text: 'Merci beaucoup pour ce moment de détente. Sylvie est une belle personne et à l\'écoute. Je recommande +++',
    service: 'Réflexologie',
    date: '2025-04'
  }
]

export const faqs = [
  {
    question: 'Dois-je réserver à l\'avance ?',
    answer: 'Oui, je vous recommande de réserver votre rendez-vous via Calendly (lien disponible sur le site) ou par téléphone au 06 13 64 87 05. La réservation permet de garantir votre créneau et de préparer au mieux votre accueil.'
  },
  {
    question: 'Quelles sont vos qualifications ?',
    answer: 'Je suis formée au Centre de formation « Réflexologie Bretagne » à Pleugeuneuc (Réflexologie Plantaire, Palmaire, Pédiatrique et Bol Kansu), à Zensphère à Pacé (Drainage Lymphatique Manuel, Réflexologie Abdominale, Faciale et Crânienne, Amma Assis) et auprès d\'Anaïs Abaakil à Rennes (Prothésiste Ongulaire).'
  },
  {
    question: 'Que dois-je porter pour une séance de réflexologie plantaire ?',
    answer: 'Pour la réflexologie plantaire, prévoyez une tenue confortable que vous pouvez remonter à mi-mollet afin de faciliter le massage des pieds et des jambes. Votre confort est essentiel pour profiter pleinement de la séance.'
  },
  {
    question: 'Proposez-vous des cures ou forfaits ?',
    answer: 'Oui, je propose deux cures spéciales : la Cure Détox (5 séances de drainage + 30 min de réflexologie offerte) à 350€ et la Cure Amincissement (10 séances de drainage + 1h de soin offert) à 700€. Ces cures permettent d\'optimiser les résultats sur la durée.'
  },
  {
    question: 'Venez-vous de Redon ou de l\'Ille-et-Vilaine ?',
    answer: 'Oui ! Le cabinet Syl\'Vie Bien-Etre à Pipriac est facilement accessible depuis Redon (15km seulement) et dessert toute la zone Ille-et-Vilaine dans un rayon de 30km. De nombreux clients viennent de Redon, Guipry-Messac, Bain-de-Bretagne et des communes environnantes pour profiter des soins de drainage lymphatique et de réflexologie.'
  },
  {
    question: 'Le drainage lymphatique est-il efficace pour les jambes lourdes ?',
    answer: 'Absolument. Le drainage lymphatique manuel selon les méthodes Vodder et Leduc est particulièrement efficace pour soulager les jambes lourdes et gonflées. Cette technique douce stimule la circulation lymphatique, favorise l\'élimination des toxines et procure une sensation de légèreté durable. C\'est l\'une des demandes les plus fréquentes des clients de Pipriac et Redon.'
  },
  {
    question: 'Combien de temps dure une séance de drainage lymphatique ?',
    answer: 'Cela dépend de vos besoins. Pour un soulagement ciblé des jambes lourdes, la séance "Jambes Légères" dure 30 minutes. Pour un drainage complet du corps, comptez 60 minutes. Pour des résultats optimaux contre la cellulite ou la rétention d\'eau, je recommande une cure de 5 à 10 séances.'
  },
  {
    question: 'Les soins peuvent-ils remplacer un traitement médical ?',
    answer: 'Non, toutes les prestations proposées ne peuvent en aucun cas se substituer à une consultation médicale ou à un traitement prescrit par votre médecin. La réflexologie et le drainage lymphatique sont des techniques de bien-être complémentaires qui favorisent la détente et l\'équilibre du corps.'
  },
  {
    question: 'Où se situe votre cabinet ?',
    answer: 'Mon espace bien-être se trouve au 1B Rue du Général de Gaulle, 35550 Pipriac, en Ille-et-Vilaine. Un espace intimiste et chaleureux pensé pour votre confort et votre sérénité, facilement accessible depuis Redon et toute la Bretagne sud.'
  },
  {
    question: 'Quels sont vos horaires d\'ouverture ?',
    answer: 'Je vous accueille du lundi au vendredi de 9h à 20h et le samedi de 9h à 13h. Le dimanche est fermé. N\'hésitez pas à me contacter pour prendre rendez-vous.'
  },
]

// Featured services to highlight on homepage (client's main specialties)
export const featuredServices = [
  {
    id: 'reflexologie',
    title: 'Réflexologie',
    subtitle: 'Plantaire • Abdominale • Faciale • Crânienne',
    description: 'Techniques ancestrales de pression sur les zones réflexes pour rééquilibrer votre corps et libérer les tensions profondes.',
    image: '/images/reflexologie-plantaire.jpeg',
    href: '/soins#reflexologie',
    highlights: ['Équilibre du corps', 'Relaxation profonde', 'Bien-être durable'],
    accent: 'from-rose-500/20 to-amber-500/20'
  },
  {
    id: 'drainage',
    title: 'Drainage Lymphatique Manuel',
    subtitle: 'Méthode Vodder & Leduc',
    description: 'Un massage doux et dynamique pour stimuler la circulation lymphatique, éliminer les toxines et retrouver des jambes légères.',
    image: '/images/drainage-lymphatique-manuel.jpeg',
    href: '/soins#drainage',
    highlights: ['Détoxification', 'Jambes légères', 'Système immunitaire'],
    accent: 'from-teal-500/20 to-emerald-500/20'
  },
  {
    id: 'amma',
    title: 'Amma Assis',
    subtitle: 'Relaxation Express',
    description: 'Technique japonaise sur chaise ergonomique. En 30 minutes, libérez les tensions du haut du corps et retrouvez votre énergie.',
    image: '/images/amma-assis-new.jpeg',
    href: '/soins#amma',
    highlights: ['Relaxation rapide', 'Regain d\'énergie', 'Anti-stress'],
    accent: 'from-violet-500/20 to-indigo-500/20'
  }
]

export const spaInfo = {
  name: 'Syl\'Vie Bien-Etre',
  tagline: 'Chouchoutez votre corps, Sublimez vos mains',
  // TODO: Replace with actual Calendly URL
  calendlyUrl: 'https://calendly.com/sylviebienetre',
  description: 'Cabinet de drainage lymphatique et réflexologie à Pipriac (35). Un espace cocooning dédié à votre bien-être et sérénité.',
  welcomeText: 'Bienvenue, Je suis Sylvie, fondatrice de Syl\'Vie Bien-Etre, spécialisée en Réflexologie, Drainage Lymphatique Manuel, Amma Assis et Prothésiste Ongulaire. J\'ai créé un espace intimiste et chaleureux pour vous offrir bien plus qu\'une simple prestation : l\'alliance du bien-être et de la beauté. Chaque rendez-vous est un moment unique, je prends le temps de vous écouter et de comprendre vos besoins et vos attentes. Accordez-vous cette parenthèse de sérénité, où écoute, bienveillance et expertise sont au cœur de chaque instant.',
  address: {
    street: '1B Rue du Général de Gaulle',
    city: 'Pipriac',
    postalCode: '35550',
    country: 'France'
  },
  phone: '0613648705',
  email: 'sylviebienetre35@gmail.com',
  website: 'sylviebienetre.fr',
  hours: {
    weekdays: '9h-20h',
    saturday: '9h-13h',
    sunday: 'Fermé',
    detailed: {
      monday: '9h-20h',
      tuesday: '9h-20h',
      wednesday: '9h-20h',
      thursday: '9h-20h',
      friday: '9h-20h',
      saturday: '9h-13h',
      sunday: 'Fermé'
    }
  },
  social: {
    instagram: 'https://www.instagram.com/sylviebienetre?igsh=MTA2dWRmbnNtdGVjeg==',
    facebook: 'https://www.facebook.com/share/16uZzBAaPw/'
  }
}

export const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00'
]

export const giftCardData = {
  title: 'Offrez un Moment de Bien-Être',
  subtitle: 'La carte cadeau parfaite',
  description: 'Offrez bien plus qu\'un simple cadeau : offrez une pause, un moment de détente absolue, une parenthèse de bien-être. Les cartes cadeaux Syl\'Vie Bien-Etre sont valables sur l\'ensemble de nos soins (réflexologie, drainage lymphatique, massages, beauté des mains) et s\'adaptent à tous vos besoins.',
  features: [
    'Valable sur tous les soins',
    'Validité 6 mois',
    'Au montant de votre choix',
    'Retrait au cabinet'
  ],
  ctaText: 'Commander une carte cadeau',
  ctaHref: '/contact',
  // Additional detailed information
  details: {
    validity: '6 mois à compter de la date d\'achat',
    denominations: 'Montant libre ou montant d\'un soin spécifique',
    format: 'Carte physique à retirer au cabinet',
    personalization: 'Message personnalisé sur demande',
    usage: 'Présenter la carte lors de la prise de rendez-vous par téléphone ou sur place',
    purchase: 'Contactez-nous par téléphone (06 13 64 87 05) ou email pour commander votre carte cadeau'
  }
}
