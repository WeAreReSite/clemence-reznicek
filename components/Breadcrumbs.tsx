import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { getCanonicalUrl } from "@/lib/utils"
import { JsonLd } from "@/components/JsonLd"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.href),
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground">
        <ol className="flex items-center flex-wrap gap-1">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-1 text-muted-foreground/50" aria-hidden="true" />
              )}
              {index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
