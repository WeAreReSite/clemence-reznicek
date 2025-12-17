"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Gift, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { spaInfo } from "@/lib/data"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Nos Soins", href: "/soins" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Bons Cadeaux", href: "/bons-cadeaux" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomepage = pathname === "/"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomepage
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-spa">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <h1 className={cn(
              "font-serif text-2xl md:text-3xl font-medium transition-colors duration-300",
              isScrolled || !isHomepage ? "text-foreground" : "text-white"
            )}>
              L&apos;Éther
            </h1>
            <span className={cn(
              "text-xs tracking-[0.3em] uppercase transition-colors duration-300",
              isScrolled || !isHomepage ? "text-accent" : "text-white/80"
            )}>
              Spa & Bien-être
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative group",
                  isScrolled || !isHomepage
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white",
                  pathname === item.href && (isScrolled || !isHomepage ? "text-primary" : "text-white")
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled || !isHomepage ? "bg-primary" : "bg-white"
                )} />
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={isScrolled || !isHomepage ? "outline" : "glass"}
              size="sm"
              asChild
            >
              <Link href="/bons-cadeaux">
                <Gift className="w-4 h-4 mr-2" />
                Offrir
              </Link>
            </Button>
            <Button
              variant="default"
              size="default"
              asChild
            >
              <Link href="/reserver">
                Réserver
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled || !isHomepage ? "text-foreground" : "text-white"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-card">
              <SheetHeader className="mb-8">
                <SheetTitle className="font-serif text-2xl">L&apos;Éther</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "py-3 px-4 text-lg font-medium rounded-lg transition-colors",
                        pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <SheetClose asChild>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/reserver">
                      Réserver un soin
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <Link href="/bons-cadeaux">
                      <Gift className="w-5 h-5 mr-2" />
                      Offrir un bon cadeau
                    </Link>
                  </Button>
                </SheetClose>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <a
                  href={`tel:${spaInfo.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{spaInfo.phone}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  )
}
