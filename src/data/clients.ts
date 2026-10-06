import featuredCultureLogo from '@clients/trust_us/ministry-culture.svg';
import featuredBadiaLogo from '@clients/trust_us/Al-Badia_cement.svg';
import featuredEmergencyLogo from '@clients/trust_us/Ministry_of_Emergency_and_Disasters.png';
import featuredGoldenLogo from '@clients/trust_us/golden.svg';

import govCustomsLogo from '@clients/public/General_Authority_for_Customs_Ports.png';
import govCultureLogo from '@clients/public/ministry-culture.svg';
import govEducationLogo from '@clients/public/Ministry_of_Education.png';
import govEnergyLogo from '@clients/public/Ministry_of_energy.png';
import govInteriorLogo from '@clients/public/Ministry_of_Interior.png';
import govPetroleumLogo from '@clients/public/syria_petroleum.png';
import govPortsLogo from '@clients/public/ports.svg';

import privateHaseebLogo from '@clients/private/haseeb.png';
import privateBadiaLogo from '@clients/private/Al-Badia_cement.svg';
import privateUnicefLogo from '@clients/private/unicef.png';
import privateFaoLogo from '@clients/private/fao.png';
import privateWhoLogo from '@clients/private/who.svg';
import privateGoldenLogo from '@clients/private/golden.svg';
import privateSyriatelLogo from '@clients/private/syriatel.png';
import privateMtnLogo from '@clients/private/mtn.png';
import privateChamBankLogo from '@clients/private/cham_bank.png';
import privateChamCityLogo from '@clients/private/cham_city_center.png';
import privateKidsHospitalLogo from '@clients/private/kids_hospital.png';
import privateJoudLogo from '@clients/private/joud.svg';
import privateNestleLogo from '@clients/private/nestle.png';
import privateZainLogo from '@clients/private/zain-marble.svg';
import privateMiamedLogo from '@clients/private/MIAMED.png';

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
    id: 'featured-emergency',
    nameAr: 'وزارة الطوارئ وإدارة الكوارث',
    nameEn: 'Ministry of Emergency and Disaster Management',
    logo: featuredEmergencyLogo,
    group: 'featured',
  },
  {
    id: 'featured-ministry-culture',
    nameAr: 'وزارة الثقافة',
    nameEn: 'Ministry of Culture',
    logo: featuredCultureLogo,
    group: 'featured',
  },
  {
    id: 'featured-badia-cement',
    nameAr: 'اسمنت البادية',
    nameEn: 'Al-Badia Cement',
    logo: featuredBadiaLogo,
    group: 'featured',
  },
  {
    id: 'featured-golden-gate',
    nameAr: 'البوابة الذهبية – GOLDEN GATE',
    nameEn: 'Golden Gate',
    logo: featuredGoldenLogo,
    group: 'featured',
  },
  {
    id: 'featured-land-sea-ports',
    nameAr: 'الهيئة العامة للمنافذ البرية والبحرية',
    nameEn: 'General Authority for Land and Sea Ports',
    logo: govCustomsLogo,
    group: 'featured',
  },
  {
    id: 'gov-ports-customs',
    nameAr: 'الهيئة العامة للمنافذ والجمارك',
    nameEn: 'General Authority for Ports and Customs',
    logo: govCustomsLogo,
    group: 'government',
  },
  {
    id: 'gov-ports',
    nameAr: 'المؤسسة العامة للموانئ',
    nameEn: 'General Establishment of Ports',
    logo: govPortsLogo,
    group: 'government',
  },
  {
    id: 'gov-energy',
    nameAr: 'وزارة الطاقة',
    nameEn: 'Ministry of Energy',
    logo: govEnergyLogo,
    group: 'government',
  },
  {
    id: 'gov-culture',
    nameAr: 'وزارة الثقافة',
    nameEn: 'Ministry of Culture',
    logo: govCultureLogo,
    group: 'government',
  },
  {
    id: 'gov-interior',
    nameAr: 'وزارة الداخلية',
    nameEn: 'Ministry of Interior',
    logo: govInteriorLogo,
    group: 'government',
  },
  {
    id: 'gov-education',
    nameAr: 'وزارة التربية',
    nameEn: 'Ministry of Education',
    logo: govEducationLogo,
    group: 'government',
  },
  {
    id: 'gov-petroleum',
    nameAr: 'السورية للبترول',
    nameEn: 'Syrian Petroleum Company',
    logo: govPetroleumLogo,
    group: 'government',
  },
  {
    id: 'private-hasseb',
    nameAr: 'حسيب',
    nameEn: 'Hasseb',
    logo: privateHaseebLogo,
    group: 'private',
  },
  {
    id: 'private-badia-cement',
    nameAr: 'اسمنت البادية',
    nameEn: 'Al-Badia Cement',
    logo: privateBadiaLogo,
    group: 'private',
  },
  {
    id: 'private-unicef',
    nameAr: 'اليونيسف',
    nameEn: 'UNICEF',
    logo: privateUnicefLogo,
    group: 'private',
  },
  {
    id: 'private-fao',
    nameAr: 'منظمة الأغذية العالمية',
    nameEn: 'World Food Programme',
    logo: privateFaoLogo,
    group: 'private',
  },
  {
    id: 'private-who',
    nameAr: 'منظمة الصحة العالمية',
    nameEn: 'World Health Organization',
    logo: privateWhoLogo,
    group: 'private',
  },
  {
    id: 'private-golden-gate',
    nameAr: 'البوابة الذهبية – GOLDEN GATE',
    nameEn: 'Golden Gate',
    logo: privateGoldenLogo,
    group: 'private',
  },
  {
    id: 'private-syriatel',
    nameAr: 'سيريتيل',
    nameEn: 'Syriatel',
    logo: privateSyriatelLogo,
    group: 'private',
  },
  {
    id: 'private-mtn',
    nameAr: 'إم تي إن',
    nameEn: 'MTN',
    logo: privateMtnLogo,
    group: 'private',
  },
  {
    id: 'private-cham-bank',
    nameAr: 'بنك الشام',
    nameEn: 'Cham Bank',
    logo: privateChamBankLogo,
    group: 'private',
  },
  {
    id: 'private-cham-city',
    nameAr: 'شام سيتي سنتر',
    nameEn: 'Cham City Center',
    logo: privateChamCityLogo,
    group: 'private',
  },
  {
    id: 'private-children-hospital',
    nameAr: 'مستشفى الأطفال بدمشق',
    nameEn: "Children's Hospital in Damascus",
    logo: privateKidsHospitalLogo,
    group: 'private',
  },
  {
    id: 'private-joud',
    nameAr: 'شركة جود',
    nameEn: 'Joud Company',
    logo: privateJoudLogo,
    group: 'private',
  },
  {
    id: 'private-nestle',
    nameAr: 'شركة نسلة',
    nameEn: 'Nestlé',
    logo: privateNestleLogo,
    group: 'private',
  },
  {
    id: 'private-zain-marble',
    nameAr: 'شركة زين للرخام والجرانيت',
    nameEn: 'Zain Marble and Granite',
    logo: privateZainLogo,
    group: 'private',
  },
  {
    id: 'private-miamed',
    nameAr: 'معمل MIAMED للصناعات الدوائية',
    nameEn: 'MIAMED Pharmaceuticals',
    logo: privateMiamedLogo,
    group: 'private',
  },
];

export const featuredClients = clients.filter((client) => client.group === 'featured');
export const governmentClients = clients.filter((client) => client.group === 'government');
export const privateClients = clients.filter((client) => client.group === 'private');
