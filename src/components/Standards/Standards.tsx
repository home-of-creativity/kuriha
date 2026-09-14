import { useRef } from 'react';
import { useGSAP } from '@/lib/gsap';
import { staggerChildren, setVisibleState } from '@/lib/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import styles from './Standards.module.css';

export function Standards() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const labels = sectionRef.current.querySelectorAll('[data-standard-label]');
      if (reducedMotion) {
        setVisibleState(labels);
        return;
      }
      staggerChildren(sectionRef.current, '[data-standard-label]', {
        trigger: sectionRef.current,
        start: 'top 80%',
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section ref={sectionRef} className={styles.standards} aria-label="International standards">
      <Container>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            <span>{t.standards.titleLine1}</span>
            <span>{t.standards.titleLine2}</span>
          </h2>
          <ul className={styles.labels}>
            {t.standards.labels.map((label) => (
              <li key={label} data-standard-label className={styles.label}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
