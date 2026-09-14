import detectionImage from '@images/detection-system.webp';
import cleanAgentImage from '@images/clean-agent.webp';
import waterFoamImage from '@images/water-foam.webp';
import missionCriticalImage from '@images/mission-critical.webp';

export interface SystemItem {
  id: string;
  titleAr: string;
  titleEn: string;
  topicsAr: string[];
  topicsEn: string[];
  image: string;
  imageAltAr: string;
  imageAltEn: string;
}

export const systems: SystemItem[] = [
  {
    id: 'detection',
    titleAr: 'أنظمة الإنذار المبكر الذكية',
    titleEn: 'Intelligent & Conventional Fire Detection',
    image: detectionImage,
    imageAltAr: 'نظام كشف الدخان المتقدم',
    imageAltEn: 'Advanced smoke detection system',
    topicsAr: [
      'أنظمة العنوان الذكية',
      'الأنظمة التقليدية',
      'كشف الدخان البصري',
      'الكشف الحراري',
      'كشف اللهب بالأشعة فوق البنفسجية والتحت الحمراء',
      'كاشفات الشعاع',
      'أنظمة أخذ العينات الهوائية',
      'معدات مقاومة للانفجار',
      'تطبيقات النفط والغاز',
    ],
    topicsEn: [
      'Addressable systems',
      'Conventional systems',
      'Optical smoke detection',
      'Thermal detection',
      'UV / IR flame detection',
      'Beam detectors',
      'Air sampling detection',
      'Explosion-proof / ATEX / Ex-rated equipment',
      'Oil and gas applications',
    ],
  },
  {
    id: 'clean-agent',
    titleAr: 'أنظمة الإطفاء بالغازات النظيفة والخاصة',
    titleEn: 'Clean Agent Systems',
    image: cleanAgentImage,
    imageAltAr: 'أسطوانات إطفاء غازات نظيفة لمركز بيانات',
    imageAltEn: 'Data center clean agent suppression cylinders',
    topicsAr: [
      'غازات إطفاء معتمدة دولياً',
      'ثاني أكسيد الكربون والغازات الخاملة',
      'مراكز البيانات وغرف الخوادم',
      'الغرف الكهربائية وغرف المولدات',
      'المعدات الصناعية الحساسة',
    ],
    topicsEn: [
      'FM-200 · NAF S 125 · NAF S 227 · FK-5-1-12',
      'CO2 · Aerosol · Inert Gas · N2',
      'Data centers and server rooms',
      'Electrical and generator rooms',
      'Sensitive industrial equipment',
    ],
  },
  {
    id: 'water-foam',
    titleAr: 'أنظمة الإطفاء المائي والرغوي',
    titleEn: 'Water & Foam Systems',
    image: waterFoamImage,
    imageAltAr: 'غرفة مضخات مائية ورغوية صناعية',
    imageAltEn: 'Industrial water and foam pump room',
    topicsAr: [
      'أنظمة الرش المائي الرطب والجاف',
      'صمامات هيدروليكية ومضخات كهربائية وديزل وجوكي',
      'خزائن الخراطيم والأعمدة الرأسية وصنابير الحريق',
      'أنظمة الرغوة وفوّهات المراقبة المائية والرغوية',
    ],
    topicsEn: [
      'Wet and dry sprinkler systems',
      'Hydraulic valves, electric/diesel/jockey fire pumps',
      'Hose reel cabinets, wet/dry risers, hydrants',
      'Foam systems, water and foam monitors',
    ],
  },
  {
    id: 'mission-critical',
    titleAr: 'أنظمة الحماية المتخصصة للمنشآت الحيوية',
    titleEn: 'Mission-Critical & Industrial Asset Protection',
    image: missionCriticalImage,
    imageAltAr: 'أنظمة حماية صناعية حيوية',
    imageAltEn: 'Mission-critical industrial protection systems',
    topicsAr: [
      'أنظمة الأنابيب الهوائية الحرارية',
      'حماية الخزائن الكهربائية والمحولات',
      'حقن النيتروجين والري المباشر المائي',
      'حماية غرف بطاريات قابلة للشحن والمحولات',
      'حماية البنية التحتية الحيوية',
    ],
    topicsEn: [
      'Heat-detecting pneumatic tube systems',
      'Electrical cabinet and transformer protection',
      'Nitrogen injection · Water deluge',
      'Lithium battery room and inverter protection',
      'Mission-critical infrastructure protection',
    ],
  },
];
