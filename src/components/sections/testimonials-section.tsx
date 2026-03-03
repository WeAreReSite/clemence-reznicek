import Link from 'next/link';
import { StarIcon } from '@phosphor-icons/react/dist/ssr';
import { testimonialSection } from '../../../content/testimonials';
import { Section, SectionHeader, ScrollReveal, Card, Button } from '@/components/ui';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          size={16}
          weight={i < rating ? 'fill' : 'regular'}
          className={i < rating ? 'text-secondary-400' : 'text-neutral-400'}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <Section background="indigoDeep">
      <SectionHeader
        title={testimonialSection.sectionTitle}
        subtitle={testimonialSection.sectionSubtitle}
        decorative
        dark
      />

      {/* Google review badge */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="flex items-center gap-0.5" aria-label="5 étoiles sur 5">
          {Array.from({ length: 5 }, (_, i) => (
            <StarIcon key={i} size={20} weight="fill" className="text-secondary-400" />
          ))}
        </div>
        {testimonialSection.googleBadgeLabel && (
          <span className="font-body text-sm text-neutral-200">
            {testimonialSection.googleBadgeLabel}
          </span>
        )}
      </div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {testimonialSection.featured.map((testimonial, index) => (
          <ScrollReveal key={testimonial.id} delay={index * 100} className="h-full">
          <Card
            className="!bg-neutral-50/[0.06] !border-neutral-50/10 backdrop-blur-sm flex flex-col h-full"
          >
            <StarRating rating={testimonial.rating} />

            <blockquote className="font-body text-sm text-neutral-200 leading-relaxed italic mt-4 mb-4 flex-1">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            <footer className="flex flex-col gap-1 mt-auto">
              <cite className="font-heading text-base font-semibold text-neutral-50 not-italic">
                {testimonial.name}
              </cite>
              {testimonial.service && (
                <span className="font-body text-xs text-neutral-300">
                  {testimonial.service}
                </span>
              )}
            </footer>
          </Card>
          </ScrollReveal>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link href={testimonialSection.cta.href}>
          <Button variant="warmOnDark" size="lg">
            {testimonialSection.cta.label}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
