import type { Metadata } from 'next';
import Link from 'next/link';
import { StarIcon } from '@phosphor-icons/react/dist/ssr';
import { metadata as siteMetadata } from '../../../content/metadata';
import { testimonialsPage } from '../../../content/testimonials';
import { getBreadcrumbSchema, getReviewSchemas } from '@/lib/schema';
import { InnerPageHero, CTAFinalSection } from '@/components/sections';
import { Section, SectionHeader, Card, YouTubeEmbed, buttonVariants } from '@/components/ui';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: siteMetadata.testimonials.title,
  description: siteMetadata.testimonials.description,
  keywords: siteMetadata.testimonials.keywords,
  alternates: {
    canonical: 'https://clemencereznicek.com/temoignages',
  },
  openGraph: {
    title: siteMetadata.testimonials.title,
    description: siteMetadata.testimonials.description,
    images: [{ url: siteMetadata.testimonials.ogImage ?? '/images/establishment/DSC02924.jpg' }],
  },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} étoiles sur 5`}>
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

const temBC = JSON.stringify(
  getBreadcrumbSchema([{ name: 'Temoignages', url: 'https://clemencereznicek.com/temoignages' }])
);
const reviewSchemas = JSON.stringify(getReviewSchemas());

export default function TemoignagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: temBC }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: reviewSchemas }} />

      {/* Hero */}
      <InnerPageHero
        title={testimonialsPage.heroTitle}
        subtitle={testimonialsPage.heroSubtitle}
      />

      {/* Google reviews badge */}
      <Section background="warmWhite">
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <div className="flex items-center gap-1" role="img" aria-label="5 étoiles sur 5">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} size={24} weight="fill" className="text-secondary-400" aria-hidden="true" />
              ))}
            </div>
            <p className="font-heading text-xl font-semibold text-neutral-800">
              59 avis · Note de 5/5
            </p>
            <p className="font-body text-sm text-neutral-600">sur Google</p>
            <Link
              href={testimonialsPage.googleReviewsCTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
            >
              {testimonialsPage.googleReviewsCTA.label}
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
                  <span className="font-body text-xs text-neutral-600">
                    {testimonial.service}
                  </span>
                )}
                {testimonial.date && (
                  <time
                    dateTime={testimonial.date}
                    className="font-body text-xs text-neutral-600"
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

        {/* Link to all Google reviews */}
        <div className="mt-10 text-center">
          <Link
            href={testimonialsPage.googleReviewsCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'secondary', size: 'md' }))}
          >
            Voir tous les avis sur Google
          </Link>
        </div>
      </Section>

      {/* Laisser un témoignage */}
      <Section background="warmWhite">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-neutral-800 mb-4">
            Vous avez vécu une séance avec moi ?
          </h2>
          <p className="font-body text-base text-neutral-600 mb-8">
            Votre témoignage peut aider d&apos;autres personnes à franchir le pas. Partagez votre expérience en quelques mots sur Google.
          </p>
          <a
            href={testimonialsPage.googleReviewsCTA.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
          >
            Laisser un avis sur Google
          </a>
        </div>
      </Section>

      {/* YouTube video previews */}
      {testimonialsPage.youtubeSection && (
        <Section background="cream">
          <SectionHeader
            title={testimonialsPage.youtubeSection.title}
            subtitle={testimonialsPage.youtubeSection.subtitle}
            decorative
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsPage.youtubeSection.videos.map((video) => (
              <div key={video.videoId}>
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
                <p className="font-heading text-base font-semibold text-neutral-800 mt-3 px-1">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
          {testimonialsPage.youtubeCTA && (
            <div className="mt-10 text-center">
              <a
                href={testimonialsPage.youtubeCTA.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }))}
              >
                {testimonialsPage.youtubeCTA.label}
              </a>
            </div>
          )}
        </Section>
      )}

      <CTAFinalSection />
    </>
  );
}
