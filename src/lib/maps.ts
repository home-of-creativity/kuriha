/** Kuriha Group office, Damascus — WGS84 from Google Maps. */
export const OFFICE_COORDINATES = {
  lat: 33.5029602,
  lng: 36.2906145,
} as const;

export const OFFICE_MAPS_URL =
  'https://www.google.com/maps/place/Kuriha+group/@33.5029602,36.2906145,17z';

export function getGoogleApiKey(): string {
  return import.meta.env.VITE_GOOGLE_API_KEY ?? '';
}

export function buildOfficeMapEmbedUrl(apiKey: string, language: string): string {
  const params = new URLSearchParams({
    key: apiKey,
    q: `${OFFICE_COORDINATES.lat},${OFFICE_COORDINATES.lng}`,
    zoom: '16',
    language,
  });
  return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
}
