import { Metadata } from "next"
import { spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales de ${spaInfo.name} à ${spaInfo.address.city} - Informations juridiques et éditeur du site.`,
  alternates: {
    canonical: getCanonicalUrl('/mentions-legales'),
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
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site les informations relatives à l&apos;éditeur et aux intervenants dans le cadre de sa réalisation et de son suivi.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Éditeur et propriétaire du site
            </h2>
            <p>
              Le présent site web, accessible à l&apos;URL www.sylviebienetre.fr (le « Site »), est édité et détenu par :
            </p>
            <p>
              <strong>WeAreReSite</strong><br />
              Société de développement web et digital<br />
              Site web : <a href="https://www.weareresite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.weareresite.com</a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Client représenté
            </h2>
            <p>
              Le contenu et les services présentés sur ce site représentent l&apos;activité de :
            </p>
            <p>
              <strong>Sylvie Lebordais</strong><br />
              Praticienne en réflexologie et bien-être<br />
              Adresse professionnelle : 1B rue du Général de Gaulle, 35550 Pipriac<br />
              Téléphone : <a href="tel:+33613648705" className="text-primary hover:underline">+33613648705</a><br />
              Email : <a href="mailto:sylviebienetre35@gmail.com" className="text-primary hover:underline">sylviebienetre35@gmail.com</a>
            </p>
            <p>
              <strong>SIRET :</strong> 94176866500015
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Hébergement
            </h2>
            <p>
              Le Site est hébergé par <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://vercel.com</a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Directeur de publication
            </h2>
            <p>
              Le directeur de la publication du Site est <strong>WeAreReSite</strong>, en qualité d&apos;éditeur et propriétaire du site web.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Responsabilité du contenu
            </h2>
            <p>
              <strong>WeAreReSite</strong> est responsable de la gestion technique, de l&apos;hébergement et de la maintenance du site web.
            </p>
            <p>
              <strong>Sylvie Lebordais</strong> est responsable de la véracité et de la conformité légale des informations relatives à son activité professionnelle présentées sur le site.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;architecture, la structure et le design du site sont la propriété de <strong>WeAreReSite</strong>.
            </p>
            <p>
              Le contenu textuel, les photographies et les informations relatives aux services de bien-être sont la propriété de <strong>Sylvie Lebordais</strong> ou utilisés avec son autorisation.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Données personnelles et cookies
            </h2>
            <p>
              Ce site web ne collecte aucune donnée personnelle. Nous n&apos;utilisons aucun cookie de tracking, d&apos;analyse ou publicitaire.
            </p>
            <p>
              Les seuls cookies utilisés sont des cookies techniques essentiels au bon fonctionnement du site (sécurité, navigation de base).
            </p>
            <p>
              Pour la prise de rendez-vous, nous utilisons Calendly, un service tiers qui dispose de sa propre politique de confidentialité consultable sur leur site web.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Limitation de responsabilité
            </h2>
            <p>
              <strong>WeAreReSite</strong> met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés, mais ne saurait être tenu responsable des erreurs, d&apos;une absence de disponibilité des informations et/ou de la présence de virus sur son site.
            </p>
            <p>
              <strong>Sylvie Lebordais</strong> est seule responsable des informations relatives à ses qualifications, ses services et les conseils prodigués dans le cadre de son activité professionnelle.
            </p>
            <p>
              En conséquence, <strong>WeAreReSite</strong> et <strong>Sylvie Lebordais</strong> déclinent toute responsabilité pour :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Les erreurs ou omissions dans le contenu du site</li>
              <li>Les dommages directs ou indirects résultant de l&apos;utilisation du site</li>
              <li>Les dysfonctionnements techniques ou les interruptions de service</li>
              <li>Les dommages causés par des virus ou autres éléments nuisibles</li>
              <li>L&apos;utilisation des informations à des fins commerciales ou professionnelles</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Conditions d&apos;utilisation
            </h2>
            <p>
              L&apos;utilisation de ce site implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation. Ces conditions peuvent être modifiées à tout moment sans préavis par <strong>WeAreReSite</strong>.
            </p>
            <p>
              Il est strictement interdit de :
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>Utiliser le site à des fins illégales ou non autorisées</li>
              <li>Tenter d&apos;accéder à des zones protégées du site</li>
              <li>Propager des virus ou autres codes malveillants</li>
              <li>Collecter des données personnelles sans autorisation</li>
              <li>Reproduire, distribuer ou modifier le contenu sans autorisation expresse</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Liens externes
            </h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. <strong>WeAreReSite</strong> et <strong>Sylvie Lebordais</strong> ne sont pas responsables du contenu, des politiques de confidentialité ou des pratiques de ces sites tiers.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Force majeure
            </h2>
            <p>
              <strong>WeAreReSite</strong> ne saurait être tenu responsable de tout retard ou inexécution consécutifs à la survenance d&apos;un cas de force majeure habituellement reconnu par la jurisprudence française.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Modification des mentions légales
            </h2>
            <p>
              <strong>WeAreReSite</strong> se réserve le droit de modifier les présentes mentions légales à tout moment. Les utilisateurs sont invités à les consulter régulièrement.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l&apos;utilisation du site sera de la compétence exclusive des tribunaux français.
            </p>
            <p>
              En cas de différend, une solution amiable sera recherchée avant toute action judiciaire. À défaut d&apos;accord amiable, le litige sera porté devant les tribunaux compétents.
            </p>

            <p className="mt-8 text-sm text-center border-t pt-6">
              <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}