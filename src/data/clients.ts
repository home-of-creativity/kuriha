import chamBankLogo from '@clients/cham-bank.webp';
import syrianPetroleumLogo from '@clients/syrian-petroleum.svg';
import syriatelLogo from '@clients/syriatel.svg';
import faoLogo from '@clients/fao.svg';
import whoLogo from '@clients/who.svg';
import unicefLogo from '@clients/unicef.svg';
import ministryCultureLogo from '@clients/ministry-culture.svg';

export type ClientGroup = 'featured' | 'government' | 'private';

export interface ClientItem {
  id: string;
  nameAr: string;
  nameEn: string;
  logo?: string;
  group: ClientGroup;
}

export const clients: ClientItem[] = [
  {
    id: 'featured-ministry-culture',
    nameAr: 'وزارة الثقافة',
    nameEn: 'Ministry of Culture',
    logo: ministryCultureLogo,
    group: 'featured',
  },
  {
    id: 'featured-badia-cement',
    nameAr: 'اسمنت البادية',
    nameEn: 'Al-Badia Cement',
    group: 'featured',
  },
  {
    id: 'featured-golden-gate',
    nameAr: 'البوابة الذهبية – GOLDEN GATE',
    nameEn: 'Golden Gate',
    group: 'featured',
  },
  {
    id: 'featured-land-sea-ports',
    nameAr: 'الهيئة العامة للمنافذ البرية والبحرية',
    nameEn: 'General Authority for Land and Sea Ports',
    group: 'featured',
  },
  {
    id: 'featured-golden-1',
    nameAr: 'GOLDEN 1',
    nameEn: 'GOLDEN 1',
    group: 'featured',
  },
  {
    id: 'featured-emergency',
    nameAr: 'وزارة الطوارئ وإدارة الكوارث',
    nameEn: 'Ministry of Emergency and Disaster Management',
    group: 'featured',
  },
  {
    id: 'gov-ports-customs',
    nameAr: 'الهيئة العامة للمنافذ والجمارك',
    nameEn: 'General Authority for Ports and Customs',
    group: 'government',
  },
  {
    id: 'gov-ports',
    nameAr: 'المؤسسة العامة للموانئ',
    nameEn: 'General Establishment of Ports',
    group: 'government',
  },
  {
    id: 'gov-energy',
    nameAr: 'وزارة الطاقة',
    nameEn: 'Ministry of Energy',
    group: 'government',
  },
  {
    id: 'gov-culture',
    nameAr: 'وزارة الثقافة',
    nameEn: 'Ministry of Culture',
    logo: ministryCultureLogo,
    group: 'government',
  },
  {
    id: 'gov-interior',
    nameAr: 'وزارة الداخلية',
    nameEn: 'Ministry of Interior',
    group: 'government',
  },
  {
    id: 'gov-education',
    nameAr: 'وزارة التربية',
    nameEn: 'Ministry of Education',
    group: 'government',
  },
  {
    id: 'gov-petroleum',
    nameAr: 'السورية للبترول',
    nameEn: 'Syrian Petroleum Company',
    logo: syrianPetroleumLogo,
    group: 'government',
  },
  {
    id: 'private-hasseb',
    nameAr: 'حسيب',
    nameEn: 'Hasseb',
    group: 'private',
  },
  {
    id: 'private-badia-cement',
    nameAr: 'اسمنت البادية',
    nameEn: 'Al-Badia Cement',
    group: 'private',
  },
  {
    id: 'private-unicef',
    nameAr: 'اليونيسف',
    nameEn: 'UNICEF',
    logo: unicefLogo,
    group: 'private',
  },
  {
    id: 'private-fao',
    nameAr: 'منظمة الأغذية العالمية',
    nameEn: 'World Food Programme',
    logo: faoLogo,
    group: 'private',
  },
  {
    id: 'private-who',
    nameAr: 'منظمة الصحة العالمية',
    nameEn: 'World Health Organization',
    logo: whoLogo,
    group: 'private',
  },
  {
    id: 'private-golden-gate',
    nameAr: 'البوابة الذهبية – GOLDEN GATE',
    nameEn: 'Golden Gate',
    group: 'private',
  },
  {
    id: 'private-syriatel',
    nameAr: 'سيريتيل',
    nameEn: 'Syriatel',
    logo: syriatelLogo,
    group: 'private',
  },
  {
    id: 'private-mtn',
    nameAr: 'إم تي إن',
    nameEn: 'MTN',
    group: 'private',
  },
  {
    id: 'private-cham-bank',
    nameAr: 'بنك الشام',
    nameEn: 'Cham Bank',
    logo: chamBankLogo,
    group: 'private',
  },
  {
    id: 'private-cham-city',
    nameAr: 'شام سيتي سنتر',
    nameEn: 'Cham City Center',
    group: 'private',
  },
  {
    id: 'private-children-hospital',
    nameAr: 'مستشفى الأطفال بدمشق',
    nameEn: "Children's Hospital in Damascus",
    group: 'private',
  },
  {
    id: 'private-joud',
    nameAr: 'شركة جود',
    nameEn: 'Joud Company',
    group: 'private',
  },
  {
    id: 'private-nestle',
    nameAr: 'شركة نسلة',
    nameEn: 'Nestlé',
    group: 'private',
  },
  {
    id: 'private-sugar',
    nameAr: 'معمل الشرق الأوسط للسكر',
    nameEn: 'Middle East Sugar Factory',
    group: 'private',
  },
  {
    id: 'private-zain-marble',
    nameAr: 'شركة زين للرخام والجرانيت',
    nameEn: 'Zain Marble and Granite',
    group: 'private',
  },
  {
    id: 'private-miamed',
    nameAr: 'معمل MIAMED للصناعات الدوائية',
    nameEn: 'MIAMED Pharmaceuticals',
    group: 'private',
  },
];

export const featuredClients = clients.filter((client) => client.group === 'featured');
export const governmentClients = clients.filter((client) => client.group === 'government');
export const privateClients = clients.filter((client) => client.group === 'private');
