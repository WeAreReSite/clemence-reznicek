'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  XIcon,
  PhoneIcon,
  CaretDownIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  YoutubeLogoIcon,
} from '@phosphor-icons/react';
import { navigation, siteConfig } from '../../../content/site';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIAL_ICONS: Record<string, typeof FacebookLogoIcon> = {
  facebook: FacebookLogoIcon,
  instagram: InstagramLogoIcon,
  youtube: YoutubeLogoIcon,
};

/* Gold decorative divider — mirrors the site's SectionHeader diamond motif */
function MenuDivider() {
  return (
    <div
      className="flex items-center justify-center gap-3 my-5"
      aria-hidden="true"
    >
      <span className="block h-px w-10 bg-secondary-400/40" />
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="0.343"
          width="5.2"
          height="5.2"
          rx="0.4"
          transform="rotate(45 4 0.343)"
          fill="oklch(0.742 0.1202 79.1 / 0.50)"
        />
      </svg>
      <span className="block h-px w-10 bg-secondary-400/40" />
    </div>
  );
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Return focus when closing
  useEffect(() => {
    if (!isOpen && previousFocusRef.current) {
      previousFocusRef.current.focus();
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key closes menu
  useEffect(() => {
    if (!isOpen) return;
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  // Focus trap keyboard handler
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== 'Tab') return;
      const menu = menuRef.current;
      if (!menu) return;
      const focusableElements = menu.querySelectorAll<HTMLElement>(
        'button, a, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableElements[0];
      const lastEl = focusableElements[focusableElements.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      }
    },
    []
  );

  const toggleSubmenu = useCallback((label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  }, []);

  // Filter social links to only those we have icons for
  const displaySocialLinks = siteConfig.socialLinks.filter(
    (link) => link.platform in SOCIAL_ICONS
  );

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-label="Menu de navigation"
      aria-modal="true"
      className={cn(
        'fixed inset-0 z-50',
        'flex flex-col',
        'transition-[opacity,visibility] duration-[450ms] ease-[var(--ease-gentle)]',
        isOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
      )}
      onKeyDown={handleKeyDown}
    >
      {/* Solid warm gradient background — no transparency */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(170deg, oklch(0.980 0.0062 75.4) 0%, oklch(0.960 0.0120 8.0) 35%, oklch(0.955 0.0180 324.0 / 0.3) 65%, oklch(0.979 0.0076 7.3) 100%), oklch(0.980 0.0062 75.4)',
        }}
      />

      {/* Breathing aura glow — signature wellness atmosphere */}
      <div
        className={cn(
          'absolute pointer-events-none',
          isOpen ? 'animate-[menuAuraPulse_6s_ease-in-out_infinite]' : ''
        )}
        aria-hidden="true"
        style={{
          top: '20%',
          left: '50%',
          width: '120vw',
          height: '60vh',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse at center, oklch(0.742 0.1202 79.1 / 0.08) 0%, oklch(0.756 0.0624 9.7 / 0.04) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />

      {/* Secondary aura near bottom — adds depth */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: '5%',
          right: '20%',
          width: '50vw',
          height: '40vh',
          background:
            'radial-gradient(ellipse at center, oklch(0.594 0.0957 324.7 / 0.05) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header: logo + close */}
        <div className="flex items-center justify-between px-6 pt-5 pb-2">
          <Link
            href="/"
            onClick={onClose}
            className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2 rounded-[var(--radius-DEFAULT)]"
            aria-label={`${siteConfig.businessName} - Accueil`}
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={140}
              height={47}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className={cn(
              'flex items-center justify-center w-11 h-11',
              'rounded-full',
              'text-neutral-700',
              'border border-neutral-200/60',
              'transition-all duration-[250ms] ease-[var(--ease-default)]',
              'hover:bg-neutral-100 hover:border-neutral-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
              'active:scale-95'
            )}
          >
            <XIcon size={20} weight="light" />
          </button>
        </div>

        {/* Tagline */}
        <div
          className={cn(
            'text-center mt-1 transition-all duration-[500ms] ease-[var(--ease-out)]',
            isOpen
              ? 'opacity-100 translate-y-0 delay-[200ms]'
              : 'opacity-0 translate-y-2'
          )}
        >
          <p className="font-body text-[0.65rem] uppercase tracking-[0.16em] text-neutral-400">
            Bien-&ecirc;tre holistique
          </p>
        </div>

        <MenuDivider />

        {/* Navigation items — centered */}
        <nav className="flex-1 overflow-y-auto px-8 flex flex-col items-center">
          <ul className="flex flex-col items-center gap-0 w-full max-w-[320px]">
            {navigation.items.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const isSubmenuOpen = openSubmenu === item.label;

              return (
                <li
                  key={item.label}
                  className={cn(
                    'w-full text-center',
                    'transition-all duration-[450ms] ease-[var(--ease-out)]',
                    isOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  )}
                  style={{
                    transitionDelay: isOpen
                      ? `${250 + index * 70}ms`
                      : '0ms',
                  }}
                >
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(item.label)}
                        aria-expanded={isSubmenuOpen}
                        className={cn(
                          'flex w-full items-center justify-center gap-2',
                          'py-3',
                          'font-heading text-[1.4rem] font-semibold text-neutral-800',
                          'tracking-[0.01em]',
                          'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                          'hover:text-indigo-500',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                          'rounded-[var(--radius-DEFAULT)]',
                          isSubmenuOpen && 'text-indigo-500'
                        )}
                      >
                        <span>{item.label}</span>
                        <CaretDownIcon
                          size={16}
                          weight="bold"
                          className={cn(
                            'text-secondary-400 transition-transform duration-[350ms] ease-[var(--ease-default)]',
                            isSubmenuOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* Sub-items with smooth expand */}
                      <div
                        className={cn(
                          'grid transition-[grid-template-rows] duration-[400ms] ease-[var(--ease-gentle)]',
                          isSubmenuOpen
                            ? 'grid-rows-[1fr]'
                            : 'grid-rows-[0fr]'
                        )}
                      >
                        <ul className="overflow-hidden flex flex-col items-center gap-0">
                          {item.children?.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className={cn(
                                  'block py-3 min-h-[44px] flex items-center',
                                  'font-body text-base text-neutral-500',
                                  'tracking-[0.02em]',
                                  'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                                  'hover:text-indigo-500',
                                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                                  'rounded-[var(--radius-DEFAULT)]'
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        'block py-3',
                        'font-heading text-[1.4rem] font-semibold text-neutral-800',
                        'tracking-[0.01em]',
                        'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                        'hover:text-indigo-500',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                        'rounded-[var(--radius-DEFAULT)]'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom section: CTA + contact + socials */}
        <div
          className={cn(
            'px-8 pb-8 pt-2 flex flex-col items-center',
            'transition-all duration-[500ms] ease-[var(--ease-out)]',
            isOpen
              ? 'opacity-100 translate-y-0 delay-[550ms]'
              : 'opacity-0 translate-y-4'
          )}
        >
          <MenuDivider />

          {/* CTA button */}
          <Link href={navigation.cta.href} onClick={onClose} className="w-full max-w-[280px]">
            <Button variant="warm" size="md" fullWidth>
              {navigation.cta.label}
            </Button>
          </Link>

          {/* Phone */}
          <a
            href={siteConfig.phone.link}
            className={cn(
              'flex items-center gap-2 mt-5',
              'font-body text-sm text-neutral-500',
              'transition-colors duration-[200ms] ease-[var(--ease-default)]',
              'hover:text-indigo-500',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
              'rounded-[var(--radius-DEFAULT)]'
            )}
          >
            <PhoneIcon size={16} weight="light" className="shrink-0" />
            <span>{siteConfig.phone.display}</span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-4">
            {displaySocialLinks.map((link) => {
              const SocialIconComponent = SOCIAL_ICONS[link.platform];
              if (!SocialIconComponent) return null;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={cn(
                    'flex items-center justify-center w-9 h-9',
                    'rounded-full',
                    'border border-neutral-200/50',
                    'text-neutral-500',
                    'transition-all duration-[200ms] ease-[var(--ease-default)]',
                    'hover:text-indigo-500 hover:border-indigo-200 hover:bg-indigo-50/50',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2'
                  )}
                >
                  <SocialIconComponent size={18} weight="light" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Keyframes for breathing aura */}
      <style jsx global>{`
        @keyframes menuAuraPulse {
          0%, 100% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
