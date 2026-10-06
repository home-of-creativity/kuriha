import logo from '@brand/kuriha-logo.webp';
import logoDark from '@brand/kuriha-logo-dark.webp';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'small' | 'hero';
  ink?: 'white' | 'black';
}

export function Logo({ className = '', variant = 'default', ink = 'white' }: LogoProps) {
  const { locale } = useLanguage();
  const dimensions =
    variant === 'hero'
      ? { width: 640, height: 639 }
      : variant === 'small'
        ? { width: 52, height: 52 }
        : { width: 64, height: 64 };

  return (
    <img
      src={ink === 'black' ? logoDark : logo}
      alt={locale === 'ar' ? 'مجموعة قريعة' : 'KOREIHA GROUP'}
      className={`${styles.logo} ${styles[variant]} ${className}`.trim()}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}
