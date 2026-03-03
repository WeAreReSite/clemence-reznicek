import Link from 'next/link';
import { promotions } from '../../../content/homepage';
import { Section, Button, Badge } from '@/components/ui';

export function PromotionsSection() {
  if (!promotions.active) {
    return null;
  }

  return (
    <Section background="indigoDeep">
      <div className="max-w-[640px] mx-auto text-center">
        {/* Subtle gold border decoration */}
        <div
          className="border border-secondary-400/30 rounded-lg p-8 lg:p-12"
          style={{
            background:
              'linear-gradient(135deg, oklch(0.742 0.1202 79.1 / 0.04), transparent 60%)',
          }}
        >
          {/* Optional badge */}
          {promotions.badge && (
            <Badge variant="accent" className="mb-6">
              {promotions.badge}
            </Badge>
          )}

          <h2 className="font-heading text-2xl font-semibold text-neutral-50 mb-4">
            {promotions.headline}
          </h2>

          <p className="font-body text-base text-neutral-200 leading-relaxed mb-8">
            {promotions.description}
          </p>

          <Link href={promotions.cta.href}>
            <Button variant="warmOnDark" size="lg">
              {promotions.cta.label}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
