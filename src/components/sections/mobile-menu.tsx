'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
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

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Store the element that had focus before opening
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus the close button when menu opens
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

  // Focus trap
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

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  const toggleSubmenu = useCallback((label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  }, []);

  // Filter social links to only those we have icons for
  const displaySocialLinks = siteConfig.socialLinks.filter(
    (link) => link.platform in SOCIAL_ICONS
  );

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-neutral-900/30 transition-opacity duration-[350ms]',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
        onClick={handleOverlayClick}
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-label="Menu de navigation"
        aria-modal="true"
        className={cn(
          'fixed top-0 right-0 bottom-0 z-50',
          'w-full max-w-[400px]',
          'bg-bg-cream',
          'flex flex-col',
          'transition-transform duration-[350ms] ease-[var(--ease-out)]',
          'shadow-[var(--shadow-5)]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        onKeyDown={handleKeyDown}
        style={{
          background: 'linear-gradient(180deg, oklch(0.980 0.0062 75.4) 0%, oklch(0.979 0.0076 7.3 / 0.5) 100%)',
        }}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-end p-4">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className={cn(
              'flex items-center justify-center w-12 h-12',
              'rounded-[var(--radius-DEFAULT)]',
              'text-neutral-800',
              'transition-colors duration-[200ms] ease-[var(--ease-default)]',
              'hover:bg-neutral-100',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
              'active:scale-[0.97]'
            )}
          >
            <XIcon size={24} weight="light" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 px-8 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {navigation.items.map((item, index) => {
              const hasChildren = item.children && item.children.length > 0;
              const isSubmenuOpen = openSubmenu === item.label;

              return (
                <li
                  key={item.label}
                  className="animate-[fadeSlideIn_350ms_ease-out_both]"
                  style={{
                    animationDelay: `${(index + 1) * 60}ms`,
                  }}
                >
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleSubmenu(item.label)}
                        aria-expanded={isSubmenuOpen}
                        className={cn(
                          'flex w-full items-center justify-between',
                          'min-h-[3rem] py-3',
                          'font-heading text-xl text-neutral-800',
                          'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                          'hover:text-indigo-500',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                          'active:scale-[0.97] active:transition-transform active:duration-[150ms]'
                        )}
                      >
                        <span>{item.label}</span>
                        <CaretDownIcon
                          size={20}
                          weight="light"
                          className={cn(
                            'text-neutral-500 transition-transform duration-[350ms] ease-[var(--ease-default)]',
                            isSubmenuOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* Sub-items */}
                      <div
                        className={cn(
                          'grid transition-[grid-template-rows] duration-[350ms] ease-[var(--ease-default)]',
                          isSubmenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        )}
                      >
                        <ul className="overflow-hidden pl-4">
                          {item.children?.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className={cn(
                                  'block min-h-[3rem] py-2.5',
                                  'font-body text-lg text-neutral-600',
                                  'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                                  'hover:text-indigo-500',
                                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                                  'active:scale-[0.97] active:transition-transform active:duration-[150ms]'
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
                        'block min-h-[3rem] py-3',
                        'font-heading text-xl text-neutral-800',
                        'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                        'hover:text-indigo-500',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                        'active:scale-[0.97] active:transition-transform active:duration-[150ms]'
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

        {/* Footer with phone + socials */}
        <div className="px-8 py-6 border-t border-neutral-200">
          <a
            href={siteConfig.phone.link}
            className={cn(
              'flex items-center gap-3 mb-4',
              'font-body text-base text-neutral-700',
              'transition-colors duration-[200ms] ease-[var(--ease-default)]',
              'hover:text-indigo-500',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2'
            )}
          >
            <PhoneIcon size={20} weight="light" className="shrink-0" />
            <span>{siteConfig.phone.display}</span>
          </a>

          <div className="flex items-center gap-4">
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
                    'flex items-center justify-center w-10 h-10',
                    'rounded-full',
                    'text-neutral-600',
                    'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                    'hover:text-indigo-500 hover:bg-neutral-100',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2'
                  )}
                >
                  <SocialIconComponent size={22} weight="light" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Keyframes for stagger animation */}
      <style jsx global>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
