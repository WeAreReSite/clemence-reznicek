'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui';
import { ServiceMenuItem } from './service-menu-item';
import { gsap, EASE_WELLNESS_FLOW } from '@/lib/gsap-setup';
import type { Service, ImageData } from '@/types/content';

interface SoinsCategoryBlockProps {
  id: string;
  title: string;
  description: string;
  services: Service[];
  image?: ImageData;
  ctaHref?: string;
}

export function SoinsCategoryBlock({
  id,
  title,
  description,
  services,
  image,
  ctaHref = 'tel:+33632185259',
}: SoinsCategoryBlockProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(el.querySelectorAll('[data-gsap]'), { clearProps: 'all' });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('[data-gsap]', {
        y: 16,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: EASE_WELLNESS_FLOW,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [id]);

  return (
    <div
      ref={containerRef}
      id={id}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      className="relative"
    >
      {/* Watermark image — desktop only */}
      {image && (
        <div
          className="hidden lg:block absolute top-0 right-0 w-[320px] h-[320px] opacity-[0.06] pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            className="object-cover w-full h-full rounded-2xl"
            sizes="320px"
          />
        </div>
      )}

      {/* Category header */}
      <SectionHeader
        title={title}
        subtitle={description}
        align="left"
        decorative
        animated
      />

      {/* Service menu list */}
      <div className="relative z-[1] divide-y divide-neutral-200">
        {services.map((service, index) => (
          <ServiceMenuItem
            key={service.name}
            name={service.name}
            description={service.description}
            price={service.price}
            duration={service.duration}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            ctaHref={ctaHref}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
