import Image from 'next/image';
import type { Service } from '@/types/content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui';

interface ServiceDetailProps {
  services: Service[];
  layout?: 'grid' | 'list';
}

export function ServiceDetailSection({ services, layout = 'grid' }: ServiceDetailProps) {
  if (layout === 'list') {
    return (
      <div className="space-y-6">
        {services.map((service) => (
          <Card key={service.name} className="flex flex-col lg:flex-row overflow-hidden !p-0">
            {/* Image (if available) */}
            {service.image && (
              <div className="relative w-full lg:w-[280px] shrink-0 aspect-[16/9] lg:aspect-auto">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  className="object-cover object-top w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 280px"
                />
              </div>
            )}

            <div className="p-6 flex flex-col justify-center">
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center flex-wrap gap-3 text-sm">
                  <span className="font-medium text-neutral-800">{service.price}</span>
                  <span className="text-neutral-400" aria-hidden="true">·</span>
                  <span className="text-neutral-500">{service.duration}</span>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // Grid layout (default)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service) => (
        <Card key={service.name} className="overflow-hidden !p-0">
          {/* Image (if available) */}
          {service.image && (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                className="object-cover object-top w-full h-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          )}

          <div className="p-6">
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center flex-wrap gap-3 text-sm">
                <span className="font-medium text-neutral-800">{service.price}</span>
                <span className="text-neutral-400" aria-hidden="true">·</span>
                <span className="text-neutral-500">{service.duration}</span>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
