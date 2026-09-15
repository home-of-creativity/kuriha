import { gsap, ScrollTrigger } from '@/lib/gsap';

type MotionTarget = gsap.TweenTarget;
type MotionTrigger = Element | string | null | undefined;

export function isCompactViewport(): boolean {
  return window.matchMedia('(max-width: 767px)').matches;
}

interface RevealOptions {
  trigger?: MotionTrigger;
  start?: string;
  once?: boolean;
  delay?: number;
}

export function revealUp(
  targets: MotionTarget,
  options: RevealOptions = {},
): ScrollTrigger | undefined {
  const { trigger, start = 'top 82%', once = true, delay = 0 } = options;

  gsap.set(targets, { opacity: 0, y: 35 });

  return ScrollTrigger.create({
    trigger: (trigger ?? targets) as Element | string,
    start,
    once,
    onEnter: () => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
      });
    },
  });
}

export function revealText(
  lines: MotionTarget,
  options: RevealOptions = {},
): ScrollTrigger | undefined {
  const { trigger, start = 'top 82%', once = true } = options;
  const compact = isCompactViewport();

  gsap.set(lines, { opacity: 0, yPercent: 100 });

  return ScrollTrigger.create({
    trigger: (trigger ?? lines) as Element | string,
    start,
    once,
    onEnter: () => {
      gsap.to(lines, {
        opacity: 1,
        yPercent: 0,
        duration: compact ? 0.7 : 0.9,
        stagger: compact ? 0.06 : 0.08,
        ease: 'power3.out',
      });
    },
  });
}

export function revealImage(
  wrapper: MotionTarget,
  image: MotionTarget,
  options: RevealOptions = {},
): ScrollTrigger | undefined {
  const { trigger, start = 'top 82%', once = true } = options;
  const compact = isCompactViewport();

  gsap.set(wrapper, { clipPath: 'inset(0 0 100% 0)' });
  gsap.set(image, { scale: compact ? 1.04 : 1.08 });

  let played = false;
  const play = () => {
    if (played) return;
    played = true;
    gsap.to(wrapper, {
      clipPath: 'inset(0 0 0% 0)',
      duration: compact ? 0.9 : 1.1,
      ease: 'power3.inOut',
    });
    gsap.to(image, {
      scale: 1,
      duration: compact ? 0.9 : 1.1,
      ease: 'power3.inOut',
    });
  };

  const scrollTrigger = ScrollTrigger.create({
    trigger: (trigger ?? wrapper) as Element | string,
    start,
    once,
    onEnter: play,
  });

  queueMicrotask(() => {
    ScrollTrigger.refresh();
    if (scrollTrigger.isActive || scrollTrigger.progress > 0) {
      play();
    }
  });

  return scrollTrigger;
}

export function lineReveal(
  line: MotionTarget,
  options: RevealOptions = {},
): ScrollTrigger | undefined {
  const { trigger, start = 'top 82%', once = true } = options;

  gsap.set(line, { scaleX: 0 });

  return ScrollTrigger.create({
    trigger: (trigger ?? line) as Element | string,
    start,
    once,
    onEnter: () => {
      gsap.to(line, {
        scaleX: 1,
        duration: 0.9,
        ease: 'power3.out',
      });
    },
  });
}

export function staggerChildren(
  parent: MotionTarget,
  childSelector: string,
  options: RevealOptions = {},
): ScrollTrigger | undefined {
  const { trigger, start = 'top 82%', once = true } = options;
  const root =
    parent instanceof Element
      ? parent
      : typeof parent === 'string'
        ? document.querySelector(parent)
        : null;

  if (!root) return undefined;

  const children = gsap.utils.toArray<HTMLElement>(childSelector, root);
  if (!children.length) return undefined;

  gsap.set(children, { opacity: 0, y: 35 });

  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    gsap.to(children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.08,
      ease: 'power3.out',
    });
  };

  const scrollTrigger = ScrollTrigger.create({
    trigger: (trigger ?? parent) as Element | string,
    start,
    once,
    onEnter: reveal,
  });

  queueMicrotask(() => {
    ScrollTrigger.refresh();
    if (scrollTrigger.isActive || scrollTrigger.progress > 0) {
      reveal();
    }
  });

  return scrollTrigger;
}

export function subtleParallax(
  target: MotionTarget,
  trigger: MotionTrigger,
  reducedMotion: boolean,
): ScrollTrigger | undefined {
  if (reducedMotion || !trigger) return undefined;

  const compact = isCompactViewport();

  return ScrollTrigger.create({
    trigger: trigger as Element | string,
    start: 'top bottom',
    end: 'bottom top',
    scrub: compact ? 0.6 : true,
    animation: gsap.to(target, {
      yPercent: compact ? -3 : -6,
      ease: 'none',
    }),
  });
}

export function setVisibleState(targets: MotionTarget): void {
  gsap.set(targets, {
    opacity: 1,
    y: 0,
    yPercent: 0,
    scale: 1,
    scaleX: 1,
    clipPath: 'none',
  });
}
