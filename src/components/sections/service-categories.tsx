import Image from 'next/image';
import Link from 'next/link';
import {
  HandPalmIcon,
  SparkleIcon,
  HeartIcon,
  UsersIcon,
} from '@phosphor-icons/react/dist/ssr';
import { serviceCategories } from '../../../content/homepage';
import {
  Section,
  SectionHeader,
  ScrollReveal,
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
  return (
    <Section background="warmWhite">
      <SectionHeader
        title={serviceCategories.sectionTitle}
        subtitle={serviceCategories.sectionSubtitle}
        decorative
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {serviceCategories.categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          const priceRange = category.services.length > 0
            ? category.services.map((s) => s.price).join(' — ')
            : '';

          return (
            <ScrollReveal key={category.title} className="h-full">
            <Card
              interactive
              className="overflow-hidden !p-0 flex flex-col h-full"
            >
              {/* Category image */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={category.image.src}
                  alt={category.image.alt}
                  width={category.image.width}
                  height={category.image.height}
                  className="object-cover object-[center_30%] w-full h-full"
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
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-2">
                    <span className="font-medium text-neutral-700">
                      {category.services.length} soin{category.services.length > 1 ? 's' : ''}
                    </span>
                    {priceRange && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-xs text-neutral-500 truncate">
                          {category.services[0].price}
                        </span>
                      </>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Link href={category.cta.href} className="w-full">
                    <Button variant="secondary" size="sm" fullWidth>
                      {category.cta.label}
                    </Button>
                  </Link>
                </CardFooter>
              </div>
            </Card>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
