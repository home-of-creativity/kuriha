import logo from '@brand/kuriha-logo.webp';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'small' | 'hero';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  const { locale } = useLanguage();
  const dimensions =
    variant === 'hero'
      ? { width: 640, height: 186 }
      : variant === 'small'
        ? { width: 180, height: 52 }
        : { width: 220, height: 64 };

  return (
    <img
      src={logo}
      alt={locale === 'ar' ? 'مجموعة قريعة' : 'KOREIHA GROUP'}
      className={`${styles.logo} ${styles[variant]} ${className}`.trim()}
      width={dimensions.width}
      height={dimensions.height}
    />
  );
}
