'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ListIcon,
  PhoneIcon,
  CaretDownIcon,
} from '@phosphor-icons/react';
import { navigation, siteConfig } from '../../../content/site';
import { MobileMenu } from './mobile-menu';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle scroll behavior
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrolledDown = currentScrollY > 50;

      setIsScrolled(isScrolledDown);

      // On mobile: hide on scroll-down, show on scroll-up
      // On desktop: always visible (handled via CSS)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only',
          'fixed top-2 left-2 z-[60]',
          'bg-indigo-500 text-neutral-50',
          'px-4 py-2 rounded-[var(--radius-DEFAULT)]',
          'font-body text-sm font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2'
        )}
      >
        Aller au contenu principal
      </a>

      <header
        role="navigation"
        aria-label="Navigation principale"
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-[350ms] ease-[var(--ease-default)]',
          // Background + blur when scrolled
          isScrolled
            ? 'shadow-[var(--shadow-2)] backdrop-blur-[8px]'
            : 'backdrop-blur-none',
          // Height: compact when scrolled
          isScrolled ? 'h-[3.5rem]' : 'h-[4.5rem]',
          // Mobile visibility: hide on scroll-down
          isVisible ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'
        )}
        style={{
          backgroundColor: isScrolled
            ? 'oklch(0.980 0.0062 75.4 / 0.95)'
            : 'oklch(0.980 0.0062 75.4)',
        }}
      >
        <div className="mx-auto max-w-[1400px] w-full h-full px-[clamp(1.25rem,4vw,3rem)] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'shrink-0',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
              'rounded-[var(--radius-DEFAULT)]'
            )}
            aria-label={`${siteConfig.businessName} - Accueil`}
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={180}
              height={60}
              className={cn(
                'transition-all duration-[350ms] ease-[var(--ease-default)] object-contain',
                isScrolled
                  ? 'h-7 w-auto md:h-8 lg:h-9'
                  : 'h-9 w-auto md:h-10 lg:h-12'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation — center */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
            {navigation.items.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = openDropdown === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      className={cn(
                        'flex items-center gap-1 px-3 py-2',
                        'font-body text-sm font-medium text-neutral-700',
                        'tracking-[0.06em]',
                        'rounded-[var(--radius-DEFAULT)]',
                        'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                        'hover:text-indigo-500 hover:bg-indigo-500/[0.04]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                        isDropdownOpen && 'text-indigo-500'
                      )}
                    >
                      <span>{item.label}</span>
                      <CaretDownIcon
                        size={14}
                        weight="light"
                        className={cn(
                          'transition-transform duration-[200ms] ease-[var(--ease-default)]',
                          isDropdownOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={cn(
                        'absolute top-full left-0 pt-1',
                        'transition-all duration-[200ms] ease-[var(--ease-default)]',
                        isDropdownOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto'
                          : 'opacity-0 -translate-y-1 pointer-events-none'
                      )}
                    >
                      <div
                        className={cn(
                          'min-w-[220px] py-2',
                          'bg-bg-warm-white',
                          'border border-neutral-100',
                          'rounded-[var(--radius-lg)]',
                          'shadow-[var(--shadow-3)]'
                        )}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2.5',
                              'font-body text-sm text-neutral-700',
                              'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                              'hover:text-indigo-500 hover:bg-indigo-500/[0.04]',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-3 py-2',
                    'font-body text-sm font-medium text-neutral-700',
                    'tracking-[0.06em]',
                    'rounded-[var(--radius-DEFAULT)]',
                    'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                    'hover:text-indigo-500 hover:bg-indigo-500/[0.04]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <Link href={navigation.cta.href} className="hidden lg:block">
              <Button variant="warm" size="sm">
                {navigation.cta.label}
              </Button>
            </Link>

            {/* Tablet CTA — visible md to lg */}
            <Link href={navigation.cta.href} className="hidden md:block lg:hidden">
              <Button variant="warm" size="sm">
                {navigation.cta.label}
              </Button>
            </Link>

            {/* Mobile phone icon */}
            <a
              href={siteConfig.phone.link}
              aria-label="Appeler"
              className={cn(
                'flex items-center justify-center w-10 h-10 md:hidden',
                'rounded-[var(--radius-DEFAULT)]',
                'text-neutral-700',
                'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                'hover:text-indigo-500 hover:bg-indigo-500/[0.04]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                'active:scale-[0.97] active:transition-transform active:duration-[150ms]'
              )}
            >
              <PhoneIcon size={22} weight="light" />
            </a>

            {/* Hamburger — visible below lg */}
            <button
              type="button"
              onClick={handleOpenMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Ouvrir le menu"
              className={cn(
                'flex items-center justify-center w-10 h-10 lg:hidden',
                'rounded-[var(--radius-DEFAULT)]',
                'text-neutral-700',
                'transition-colors duration-[200ms] ease-[var(--ease-default)]',
                'hover:text-indigo-500 hover:bg-indigo-500/[0.04]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400 focus-visible:ring-offset-2',
                'active:scale-[0.97] active:transition-transform active:duration-[150ms]'
              )}
            >
              <ListIcon size={24} weight="light" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMobileMenu} />
    </>
  );
}
