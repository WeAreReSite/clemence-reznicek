import { Metadata } from "next"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité de L'Éther Spa - Protection de vos données personnelles conformément au RGPD.",
}

export default function ConfidentialitePage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-spa">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead">
              Chez L&apos;Éther Spa, nous accordons une importance primordiale à la protection
              de vos données personnelles. Cette politique de confidentialité explique comment
              nous collectons, utilisons et protégeons vos informations.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              1. Responsable du traitement
            </h2>
            <p>
              Le responsable du traitement des données est :<br />
              <strong>L&apos;Éther Spa</strong><br />
              {spaInfo.address.street}<br />
              {spaInfo.address.postalCode} {spaInfo.address.city}<br />
              Email : {spaInfo.email}
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              2. Données collectées
            </h2>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li><strong>Données d&apos;identification</strong> : nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de réservation</strong> : date et heure des rendez-vous, soins choisis, préférences</li>
              <li><strong>Données de navigation</strong> : adresse IP, type de navigateur, pages visitées (via cookies)</li>
              <li><strong>Données de paiement</strong> : traitées de manière sécurisée par notre prestataire de paiement</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              3. Finalités du traitement
            </h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Gérer vos réservations et rendez-vous</li>
              <li>Vous contacter concernant vos soins</li>
              <li>Personnaliser votre expérience</li>
              <li>Envoyer des communications marketing (avec votre consentement)</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              4. Base légale du traitement
            </h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li><strong>L&apos;exécution du contrat</strong> : pour la gestion de vos réservations</li>
              <li><strong>Votre consentement</strong> : pour les communications marketing et certains cookies</li>
              <li><strong>Notre intérêt légitime</strong> : pour l&apos;amélioration de nos services</li>
              <li><strong>Nos obligations légales</strong> : pour la conservation des factures</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              5. Durée de conservation
            </h2>
            <p>Nous conservons vos données :</p>
            <ul>
              <li>Données clients : 3 ans après votre dernière interaction</li>
              <li>Données de facturation : 10 ans (obligation légale)</li>
              <li>Cookies : maximum 13 mois</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              6. Cookies
            </h2>
            <p>Notre site utilise différents types de cookies :</p>
            <ul>
              <li><strong>Cookies nécessaires</strong> : essentiels au fonctionnement du site</li>
              <li><strong>Cookies analytiques</strong> : pour comprendre l&apos;utilisation du site</li>
              <li><strong>Cookies marketing</strong> : pour personnaliser les publicités</li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies à tout moment via notre bandeau
              de consentement ou les paramètres de votre navigateur.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              7. Vos droits
            </h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : {spaInfo.email}
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              8. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, modification, divulgation
              ou destruction. Notre site utilise le protocole HTTPS pour sécuriser les échanges
              de données.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              9. Transferts de données
            </h2>
            <p>
              Vos données peuvent être transférées à des prestataires situés hors de l&apos;Union
              Européenne (hébergement, outils analytiques). Dans ce cas, nous nous assurons
              que des garanties appropriées sont mises en place conformément à la réglementation.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              10. Réclamation
            </h2>
            <p>
              Si vous estimez que le traitement de vos données n&apos;est pas conforme à la
              réglementation, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <p>
              Commission Nationale de l&apos;Informatique et des Libertés<br />
              3 Place de Fontenoy, TSA 80715<br />
              75334 Paris Cedex 07<br />
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.cnil.fr
              </a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              11. Modifications
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité à tout moment.
              La date de dernière mise à jour sera toujours indiquée en bas de cette page.
            </p>

            <p className="mt-8 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
