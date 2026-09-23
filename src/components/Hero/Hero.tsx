import { useRef } from 'react';
import heroImage from '@images/hero-pump-room.webp';
import { useGSAP, gsap } from '@/lib/gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { isCompactViewport, setVisibleState } from '@/lib/motion';
import { Container } from '@/components/ui/Container/Container';
import { Button } from '@/components/ui/Button/Button';
import { Logo } from '@/components/ui/Logo/Logo';
import styles from './Hero.module.css';

export function Hero() {
  const { t, isRtl } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const nav = document.querySelector('[data-hero-nav]');
      const eyebrow = sectionRef.current.querySelector('[data-hero-eyebrow]');
      const lines = sectionRef.current.querySelectorAll('[data-hero-line]');
      const paragraph = sectionRef.current.querySelector('[data-hero-paragraph]');
      const buttons = sectionRef.current.querySelectorAll('[data-hero-button]');
      const image = sectionRef.current.querySelector('[data-hero-image]');
      const accent = sectionRef.current.querySelector('[data-hero-accent]');
      const logo = sectionRef.current.querySelector('[data-hero-logo]');

      const compact = isCompactViewport();

      if (reducedMotion) {
        setVisibleState([nav, eyebrow, ...lines, paragraph, ...buttons, image, accent, logo].filter(Boolean));
        return;
      }

      gsap.set(nav, { opacity: 0, y: -20 });
      gsap.set(eyebrow, { opacity: 0 });
      gsap.set(lines, { yPercent: 110 });
      gsap.set(paragraph, { opacity: 0, y: 20 });
      gsap.set(buttons, { opacity: 0, y: 15 });
      gsap.set(image, { scale: compact ? 1.05 : 1.06 });
      gsap.set(logo, { opacity: 0, y: 24 });
      gsap.set(accent, { scaleX: 0, transformOrigin: isRtl ? 'right center' : 'left center' });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(nav, { opacity: 1, y: 0, duration: 0.6 })
        .to(image, { scale: 1, duration: compact ? 1.2 : 1.6, ease: 'power2.out' }, 0)
        .to(logo, { opacity: 1, y: 0, duration: 0.9 }, '-=1.2')
        .to(eyebrow, { opacity: 1, duration: 0.5 }, '-=0.8')
        .to(lines, { yPercent: 0, duration: compact ? 0.85 : 1.1, stagger: compact ? 0.08 : 0.12 }, '-=0.6')
        .to(paragraph, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .to(buttons, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, '-=0.4')
        .to(accent, { scaleX: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6');
    },
    { scope: sectionRef, dependencies: [reducedMotion, isRtl] },
  );

  return (
    <section ref={sectionRef} className={styles.hero} aria-label="Hero">
      <div className={styles.media}>
        <img
          data-hero-image
          src={heroImage}
          alt={t.hero.imageAlt}
          className={styles.image}
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <Container className={styles.content}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p data-hero-eyebrow className={styles.eyebrow}>
              {t.hero.eyebrow}
            </p>

            <h1 className={styles.title}>
              <span className={styles.lineWrap}>
                <span data-hero-line className={styles.line}>
                  {t.hero.titleLine1}
                </span>
              </span>
              <span className={styles.lineWrap}>
                <span data-hero-line className={styles.line}>
                  {t.hero.titleLine2}
                </span>
              </span>
            </h1>

            <span data-hero-accent className={styles.accent} aria-hidden="true" />

            <p data-hero-paragraph className={styles.description}>
              {t.hero.description}
            </p>

            <div className={styles.actions}>
              <span data-hero-button>
                <Button href="#systems" variant="primary" showArrow>
                  {t.hero.primaryCta}
                </Button>
              </span>
              <span data-hero-button>
                <Button href="#contact" variant="secondary">
                  {t.hero.secondaryCta}
                </Button>
              </span>
            </div>

            <p className={styles.standards}>{t.hero.standards}</p>
          </div>

          <div data-hero-logo className={styles.logoCol}>
            <Logo variant="hero" className={styles.heroLogo} />
          </div>
        </div>
      </Container>
    </section>
  );
}
