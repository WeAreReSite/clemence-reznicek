"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { spaInfo } from "@/lib/data"

const navigation = [
  { name: "Soins", href: "/soins" },
  { name: "À Propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Client-only rendering for Sheet to avoid hydration mismatch
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    // Set mounted after first render (deferred to avoid ESLint warning)
    const timer = setTimeout(() => setIsMounted(true), 0)

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isHomepage = pathname === "/"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-card/95 backdrop-blur-md",
        isScrolled || !isHomepage
          ? "shadow-sm py-4"
          : "py-6"
      )}
    >
      <div className="container-spa">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <span className="font-serif text-xl md:text-2xl tracking-wide text-foreground">
              {spaInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 text-muted-foreground hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-[13px] tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 border-foreground text-foreground hover:bg-foreground hover:text-white"
            >
              Réserver
            </Link>

            {/* Hamburger for tablet/smaller desktop */}
            <button
              onClick={() => setIsOpen(true)}
              className="hidden md:flex lg:hidden flex-col gap-1.5 p-2 text-foreground"
            >
              <span className="w-6 h-0.5 bg-current" />
              <span className="w-6 h-0.5 bg-current" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          {!isMounted ? (
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 text-foreground"
              aria-label="Menu"
            >
              <span className="w-6 h-0.5 bg-current" />
              <span className="w-6 h-0.5 bg-current" />
            </button>
          ) : (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button
                  className="flex flex-col gap-1.5 p-2 text-foreground"
                >
                  <span className="w-6 h-0.5 bg-current" />
                  <span className="w-6 h-0.5 bg-current" />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md bg-card">
              <SheetHeader className="mb-12">
                <SheetTitle className="font-serif text-2xl tracking-wide">{spaInfo.name}</SheetTitle>
                <SheetDescription className="sr-only">
                  Menu de navigation principal avec liens vers les pages du site
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-6">
                {[{ name: "Accueil", href: "/" }, ...navigation].map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm tracking-[0.2em] uppercase transition-colors",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-12 pt-8 border-t border-border">
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="block text-center text-sm tracking-[0.15em] uppercase px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-white transition-all"
                  >
                    Réserver un soin
                  </Link>
                </SheetClose>
              </div>

              <div className="mt-8">
                <a
                  href={`tel:${spaInfo.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  <span>{spaInfo.phone}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
          )}
        </nav>
      </div>
    </header>
  )
}
