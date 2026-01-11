import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales de Syl'Vie Bien-Etre à Pipriac - Informations juridiques et éditeur du site.",
  alternates: {
    canonical: "https://www.sylviebienetre.fr/mentions-legales",
  },
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
            <p className="text-lg">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Sylvie Lebordais EI l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Edition du site
            </h2>
            <p>
              Le présent site, accessible à l'URL www.sylviebienetre.fr (le « Site »), est édité par :
            </p>
            <p>
              <strong>Sylvie Lebordais EI</strong>, résidant 2 rue Saint Barthélémy 35550 Pipriac de nationalité Française (France), né(e) le 08/02/1983
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Hébergement
            </h2>
            <p>
              Le Site est hébergé par la société <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Conception et développement du site
            </h2>
            <p>
              Le site web a été conçu et développé par <strong>WeAreReSite</strong> pour le compte de Sylvie Lebordais EI.<br />
              WeAreReSite<br />
              Site web : <a href="https://www.weareresite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.weareresite.com</a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Directeur de publication
            </h2>
            <p>
              Le Directeur de la publication du Site est <strong>Sylvie Lebordais EI</strong>.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Nous contacter
            </h2>
            <p>
              Par téléphone : <a href="tel:+33613648705" className="text-primary hover:underline">+33613648705</a><br />
              Par email : <a href="mailto:sylviebienetre35@gmail.com" className="text-primary hover:underline">sylviebienetre35@gmail.com</a><br />
              Par courrier : 1B rue du Général de Gaulle 35550 Pipriac
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Numéro d'identification de l'entreprise
            </h2>
            <p>
              <strong>SIRET :</strong> 94176866500015
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              N° de TVA
            </h2>
            <p>
              TVA non applicable, article 293B du CGI.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale
              sur le droit d'auteur et la propriété intellectuelle. Tous les droits de
              reproduction sont réservés, y compris pour les documents téléchargeables et
              les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur quelque support que ce soit
              est formellement interdite sauf autorisation expresse du directeur de la publication.
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
              Syl'Vie Bien-Etre ne pourra être tenu responsable des dommages directs et
              indirects causés au matériel de l'utilisateur, lors de l'accès au site.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Droit applicable
            </h2>
            <p>
              Tout litige en relation avec l'utilisation du site est soumis au droit
              français. L'utilisateur reconnaît la compétence exclusive des tribunaux
              français.
            </p>

            <p className="mt-8 text-sm text-center border-t pt-6">
              <em>Génération des mentions légales par Legalstart.</em><br />
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}