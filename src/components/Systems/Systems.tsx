import { useRef, useState } from 'react';
import { systems } from '@/data/systems';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './Systems.module.css';

export function Systems() {
  const { locale, t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useGSAP(
    () => {
      if (!isDesktop || !sectionRef.current) return;

      const panels = gsap.utils.toArray<HTMLElement>('[data-system-panel]');
      const images = gsap.utils.toArray<HTMLElement>('[data-system-image]');

      images.forEach((img, index) => {
        gsap.set(img, {
          opacity: index === 0 ? 1 : 0,
          scale: index === 0 ? 1 : 1.04,
        });
      });

      const showImage = (index: number) => {
        setActiveIndex(index);
        const duration = reducedMotion ? 0 : 0.7;
        images.forEach((img, imageIndex) => {
          const isActive = imageIndex === index;
          gsap.to(img, {
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 1.04,
            duration,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        });
      };

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top 58%',
          end: 'bottom 42%',
          invalidateOnRefresh: true,
          onEnter: () => showImage(index),
          onEnterBack: () => showImage(index),
        });
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: sectionRef, dependencies: [isDesktop, reducedMotion, locale] },
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
          <div data-sticky-media className={styles.stickyMedia}>
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
                <div className={styles.panelMedia}>
                  <img
                    src={system.image}
                    alt={locale === 'ar' ? system.imageAltAr : system.imageAltEn}
                    width={800}
                    height={500}
                    loading={index === 0 ? 'eager' : 'lazy'}
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
