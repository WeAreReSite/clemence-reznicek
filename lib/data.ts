import { Service, Therapist } from './store'

export const services: Service[] = [
  {
    id: '1',
    name: 'Massage Signature L\'Éther',
    slug: 'massage-signature',
    category: 'massages',
    description: 'Notre massage signature combine les techniques ancestrales de différentes traditions pour créer une expérience de relaxation profonde et personnalisée. Ce soin exclusif utilise des huiles biologiques sélectionnées avec soin et s\'adapte parfaitement à vos besoins du moment. Un voyage sensoriel unique qui harmonise le corps et l\'esprit.',
    shortDescription: 'Un voyage sensoriel unique combinant les meilleures techniques de massage du monde.',
    duration: 90,
    price: 150,
    image: '/images/massage-signature.jpg',
    benefits: [
      'Relaxation profonde du corps et de l\'esprit',
      'Réduction des tensions musculaires',
      'Amélioration de la circulation sanguine',
      'Équilibre énergétique restauré'
    ],
    isPopular: true
  },
  {
    id: '2',
    name: 'Massage Deep Tissue',
    slug: 'massage-deep-tissue',
    category: 'massages',
    description: 'Ce massage thérapeutique cible les couches profondes des muscles pour libérer les tensions chroniques et les noeuds musculaires. Idéal pour les sportifs ou les personnes souffrant de douleurs musculaires persistantes. Notre praticien utilise des pressions fermes et des techniques spécialisées pour un soulagement durable.',
    shortDescription: 'Massage en profondeur pour libérer les tensions chroniques.',
    duration: 60,
    price: 110,
    image: '/images/deep-tissue.jpg',
    benefits: [
      'Soulagement des douleurs chroniques',
      'Libération des noeuds musculaires',
      'Récupération sportive accélérée',
      'Amélioration de la posture'
    ]
  },
  {
    id: '3',
    name: 'Japanese Head Spa',
    slug: 'japanese-head-spa',
    category: 'soins',
    description: 'Découvrez le rituel japonais du Head Spa, une expérience sensorielle exceptionnelle pour le cuir chevelu et l\'esprit. Ce soin inclut un massage crânien approfondi, un traitement capillaire revitalisant et des techniques de relaxation issues de la tradition japonaise. Un moment de pure évasion.',
    shortDescription: 'Le rituel japonais ultime pour le cuir chevelu et la détente.',
    duration: 75,
    price: 130,
    image: '/images/head-spa.jpg',
    benefits: [
      'Stimulation du cuir chevelu',
      'Réduction du stress intense',
      'Cheveux revitalisés et brillants',
      'Amélioration du sommeil'
    ],
    isPopular: true
  },
  {
    id: '4',
    name: 'Drainage Lymphatique',
    slug: 'drainage-lymphatique',
    category: 'soins',
    description: 'Le drainage lymphatique manuel est une technique douce et rythmée qui stimule la circulation lymphatique. Ce soin favorise l\'élimination des toxines, réduit la rétention d\'eau et renforce le système immunitaire. Particulièrement recommandé pour les jambes lourdes et la détoxification.',
    shortDescription: 'Technique douce pour stimuler la circulation et éliminer les toxines.',
    duration: 60,
    price: 100,
    image: '/images/drainage.jpg',
    benefits: [
      'Élimination des toxines',
      'Réduction de la rétention d\'eau',
      'Jambes légères',
      'Renforcement immunitaire'
    ]
  },
  {
    id: '5',
    name: 'Massage aux Pierres Chaudes',
    slug: 'massage-pierres-chaudes',
    category: 'massages',
    description: 'Des pierres de basalte chauffées sont placées sur les points d\'énergie du corps et utilisées pour masser en profondeur. La chaleur pénétrante des pierres détend instantanément les muscles tandis que le massage procure une relaxation intense. Une expérience unique de lâcher-prise total.',
    shortDescription: 'La chaleur apaisante des pierres volcaniques pour une détente profonde.',
    duration: 75,
    price: 125,
    image: '/images/pierres-chaudes.jpg',
    benefits: [
      'Détente musculaire profonde',
      'Amélioration de la circulation',
      'Réduction du stress et de l\'anxiété',
      'Équilibrage des chakras'
    ]
  },
  {
    id: '6',
    name: 'Soin Visage Éclat',
    slug: 'soin-visage-eclat',
    category: 'visage',
    description: 'Ce soin complet du visage redonne éclat et vitalité à votre peau. Il comprend un nettoyage en profondeur, une exfoliation douce, un massage facial sculptant et l\'application de soins ciblés selon votre type de peau. Nous utilisons exclusivement des produits biologiques de haute qualité.',
    shortDescription: 'Un soin complet pour une peau lumineuse et revitalisée.',
    duration: 60,
    price: 95,
    image: '/images/soin-visage.jpg',
    benefits: [
      'Teint lumineux et unifié',
      'Peau nourrie en profondeur',
      'Traits reposés et détendus',
      'Action anti-âge naturelle'
    ]
  },
  {
    id: '7',
    name: 'Massage Duo',
    slug: 'massage-duo',
    category: 'experiences',
    description: 'Partagez un moment de détente à deux dans notre suite privée. Ce massage synchronisé permet aux couples ou amis de profiter ensemble d\'un instant de relaxation. Chaque massage est personnalisé selon les préférences de chacun. Une expérience unique à partager.',
    shortDescription: 'Un moment de détente partagé dans notre suite privée.',
    duration: 60,
    price: 200,
    image: '/images/massage-duo.jpg',
    benefits: [
      'Expérience partagée unique',
      'Suite privée romantique',
      'Massages personnalisés',
      'Champagne offert'
    ],
    isPopular: true
  },
  {
    id: '8',
    name: 'Rituel Détox Corps',
    slug: 'rituel-detox',
    category: 'rituels',
    description: 'Ce rituel complet de 2 heures combine gommage corporel aux sels marins, enveloppement détoxifiant aux algues et massage drainant. Votre corps est purifié, votre peau est douce et votre esprit apaisé. Idéal pour une remise en forme complète.',
    shortDescription: 'Un rituel complet pour purifier le corps et l\'esprit.',
    duration: 120,
    price: 220,
    image: '/images/rituel-detox.jpg',
    benefits: [
      'Élimination des toxines',
      'Peau douce et satinée',
      'Silhouette affinée',
      'Énergie renouvelée'
    ]
  },
  {
    id: '9',
    name: 'Massage Prénatal',
    slug: 'massage-prenatal',
    category: 'massages',
    description: 'Spécialement conçu pour les futures mamans, ce massage doux soulage les tensions liées à la grossesse. Position adaptée pour un confort optimal, techniques sécurisées et huiles appropriées. Un moment de douceur pour vous et votre bébé.',
    shortDescription: 'Un moment de douceur et de soulagement pour les futures mamans.',
    duration: 60,
    price: 100,
    image: '/images/massage-prenatal.jpg',
    benefits: [
      'Soulagement du dos et des jambes',
      'Réduction de l\'anxiété',
      'Amélioration du sommeil',
      'Connexion mère-bébé'
    ]
  },
  {
    id: '10',
    name: 'Massage Express',
    slug: 'massage-express',
    category: 'massages',
    description: 'Pour ceux qui manquent de temps mais ont besoin de décompresser. Ce massage ciblé se concentre sur le dos, la nuque et les épaules - les zones où le stress s\'accumule. En 30 minutes, retrouvez légèreté et bien-être.',
    shortDescription: 'Une pause bien-être efficace pour les emplois du temps chargés.',
    duration: 30,
    price: 60,
    image: '/images/massage-express.jpg',
    benefits: [
      'Soulagement rapide des tensions',
      'Idéal pause déjeuner',
      'Regain d\'énergie immédiat',
      'Sans rendez-vous possible'
    ]
  }
]

export const categories = [
  { id: 'massages', name: 'Massages', description: 'Détente et récupération musculaire' },
  { id: 'soins', name: 'Soins du Corps', description: 'Rituels de beauté et bien-être' },
  { id: 'visage', name: 'Soins Visage', description: 'Éclat et jeunesse de la peau' },
  { id: 'rituels', name: 'Rituels', description: 'Expériences sensorielles complètes' },
  { id: 'experiences', name: 'Expériences', description: 'Moments uniques à partager' }
]

export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    title: 'Praticienne Bien-être Senior',
    image: '/images/therapist-1.jpg',
    specialties: ['Massage Signature', 'Deep Tissue', 'Pierres Chaudes'],
    bio: 'Plus de 12 ans d\'expérience dans le massage thérapeutique. Certifiée FFMBE, Sophie excelle dans les techniques de relaxation profonde et le traitement des tensions chroniques.'
  },
  {
    id: '2',
    name: 'Marie Dubois',
    title: 'Spécialiste Japanese Head Spa',
    image: '/images/therapist-2.jpg',
    specialties: ['Japanese Head Spa', 'Soins Visage', 'Drainage Lymphatique'],
    bio: 'Formée au Japon aux techniques traditionnelles du Head Spa, Marie apporte son expertise unique et sa sensibilité pour créer des expériences de détente inoubliables.'
  },
  {
    id: '3',
    name: 'Claire Leroy',
    title: 'Praticienne Holistique',
    image: '/images/therapist-3.jpg',
    specialties: ['Massage Prénatal', 'Rituels', 'Drainage Lymphatique'],
    bio: 'Passionnée par l\'approche holistique du bien-être, Claire accompagne chaque client avec bienveillance et expertise. Spécialisée dans les soins prénataux et les rituels détox.'
  }
]

export const testimonials = [
  {
    id: '1',
    name: 'Isabelle R.',
    rating: 5,
    text: 'Une expérience exceptionnelle. Le massage signature est vraiment unique, je me suis sentie transportée. L\'équipe est attentionnée et le cadre magnifique. Je recommande vivement !',
    service: 'Massage Signature L\'Éther',
    date: '2024-11'
  },
  {
    id: '2',
    name: 'Marc D.',
    rating: 5,
    text: 'Enfin trouvé un endroit où le Deep Tissue est fait avec compétence. Mes douleurs de dos ont considérablement diminué. Sophie est une praticienne exceptionnelle.',
    service: 'Massage Deep Tissue',
    date: '2024-11'
  },
  {
    id: '3',
    name: 'Émilie P.',
    rating: 5,
    text: 'Le Japanese Head Spa est une révélation ! Je n\'avais jamais ressenti une telle détente. Mon cuir chevelu et mes cheveux n\'ont jamais été aussi beaux.',
    service: 'Japanese Head Spa',
    date: '2024-10'
  },
  {
    id: '4',
    name: 'Jean-Pierre M.',
    rating: 5,
    text: 'Nous avons offert le massage duo à ma femme pour notre anniversaire. Un moment magique dans un cadre somptueux. Le champagne était une attention délicate.',
    service: 'Massage Duo',
    date: '2024-10'
  },
  {
    id: '5',
    name: 'Caroline T.',
    rating: 5,
    text: 'Enceinte de 7 mois, j\'avais des douleurs au dos insupportables. Claire a su adapter le massage parfaitement. Je suis ressortie soulagée et apaisée.',
    service: 'Massage Prénatal',
    date: '2024-09'
  }
]

export const faqs = [
  {
    question: 'Dois-je réserver à l\'avance ?',
    answer: 'Oui, nous vous recommandons de réserver au moins 48 heures à l\'avance pour garantir la disponibilité du créneau souhaité. Cependant, n\'hésitez pas à nous contacter pour les disponibilités de dernière minute.'
  },
  {
    question: 'Quelle est votre politique d\'annulation ?',
    answer: 'Toute annulation doit être effectuée au moins 24 heures avant le rendez-vous. Passé ce délai, un acompte de 30% pourra être retenu. Les annulations plus de 48 heures avant sont entièrement remboursées.'
  },
  {
    question: 'Vos praticiens sont-ils certifiés ?',
    answer: 'Tous nos praticiens sont certifiés par la Fédération Française de Massages Bien-Être (FFMBE) et disposent de plus de 200 heures de formation professionnelle. Ils suivent régulièrement des formations continues pour perfectionner leurs techniques.'
  },
  {
    question: 'Que dois-je porter pour un massage ?',
    answer: 'Nous fournissons des peignoirs et des serviettes. Pour le massage, vous êtes couvert(e) en permanence et seule la zone massée est découverte. Votre confort et votre pudeur sont notre priorité.'
  },
  {
    question: 'Proposez-vous des formules cadeaux ?',
    answer: 'Oui ! Nos bons cadeaux sont disponibles pour tous nos soins. Ils sont valables 12 mois et peuvent être personnalisés avec un message. Livraison par email instantanée ou envoi postal dans un écrin élégant.'
  },
  {
    question: 'Puis-je choisir mon praticien ?',
    answer: 'Absolument. Lors de votre réservation, vous pouvez sélectionner le praticien de votre choix selon ses disponibilités. Si vous n\'avez pas de préférence, nous vous attribuerons le praticien le plus adapté à votre soin.'
  },
  {
    question: 'Avez-vous un parking ?',
    answer: 'Un parking privé gratuit est à disposition de nos clients. Des places de stationnement sont également disponibles dans les rues adjacentes.'
  },
  {
    question: 'Les soins sont-ils adaptés aux femmes enceintes ?',
    answer: 'Oui, nous proposons un massage prénatal spécialement conçu pour les futures mamans, à partir du 4ème mois de grossesse. Ce soin utilise des positions et des techniques adaptées pour un confort optimal.'
  }
]

export const spaInfo = {
  name: 'L\'Éther',
  tagline: 'Sanctuaire de Bien-être',
  description: 'L\'Éther est un havre de paix dédié à votre bien-être. Dans un cadre raffiné et apaisant, notre équipe de praticiens certifiés vous invite à découvrir des soins d\'exception, inspirés des traditions du monde entier.',
  address: {
    street: '12 Rue de la Paix',
    city: 'Paris',
    postalCode: '75002',
    country: 'France'
  },
  phone: '+33 1 42 00 00 00',
  email: 'contact@lether-spa.fr',
  hours: {
    weekdays: '10h00 - 21h00',
    saturday: '10h00 - 20h00',
    sunday: '11h00 - 19h00'
  },
  social: {
    instagram: 'https://instagram.com/lether_spa',
    facebook: 'https://facebook.com/letherspa'
  }
}

export const timeSlots = [
  '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00'
]
