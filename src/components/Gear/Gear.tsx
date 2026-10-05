import { equipmentItems, safetyItems, safetyNotes } from '@/data/gear';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import styles from './Gear.module.css';

export function Gear() {
  const { locale } = useLanguage();

  return (
    <section id="gear" className={styles.gear}>
      <Container>
        <h2 className={styles.title}>{locale === 'ar' ? 'معدات الإطفاء' : 'Firefighting Equipment'}</h2>
        <ul className={styles.grid}>
          {equipmentItems.map((item) => (
            <li key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt={locale === 'ar' ? item.nameAr : item.nameEn}
                className={styles.image}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
              />
              <p className={styles.name}>{locale === 'ar' ? item.nameAr : item.nameEn}</p>
            </li>
          ))}
        </ul>

        <h2 className={styles.title}>{locale === 'ar' ? 'الملابس والسلامة' : 'Clothing & Safety'}</h2>
        <ul className={styles.grid}>
          {safetyItems.map((item) => (
            <li key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt={locale === 'ar' ? item.nameAr : item.nameEn}
                className={styles.image}
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
              />
              <p className={styles.name}>{locale === 'ar' ? item.nameAr : item.nameEn}</p>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{locale === 'ar' ? safetyNotes.ar : safetyNotes.en}</p>
      </Container>
    </section>
  );
}
