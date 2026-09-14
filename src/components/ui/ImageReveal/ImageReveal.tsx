import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@/lib/gsap';
import { revealImage, setVisibleState } from '@/lib/motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './ImageReveal.module.css';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  watermark?: ReactNode;
}

export function ImageReveal({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
  watermark,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const wrapper = ref.current.querySelector('[data-reveal-wrapper]');
      const image = ref.current.querySelector('[data-reveal-image]');
      if (!wrapper || !image) return;

      if (reducedMotion) {
        setVisibleState([wrapper, image]);
        return;
      }

      revealImage(wrapper, image, { trigger: ref.current });
    },
    { scope: ref, dependencies: [reducedMotion, src] },
  );

  return (
    <div ref={ref} className={`${styles.root} ${className}`.trim()}>
      <div data-reveal-wrapper className={styles.wrapper}>
        <img
          data-reveal-image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          className={styles.image}
        />
        {watermark}
      </div>
    </div>
  );
}
