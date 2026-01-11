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
              Cookies et données personnelles
            </h2>
            <p>
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus d'informations sur l'utilisation
              des cookies et le traitement des données personnelles, veuillez consulter notre{" "}
              <a href="/confidentialite" className="text-primary hover:underline">
                Politique de Confidentialité
              </a>.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Disponibilité et maintenance du site
            </h2>
            <p>
              Nous nous efforçons de maintenir l'accessibilité du site 24h/24 et 7j/7. Cependant, nous ne pouvons garantir une disponibilité absolue et nous nous réservons le droit d'interrompre l'accès temporairement pour maintenance, mise à jour ou toute autre raison technique.
            </p>
            <p>
              WeAreReSite et Sylvie Lebordais EI ne sauraient être tenus responsables des dommages de quelque nature que ce soit résultant de l'indisponibilité temporaire du site.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Liens externes
            </h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu, des politiques de confidentialité ou des pratiques de ces sites tiers. L'accès aux liens externes se fait aux risques et périls de l'utilisateur.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Conditions d'utilisation
            </h2>
            <p>
              L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions peuvent être modifiées à tout moment sans préavis.
            </p>
            <p>
              Il est interdit de :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Utiliser le site à des fins illégales ou non autorisées</li>
              <li>Tenter d'accéder à des zones protégées du site</li>
              <li>Propager des virus ou autres codes malveillants</li>
              <li>Collecter des données personnelles sans autorisation</li>
              <li>Reproduire, distribuer ou modifier le contenu sans autorisation expresse</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Limitation de garantie et de responsabilité
            </h2>
            <p>
              Les informations diffusées sur ce site sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, WeAreReSite et Sylvie Lebordais EI ne peuvent garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
            </p>
            <p>
              En conséquence, WeAreReSite et Sylvie Lebordais EI déclinent toute responsabilité pour :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Les erreurs ou omissions dans le contenu du site</li>
              <li>Les dommages directs ou indirects résultant de l'utilisation du site</li>
              <li>Les dysfonctionnements techniques ou les interruptions de service</li>
              <li>Les dommages causés par des virus ou autres éléments nuisibles</li>
              <li>L'utilisation des informations à des fins commerciales ou professionnelles</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Force majeure
            </h2>
            <p>
              WeAreReSite et Sylvie Lebordais EI ne sauraient être tenus responsables de tout retard ou inexécution consécutifs à la survenance d'un cas de force majeure habituellement reconnu par la jurisprudence française.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Modification des mentions légales
            </h2>
            <p>
              WeAreReSite et Sylvie Lebordais EI se réservent le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation du site sera de la compétence exclusive des tribunaux français, et plus particulièrement du tribunal de Rennes.
            </p>
            <p>
              En cas de différend, une solution amiable sera recherchée avant toute action judiciaire. À défaut d'accord amiable, le litige sera porté devant les tribunaux compétents.
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