import {
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  ClockIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
  GoogleLogoIcon,
} from '@phosphor-icons/react/dist/ssr';
import { contactPage } from '../../../content/contact';
import { siteConfig } from '../../../content/site';

const socialIconMap: Record<string, React.ElementType> = {
  facebook: FacebookLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
  google: GoogleLogoIcon,
};

const cardHover = 'transition-[transform,box-shadow] duration-[400ms] ease-[var(--ease-default)] hover:-translate-y-1 hover:shadow-[var(--shadow-3)]';
const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500';

export function BentoContactGrid() {
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address.full)}`;

  return (
    <div className="flex flex-col gap-5">
      {/* Row 1: Phone (2/3) + Email (1/3) */}
      <div className="flex flex-col md:flex-row gap-5">
        <a
          href={contactPage.phone.link}
          className={`md:w-2/3 flex items-center gap-5 rounded-2xl bg-bg-indigo-deep p-6 md:p-8 text-neutral-50 ${cardHover} ${focusRing}`}
        >
          <span
            className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 shrink-0"
            aria-hidden="true"
          >
            <PhoneIcon size={28} weight="light" />
          </span>
          <div>
            <p className="font-body text-xs uppercase tracking-[var(--tracking-all-caps)] text-neutral-200 mb-1">
              Téléphone
            </p>
            <p className="font-body text-xl md:text-2xl font-bold tracking-wide">
              {contactPage.phone.display}
            </p>
            <p className="font-body text-sm text-neutral-300 mt-1">
              Appeler maintenant
            </p>
          </div>
        </a>

        <a
          href={`mailto:${contactPage.email}`}
          className={`md:w-1/3 flex items-center gap-4 rounded-2xl bg-primary-100 p-6 text-neutral-800 ${cardHover} ${focusRing}`}
        >
          <span
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-200/60 shrink-0"
            aria-hidden="true"
          >
            <EnvelopeSimpleIcon size={24} weight="light" className="text-primary-700" />
          </span>
          <div className="min-w-0">
            <p className="font-body text-xs uppercase tracking-[var(--tracking-all-caps)] text-neutral-700 mb-1">
              Email
            </p>
            <p className="font-body text-sm font-medium truncate">
              {contactPage.email}
            </p>
          </div>
        </a>
      </div>

      {/* Row 2: Hours + Address + Social (equal thirds, stretch to same height) */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-5">
        <div
          className={`md:w-1/3 rounded-2xl bg-bg-warm-white border border-neutral-200 p-6 ${cardHover}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 shrink-0"
              aria-hidden="true"
            >
              <ClockIcon size={20} weight="light" className="text-indigo-500" />
            </span>
            <p className="font-body text-xs uppercase tracking-[var(--tracking-all-caps)] text-neutral-600">
              Horaires
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {contactPage.openingHours.map((slot) => (
              <li
                key={slot.days}
                className="flex justify-between gap-4 font-body text-sm text-neutral-700"
              >
                <span>{slot.days}</span>
                <span className="font-medium text-neutral-800">{slot.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`md:w-1/3 rounded-2xl bg-bg-warm-white border border-neutral-200 p-6 ${cardHover} ${focusRing}`}
        >
          <address className="not-italic">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 shrink-0"
                aria-hidden="true"
              >
                <MapPinIcon size={20} weight="light" className="text-indigo-500" />
              </span>
              <p className="font-body text-xs uppercase tracking-[var(--tracking-all-caps)] text-neutral-600">
                Adresse
              </p>
            </div>
            <p className="font-body text-sm text-neutral-700 leading-relaxed">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
              <br />
              <span className="text-neutral-600">{siteConfig.address.region}</span>
            </p>
          </address>
        </a>

        <div
          className={`md:w-1/3 rounded-2xl bg-secondary-50 p-6 ${cardHover}`}
        >
          <p className="font-body text-xs uppercase tracking-[var(--tracking-all-caps)] text-neutral-600 mb-4">
            Réseaux sociaux
          </p>
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((social) => {
              const Icon = socialIconMap[social.platform];
              if (!Icon) return null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex items-center justify-center w-11 h-11 rounded-full border border-neutral-200 text-neutral-600 hover:border-secondary-400 hover:text-secondary-600 hover:bg-secondary-100 transition-colors duration-200 ${focusRing}`}
                >
                  <Icon size={20} weight="light" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 3: Map (full width, fixed height) */}
      <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-2)] h-[280px] md:h-[350px]">
        <iframe
          src={contactPage.mapEmbedUrl}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation du cabinet de Clémence Reznicek à Jonzac"
          aria-label="Carte Google Maps — Cabinet de Clémence Reznicek, 5 avenue Chanzy, Jonzac"
        />
      </div>
    </div>
  );
}
