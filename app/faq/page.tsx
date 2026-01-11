import { Metadata } from "next"
import Link from "next/link"
import { faqs, spaInfo } from "@/lib/data"
import { JsonLd } from "@/components/JsonLd"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur Syl'Vie Bien-Etre à Pipriac : réservation, déroulement des soins de réflexologie, drainage lymphatique, qualifications de Sylvie Lebordais.",
  alternates: {
    canonical: "https://www.sylviebienetre.fr/faq",
  },
}

export default function FAQPage() {
  // FAQPage Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              FAQ
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Questions fréquentes
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Retrouvez les réponses aux questions les plus courantes sur nos soins,
              nos pratiques et notre fonctionnement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">
              Vous n&apos;avez pas trouvé votre réponse ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions.
              N&apos;hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href={`tel:${spaInfo.phone}`}>
                  Appeler : {spaInfo.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
