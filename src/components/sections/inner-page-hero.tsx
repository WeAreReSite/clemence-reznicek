import Image from 'next/image';

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function InnerPageHero({ title, subtitle, backgroundImage }: InnerPageHeroProps) {
  return (
    <section className="relative w-full min-h-[40vh] md:min-h-[38vh] lg:min-h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background image (optional) */}
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-top sm:object-[center_30%]"
            sizes="100vw"
            quality={75}
          />
          <div
            className="absolute inset-0 z-[1]"
            aria-hidden="true"
            style={{
              background:
                'linear-gradient(to bottom, oklch(0.270 0.0850 278.0 / 0.55) 0%, oklch(0.270 0.0850 278.0 / 0.70) 60%, oklch(0.980 0.0062 75.4 / 0.85) 100%)',
            }}
          />
        </>
      ) : (
        <div
          className="absolute inset-0 z-[1]"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.404 0.1351 279.5 / 0.90), oklch(0.430 0.1013 325.0 / 0.80))',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-[2] px-[clamp(1.25rem,4vw,3rem)] pt-[clamp(5rem,12vw,7rem)] pb-[clamp(3rem,8vw,5rem)] text-center max-w-[720px] mx-auto">
        <h1
          className="font-heading text-3xl lg:text-4xl font-semibold text-neutral-50 leading-tight mb-4"
          style={{ textShadow: '0 2px 6px oklch(0 0 0 / 0.20)' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="font-body text-md text-neutral-200 leading-relaxed max-w-[560px] mx-auto"
            style={{ textShadow: '0 1px 3px oklch(0 0 0 / 0.20)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
