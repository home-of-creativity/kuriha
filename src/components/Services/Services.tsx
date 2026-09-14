import servicesImage from '@images/services-piping.webp';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import styles from './Services.module.css';

export function Services() {
  const { locale, t } = useLanguage();

  return (
    <section id="services" className={styles.services}>
      <Container>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.label}>{t.services.label}</p>
            <h2 className={styles.sectionTitle}>{t.services.title}</h2>
            <p className={styles.intro}>{t.services.body}</p>
            <ul className={styles.highlights} aria-label={t.services.title}>
              {services.map((service) => (
                <li key={service.id} className={styles.highlight}>
                  <span className={styles.highlightNumber}>{service.number}</span>
                  <span>{locale === 'ar' ? service.titleAr : service.titleEn}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.headerMedia}>
            <img
              src={servicesImage}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={960}
              height={640}
            />
          </div>
        </header>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.id} className={styles.card}>
              <span className={styles.number}>{service.number}</span>
              <div className={styles.cardBody}>
                <h3 className={styles.title}>
                  {locale === 'ar' ? service.titleAr : service.titleEn}
                </h3>
                <p className={styles.description}>
                  {locale === 'ar' ? service.descriptionAr : service.descriptionEn}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
