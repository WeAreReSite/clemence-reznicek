import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"
import { spaInfo } from "@/lib/data"

const footerLinks = {
  soins: [
    { name: "Réflexologie Plantaire Pipriac", href: "/soins#reflexologie" },
    { name: "Drainage Lymphatique Pipriac & Redon", href: "/soins#drainage" },
    { name: "Amma Assis", href: "/soins#amma" },
    { name: "Beauté des Mains", href: "/soins#beaute-mains" },
    { name: "Tous nos soins", href: "/soins" },
  ],
  informations: [
    { name: "À Propos", href: "/a-propos" },
    { name: "Zone d'intervention", href: "/faq" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions Légales", href: "/mentions-legales" },
    { name: "Politique de Confidentialité", href: "/confidentialite" },
    { name: "CGV", href: "/cgv" },
  ],
}

export function Footer() {
  // Force Vercel deployment with updated footer
  return (
    <footer className="bg-foreground text-white/90 overflow-hidden">
      {/* Main Footer */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo.png"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-white">{spaInfo.name}</h2>
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                  {spaInfo.tagline}
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              {spaInfo.description}
            </p>

            {/* Trust Badge - Google Reviews */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-xs text-white/60">
                <span className="text-accent">★</span>
                <span>5/5</span>
                <span className="text-white/40">Google (8 avis)</span>
              </div>
            </div>
          </div>

          {/* Soins Links */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Nos Soins</h3>
            <ul className="space-y-3">
              {footerLinks.soins.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Informations</h3>
            <ul className="space-y-3">
              {footerLinks.informations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${spaInfo.address.street}, ${spaInfo.address.postalCode} ${spaInfo.address.city}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    {spaInfo.address.street}<br />
                    {spaInfo.address.postalCode} {spaInfo.address.city}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${spaInfo.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>{spaInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${spaInfo.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span>{spaInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p>Lun - Ven : {spaInfo.hours.weekdays}</p>
                  <p>Samedi : {spaInfo.hours.saturday}</p>
                  <p>Dimanche : {spaInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={spaInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={spaInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <h3 className="font-serif text-lg text-white mb-3">Zone d&apos;Intervention</h3>
            <p className="text-white/70 text-sm max-w-3xl mx-auto">
              Cabinet situé à <strong className="text-white">Pipriac (35550)</strong>,
              facilement accessible depuis <strong className="text-white">Redon</strong> (15km).
              Nous accueillons des clients de toute <strong className="text-white">l&apos;Ille-et-Vilaine</strong> et
              la <strong className="text-white">Bretagne</strong> dans un rayon de 30km :
              Guipry-Messac, Bain-de-Bretagne, Guer et communes environnantes.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-white/50 text-sm text-center md:text-left">
                © {new Date().getFullYear()} {spaInfo.name}. Tous droits réservés.
              </p>
              <p className="text-white/40 text-xs text-center md:text-left">
                Site web créé par{' '}
                <a
                  href="https://www.weareresite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors underline"
                >
                  weareresite
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
