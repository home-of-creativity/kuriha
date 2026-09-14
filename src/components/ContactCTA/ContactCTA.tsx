import contactImage from '@images/contact-phone.webp';
import { useLanguage } from '@/contexts/LanguageContext';
import { Container } from '@/components/ui/Container/Container';
import { ContactForm } from '@/components/ContactCTA/ContactForm';
import styles from './ContactCTA.module.css';

export function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={styles.contact} aria-label="Contact">
      <Container>
        <div className={styles.grid}>
          <div className={styles.media}>
            <img
              src={contactImage}
              alt={t.contact.imageAlt}
              width={1280}
              height={720}
              loading="lazy"
              className={styles.image}
            />
            <div className={styles.mediaOverlay} aria-hidden="true" />
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
