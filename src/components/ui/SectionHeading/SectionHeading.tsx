import { useRef } from 'react';
import { useGSAP } from '@/lib/gsap';
import { revealText } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { setVisibleState } from '@/lib/motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  label?: string;
  line1: string;
  line2?: string;
  theme?: 'dark' | 'light';
  className?: string;
}

export function SectionHeading({
  label,
  line1,
  line2,
  theme = 'dark',
  className = '',
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const lines = ref.current.querySelectorAll('[data-line]');
      if (reducedMotion) {
        setVisibleState(lines);
        return;
      }
      revealText(lines, { trigger: ref.current });
    },
    { scope: ref, dependencies: [reducedMotion, line1, line2] },
  );

  return (
    <div
      ref={ref}
      className={`${styles.heading} ${styles[theme]} ${className}`.trim()}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>
        <span className={styles.lineWrap}>
          <span data-line className={styles.line}>
            {line1}
          </span>
        </span>
        {line2?.trim() ? (
          <span className={styles.lineWrap}>
            <span data-line className={styles.line}>
              {line2}
            </span>
          </span>
        ) : null}
      </h2>
    </div>
  );
}
