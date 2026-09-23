import { useRef } from 'react';
import {
  featuredClients,
  governmentClients,
  privateClients,
  type ClientItem,
} from '@/data/clients';
import { useGSAP } from '@/lib/gsap';
import { staggerChildren, setVisibleState } from '@/lib/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import styles from './Clients.module.css';

function ClientCard({ client, locale, variant }: { client: ClientItem; locale: string; variant: 'card' | 'circle' }) {
  const name = locale === 'ar' ? client.nameAr : client.nameEn;

  return (
    <li data-client-item className={variant === 'circle' ? styles.circleItem : styles.item}>
      {client.logo ? (
        <img
          src={client.logo}
          alt={name}
          className={variant === 'circle' ? styles.circleLogo : styles.logo}
          width={variant === 'circle' ? 88 : 160}
          height={variant === 'circle' ? 88 : 56}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className={styles.name}>{name}</span>
      )}
    </li>
  );
}

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

        <ul className={`${styles.grid} ${styles.featuredGrid}`}>
          {featuredClients.map((client) => (
            <ClientCard key={client.id} client={client} locale={locale} variant="card" />
          ))}
        </ul>

        <h3 className={styles.groupTitle}>{t.clients.governmentTitle}</h3>
        <ul className={styles.circleGrid}>
          {governmentClients.map((client) => (
            <ClientCard key={client.id} client={client} locale={locale} variant="circle" />
          ))}
        </ul>

        <h3 className={styles.groupTitle}>{t.clients.privateTitle}</h3>
        <ul className={styles.grid}>
          {privateClients.map((client) => (
            <ClientCard key={client.id} client={client} locale={locale} variant="card" />
          ))}
        </ul>
      </Container>
    </section>
  );
}
