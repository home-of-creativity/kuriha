import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`${styles.switcher} ${className}`.trim()} role="group" aria-label="Language">
      <button
        type="button"
        className={`${styles.langBtn} ${locale === 'ar' ? styles.active : ''}`}
        onClick={() => setLocale('ar')}
        aria-pressed={locale === 'ar'}
      >
        AR
      </button>
      <span className={styles.divider} aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`${styles.langBtn} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  );
}
