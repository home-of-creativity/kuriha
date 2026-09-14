export interface ServiceItem {
  id: string;
  number: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const services: ServiceItem[] = [
  {
    id: 'design',
    number: '01',
    titleAr: 'الدراسة والتصميم الهندسي',
    titleEn: 'Engineering Design & Hazard Consultation',
    descriptionAr:
      'تحليل المخاطر، الحسابات الهيدروليكية، تصميم أنظمة الإنذار والإطفاء وفق معايير NFPA.',
    descriptionEn:
      'Risk analysis, hydraulic calculations, fire alarm design, suppression design, NFPA-based engineering.',
  },
  {
    id: 'installation',
    number: '02',
    titleAr: 'التوريد والتركيب',
    titleEn: 'Procurement & Turn-key Installation',
    descriptionAr:
      'توريد معدات معتمدة وتركيب ميكانيكي وكهربائي احترافي.',
    descriptionEn:
      'Certified equipment sourcing and professional mechanical/electrical installation.',
  },
  {
    id: 'maintenance',
    number: '03',
    titleAr: 'الصيانة وإعادة التأهيل',
    titleEn: 'Maintenance & System Retrofitting',
    descriptionAr:
      'صيانة سنوية، اختبارات، برمجة لوحات، وترقية الأنظمة.',
    descriptionEn:
      'Annual maintenance, testing, panel programming, system upgrades.',
  },
  {
    id: 'refilling',
    number: '04',
    titleAr: 'خدمات إعادة التعبئة والاختبار',
    titleEn: 'Refilling & Hydro-testing Facility',
    descriptionAr:
      'اختبار، إعادة تعبئة، صيانة وإعادة اعتماد معدات الإطفاء.',
    descriptionEn:
      'Testing, refilling, maintenance and recertification of firefighting equipment.',
  },
  {
    id: 'monitoring',
    number: '05',
    titleAr: 'المراقبة والربط الذكي',
    titleEn: '24/7 Smart Monitoring & Central Alarm Integration',
    descriptionAr:
      'مراقبة مركزية لحظية وربط أنظمة الإنذار.',
    descriptionEn:
      'Real-time central monitoring and alarm system integration.',
  },
  {
    id: 'training',
    number: '06',
    titleAr: 'التدريب والاستشارات',
    titleEn: 'Industrial Safety Training',
    descriptionAr:
      'تدريب على معدات الإطفاء، إجراءات الإخلاء، الاستجابة للطوارئ وتدريب معدات الحماية الشخصية.',
    descriptionEn:
      'Firefighting equipment training, evacuation procedures, emergency response and PPE training.',
  },
];
