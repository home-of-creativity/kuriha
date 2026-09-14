import { useLanguage } from '@/contexts/LanguageContext';

export function OrganizationSchema() {
  const { locale } = useLanguage();
  const siteUrl = import.meta.env.VITE_SITE_URL ?? '';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: locale === 'ar' ? 'مجموعة قريعة التجارية' : 'KOREIHA GROUP',
    foundingDate: '1960',
    ...(siteUrl ? { url: siteUrl } : {}),
    description:
      locale === 'ar'
        ? 'حلول هندسية متكاملة في تصميم وتوريد وتركيب وصيانة أنظمة الكشف المبكر عن الحرائق والإطفاء.'
        : 'Engineering solutions for fire detection, fire suppression, installation, maintenance and critical infrastructure protection.',
    knowsAbout:
      locale === 'ar'
        ? [
            'أنظمة كشف الحرائق',
            'أنظمة إطفاء الحرائق',
            'الهندسة الصناعية للسلامة',
          ]
        : [
            'Fire detection systems',
            'Fire suppression systems',
            'Industrial safety engineering',
          ],
    areaServed: 'SY',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
