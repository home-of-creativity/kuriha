import { useRef, useState } from 'react';
import { systems } from '@/data/systems';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './Systems.module.css';

export function Systems() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1200px)', () => {
        const panels = gsap.utils.toArray<HTMLElement>('[data-system-panel]');
        const images = gsap.utils.toArray<HTMLElement>('[data-system-image]');

        panels.forEach((panel, index) => {
          ScrollTrigger.create({
            trigger: panel,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        });

        images.forEach((img, index) => {
          if (index === 0 || reducedMotion) {
            gsap.set(img, { opacity: 1, scale: 1, clipPath: 'inset(0 0 0% 0)' });
          } else {
            gsap.set(img, { opacity: 0, scale: 1.03, clipPath: 'inset(0 0 100% 0)' });
          }
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [reducedMotion, locale] },
  );

  useGSAP(
    () => {
      if (reducedMotion) return;

      const images = sectionRef.current?.querySelectorAll('[data-system-image]');
      if (!images) return;

      images.forEach((img, index) => {
        if (index === activeIndex) {
          gsap.to(img, {
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.8,
            ease: 'power3.out',
          });
        } else {
          gsap.to(img, {
            opacity: 0,
            scale: 1.03,
            duration: 0.8,
            ease: 'power3.out',
          });
        }
      });
    },
    { scope: sectionRef, dependencies: [activeIndex, reducedMotion] },
  );

  return (
    <section ref={sectionRef} id="systems" className={styles.systems}>
      <Container>
        <SectionHeading
          theme="dark"
          label={t.systems.label}
          line1={t.systems.titleLine1}
          line2={t.systems.titleLine2}
        />

        <div className={styles.layout}>
          <div className={styles.stickyMedia}>
            <div className={styles.mediaStack}>
              {systems.map((system, index) => (
                <img
                  key={system.id}
                  data-system-image
                  src={system.image}
                  alt={locale === 'ar' ? system.imageAltAr : system.imageAltEn}
                  className={`${styles.systemImage} ${index === activeIndex ? styles.activeImage : ''}`}
                  width={800}
                  height={600}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          </div>

          <div className={styles.panels}>
            {systems.map((system, index) => (
              <article
                key={system.id}
                data-system-panel
                className={`${styles.panel} ${index === activeIndex ? styles.panelActive : ''}`}
              >
                <div className={styles.mobileImage}>
                  <img
                    src={system.image}
                    alt={locale === 'ar' ? system.imageAltAr : system.imageAltEn}
                    width={800}
                    height={600}
                    loading="lazy"
                  />
                </div>
                <h3 className={styles.panelTitle}>
                  {locale === 'ar' ? system.titleAr : system.titleEn}
                </h3>
                <ul className={styles.topics}>
                  {(locale === 'ar' ? system.topicsAr : system.topicsEn).map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
