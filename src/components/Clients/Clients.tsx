import { useRef } from 'react';
import { clients } from '@/data/clients';
import { useGSAP } from '@/lib/gsap';
import { staggerChildren, setVisibleState } from '@/lib/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import styles from './Clients.module.css';

export function Clients() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const items = sectionRef.current.querySelectorAll('[data-client-item]');
      if (reducedMotion) {
        setVisibleState(items);
        return;
      }
      staggerChildren(sectionRef.current, '[data-client-item]', {
        trigger: sectionRef.current,
        start: 'top 82%',
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion, locale] },
  );

  return (
    <section ref={sectionRef} id="clients" className={styles.clients}>
      <Container>
        <header className={styles.header}>
          <p className={styles.subtitle}>{t.clients.subtitle}</p>
          <h2 className={styles.title}>{t.clients.title}</h2>
        </header>

        <ul className={styles.grid}>
          {clients.map((client) => {
            const name = locale === 'ar' ? client.nameAr : client.nameEn;
            return (
              <li key={client.id} data-client-item className={styles.item}>
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={name}
                    className={styles.logo}
                    width={160}
                    height={56}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className={styles.name}>{name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
