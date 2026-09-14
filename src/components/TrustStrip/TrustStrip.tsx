import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import styles from './TrustStrip.module.css';

export function TrustStrip() {
  const { t } = useLanguage();

  return (
    <section className={styles.strip} aria-label="Trust indicators">
      <Container>
        <ul className={styles.list}>
          {t.trust.items.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.dot} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
