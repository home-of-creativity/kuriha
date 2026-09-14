import { useRef } from 'react';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import styles from './Stats.module.css';

export function Stats() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const items = sectionRef.current.querySelectorAll('[data-stat]');

      items.forEach((item) => {
        const valueEl = item.querySelector('[data-stat-value]');
        const numeric = item.getAttribute('data-numeric');
        const suffix = item.getAttribute('data-suffix') ?? '';

        if (!valueEl) return;

        if (reducedMotion || !numeric) return;

        const target = Number(numeric);

        ScrollTrigger.create({
          trigger: item,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            const counter = { val: 0 };
            gsap.to(counter, {
              val: target,
              duration: 1.4,
              ease: 'power2.out',
              onUpdate: () => {
                valueEl.textContent = `${Math.round(counter.val)}${suffix}`;
              },
            });
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion, t] },
  );

  return (
    <section ref={sectionRef} className={styles.stats} aria-label="Statistics">
      <Container>
        <ul className={styles.grid}>
          {t.stats.items.map((item) => (
            <li
              key={item.label}
              data-stat
              data-numeric={item.numeric ?? undefined}
              data-suffix={item.suffix ?? undefined}
              className={styles.item}
            >
              <span data-stat-value className={styles.value}>
                {item.value}
              </span>
              <span className={styles.label}>{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
