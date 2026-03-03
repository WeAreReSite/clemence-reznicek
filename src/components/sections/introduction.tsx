import Image from 'next/image';
import Link from 'next/link';
import { introduction } from '../../../content/homepage';
import { Section, SectionHeader, ScrollReveal, Button } from '@/components/ui';

export function IntroductionSection() {
  return (
    <Section background="cream">
      <SectionHeader
        title={introduction.sectionTitle}
        decorative
        align="left"
        className="lg:hidden"
      />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image — 40% on desktop */}
        <ScrollReveal className="w-full lg:w-[40%] shrink-0">
          <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-2)]">
            <Image
              src={introduction.image.src}
              alt={introduction.image.alt}
              width={introduction.image.width}
              height={introduction.image.height}
              className="object-cover object-top w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </ScrollReveal>

        {/* Text — 60% on desktop */}
        <ScrollReveal delay={150} className="w-full lg:w-[60%]">
          <SectionHeader
            title={introduction.sectionTitle}
            decorative
            align="left"
            className="hidden lg:block"
          />

          <h3 className="font-heading text-xl font-semibold text-indigo-500 mb-6">
            {introduction.headline}
          </h3>

          {introduction.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-base text-neutral-700 leading-relaxed mb-4 last:mb-6"
            >
              {paragraph}
            </p>
          ))}

          {/* Signature */}
          <p className="font-heading text-lg italic text-primary-600 mb-6">
            {introduction.signature}
          </p>

          {/* CTA */}
          <Link href={introduction.cta.href}>
            <Button variant="secondary" size="md">
              {introduction.cta.label}
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </Section>
  );
}
