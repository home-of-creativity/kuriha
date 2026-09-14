import type { ReactNode, MouseEventHandler } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  showArrow = false,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const { isRtl } = useLanguage();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span>{children}</span>
        {showArrow && <Arrow size={16} aria-hidden="true" className={styles.arrow} />}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      <span>{children}</span>
      {showArrow && <Arrow size={16} aria-hidden="true" className={styles.arrow} />}
    </button>
  );
}
