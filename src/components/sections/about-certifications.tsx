'use client';

import { Certificate as CertificateIcon } from '@phosphor-icons/react';
import { SectionHeader } from '@/components/ui';

interface Certification {
  name: string;
  description?: string;
}

interface AboutCertificationsProps {
  title: string;
  certifications: Certification[];
}

export function AboutCertifications({ title, certifications }: AboutCertificationsProps) {
  // Split certs into two rows for opposing marquee directions
  const mid = Math.ceil(certifications.length / 2);
  const row1 = certifications.slice(0, mid);
  const row2 = certifications.slice(mid);

  return (
    <div>
      {/* Header with badge */}
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <CertificateIcon size={18} weight="light" className="text-secondary-500" />
          <span className="font-body text-xs font-medium text-secondary-800 tracking-[var(--tracking-all-caps)] uppercase">
            {certifications.length}+ formations certifiantes
          </span>
        </div>
        <SectionHeader title={title} decorative className="!mb-0" />
      </div>

      {/* Marquee container */}
      <div className="group relative overflow-hidden py-2">
        {/* Gradient fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, oklch(0.980 0.0062 75.4), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, oklch(0.980 0.0062 75.4), transparent)' }}
          aria-hidden="true"
        />

        {/* Row 1 — scrolls left */}
        <div className="mb-3" aria-hidden="true">
          <div className="flex gap-3 animate-marquee-left group-hover:[animation-play-state:paused]">
            {[...row1, ...row1, ...row1].map((cert, i) => (
              <span
                key={`r1-${i}`}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-bg-warm-white border border-neutral-200/80 font-body text-sm text-neutral-700 whitespace-nowrap shadow-[var(--shadow-1)]"
              >
                <CertificateIcon size={16} weight="light" className="text-secondary-500 shrink-0" />
                {cert.name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div aria-hidden="true">
          <div className="flex gap-3 animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...row2, ...row2, ...row2].map((cert, i) => (
              <span
                key={`r2-${i}`}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-bg-warm-white border border-neutral-200/80 font-body text-sm text-neutral-700 whitespace-nowrap shadow-[var(--shadow-1)]"
              >
                <CertificateIcon size={16} weight="light" className="text-secondary-500 shrink-0" />
                {cert.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Screen reader accessible list */}
      <ul className="sr-only">
        {certifications.map((cert) => (
          <li key={cert.name}>
            {cert.name}
            {cert.description ? ` — ${cert.description}` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}
