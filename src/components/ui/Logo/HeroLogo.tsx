import logoSvg from '@brand/لوغو-قريعة.svg?raw';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './HeroLogo.module.css';

const flamePattern =
  /<path class="st1" d="(M351\.22,250\.1[\s\S]*?250\.1z) (M326\.73[\s\S]*?284\.94z)"\/>/;

function withFlame(svg: string) {
  return svg
    .replace(/<\?xml[\s\S]*?\?>/, '')
    .replace(/<style[\s\S]*?<\/style>/, '')
    .replace('viewBox="0 0 512 512"', 'viewBox="0 188 512 230"')
    .replace(
      flamePattern,
      `<g class="flame">
        <g class="tongue tongueOuter"><path d="$1"/></g>
        <g class="tongue tongueCore"><path d="$2"/></g>
        <path class="wisp wispA" d="M338 236c6-10 2-22-2-28-3 8-8 16-4 28 2 2 4 2 6 0z"/>
        <path class="wisp wispB" d="M346 244c5-8 1-18-1-22-2 6-6 12-3 22 1 1 3 1 4 0z"/>
      </g>`,
    );
}

const markup = withFlame(logoSvg);

interface HeroLogoProps {
  className?: string;
}

export function HeroLogo({ className = '' }: HeroLogoProps) {
  const { locale } = useLanguage();
  const label = locale === 'ar' ? 'مجموعة قريعة' : 'KOREIHA GROUP';

  return (
    <div
      className={`${styles.logo} ${className}`.trim()}
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
