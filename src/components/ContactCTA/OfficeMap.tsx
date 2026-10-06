import { useEffect, useRef, useState } from 'react';
import { OFFICE_COORDINATES, buildOfficeMapEmbedUrl } from '@/lib/maps';
import styles from './OfficeMap.module.css';

type OfficeMapProps = {
  apiKey: string;
  title: string;
  locale: string;
};

const RED = '#c81e25';
const INK = '#1a1817';

const MAP_STYLES: unknown[] = [
  { elementType: 'geometry', stylers: [{ color: '#242120' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#b7b1a8' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: INK }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ visibility: 'off' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#3a3532' }] },
  { featureType: 'road', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { featureType: 'transit', stylers: [{ visibility: 'off' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: INK }] },
];

const PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="56" viewBox="0 0 48 56">
  <path d="M24 2C13.5 2 5 10.3 5 20.6c0 12.4 19 32.4 19 32.4s19-20 19-32.4C43 10.3 34.5 2 24 2z" fill="${RED}"/>
  <circle cx="24" cy="21" r="7.5" fill="${INK}"/>
</svg>
`.trim();

const PIN_URL = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(PIN_SVG)}`;

type MapsApi = {
  Map: new (
    el: HTMLElement,
    opts: Record<string, unknown>,
  ) => {
    setOptions: (opts: Record<string, unknown>) => void;
    setCenter: (pos: { lat: number; lng: number }) => void;
    setZoom: (zoom: number) => void;
  };
  Marker: new (opts: Record<string, unknown>) => {
    addListener: (event: string, fn: () => void) => void;
  };
  InfoWindow: new (opts: Record<string, unknown>) => {
    open: (opts: { map: unknown; anchor: unknown }) => void;
  };
  Size: new (w: number, h: number) => unknown;
  Point: new (x: number, y: number) => unknown;
};

function getMapsApi(): MapsApi | null {
  const google = (window as unknown as { google?: { maps?: MapsApi } }).google;
  const maps = google?.maps;
  return maps?.Map ? maps : null;
}

function loadMapsScript(apiKey: string, language: string): Promise<MapsApi> {
  const existing = getMapsApi();
  if (existing) return Promise.resolve(existing);

  const already = document.querySelector<HTMLScriptElement>('script[data-google-maps]');
  if (already) {
    return new Promise((resolve, reject) => {
      const finish = () => {
        const maps = getMapsApi();
        if (maps) resolve(maps);
        else reject(new Error('Maps failed to load'));
      };
      if (already.dataset.ready === 'true') {
        finish();
        return;
      }
      already.addEventListener('load', finish);
      already.addEventListener('error', () => reject(new Error('Maps failed to load')));
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&language=${language}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = 'true';
    script.onload = () => {
      script.dataset.ready = 'true';
      const maps = getMapsApi();
      if (maps) resolve(maps);
      else reject(new Error('Maps failed to load'));
    };
    script.onerror = () => reject(new Error('Maps failed to load'));
    document.head.appendChild(script);
  });
}

export function OfficeMap({ apiKey, title, locale }: OfficeMapProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [useEmbed, setUseEmbed] = useState(false);
  const language = locale === 'ar' ? 'ar' : 'en';

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    loadMapsScript(apiKey, language)
      .then((maps) => {
        if (cancelled || !hostRef.current) return;

        try {
          (window as unknown as { gm_authFailure?: () => void }).gm_authFailure = () => {
            if (!cancelled) setUseEmbed(true);
          };

          const position = { lat: OFFICE_COORDINATES.lat, lng: OFFICE_COORDINATES.lng };
          const map = new maps.Map(hostRef.current, {
            center: position,
            zoom: 16,
            minZoom: 15,
            maxZoom: 19,
            disableDefaultUI: true,
            zoomControl: true,
            gestureHandling: 'cooperative',
            scrollwheel: true,
            styles: MAP_STYLES,
            clickableIcons: false,
          });

          const recenter = () => {
            map.setCenter(position);
            map.setZoom(16);
          };
          requestAnimationFrame(recenter);
          window.setTimeout(recenter, 400);
          let resizeTimer = 0;
          resizeObserver = new ResizeObserver(() => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(recenter, 120);
          });
          resizeObserver.observe(hostRef.current);

          const safeTitle = title
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;');

          const marker = new maps.Marker({
            map,
            position,
            title,
            icon: {
              url: PIN_URL,
              scaledSize: new maps.Size(44, 52),
              anchor: new maps.Point(22, 52),
            },
          });

          const info = new maps.InfoWindow({
            content: `<p style="margin:0;font:600 14px/1.4 IBM Plex Sans Arabic,sans-serif;color:${INK}">${safeTitle}</p>`,
          });

          marker.addListener('click', () => {
            info.open({ map, anchor: marker });
          });
        } catch {
          setUseEmbed(true);
        }
      })
      .catch(() => {
        if (!cancelled) setUseEmbed(true);
      });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
    };
  }, [apiKey, language, title]);

  return (
    <div className={styles.frame}>
      {useEmbed ? (
        <iframe
          src={buildOfficeMapEmbedUrl(apiKey, language)}
          title={title}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.canvas}
        />
      ) : (
        <div ref={hostRef} role="region" aria-label={title} className={styles.canvas} />
      )}
    </div>
  );
}
