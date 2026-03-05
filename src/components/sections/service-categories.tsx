'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HandPalmIcon,
  SparkleIcon,
  HeartIcon,
  UsersIcon,
} from '@phosphor-icons/react/dist/ssr';
import { serviceCategories } from '../../../content/homepage';
import { gsap, ScrollTrigger, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import {
  Section,
  SectionHeader,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@/components/ui';

const iconMap = {
  hand: HandPalmIcon,
  sparkles: SparkleIcon,
  heart: HeartIcon,
  users: UsersIcon,
} as const;

export function ServiceCategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const images = el.querySelectorAll<HTMLElement>('[data-clip-reveal]');
    const cards = el.querySelectorAll<HTMLElement>('[data-card]');
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    const ctx = gsap.context(() => {
      // Staggered top-down reveal on images
      images.forEach((img, i) => {
        gsap.set(img, { clipPath: 'inset(0 0 100% 0)' });
        if (isDesktop) {
          gsap.to(img, {
            clipPath: 'inset(0 0 0% 0)',
            ease: 'none',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.8,
            },
            delay: i * 0.1,
          });
        } else {
          ScrollTrigger.create({
            trigger: img,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.to(img, {
                clipPath: 'inset(0 0 0% 0)',
                duration: 1,
                ease: EASE_WELLNESS_FLOW,
              });
            },
          });
        }
      });

      // Card entrance
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: isDesktop ? 60 : 30,
          opacity: 0,
          duration: 0.8,
          ease: EASE_WELLNESS_FLOW,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
          delay: isDesktop ? i * 0.12 : 0,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section background="warmWhite">
      <SectionHeader
        title={serviceCategories.sectionTitle}
        subtitle={serviceCategories.sectionSubtitle}
        decorative
        animated
      />

      <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {serviceCategories.categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];

          return (
            <div key={category.title} data-card className="h-full group">
              <Card
                interactive
                className="overflow-hidden !p-0 flex flex-col h-full transition-[transform,box-shadow] duration-[400ms] ease-[var(--ease-default)] hover:-translate-y-1 hover:shadow-[var(--shadow-3)]"
              >
                {/* Category image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden" data-clip-reveal>
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    width={category.image.width}
                    height={category.image.height}
                    className="object-cover object-top w-full h-full transition-transform duration-700 ease-[var(--ease-default)] group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {IconComponent && (
                        <span className="inline-flex items-center justify-center text-secondary-500" aria-hidden="true">
                          <IconComponent size={24} weight="light" />
                        </span>
                      )}
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <CardDescription className="mt-2">
                      {category.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="flex items-center flex-wrap gap-3 text-sm text-neutral-500 mb-2">
                      <span className="font-medium text-neutral-700">
                        {category.services.length} soin{category.services.length > 1 ? 's' : ''}
                      </span>
                      {category.services.length > 0 && (
                        <>
                          <span aria-hidden="true">&middot;</span>
                          <span className="text-xs text-neutral-500 truncate">
                            {category.services[0].price}
                          </span>
                        </>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <Link href={category.cta.href} className="w-full">
                      <Button variant="secondary" size="sm" fullWidth data-magnetic>
                        {category.cta.label}
                      </Button>
                    </Link>
                  </CardFooter>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
