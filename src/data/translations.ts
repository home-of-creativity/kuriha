export type Locale = 'ar' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    about: string;
    services: string;
    systems: string;
    clients: string;
    contact: string;
    cta: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    standards: string;
    imageAlt: string;
  };
  trust: {
    items: string[];
  };
  about: {
    label: string;
    titleLine1: string;
    titleLine2: string;
    body1: string;
    body2: string;
    imageAlt: string;
  };
  stats: {
    items: { value: string; label: string; numeric?: number; suffix?: string }[];
  };
  visionMission: {
    sectionTitle: string;
    visionTitle: string;
    visionBody: string;
    visionImageAlt: string;
    missionTitle: string;
    missionBody: string;
    missionImageAlt: string;
  };
  services: {
    label: string;
    title: string;
    body: string;
  };
  systems: {
    label: string;
    titleLine1: string;
    titleLine2: string;
  };
  standards: {
    titleLine1: string;
    titleLine2: string;
    labels: string[];
  };
  clients: {
    title: string;
    subtitle: string;
    governmentTitle: string;
    privateTitle: string;
  };
  contact: {
    titleLine1: string;
    titleLine2: string;
    body: string;
    imageAlt: string;
    mapTitle: string;
    address: string;
    openMaps: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      sendAnother: string;
      errorBody: string;
      required: string;
      invalidEmail: string;
      invalidPhone: string;
    };
  };
  footer: {
    statement: string;
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ar: {
    meta: {
      title: 'مجموعة قريعة | أنظمة مكافحة الحرائق والحماية الهندسية',
      description:
        'حلول هندسية متكاملة في تصميم وتوريد وتركيب وصيانة أنظمة الكشف المبكر عن الحرائق والإطفاء منذ 1960.',
      ogLocale: 'ar_AR',
    },
    nav: {
      about: 'من نحن',
      services: 'الخدمات',
      systems: 'الأنظمة',
      clients: 'عملاؤنا',
      contact: 'تواصل',
      cta: 'تواصل معنا',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
    },
    hero: {
      eyebrow: 'حلول هندسية لمكافحة الحرائق',
      titleLine1: 'حلول هندسية متكاملة',
      titleLine2: 'لحماية الأرواح والمنشآت',
      description:
        'من الدراسة والتصميم الهندسي إلى التوريد والتركيب والصيانة والدعم الفني المستمر.',
      primaryCta: 'استكشف حلولنا',
      secondaryCta: 'تواصل معنا',
      standards: 'NFPA · UL · FM · CE · LPCB',
      imageAlt: 'غرفة مضخات حريق صناعية',
    },
    trust: {
      items: [
        'تأسست عام 1960',
        'حلول هندسية متكاملة',
        'دعم ومراقبة 24/7',
        'NFPA · UL · FM',
      ],
    },
    about: {
      label: 'عن مجموعة قريعة',
      titleLine1: 'أكثر من ستة عقود',
      titleLine2: 'من الخبرة الهندسية',
      body1:
        'تعد مجموعة قريعة إحدى الشركات الرائدة والمرجعية في مجال هندسة وتوريد وتركيب وصيانة أنظمة الإنذار المبكر ومكافحة الحرائق.',
      body2:
        'وعلى مدار أكثر من ستة عقود من الخبرة الميدانية، ساهمت الشركة في حماية المنشآت الحيوية والصناعية والتجارية من خلال حلول هندسية متقدمة.',
      imageAlt: 'مهندس حماية من الحرائق',
    },
    stats: {
      items: [
        { value: '1960', label: 'تأسست' },
        { value: '60+', label: 'عاماً من الخبرة', numeric: 60, suffix: '+' },
        { value: '24/7', label: 'دعم ومراقبة' },
        { value: 'NFPA · UL · FM', label: 'معايير عالمية' },
      ],
    },
    visionMission: {
      sectionTitle: 'رؤيتنا ورسالتنا',
      visionTitle: 'رؤيتنا',
      visionBody:
        'أن نبقى الخيار الأول والمرجع الهندسي الأكثر موثوقية في حماية الأرواح والمنشآت، ومواكبة الابتكارات التقنية العالمية لتوفير بيئات عمل آمنة ومستدامة خالية من مخاطر الحريق.',
      visionImageAlt: 'رؤية مجموعة قريعة لحماية المنشآت الصناعية',
      missionTitle: 'رسالتنا',
      missionBody:
        'تقديم حلول حماية متكاملة ومخصصة تبدأ من الدراسة والتصميم الهندسي، مروراً بالتوريد والتركيب وفق المعايير القياسية، وصولاً إلى الدعم الفني والصيانة المستمرة لضمان أعلى درجات الجاهزية التشغيلية في اللحظات الحرجة.',
      missionImageAlt: 'معدات أنظمة مكافحة الحريق من مجموعة قريعة',
    },
    services: {
      label: 'نطاق الخدمات الهندسية',
      title: 'مجالات العمل والخدمات الهندسية',
      body: 'من الدراسة والتصميم إلى التوريد والتركيب والصيانة والمراقبة — حلول متكاملة لحماية منشأتك وفق أعلى المعايير الدولية.',
    },
    systems: {
      label: 'أنظمة متخصصة وحلول تقنية',
      titleLine1: 'الأنظمة والحلول',
      titleLine2: 'التقنية',
    },
    standards: {
      titleLine1: 'حلول مصممة وفق',
      titleLine2: 'أعلى معايير الحماية الدولية',
      labels: ['NFPA', 'UL', 'FM', 'CE', 'LPCB'],
    },
    clients: {
      title: 'جهات وثقت بنا',
      subtitle: 'عملاؤنا',
      governmentTitle: 'القطاع الحكومي',
      privateTitle: 'القطاع الخاص',
    },
    contact: {
      titleLine1: 'لنصمم منظومة الحماية',
      titleLine2: 'المناسبة لمنشأتك',
      body: 'تواصل معنا لدراسة المخاطر، تحديد الحل المناسب، ووضع تصور هندسي متكامل لنظام الحماية.',
      imageAlt: 'هاتف طوارئ أحمر',
      mapTitle: 'مكتب مجموعة قريعة التجارية',
      address: 'مجموعة قريعة التجارية، دمشق',
      openMaps: 'افتح في خرائط Google',
      form: {
        name: 'الاسم الكامل',
        namePlaceholder: 'أدخل اسمك',
        company: 'الشركة / المنشأة',
        companyPlaceholder: 'اسم الشركة (اختياري)',
        phone: 'رقم الهاتف',
        phonePlaceholder: '09xx xxx xxx',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'name@example.com',
        message: 'رسالتك',
        messagePlaceholder: 'صف احتياجك أو نوع المنشأة التي ترغب بحمايتها...',
        submit: 'إرسال الطلب',
        submitting: 'جاري الإرسال...',
        successTitle: 'تم استلام طلبك',
        successBody: 'شكراً لتواصلك. سيراجع فريقنا طلبك ويتواصل معك في أقرب وقت.',
        sendAnother: 'إرسال طلب جديد',
        errorBody: 'تعذّر إرسال الطلب. يرجى المحاولة مرة أخرى.',
        required: 'هذا الحقل مطلوب',
        invalidEmail: 'يرجى إدخال بريد إلكتروني صحيح',
        invalidPhone: 'يرجى إدخال رقم هاتف سوري صحيح (مثال: 09xx xxx xxx)',
      },
    },
    footer: {
      statement:
        'حلول هندسية متكاملة في الكشف المبكر عن الحرائق والإطفاء منذ عام 1960',
      copyright: '© 2026 مجموعة قريعة. جميع الحقوق محفوظة.',
    },
  },
  en: {
    meta: {
      title: 'KOREIHA Group | Fire Detection & Suppression Systems',
      description:
        'Engineering solutions for fire detection, fire suppression, installation, maintenance and critical infrastructure protection since 1960.',
      ogLocale: 'en_US',
    },
    nav: {
      about: 'About',
      services: 'Services',
      systems: 'Systems',
      clients: 'Clients',
      contact: 'Contact',
      cta: 'Contact Us',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      eyebrow: 'ENGINEERING FIRE PROTECTION',
      titleLine1: 'Comprehensive Engineering Solutions',
      titleLine2: 'for Life & Facility Protection',
      description:
        'From engineering design and hazard consultation to procurement, installation, maintenance and continuous technical support.',
      primaryCta: 'Explore Solutions',
      secondaryCta: 'Contact Us',
      standards: 'NFPA · UL · FM · CE · LPCB',
      imageAlt: 'Industrial fire pump room',
    },
    trust: {
      items: [
        'Established 1960',
        'Integrated engineering solutions',
        '24/7 support & monitoring',
        'NFPA · UL · FM',
      ],
    },
    about: {
      label: 'ABOUT KOREIHA',
      titleLine1: 'More Than Six Decades',
      titleLine2: 'of Engineering Experience',
      body1:
        'KOREIHA GROUP is a leading reference company in engineering, supply, installation and maintenance of early fire alarm and firefighting systems.',
      body2:
        'Over more than six decades of field experience, the company has contributed to protecting vital, industrial and commercial facilities through advanced engineering solutions.',
      imageAlt: 'Fire protection engineer',
    },
    stats: {
      items: [
        { value: '1960', label: 'Established' },
        { value: '60+', label: 'Years of Experience', numeric: 60, suffix: '+' },
        { value: '24/7', label: 'Support & Monitoring' },
        { value: 'NFPA · UL · FM', label: 'International Standards' },
      ],
    },
    visionMission: {
      sectionTitle: 'Vision & Mission',
      visionTitle: 'Our Vision',
      visionBody:
        'To remain the first choice and most trusted engineering reference in protecting lives and facilities, keeping pace with global technical innovations to provide safe, sustainable environments free from fire hazards.',
      visionImageAlt: 'KOREIHA vision for protected industrial facilities',
      missionTitle: 'Our Mission',
      missionBody:
        'To deliver integrated, customized protection solutions starting from engineering study and design, through procurement and standards-compliant installation, to continuous technical support and maintenance ensuring the highest operational readiness in critical moments.',
      missionImageAlt: 'KOREIHA fire suppression equipment and control systems',
    },
    services: {
      label: 'ENGINEERING SCOPE & SERVICES',
      title: 'Engineering Scope & Services',
      body: 'From engineering design and procurement to installation, maintenance, and monitoring — integrated protection solutions built to international standards.',
    },
    systems: {
      label: 'SPECIALIZED SYSTEMS & TECHNICAL SOLUTIONS',
      titleLine1: 'Specialized Systems',
      titleLine2: '& Technical Solutions',
    },
    standards: {
      titleLine1: 'Solutions Designed to',
      titleLine2: 'International Protection Standards',
      labels: ['NFPA', 'UL', 'FM', 'CE', 'LPCB'],
    },
    clients: {
      title: 'Trusted By',
      subtitle: 'OUR CLIENTS',
      governmentTitle: 'Government Sector',
      privateTitle: 'Private Sector',
    },
    contact: {
      titleLine1: 'Let Us Design the Protection',
      titleLine2: 'System for Your Facility',
      body: 'Contact us for risk assessment, solution selection, and a comprehensive engineering vision for your protection system.',
      imageAlt: 'Red emergency telephone',
      mapTitle: 'Kuriha Group office',
      address: 'Kuriha Group, Damascus',
      openMaps: 'Open in Google Maps',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your name',
        company: 'Company / Facility',
        companyPlaceholder: 'Company name (optional)',
        phone: 'Phone Number',
        phonePlaceholder: '+963 9xx xxx xxx',
        email: 'Email Address',
        emailPlaceholder: 'name@example.com',
        message: 'Your Message',
        messagePlaceholder: 'Describe your needs or the type of facility you want to protect...',
        submit: 'Send Request',
        submitting: 'Sending...',
        successTitle: 'Request Received',
        successBody: 'Thank you for reaching out. Our team will review your request and contact you shortly.',
        sendAnother: 'Send Another Request',
        errorBody: 'Unable to send your request. Please try again.',
        required: 'This field is required',
        invalidEmail: 'Please enter a valid email address',
        invalidPhone: 'Please enter a valid Syrian phone number (e.g. +963 9xx xxx xxx)',
      },
    },
    footer: {
      statement:
        'Comprehensive Engineering Solutions in Early Fire Detection & Suppression Since 1960',
      copyright: '© 2026 KOREIHA GROUP. All rights reserved.',
    },
  },
};
