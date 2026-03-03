import Link from 'next/link';
import Image from 'next/image';
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
  GoogleLogoIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
} from '@phosphor-icons/react/dist/ssr';
import { footer, siteConfig } from '../../../content/site';

const socialIconMap: Record<string, React.ElementType> = {
  facebook: FacebookLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
  google: GoogleLogoIcon,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-indigo-deep text-neutral-100">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)] py-[clamp(3rem,6vw,5rem)]">
        {/* Logo + description */}
        <div className="mb-10 lg:mb-12">
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={siteConfig.logo.height}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-sm font-body text-sm text-neutral-300 leading-relaxed">
            {footer.description}
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {/* Column 1: Soins */}
          <div>
            <h3 className="font-heading text-base font-semibold text-neutral-100 mb-4 tracking-wide uppercase text-xs">
              {footer.columns[0].title}
            </h3>
            <ul className="flex flex-col gap-2">
              {footer.columns[0].links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-neutral-300 hover:text-secondary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Informations */}
          <div>
            <h3 className="font-heading text-base font-semibold text-neutral-100 mb-4 tracking-wide uppercase text-xs">
              {footer.columns[1].title}
            </h3>
            <ul className="flex flex-col gap-2">
              {footer.columns[1].links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-neutral-300 hover:text-secondary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-heading text-base font-semibold text-neutral-100 mb-4 tracking-wide uppercase text-xs">
              {footer.columns[2].title}
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.phone.link}
                  className="flex items-center gap-2 font-body text-sm text-neutral-300 hover:text-secondary-300 transition-colors duration-200"
                >
                  <PhoneIcon size={16} weight="light" className="shrink-0" aria-hidden="true" />
                  <span>{siteConfig.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 font-body text-sm text-neutral-300 hover:text-secondary-300 transition-colors duration-200"
                >
                  <EnvelopeSimpleIcon size={16} weight="light" className="shrink-0" aria-hidden="true" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 font-body text-sm text-neutral-300 hover:text-secondary-300 transition-colors duration-200"
                >
                  <MapPinIcon size={16} weight="light" className="shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteConfig.address.full}</span>
                </a>
              </li>
              {/* Opening hours */}
              <li className="mt-2">
                <ul className="flex flex-col gap-1">
                  {siteConfig.openingHours.map((slot) => (
                    <li key={slot.days} className="flex justify-between gap-4 font-body text-xs text-neutral-400">
                      <span>{slot.days}</span>
                      <span>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4 mb-8">
          {footer.socialLinks.map((social) => {
            const Icon = socialIconMap[social.platform];
            if (!Icon) return null;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-700 text-neutral-300 hover:border-secondary-400 hover:text-secondary-300 transition-colors duration-200"
              >
                <Icon size={18} weight="light" aria-hidden="true" />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-neutral-500">
              &copy; {currentYear} {footer.copyright}
            </p>
            <nav aria-label="Liens légaux">
              <ul className="flex items-center gap-4">
                {footer.legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-xs text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
