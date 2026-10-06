import { useEffect, useState } from 'react';
import { equipmentItems, safetyItems, safetyNotes, type GearItem } from '@/data/gear';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import styles from './Gear.module.css';

interface ApiProduct {
  slug: string;
  name_ar: string;
  name_en: string;
  summary_ar: string | null;
  summary_en: string | null;
  category: 'equipment' | 'safety';
  image_url: string | null;
}

const localImages = Object.fromEntries(
  [...equipmentItems, ...safetyItems].map((item) => [item.id, item.image]),
) as Record<string, string>;

function toCard(product: ApiProduct): GearItem {
  return {
    id: product.slug,
    nameAr: product.name_ar,
    nameEn: product.name_en,
    image: product.image_url || localImages[product.slug] || '',
  };
}

export function Gear() {
  const { locale } = useLanguage();
  const [equipment, setEquipment] = useState(equipmentItems);
  const [safety, setSafety] = useState(safetyItems);

  useEffect(() => {
    const base = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
    fetch(`${base}/api/products`, { headers: { Accept: 'application/json' } })
      .then((response) => (response.ok ? response.json() : Promise.reject()))
      .then((body: { data?: ApiProduct[] }) => {
        const products = body.data ?? [];
        if (products.length === 0) return;
        const equipmentCards = products.filter((item) => item.category === 'equipment').map(toCard);
        const safetyCards = products.filter((item) => item.category === 'safety').map(toCard);
        if (equipmentCards.length) setEquipment(equipmentCards);
        if (safetyCards.length) setSafety(safetyCards);
      })
      .catch(() => undefined);
  }, []);

  return (
    <section id="products" className={styles.gear}>
      <Container>
        <h2 className={styles.title}>{locale === 'ar' ? 'معدات الإطفاء' : 'Firefighting Equipment'}</h2>
        <ul className={styles.grid}>
          {equipment.map((item) => (
            <li key={item.id} className={styles.card}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={locale === 'ar' ? item.nameAr : item.nameEn}
                  className={`${styles.image} ${styles.imageFill}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <p className={styles.name}>{locale === 'ar' ? item.nameAr : item.nameEn}</p>
            </li>
          ))}
        </ul>

        <h2 className={styles.title}>{locale === 'ar' ? 'الملابس والسلامة' : 'Clothing & Safety'}</h2>
        <ul className={styles.grid}>
          {safety.map((item) => (
            <li key={item.id} className={styles.card}>
              {item.image ? (
                <img
                  src={item.image}
                  alt={locale === 'ar' ? item.nameAr : item.nameEn}
                  className={`${styles.image} ${styles.imageFill}`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              ) : null}
              <p className={styles.name}>{locale === 'ar' ? item.nameAr : item.nameEn}</p>
            </li>
          ))}
        </ul>
        <p className={styles.note}>{locale === 'ar' ? safetyNotes.ar : safetyNotes.en}</p>
      </Container>
    </section>
  );
}
