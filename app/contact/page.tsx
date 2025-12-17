import { Metadata } from "next"
import Link from "next/link"
import { spaInfo, faqs } from "@/lib/data"
import { ContactForm } from "@/components/forms/ContactForm"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Car, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez L'Éther Spa à Paris. Adresse, téléphone, horaires d'ouverture et formulaire de contact. Nous sommes à votre écoute.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Contact
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Nous sommes à votre écoute
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Une question, une demande particulière ou simplement envie de nous dire bonjour ?
              N&apos;hésitez pas à nous contacter, nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-background">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-10">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      {spaInfo.address.street}<br />
                      {spaInfo.address.postalCode} {spaInfo.address.city}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${spaInfo.address.street}, ${spaInfo.address.postalCode} ${spaInfo.address.city}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary text-sm mt-2 hover:underline"
                    >
                      Voir sur Google Maps
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Téléphone</h3>
                    <a
                      href={`tel:${spaInfo.phone}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {spaInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href={`mailto:${spaInfo.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {spaInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Horaires</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Lundi - Vendredi : {spaInfo.hours.weekdays}</p>
                      <p>Samedi : {spaInfo.hours.saturday}</p>
                      <p>Dimanche : {spaInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Parking</h3>
                    <p className="text-muted-foreground text-sm">
                      Parking privé gratuit disponible pour nos clients.
                      Places de stationnement également dans les rues adjacentes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342097!2d2.3289!3d48.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzExLjMiTiAywrAxOSc0NC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation L'Éther Spa"
                  className="absolute inset-0"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-8">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-spa">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-accent font-medium tracking-widest uppercase text-sm mb-4">
                FAQ
              </span>
              <h2 className="font-serif text-4xl text-foreground mb-4">
                Questions fréquentes
              </h2>
              <p className="text-muted-foreground">
                Retrouvez les réponses aux questions les plus courantes.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Vous n&apos;avez pas trouvé la réponse à votre question ?
              </p>
              <Button variant="outline" asChild>
                <a href={`mailto:${spaInfo.email}`}>
                  Contactez-nous
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-spa text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Prêt(e) à vivre l&apos;expérience ?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Réservez votre moment de bien-être et laissez-nous prendre soin de vous.
          </p>
          <Button size="lg" variant="accent" className="w-full sm:w-auto" asChild>
            <Link href="/reserver">
              Réserver maintenant
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
