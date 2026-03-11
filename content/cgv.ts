// =============================================================================
// Conditions Générales de Vente Content
// =============================================================================

export interface CGVSection {
  title: string;
  content: string;
}

export interface CGVPageContent {
  title: string;
  lastUpdated: string;
  sections: CGVSection[];
}

export const cgvPage: CGVPageContent = {
  title: "Conditions Générales de Vente",
  lastUpdated: "9 mars 2026",
  sections: [
    {
      title: "Désignation",
      content: `L'entreprise auto-entrepreneur Clémence REZNICEK, définie ici comme le Prestataire, désigne une entreprise de formation, coaching, massage et accompagnement indépendante, dont le siège social est situé au 5 avenue Chanzy, 17500 Jonzac. L'entreprise met en place et dispense des formations, séances individuelles et collectives, massages, coachings, stages et séances de systémie, à Jonzac et sur l'ensemble du territoire national, seule ou en partenariat.

Le Client désigne toute personne physique qui souhaite faire appel à l'entreprise auto-entrepreneur Clémence REZNICEK, par l'achat d'une formation, d'un coaching, d'un massage, d'un accompagnement ou d'une séance individuelle ou collective.

Par séance, il est entendu tout massage, coaching, systémie ainsi que séance individuelle et collective. Par formation, il est entendu tout stage, atelier, cours particulier et module.

Le processus de réservation est défini comme tel : après échange avec l'entreprise auto-entrepreneur Clémence REZNICEK, celle-ci confirmera par téléphone les dates fixées avec le Client. Ce dernier doit fournir une adresse e-mail valide et valider son engagement par retour de mail.`,
    },
    {
      title: "Objet et champ d'application",
      content: `Les présentes Conditions Générales de Vente déterminent les conditions applicables aux prestations de formation, de coaching, de massage, d'accompagnement et de séance individuelle ou collective effectuées par l'entreprise auto-entrepreneur Clémence REZNICEK pour le compte d'un Client.

Toute commande auprès de l'entreprise auto-entrepreneur Clémence REZNICEK implique l'acceptation sans réserve des présentes Conditions Générales de Vente.`,
    },
    {
      title: "Engagement et réservation",
      content: `Pour chaque formation et parcours de plusieurs séances, l'entreprise auto-entrepreneur Clémence REZNICEK s'engage à fournir un devis au Client. Ce dernier est tenu de retourner un exemplaire renseigné, daté, signé avec la mention « Bon pour accord ». À la demande du Client, une attestation de présence ou de fin de formation peut lui être fournie.

Pour les séances de coaching individuel et collectif, la réservation se fait par téléphone. L'acompte valide l'inscription. Le Client s'engage à assurer l'entièreté de ses séances.

Pour les massages et séances individuelles, la réservation se fait par téléphone. L'entreprise auto-entrepreneur Clémence REZNICEK se réserve le droit de refuser ou d'annuler toute réservation d'un Client avec lequel il existerait un litige relatif au paiement d'une commande antérieure ou tout autre motif légitime.`,
    },
    {
      title: "Tarifs",
      content: `Parcours RMD — Résurrection Multi-Dimensionnelle
9 séances individuelles (6 séances d'1h30 + 3 séances de 30 minutes) en présentiel et/ou à distance : somatique, énergétique, coaching et systémique. Durée : 9 mois, une séance par mois.
Tarif communiqué lors d'un premier échange téléphonique — Règlement en plusieurs fois possible

Séance découverte
60 € TTC · 1h · En cabinet ou à distance

Massages énergétiques
· Aromatouch — 75 € · 1h
· Shambala — 100 € · 1h30
· Solar — 120 € · 2h
· Massage des 5 Continents — 120 € · 2h

Accompagnements individuels
· Régulation du système nerveux — 150 € · 1h30
· Blessures d'âme — 150 € · 1h30
· Constellations familiales individuelles — 150 € · 1h30
· Bilan énergétique et spirituel — 150 € · 2h · En cabinet ou à distance
· Bilan et traitement énergétique (BES) — 150 € · 1h · En cabinet ou à distance
· Nettoyage énergétique et géobiologique — 111 € · 2h

Formations & stages
· Cosmo – Décodage quantique — 333 € · 3h
· Quantique 111 — 777 € · Programme complet
· Stages 1 à 5 — 100 € / jour · 2 jours`,
    },
    {
      title: "Prix et modalités de paiement",
      content: `Les prix sont indiqués en euros TTC sur le site clemencereznicek.com. Le paiement est à effectuer avant la prestation. Le règlement peut être effectué par virement bancaire, espèces ou chèque.

Pour les formations, un acompte est demandé à la réservation pour valider l'inscription. Le règlement peut se faire en plusieurs fois, sur demande.

En l'absence de règlement au plus tard 24h avant la séance, celle-ci sera automatiquement annulée. Une nouvelle prise de rendez-vous ne pourra se faire qu'accompagnée du règlement de la nouvelle séance.`,
    },
    {
      title: "Conditions de report et d'annulation",
      content: `Les sessions réservées ne sont pas remboursées. Le Client s'engage à prévenir l'entreprise auto-entrepreneur Clémence REZNICEK par téléphone ou par mail au plus tard 15 jours avant la séance en cas d'indisponibilité. L'entreprise Clémence REZNICEK proposera une date de report.

En cas de reports successifs, l'entreprise auto-entrepreneur Clémence REZNICEK se réserve le droit d'annuler l'intégralité des rendez-vous, le règlement intégral restant dû.

L'annulation justifiée (cas de force majeure, justificatif médical), au plus tard 24h avant la séance, peut donner lieu à une proposition de date de remplacement.`,
    },
    {
      title: "Obligations respectives",
      content: `Le Client s'engage à fournir des éléments d'identification véridiques. Sans accord écrit d'un des deux parents, la prise de rendez-vous pour un enfant mineur ne sera pas autorisée.

Le Client devra s'assurer auprès de son médecin que son état de santé est compatible avec l'accompagnement proposé.

L'entreprise auto-entrepreneur Clémence REZNICEK est soumise à une obligation de moyens, et non de résultat.`,
    },
    {
      title: "Limitation de responsabilité",
      content:
        "L'entreprise auto-entrepreneur Clémence REZNICEK ne pourra être tenue pour responsable d'une éventuelle altération de santé physique, émotionnelle ou psychique à la suite de ses séances.",
    },
    {
      title: "Propriété intellectuelle et droit d'auteur",
      content:
        "Tous les documents et supports transmis par l'entreprise auto-entrepreneur Clémence REZNICEK sont protégés par la propriété intellectuelle et le droit d'auteur. Leur reproduction, partielle ou totale, ne peut être effectuée sans accord exprès. Le Client s'engage à ne pas utiliser, transmettre ou reproduire tout ou partie de ces documents.",
    },
    {
      title: "Informatique et libertés",
      content: `Les informations personnelles communiquées par le Client sont utilisées pour le traitement de l'inscription et la constitution d'un fichier clientèle. Le Client dispose d'un droit d'accès, de rectification, de portabilité et d'effacement de ses données, conformément à la loi « informatique et libertés » du 6 janvier 1978 et au Règlement européen n° 2016/679/UE du 27 avril 2016.

Pour exercer ses droits : clemence.reznicek@gmail.com`,
    },
    {
      title: "Loi applicable et attribution de compétence",
      content:
        "Les présentes CGV sont encadrées par la loi française. En cas de litige, la recherche d'une solution amiable sera privilégiée. À défaut, l'affaire sera portée devant les tribunaux de Saintes (17).",
    },
  ],
};
