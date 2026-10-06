import { useRef } from 'react';
import aboutImage from '@images/about-engineer.webp';
import { useGSAP } from '@/lib/gsap';
import { revealImage, subtleParallax, setVisibleState } from '@/lib/motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Container } from '@/components/ui/Container/Container';
import { SectionHeading } from '@/components/ui/SectionHeading/SectionHeading';
import styles from './About.module.css';

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const media = sectionRef.current.querySelector('[data-parallax-media]');
      const wrapper = sectionRef.current.querySelector('[data-reveal-wrapper]');
      const image = sectionRef.current.querySelector('[data-reveal-image]');

      if (!wrapper || !image) return;

      if (reducedMotion) {
        setVisibleState([wrapper, image]);
        return;
      }

      revealImage(wrapper, image, { trigger: sectionRef.current });
      // Parallax moves the whole framed image (not the photo inside its clipped frame),
      // so no part of the photo is ever cut off.
      if (media) subtleParallax(media, sectionRef.current, reducedMotion);
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
    <section ref={sectionRef} id="about" className={styles.about}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.rule} aria-hidden="true" />
            <SectionHeading
              theme="light"
              label={t.about.label}
              line1={t.about.titleLine1}
              line2={t.about.titleLine2}
            />
            <p className={styles.body}>{t.about.body1}</p>
            <p className={styles.body}>{t.about.body2}</p>
          </div>

          <div className={styles.mediaCol}>
            <div data-parallax-media className={styles.media}>
              <div data-reveal-wrapper className={styles.imageWrap}>
                <img
                  data-reveal-image
                  src={aboutImage}
                  alt={t.about.imageAlt}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
