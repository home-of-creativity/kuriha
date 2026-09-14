import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useGSAP, gsap } from '@/lib/gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { Logo } from '@/components/ui/Logo/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher/LanguageSwitcher';
import { Button } from '@/components/ui/Button/Button';
import styles from './Header.module.css';

const navItems = [
  { key: 'about' as const, href: '#about' },
  { key: 'services' as const, href: '#services' },
  { key: 'systems' as const, href: '#systems' },
  { key: 'clients' as const, href: '#clients' },
  { key: 'contact' as const, href: '#contact' },
];

export function Header() {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useGSAP(
    () => {
      if (!headerRef.current || !innerRef.current || !logoRef.current) return;

      gsap.to(innerRef.current, {
        height: scrolled ? 72 : 88,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.to(logoRef.current, {
        scale: scrolled ? 0.88 : 1,
        duration: 0.5,
        ease: 'power2.out',
      });
    },
    { dependencies: [scrolled] },
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      data-hero-nav
    >
      <Container as="nav" className={styles.nav} aria-label="Main">
        <div ref={innerRef} className={styles.inner}>
          <a href="#" className={styles.logoLink} aria-label="KOREIHA GROUP home">
            <div ref={logoRef}>
              <Logo variant={scrolled ? 'small' : 'default'} />
            </div>
          </a>

          <ul className={styles.desktopNav}>
            {navItems.map((item) => (
              <li key={item.key}>
                <a href={item.href} className={styles.navLink}>
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <LanguageSwitcher />
            <Button href="#contact" variant="primary" className={styles.desktopCta}>
              {t.nav.cta}
            </Button>
            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <Container className={styles.mobileMenuInner}>
          <ul className={styles.mobileNav}>
            {navItems.map((item, index) => (
              <li key={item.key} style={{ transitionDelay: `${index * 0.05}s` }}>
                <a href={item.href} className={styles.mobileNavLink} onClick={closeMenu}>
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileFooter}>
            <LanguageSwitcher />
            <Button href="#contact" variant="primary" showArrow onClick={closeMenu}>
              {t.nav.cta}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
