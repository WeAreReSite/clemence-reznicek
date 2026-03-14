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
  return (
    <div>
      {/* Header with badge */}
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <CertificateIcon size={18} weight="light" className="text-secondary-500" />
          <span className="font-body text-xs font-medium text-secondary-800 tracking-[var(--tracking-all-caps)] uppercase">
            {certifications.length} formations certifiantes
          </span>
        </div>
        <SectionHeader title={title} decorative className="!mb-0" />
      </div>

      {/* Vertical timeline */}
      <div className="max-w-2xl mx-auto relative">
        {/* Vertical line */}
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-secondary-200 via-secondary-300 to-secondary-100"
          aria-hidden="true"
        />

        <ol className="flex flex-col gap-0">
          {certifications.map((cert, index) => (
            <li key={cert.name} className="relative flex items-start gap-5 pl-8 pb-7 last:pb-0">
              {/* Dot */}
              <span
                className="absolute left-0 top-1 w-[23px] h-[23px] rounded-full border-2 border-secondary-300 bg-bg-cream flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="w-2 h-2 rounded-full bg-secondary-400" />
              </span>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <p className="font-heading text-base font-semibold text-neutral-800 leading-snug">
                  {cert.name}
                </p>
                {cert.description && (
                  <p className="font-body text-sm text-neutral-600 mt-0.5">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Index number — subtle */}
              <span
                className="font-body text-xs text-neutral-600 tabular-nums mt-1 shrink-0"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
