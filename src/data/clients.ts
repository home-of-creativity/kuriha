import chamBankLogo from '@clients/cham-bank.webp';
import syrianPetroleumLogo from '@clients/syrian-petroleum.svg';
import arabBankLogo from '@clients/arab-bank.svg';
import syriatelLogo from '@clients/syriatel.svg';
import faoLogo from '@clients/fao.svg';
import whoLogo from '@clients/who.svg';
import unicefLogo from '@clients/unicef.svg';
import unhcrLogo from '@clients/unhcr.svg';
import syriaInternationalLogo from '@clients/syria-international.webp';
import ministryCultureLogo from '@clients/ministry-culture.svg';
import bankSyriaLogo from '@clients/bank-syria.webp';

export interface ClientItem {
  id: string;
  nameAr: string;
  nameEn: string;
  logo?: string;
}

export const clients: ClientItem[] = [
  { id: 'cham-bank', nameAr: 'بنك الشام', nameEn: 'Cham Bank', logo: chamBankLogo },
  {
    id: 'syrian-petroleum',
    nameAr: 'شركة النفط السورية',
    nameEn: 'Syrian Petroleum Company',
    logo: syrianPetroleumLogo,
  },
  { id: 'mega-pharma', nameAr: 'ميغا فارما', nameEn: 'Mega Pharma' },
  { id: 'arab-bank', nameAr: 'البنك العربي', nameEn: 'Arab Bank', logo: arabBankLogo },
  { id: 'scs', nameAr: 'الجمعية السورية للحاسوب', nameEn: 'Syrian Computer Society' },
  { id: 'cham-city', nameAr: 'شام سيتي سنتر', nameEn: 'Cham City Center' },
  { id: 'syriatel', nameAr: 'سيرياتيل', nameEn: 'Syriatel', logo: syriatelLogo },
  { id: 'alsham-school', nameAr: 'مدرسة الشام الخاصة', nameEn: 'Al Sham Private School' },
  { id: 'fao', nameAr: 'منظمة الأغذية والزراعة', nameEn: 'FAO', logo: faoLogo },
  { id: 'who', nameAr: 'منظمة الصحة العالمية', nameEn: 'WHO', logo: whoLogo },
  {
    id: 'children-hospital',
    nameAr: 'مستشفى الأطفال - جامعة دمشق',
    nameEn: "Damascus University Children's Hospital",
  },
  { id: 'unicef', nameAr: 'يونيسف', nameEn: 'UNICEF', logo: unicefLogo },
  { id: 'cinema-city', nameAr: 'سينما سيتي', nameEn: 'Cinema City' },
  { id: 'citizen-service', nameAr: 'مركز خدمة المواطن', nameEn: 'Citizen Service Center' },
  {
    id: 'syria-international',
    nameAr: 'سوريا إنترناشيونال',
    nameEn: 'Syria International',
    logo: syriaInternationalLogo,
  },
  {
    id: 'ministry-culture',
    nameAr: 'وزارة الثقافة',
    nameEn: 'Ministry of Culture',
    logo: ministryCultureLogo,
  },
  { id: 'hasseb', nameAr: 'حسيب', nameEn: 'Hasseb' },
  {
    id: 'unhcr',
    nameAr: 'المفوضية السامية للاجئين',
    nameEn: 'UNHCR',
    logo: unhcrLogo,
  },
  {
    id: 'bank-syria',
    nameAr: 'بنك سورية والمهجر',
    nameEn: 'Bank of Syria and Overseas',
    logo: bankSyriaLogo,
  },
];
