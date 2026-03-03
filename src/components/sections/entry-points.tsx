import Image from 'next/image';
import Link from 'next/link';
import { entryPoints } from '../../../content/homepage';
import {
  Section,
  SectionHeader,
  ScrollReveal,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Button,
} from '@/components/ui';

const borderColors: Record<string, string> = {
  massages: 'border-t-primary-400',
  'soins-energetiques': 'border-t-plum-400',
  'premiere-seance': 'border-t-indigo-400',
};

export function EntryPointsSection() {
  return (
    <Section background="warmWhite">
      <SectionHeader
        title={entryPoints.sectionTitle}
        subtitle={entryPoints.sectionSubtitle}
        decorative
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {entryPoints.cards.map((card, index) => (
          <ScrollReveal key={card.slug} delay={index * 100} className="h-full">
            <Card
              className={`border-t-4 ${borderColors[card.slug] ?? 'border-t-primary-400'} overflow-hidden !p-0 flex flex-col h-full`}
            >
            {/* Card image */}
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                className="object-cover object-[center_30%] w-full h-full"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold">
                  {card.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="flex items-center gap-3 text-sm text-neutral-500">
                  <span className="font-medium text-neutral-700">{card.price}</span>
                  <span aria-hidden="true">·</span>
                  <span>{card.duration}</span>
                </div>
              </CardContent>

              <CardFooter className="mt-auto">
                <Link href={card.cta.href} className="w-full">
                  <Button variant="secondary" size="sm" fullWidth>
                    {card.cta.label}
                  </Button>
                </Link>
              </CardFooter>
            </div>
          </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
