import extinguisher from '@images/equipment/extinguisher.webp';
import hoseCabinet from '@images/equipment/hose-cabinet.webp';
import ladder from '@images/equipment/ladder.webp';
import nozzle from '@images/equipment/nozzle.webp';
import helmet from '@images/ppe/helmet.webp';
import turnout from '@images/ppe/turnout.webp';
import boots from '@images/ppe/boots.webp';
import gloves from '@images/ppe/gloves.webp';

export interface GearItem {
  id: string;
  nameAr: string;
  nameEn: string;
  image: string;
}

export const equipmentItems: GearItem[] = [
  { id: 'extinguisher', nameAr: 'طفاية حريق', nameEn: 'Fire extinguisher', image: extinguisher },
  { id: 'hose-cabinet', nameAr: 'خزانة الخرطوم', nameEn: 'Hose reel cabinet', image: hoseCabinet },
  { id: 'ladder', nameAr: 'سلم الإطفاء', nameEn: 'Fire ladder', image: ladder },
  { id: 'nozzle', nameAr: 'قاذف', nameEn: 'Fire nozzle', image: nozzle },
];

export const safetyItems: GearItem[] = [
  { id: 'helmet', nameAr: 'الخوذة', nameEn: 'Helmet', image: helmet },
  { id: 'suit', nameAr: 'بدلة الإطفاء', nameEn: 'Turnout suit', image: turnout },
  { id: 'boots', nameAr: 'جزمة الإطفاء', nameEn: 'Fire boots', image: boots },
  { id: 'gloves', nameAr: 'قفازات الحماية', nameEn: 'Protective gloves', image: gloves },
];

export const safetyNotes = {
  ar: 'وفق معيار NFPA 1970 تشمل التجهيزة أيضاً غطاء الرأس، جهاز التنفس SCBA، وجهاز الإنذار الشخصي PASS.',
  en: 'Under NFPA 1970 the ensemble also includes a protective hood, SCBA, and a personal alert safety system (PASS).',
};
