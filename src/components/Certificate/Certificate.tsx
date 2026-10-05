import { useRef } from 'react';
import certificateImage from '@images/company-registration-certificate.webp';
import { useGSAP } from '@/lib/gsap';
import { revealImage, setVisibleState } from '@/lib/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './Certificate.module.css';

export function Certificate() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const wrapper = sectionRef.current.querySelector('[data-reveal-wrapper]');
      const image = sectionRef.current.querySelector('[data-reveal-image]');

      if (!wrapper || !image) return;

      if (reducedMotion) {
        setVisibleState([wrapper, image]);
        return;
      }

      revealImage(wrapper, image, { trigger: sectionRef.current });
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section ref={sectionRef} className={styles.certificate} aria-label={t.certificate.title}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            theme="light"
            label={t.certificate.label}
            line1={t.certificate.title}
          />
          <p className={styles.body}>{t.certificate.body}</p>
        </div>

        <div data-reveal-wrapper className={styles.frame}>
          <img
            data-reveal-image
            src={certificateImage}
            alt={t.certificate.imageAlt}
            width={723}
            height={1024}
            loading="lazy"
            className={styles.image}
          />
        </div>
      </Container>
    </section>
  );
}
