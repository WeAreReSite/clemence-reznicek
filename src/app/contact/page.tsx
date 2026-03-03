import type { Metadata } from 'next';
import { PhoneIcon, EnvelopeSimpleIcon, MapPinIcon, ClockIcon } from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { contactPage } from '../../../content/contact';
import { InnerPageHero, ContactForm } from '@/components/sections';
import { Section, SectionHeader } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.contact.title,
  description: siteMetadata.contact.description,
  keywords: siteMetadata.contact.keywords,
  openGraph: {
    title: siteMetadata.contact.title,
    description: siteMetadata.contact.description,
    images: [{ url: siteMetadata.contact.ogImage ?? '/images/establishment/DSC02779.jpg' }],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <InnerPageHero
        title={contactPage.heroTitle}
        subtitle={contactPage.heroSubtitle}
      />

      {/* Intro text */}
      <Section background="warmWhite">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-body text-base text-neutral-600 leading-relaxed">
            {contactPage.introText}
          </p>
        </div>
      </Section>

      {/* 2-column layout: form + contact info */}
      <Section background="cream" id="rendez-vous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Form */}
          <div>
            <SectionHeader
              title="Envoie-moi un message"
              subtitle="Je te recontacte personnellement dans les 24h."
              align="left"
              decorative
            />
            <ContactForm />
          </div>

          {/* Right: Contact info + map */}
          <div>
            <SectionHeader
              title="Infos pratiques"
              align="left"
              decorative
            />

            <div className="flex flex-col gap-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 shrink-0" aria-hidden="true">
                  <PhoneIcon size={20} weight="light" className="text-indigo-500" />
                </span>
                <div>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-wide mb-1">Téléphone</p>
                  <a
                    href={contactPage.phone.link}
                    className="font-heading text-lg font-semibold text-neutral-800 hover:text-indigo-500 transition-colors"
                  >
                    {contactPage.phone.display}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 shrink-0" aria-hidden="true">
                  <EnvelopeSimpleIcon size={20} weight="light" className="text-indigo-500" />
                </span>
                <div>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-wide mb-1">Email</p>
                  <a
                    href={`mailto:${contactPage.email}`}
                    className="font-body text-base text-neutral-800 hover:text-indigo-500 transition-colors break-all"
                  >
                    {contactPage.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 shrink-0" aria-hidden="true">
                  <MapPinIcon size={20} weight="light" className="text-indigo-500" />
                </span>
                <div>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-wide mb-1">Adresse</p>
                  <p className="font-body text-base text-neutral-800">{contactPage.address}</p>
                </div>
              </div>

              {/* Opening hours */}
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 shrink-0" aria-hidden="true">
                  <ClockIcon size={20} weight="light" className="text-indigo-500" />
                </span>
                <div>
                  <p className="font-body text-xs text-neutral-500 uppercase tracking-wide mb-2">Horaires</p>
                  <ul className="flex flex-col gap-1">
                    {contactPage.openingHours.map((slot) => (
                      <li key={slot.days} className="flex justify-between gap-6 font-body text-sm text-neutral-700">
                        <span>{slot.days}</span>
                        <span className="font-medium">{slot.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-neutral-200 aspect-[4/3]">
              <iframe
                src={contactPage.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du cabinet de Clémence Reznicek a Jonzac"
                aria-label="Carte Google Maps — Cabinet de Clémence Reznicek, 5 avenue Chanzy, Jonzac"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
