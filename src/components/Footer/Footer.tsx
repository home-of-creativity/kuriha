import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { Logo } from '@/components/ui/Logo/Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher/LanguageSwitcher';
import styles from './Footer.module.css';

const navItems = [
  { key: 'about' as const, href: '#about' },
  { key: 'services' as const, href: '#services' },
  { key: 'systems' as const, href: '#systems' },
  { key: 'clients' as const, href: '#clients' },
  { key: 'contact' as const, href: '#contact' },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.statement}>{t.footer.statement}</p>
          </div>

          <nav className={styles.nav} aria-label="Footer">
            <ul>
              {navItems.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{t.nav[item.key]}</a>
                </li>
              ))}
            </ul>
          </nav>

          <LanguageSwitcher />
        </div>

        <div className={styles.bottom}>
          <p>{t.footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
