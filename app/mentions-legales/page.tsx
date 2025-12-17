import { Metadata } from "next"
import { spaInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de L'Éther Spa - Informations juridiques et éditeur du site.",
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-spa">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Mentions Légales
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Éditeur du site
            </h2>
            <p>
              <strong>L&apos;Éther Spa</strong><br />
              {spaInfo.address.street}<br />
              {spaInfo.address.postalCode} {spaInfo.address.city}<br />
              {spaInfo.address.country}
            </p>
            <p>
              Téléphone : {spaInfo.phone}<br />
              Email : {spaInfo.email}
            </p>
            <p>
              SIRET : 123 456 789 00012<br />
              Numéro TVA intracommunautaire : FR12 123456789
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Directeur de la publication
            </h2>
            <p>
              Le directeur de la publication est M./Mme [Nom du responsable],
              en qualité de gérant(e) de L&apos;Éther Spa.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Hébergement
            </h2>
            <p>
              Ce site est hébergé par :<br />
              Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://vercel.com
              </a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale
              sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de
              reproduction sont réservés, y compris pour les documents téléchargeables et
              les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur quelque support que ce soit
              est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Crédits photographiques
            </h2>
            <p>
              Les photographies utilisées sur ce site sont la propriété de L&apos;Éther Spa
              ou utilisées avec l&apos;autorisation de leurs auteurs respectifs.
              Certaines images proviennent de la banque d&apos;images Unsplash.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Limitation de responsabilité
            </h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et
              le site est périodiquement remis à jour, mais peut toutefois contenir des
              inexactitudes, des omissions ou des lacunes.
            </p>
            <p>
              L&apos;Éther Spa ne pourra être tenu responsable des dommages directs et
              indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Cookies
            </h2>
            <p>
              Ce site utilise des cookies. Pour plus d&apos;informations sur l&apos;utilisation
              des cookies, veuillez consulter notre{" "}
              <a href="/confidentialite" className="text-primary hover:underline">
                Politique de Confidentialité
              </a>.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Droit applicable
            </h2>
            <p>
              Tout litige en relation avec l&apos;utilisation du site est soumis au droit
              français. L&apos;utilisateur reconnaît la compétence exclusive des tribunaux
              français.
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
