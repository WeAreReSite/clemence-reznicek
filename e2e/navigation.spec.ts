import { test, expect } from '@playwright/test';

// =============================================================================
// Desktop Navigation Tests
// =============================================================================

test.describe('Desktop navigation', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('nav links: Accueil navigates to /', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('navigation', { name: 'Menu principal' }).getByText('Accueil').click();
    await expect(page).toHaveURL('/');
  });

  test('nav dropdown: Soins opens dropdown with sub-links', async ({ page }) => {
    await page.goto('/');
    const soinsButton = page.getByRole('navigation', { name: 'Menu principal' }).getByRole('button', { name: /Soins/i });
    await soinsButton.hover();
    const massagesLink = page.getByRole('navigation', { name: 'Menu principal' }).getByRole('link', { name: 'Massages' });
    await expect(massagesLink).toBeVisible();
  });

  test('nav dropdown: clicking Massages navigates to /massages', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Menu principal' });
    await nav.getByRole('button', { name: /Soins/i }).hover();
    await nav.getByRole('link', { name: 'Massages' }).click();
    await expect(page).toHaveURL('/massages');
  });

  test('nav dropdown: clicking Soins et accompagnements navigates to /soins', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Menu principal' });
    await nav.getByRole('button', { name: /Soins/i }).hover();
    await nav.getByRole('link', { name: 'Soins et accompagnements' }).click();
    await expect(page).toHaveURL('/soins');
  });

  test('nav dropdown: clicking RMD Signature navigates to /rmd', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Menu principal' });
    await nav.getByRole('button', { name: /Soins/i }).hover();
    await nav.getByRole('link', { name: 'RMD Signature' }).click();
    await expect(page).toHaveURL('/rmd');
  });

  test('nav links: À propos navigates to /a-propos', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Menu principal' });
    await nav.getByRole('link', { name: /propos/i }).click();
    await expect(page).toHaveURL('/a-propos');
  });

  test('nav links: Témoignages navigates to /temoignages', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Menu principal' });
    await nav.getByRole('link', { name: /moignages/i }).click();
    await expect(page).toHaveURL('/temoignages');
  });

  test('nav links: Contact navigates to /contact', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Menu principal' });
    await nav.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('nav CTA: Prendre rendez-vous navigates to /contact', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await header.getByRole('link', { name: /rendez-vous/i }).first().click();
    await expect(page).toHaveURL('/contact');
  });
});

// =============================================================================
// Homepage CTA Buttons
// =============================================================================

test.describe('Homepage CTA buttons', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('hero primary CTA navigates to /contact', async ({ page }) => {
    await page.goto('/');
    const heroSection = page.locator('section').first();
    await heroSection.getByRole('link', { name: /rendez-vous/i }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('hero secondary CTA navigates to /soins', async ({ page }) => {
    await page.goto('/');
    const heroSection = page.locator('section').first();
    await heroSection.getByRole('link', { name: /soins/i }).click();
    await expect(page).toHaveURL('/soins');
  });

  test('entry point: Massages CTA navigates to /massages', async ({ page }) => {
    await page.goto('/');
    // Scope to main content to avoid matching dropdown nav links
    const main = page.locator('main');
    const link = main.locator('a[href="/massages"]').first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(page).toHaveURL('/massages');
  });

  test('entry point: Soins CTA navigates to /soins', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    const link = main.locator('a[href="/soins"]').first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(page).toHaveURL('/soins');
  });

  test('introduction CTA navigates to /a-propos', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    const link = main.locator('a[href="/a-propos"]').first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(page).toHaveURL('/a-propos');
  });

  test('RMD spotlight CTA navigates to /rmd', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    const link = main.locator('a[href="/rmd"]').first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(page).toHaveURL('/rmd');
  });

  test('testimonials CTA navigates to /temoignages', async ({ page }) => {
    await page.goto('/');
    const main = page.locator('main');
    const link = main.locator('a[href="/temoignages"]').first();
    await link.scrollIntoViewIfNeeded();
    await link.click();
    await expect(page).toHaveURL('/temoignages');
  });
});

// =============================================================================
// Mobile Navigation Tests
// =============================================================================

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('hamburger menu opens and shows nav items', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await expect(menu).toBeVisible();
    await expect(menu.getByText('Accueil')).toBeVisible();
    await expect(menu.getByText('Contact')).toBeVisible();
  });

  test('mobile menu: Accueil link navigates to /', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await menu.getByText('Accueil').click();
    await expect(page).toHaveURL('/');
  });

  test('mobile menu: Soins submenu opens and Massages navigates', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await menu.getByRole('button', { name: /Soins/i }).click();
    await menu.getByRole('link', { name: 'Massages' }).click();
    await expect(page).toHaveURL('/massages');
  });

  test('mobile menu: Contact link navigates to /contact', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await menu.getByText('Contact').click();
    await expect(page).toHaveURL('/contact');
  });

  test('mobile menu: À propos link navigates to /a-propos', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await menu.getByText(/propos/i).click();
    await expect(page).toHaveURL('/a-propos');
  });

  test('mobile menu: Témoignages link navigates to /temoignages', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await menu.getByText(/moignages/i).click();
    await expect(page).toHaveURL('/temoignages');
  });

  test('mobile menu: close button closes menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    // Menu opens: translate-x-0 (no translate-x-full)
    await expect(menu).not.toHaveClass(/translate-x-full/);
    await page.getByRole('button', { name: 'Fermer le menu' }).click();
    // Menu closes: translate-x-full applied
    await expect(menu).toHaveClass(/translate-x-full/);
  });

  test('mobile menu: Escape key closes menu', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Ouvrir le menu' }).click();
    const menu = page.getByRole('dialog', { name: /navigation/i });
    await expect(menu).not.toHaveClass(/translate-x-full/);
    await page.keyboard.press('Escape');
    await expect(menu).toHaveClass(/translate-x-full/);
  });
});

// =============================================================================
// Footer Navigation Tests
// =============================================================================

test.describe('Footer navigation', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('footer: Massages link navigates to /massages', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await footer.getByRole('link', { name: 'Massages' }).click();
    await expect(page).toHaveURL('/massages');
  });

  test('footer: Contact link navigates to /contact', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await footer.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('footer: Mentions légales link navigates to /mentions-legales', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await footer.getByRole('link', { name: /mentions l/i }).first().click();
    await expect(page).toHaveURL('/mentions-legales');
  });

  test('footer: À propos link navigates to /a-propos', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await footer.getByRole('link', { name: /propos/i }).click();
    await expect(page).toHaveURL('/a-propos');
  });

  test('footer: logo link navigates to /', async ({ page }) => {
    await page.goto('/contact');
    const footer = page.getByRole('contentinfo');
    await footer.scrollIntoViewIfNeeded();
    await footer.getByRole('link', { name: /accueil/i }).click();
    await expect(page).toHaveURL('/');
  });
});

// =============================================================================
// Inner Page Navigation Tests
// =============================================================================

test.describe('Inner page CTAs', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('massages page: CTA navigates to /contact', async ({ page }) => {
    await page.goto('/massages');
    const main = page.locator('main');
    const cta = main.locator('a[href="/contact"]').last();
    await cta.scrollIntoViewIfNeeded();
    await cta.click();
    await expect(page).toHaveURL('/contact');
  });

  test('soins page: CTA navigates to /contact', async ({ page }) => {
    await page.goto('/soins', { timeout: 30000 });
    const main = page.locator('main');
    const cta = main.locator('a[href="/contact"]').last();
    await cta.scrollIntoViewIfNeeded();
    await cta.click();
    await expect(page).toHaveURL('/contact');
  });

  test('rmd page: CTA navigates to /contact', async ({ page }) => {
    await page.goto('/rmd');
    const main = page.locator('main');
    const cta = main.locator('a[href="/contact"]').first();
    await cta.scrollIntoViewIfNeeded();
    await cta.click();
    await expect(page).toHaveURL('/contact');
  });

  test('about page: CTA navigates to /contact', async ({ page }) => {
    await page.goto('/a-propos');
    const main = page.locator('main');
    const cta = main.locator('a[href="/contact"]').last();
    await cta.scrollIntoViewIfNeeded();
    await cta.click();
    await expect(page).toHaveURL('/contact');
  });

  test('testimonials page: CTA navigates to /contact', async ({ page }) => {
    await page.goto('/temoignages');
    const main = page.locator('main');
    const cta = main.locator('a[href="/contact"]').last();
    await cta.scrollIntoViewIfNeeded();
    await cta.click();
    await expect(page).toHaveURL('/contact');
  });
});

// =============================================================================
// External Links (href validation only — no click)
// =============================================================================

test.describe('External links have correct hrefs', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('phone link has correct tel: href', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    const phoneLink = footer.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toHaveAttribute('href', 'tel:+33632185259');
  });

  test('email link has correct mailto: href', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    const emailLink = footer.locator('a[href^="mailto:"]').first();
    await expect(emailLink).toHaveAttribute('href', 'mailto:clemence.reznicek@gmail.com');
  });

  test('Facebook social link has correct href', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    const fbLink = footer.locator('a[aria-label*="Facebook"]');
    await expect(fbLink).toHaveAttribute('href', 'https://www.facebook.com/clemence.reznicek');
  });

  test('Instagram social link has correct href', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    const igLink = footer.locator('a[aria-label*="Instagram"]');
    await expect(igLink).toHaveAttribute('href', 'https://www.instagram.com/clemence.reznicek');
  });

  test('social links open in new tab', async ({ page }) => {
    await page.goto('/');
    const footer = page.getByRole('contentinfo');
    const socialLinks = footer.locator('a[target="_blank"]');
    const count = await socialLinks.count();
    expect(count).toBeGreaterThanOrEqual(3);
    for (let i = 0; i < count; i++) {
      await expect(socialLinks.nth(i)).toHaveAttribute('rel', /noopener/);
    }
  });
});

// =============================================================================
// Page Routing (all pages load without errors)
// =============================================================================

test.describe('All pages load successfully', () => {
  const routes = [
    { name: 'Homepage', path: '/' },
    { name: 'Massages', path: '/massages' },
    { name: 'Soins', path: '/soins' },
    { name: 'RMD', path: '/rmd' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Témoignages', path: '/temoignages' },
    { name: 'Contact', path: '/contact' },
    { name: 'Mentions légales', path: '/mentions-legales' },
  ];

  for (const route of routes) {
    test(`${route.name} (${route.path}) loads without errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (err) => errors.push(err.message));

      const response = await page.goto(route.path, { timeout: 30000 });
      expect(response?.status()).toBe(200);
      expect(errors).toHaveLength(0);
    });
  }
});
