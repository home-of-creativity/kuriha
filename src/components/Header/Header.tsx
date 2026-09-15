import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      data-hero-nav
    >
      <Container as="nav" className={styles.nav} aria-label="Main">
        <div className={styles.inner}>
          <a href="#" className={styles.logoLink} aria-label="KOREIHA GROUP home">
            <Logo variant={scrolled ? 'small' : 'default'} />
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
    </header>

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
    </>
  );
}
