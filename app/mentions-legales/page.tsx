import { Metadata } from "next"
import { spaInfo } from "@/lib/data"
import { getCanonicalUrl } from "@/lib/utils"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales de ${spaInfo.name} à ${spaInfo.address.city} - Informations juridiques et éditeur du site.`,
  alternates: {
    canonical: getCanonicalUrl('/mentions-legales'),
  },
  openGraph: {
    title: `Mentions Légales | ${spaInfo.name}`,
    description: `Mentions légales et informations juridiques de ${spaInfo.name} à ${spaInfo.address.city}.`,
    url: getCanonicalUrl('/mentions-legales'),
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  const breadcrumbs = [
    { name: "Accueil", href: "/" },
    { name: "Mentions Légales", href: "/mentions-legales" }
  ]

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Mentions Légales - ${spaInfo.name}`,
    description: `Mentions légales de ${spaInfo.name} - Informations juridiques et éditeur du site.`,
    url: getCanonicalUrl('/mentions-legales'),
    isPartOf: {
      "@id": getCanonicalUrl('/#website')
    },
    inLanguage: "fr-FR"
  }

  return (
    <>
      <JsonLd data={webPageSchema} />
      <div className="container-spa pt-24 pb-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
    <div className="pb-20">
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
              <strong>Clémence Reznicek ({spaInfo.name})</strong><br />
              Forme juridique : Micro-entreprise<br />
              Dirigeant : Clémence Reznicek<br />
              {spaInfo.address.street}, {spaInfo.address.postalCode} {spaInfo.address.city}<br />
              Tél : <a href={`tel:${spaInfo.phone}`} className="text-primary hover:underline">06 32 18 52 59</a><br />
              Email : <a href={`mailto:${spaInfo.email}`} className="text-primary hover:underline">{spaInfo.email}</a><br />
              SIRET : 538 397 142 00056<br />
              Code APE : 86.90F
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Propriété du site
            </h2>
            <p>
              Ce site web est la propriété exclusive de l&apos;agence ReSite.
            </p>
            <p>
              Il est mis à disposition de {spaInfo.name} dans le cadre d&apos;un contrat de licence d&apos;utilisation.
            </p>
            <p>
              <strong>Agence ReSite</strong><br />
              <a href="https://www.weareresite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.weareresite.com</a>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Hébergement
            </h2>
            <p>
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (structure, design, textes, images, logos) est la propriété exclusive de l&apos;agence ReSite ou de ses ayants droit.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l&apos;accord exprès par écrit de ReSite.
            </p>
            <p>
              Les marques, logos et signes distinctifs affichés sur le site sont des marques déposées. Leur reproduction totale ou partielle est interdite sans autorisation écrite du propriétaire.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Licence d&apos;utilisation
            </h2>
            <p>
              {spaInfo.name} bénéficie d&apos;une licence d&apos;utilisation non exclusive et non transférable pour l&apos;exploitation de ce site web dans le cadre de son activité commerciale.
            </p>
            <p>
              Cette licence est accordée pour la durée du contrat de services entre ReSite et {spaInfo.name}.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Responsabilité
            </h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif. L&apos;éditeur ne saurait être tenu responsable de l&apos;utilisation faite de ces informations et de tout préjudice direct ou indirect pouvant en découler.
            </p>
            <p>
              L&apos;éditeur s&apos;efforce de maintenir l&apos;accessibilité du site mais n&apos;est tenu à aucune obligation d&apos;y parvenir.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">
              Crédits
            </h2>
            <p>
              Conception et développement : <a href="https://www.weareresite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ReSite</a><br />
              Design et intégration : <a href="https://www.weareresite.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ReSite</a>
            </p>

            <p className="mt-8 text-sm text-center border-t pt-6">
              ©2026 ReSite - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}