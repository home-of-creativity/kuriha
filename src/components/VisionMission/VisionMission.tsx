import { useRef } from 'react';
import visionImage from '@images/vision-koreiha.png';
import missionImage from '@images/mission-koreiha.png';
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { revealText, setVisibleState } from '@/lib/motion';
import { Container } from '@/components/ui/Container/Container';
import styles from './VisionMission.module.css';

export function VisionMission() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const titleLines = sectionRef.current.querySelectorAll('[data-vm-line]');
      const flamePath = sectionRef.current.querySelector('[data-flame-path]');

      if (reducedMotion) {
        setVisibleState(titleLines);
        if (flamePath) gsap.set(flamePath, { strokeDashoffset: 0 });
        return;
      }

      revealText(titleLines, { trigger: sectionRef.current });

      if (flamePath) {
        const length = (flamePath as SVGPathElement).getTotalLength();
        gsap.set(flamePath, { strokeDasharray: length, strokeDashoffset: length });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.to(flamePath, {
              strokeDashoffset: 0,
              duration: 1.4,
              ease: 'power3.inOut',
            });
          },
        });
      }
    },
    { scope: sectionRef, dependencies: [reducedMotion, t] },
  );

  return (
    <section ref={sectionRef} className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.lineWrap}>
              <span data-vm-line className={styles.line}>
                {t.visionMission.sectionTitle}
              </span>
            </span>
          </h2>
          <svg
            className={styles.flame}
            viewBox="0 0 120 200"
            aria-hidden="true"
            fill="none"
          >
            <path
              data-flame-path
              d="M60 10 C40 50, 20 90, 30 130 C35 155, 50 180, 60 190 C70 180, 85 155, 90 130 C100 90, 80 50, 60 10 Z"
              stroke="#C81E25"
              strokeWidth="1.5"
            />
            <line x1="60" y1="190" x2="60" y2="200" stroke="#C81E25" strokeWidth="1.5" />
          </svg>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardMedia}>
              <img
                src={visionImage}
                alt={t.visionMission.visionImageAlt}
                loading="lazy"
                width={960}
                height={720}
              />
            </div>
            <h3 className={styles.cardTitle}>{t.visionMission.visionTitle}</h3>
            <p className={styles.cardBody}>{t.visionMission.visionBody}</p>
          </article>
          <article className={styles.card}>
            <div className={styles.cardMedia}>
              <img
                src={missionImage}
                alt={t.visionMission.missionImageAlt}
                loading="lazy"
                width={960}
                height={720}
              />
            </div>
            <h3 className={styles.cardTitle}>{t.visionMission.missionTitle}</h3>
            <p className={styles.cardBody}>{t.visionMission.missionBody}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}
