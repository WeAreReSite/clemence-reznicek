import type { Metadata } from 'next';
import Link from 'next/link';
import { StarIcon } from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { testimonialsPage } from '../../../content/testimonials';
import { InnerPageHero } from '@/components/sections';
import { Section, SectionHeader, Button, Card } from '@/components/ui';

export const metadata: Metadata = {
  title: siteMetadata.testimonials.title,
  description: siteMetadata.testimonials.description,
  keywords: siteMetadata.testimonials.keywords,
  openGraph: {
    title: siteMetadata.testimonials.title,
    description: siteMetadata.testimonials.description,
    images: [{ url: siteMetadata.testimonials.ogImage ?? '/images/establishment/DSC02924.jpg' }],
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          size={16}
          weight={i < rating ? 'fill' : 'regular'}
          className={i < rating ? 'text-secondary-400' : 'text-neutral-300'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function TemoignagesPage() {
  return (
    <>
      {/* Hero */}
      <InnerPageHero
        title={testimonialsPage.heroTitle}
        subtitle={testimonialsPage.heroSubtitle}
      />

      {/* Google reviews badge */}
      <Section background="warmWhite">
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <div className="flex items-center gap-1" aria-label="5 étoiles sur 5">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} size={24} weight="fill" className="text-secondary-400" aria-hidden="true" />
              ))}
            </div>
            <p className="font-heading text-xl font-semibold text-neutral-800">
              59 avis · Note de 5/5
            </p>
            <p className="font-body text-sm text-neutral-500">sur Google</p>
            <Link
              href={testimonialsPage.googleReviewsCTA.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="sm">
                {testimonialsPage.googleReviewsCTA.label}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials grid */}
      <Section background="cream">
        <SectionHeader
          title="Leurs mots"
          subtitle="Des transformations douces, profondes et durables"
          decorative
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsPage.testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <StarRating rating={testimonial.rating} />

              <blockquote className="font-body text-sm text-neutral-600 leading-relaxed italic mt-4 mb-4 flex-1">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <footer className="flex flex-col gap-1 pt-4 border-t border-neutral-200">
                <cite className="font-heading text-base font-semibold text-neutral-800 not-italic">
                  {testimonial.name}
                </cite>
                {testimonial.service && (
                  <span className="font-body text-xs text-neutral-500">
                    {testimonial.service}
                  </span>
                )}
                {testimonial.date && (
                  <time
                    dateTime={testimonial.date}
                    className="font-body text-xs text-neutral-400"
                  >
                    {new Date(testimonial.date + '-01').toLocaleDateString('fr-FR', {
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                )}
              </footer>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="indigoDeep">
        <div className="text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-50 mb-4">
            Prête à vivre ta propre expérience ?
          </h2>
          <p className="font-body text-base text-neutral-200 mb-8 max-w-lg mx-auto">
            Rejoins les personnes qui ont choisi de se faire accompagner. Ta transformation commence ici.
          </p>
          <Link href={testimonialsPage.contactCTA.href}>
            <Button variant="warm" size="lg">
              {testimonialsPage.contactCTA.label}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
