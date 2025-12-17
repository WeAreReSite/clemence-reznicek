import { Metadata } from "next"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "Conditions générales de vente de L'Éther Spa - Réservations, annulations, tarifs et modalités de paiement.",
}

export default function CGVPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-spa">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="lead">
              Les présentes Conditions Générales de Vente régissent les relations contractuelles
              entre L&apos;Éther Spa et ses clients. Toute réservation implique l&apos;acceptation
              sans réserve de ces conditions.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 1 - Objet
            </h2>
            <p>
              Les présentes CGV définissent les conditions de vente des prestations de soins
              et massages bien-être proposés par L&apos;Éther Spa, ainsi que les conditions de
              vente des bons cadeaux.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 2 - Réservations
            </h2>
            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">2.1 Modalités de réservation</h3>
            <p>Les réservations peuvent être effectuées :</p>
            <ul>
              <li>En ligne via notre site internet</li>
              <li>Par téléphone au {spaInfo.phone}</li>
              <li>Par email à {spaInfo.email}</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">2.2 Confirmation</h3>
            <p>
              Toute réservation est confirmée par l&apos;envoi d&apos;un email de confirmation.
              Nous vous recommandons de vérifier les détails de votre réservation (date, heure, soin)
              et de nous contacter immédiatement en cas d&apos;erreur.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">2.3 Arrivée</h3>
            <p>
              Nous vous recommandons d&apos;arriver 10 minutes avant l&apos;heure de votre rendez-vous
              afin de profiter pleinement de votre soin. En cas de retard, la durée du soin pourra
              être réduite sans modification du tarif.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 3 - Annulations et modifications
            </h2>
            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">3.1 Annulation par le client</h3>
            <ul>
              <li><strong>Plus de 48 heures avant</strong> : annulation gratuite, remboursement intégral</li>
              <li><strong>Entre 24 et 48 heures avant</strong> : annulation gratuite, possibilité de report</li>
              <li><strong>Moins de 24 heures avant</strong> : 30% du montant pourra être retenu</li>
              <li><strong>Non présentation</strong> : 100% du montant sera dû</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">3.2 Annulation par L&apos;Éther Spa</h3>
            <p>
              En cas d&apos;annulation de notre part (indisponibilité du praticien, cas de force majeure),
              nous vous proposerons un nouveau créneau ou le remboursement intégral de votre réservation.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 4 - Tarifs et paiement
            </h2>
            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">4.1 Tarifs</h3>
            <p>
              Les tarifs indiqués sur notre site sont en euros TTC. Nous nous réservons le droit
              de modifier nos tarifs à tout moment, les prestations étant facturées au tarif en
              vigueur au moment de la réservation.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">4.2 Moyens de paiement</h3>
            <p>Le paiement peut être effectué par :</p>
            <ul>
              <li>Carte bancaire (Visa, Mastercard)</li>
              <li>Espèces</li>
              <li>Bon cadeau L&apos;Éther Spa</li>
              <li>Apple Pay / Google Pay</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">4.3 Moment du paiement</h3>
            <p>
              Sauf mention contraire, le paiement s&apos;effectue sur place à l&apos;issue de la prestation.
              Pour les bons cadeaux, le paiement est dû au moment de la commande.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 5 - Bons cadeaux
            </h2>
            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">5.1 Validité</h3>
            <p>
              Les bons cadeaux sont valables 12 mois à compter de leur date d&apos;achat.
              Passé ce délai, ils ne pourront plus être utilisés ni remboursés.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">5.2 Utilisation</h3>
            <p>
              Les bons cadeaux sont utilisables pour tout soin proposé par L&apos;Éther Spa.
              Si le montant du soin est inférieur à la valeur du bon, la différence ne sera
              ni remboursée ni créditée. Si le montant est supérieur, le complément sera
              à régler sur place.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">5.3 Non-remboursement</h3>
            <p>
              Les bons cadeaux ne sont ni repris, ni échangés, ni remboursés, y compris
              en cas de perte ou de vol.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 6 - Déroulement des soins
            </h2>
            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">6.1 Contre-indications</h3>
            <p>
              Certains soins peuvent être contre-indiqués dans certaines situations
              (grossesse, problèmes cardiaques, inflammations, fièvre, etc.). Il appartient
              au client de nous informer de tout état de santé particulier avant le soin.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">6.2 Hygiène et respect</h3>
            <p>
              Par respect pour nos praticiens et les autres clients, nous vous demandons
              de vous présenter dans un état d&apos;hygiène correct. Le port de sous-vêtements
              ou d&apos;un slip jetable fourni par nos soins est obligatoire.
            </p>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">6.3 Cadre professionnel</h3>
            <p>
              Nos soins s&apos;inscrivent exclusivement dans un cadre de bien-être et de relaxation.
              Tout comportement inapproprié entraînera l&apos;interruption immédiate du soin sans
              remboursement et l&apos;interdiction d&apos;accès à l&apos;établissement.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 7 - Responsabilité
            </h2>
            <p>
              L&apos;Éther Spa décline toute responsabilité en cas de vol ou de perte d&apos;objets
              personnels dans l&apos;établissement. Des casiers sont mis à votre disposition
              pour y déposer vos effets personnels.
            </p>
            <p>
              Nos soins ne se substituent en aucun cas à un traitement médical ou paramédical.
              En cas de doute, consultez votre médecin avant de réserver.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 8 - Données personnelles
            </h2>
            <p>
              Le traitement de vos données personnelles est régi par notre{" "}
              <a href="/confidentialite" className="text-primary hover:underline">
                Politique de Confidentialité
              </a>.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 9 - Réclamations
            </h2>
            <p>
              Toute réclamation doit être adressée par écrit à {spaInfo.email} dans un délai
              de 15 jours suivant la prestation. Nous nous engageons à vous répondre dans
              les meilleurs délais.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Article 10 - Droit applicable
            </h2>
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige relatif à leur
              interprétation ou exécution relève de la compétence exclusive des tribunaux
              de Paris.
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
