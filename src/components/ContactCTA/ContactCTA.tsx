import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { ContactForm } from '@/components/ContactCTA/ContactForm';
import { OfficeMap } from '@/components/ContactCTA/OfficeMap';
import { Button } from '@/components/ui/Button/Button';
import { getGoogleApiKey, OFFICE_MAPS_URL } from '@/lib/maps';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  const { t, locale } = useLanguage();
  const apiKey = getGoogleApiKey();

  return (
    <section id="contact" className={styles.contact} aria-label="Contact">
      <Container>
        <div className={styles.grid}>
          <div className={styles.media}>
            {apiKey ? (
              <OfficeMap apiKey={apiKey} title={t.contact.mapTitle} locale={locale} />
            ) : (
              <a
                className={styles.mapFallback}
                href={OFFICE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.openMaps}
              </a>
            )}
            <div className={styles.mapMeta}>
              <p className={styles.address}>{t.contact.address}</p>
              <Button href={OFFICE_MAPS_URL} variant="ghost" showArrow className={styles.mapLink}>
                {t.contact.openMaps}
              </Button>
            </div>
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>
              <span>{t.contact.titleLine1}</span>
              <span>{t.contact.titleLine2}</span>
            </h2>
            <p className={styles.body}>{t.contact.body}</p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
