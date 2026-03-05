'use client';

import { useState } from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@phosphor-icons/react';
import { practicalInfo } from '../../../content/homepage';
import { Section, SectionHeader, ScrollReveal } from '@/components/ui';

function MapFacade() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  if (isMapLoaded) {
    return (
      <iframe
        src={practicalInfo.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title={`Carte — ${practicalInfo.address.full}`}
        className="rounded-lg"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsMapLoaded(true)}
      className="w-full h-full flex flex-col items-center justify-center gap-4 cursor-pointer rounded-lg transition-colors duration-200 hover:bg-primary-100/60"
      style={{
        minHeight: '400px',
        backgroundColor: 'oklch(0.955 0.012 75.4)',
        border: '1px solid oklch(0.900 0.020 75.4)',
      }}
      aria-label={`Charger la carte — ${practicalInfo.address.full}`}
    >
      <span
        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10"
        aria-hidden="true"
      >
        <MapPinIcon size={32} weight="light" className="text-indigo-500" />
      </span>
      <span className="font-heading text-base font-semibold text-indigo-500">
        Voir sur Google Maps
      </span>
      <span className="font-body text-xs text-neutral-500">
        {practicalInfo.address.full}
      </span>
    </button>
  );
}

export function PracticalInfoSection() {
  return (
    <Section background="roseTint" geometricAccent>
      <SectionHeader
        title={practicalInfo.sectionTitle}
        decorative
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Info column (left) */}
        <ScrollReveal className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600">
              <MapPinIcon size={20} weight="light" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-1">
                Adresse
              </h3>
              <address className="font-body text-sm text-neutral-600 not-italic leading-relaxed">
                {practicalInfo.address.street}<br />
                {practicalInfo.address.postalCode} {practicalInfo.address.city}<br />
                {practicalInfo.address.region}
              </address>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600">
              <PhoneIcon size={20} weight="light" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-1">
                Telephone
              </h3>
              <a
                href={practicalInfo.phone.link}
                className="font-body text-sm text-indigo-500 hover:text-indigo-600 transition-colors underline underline-offset-2"
              >
                {practicalInfo.phone.display}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600">
              <EnvelopeIcon size={20} weight="light" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-1">
                Email
              </h3>
              <a
                href={`mailto:${practicalInfo.email}`}
                className="font-body text-sm text-indigo-500 hover:text-indigo-600 transition-colors underline underline-offset-2"
              >
                {practicalInfo.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4">
            <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600">
              <ClockIcon size={20} weight="light" />
            </span>
            <div>
              <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-1">
                Horaires
              </h3>
              <ul className="font-body text-sm text-neutral-600 space-y-1">
                {practicalInfo.openingHours.map((slot) => (
                  <li key={slot.days} className="flex justify-between gap-4">
                    <span className="font-medium">{slot.days}</span>
                    <span>{slot.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Access details */}
          <div className="pt-4 border-t border-primary-200/40">
            <h3 className="font-heading text-lg font-semibold text-indigo-500 mb-3">
              Acces
            </h3>
            <ul className="font-body text-sm text-neutral-600 space-y-2">
              {practicalInfo.accessDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary-400" aria-hidden="true" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Map column (right) */}
        <ScrollReveal delay={150} className="relative overflow-hidden rounded-lg shadow-[var(--shadow-2)]">
          <MapFacade />
        </ScrollReveal>
      </div>
    </Section>
  );
}
