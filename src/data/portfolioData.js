export const technicalSkills = [
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'React.js', level: 92 },
  { name: 'Next.js', level: 88 },
  { name: 'Redux Toolkit', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Git & GitHub', level: 88 }
];

export const financeSkills = [
  'Credit Risk Management',
  'Creditworthiness Assessment',
  'Risk Analysis',
  'Customer Financial Analysis',
  'Loan Application Evaluation',
  'Portfolio Management'
];

export const getLanguageSkills = (language) => [
  { 
    lang: 'O\'zbekcha', 
    level: language === 'uz' ? 'Ona tili' : language === 'en' ? 'Native' : 'Родной' 
  },
  { 
    lang: 'English', 
    level: 'Professional' 
  },
  { 
    lang: 'Русский', 
    level: language === 'uz' ? 'O\'rta' : language === 'en' ? 'Limited' : 'Ограниченный' 
  }
];

export const getProjects = (language) => [
  { 
    title: 'Bright Gallery', 
    description: language === 'uz' ? 'Zamonaviy gallery platformasi' : language === 'en' ? 'Modern gallery platform' : 'Современная галерея', 
    link: 'https://brightgalleryuz.com', 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop' 
  },
  { 
    title: language === 'uz' ? 'Loyiha 2' : language === 'en' ? 'Project 2' : 'Проект 2', 
    description: language === 'uz' ? 'Tez orada' : language === 'en' ? 'Coming soon' : 'Скоро', 
    link: '#', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', 
    comingSoon: true 
  },
  { 
    title: language === 'uz' ? 'Loyiha 3' : language === 'en' ? 'Project 3' : 'Проект 3', 
    description: language === 'uz' ? 'Tez orada' : language === 'en' ? 'Coming soon' : 'Скоро', 
    link: '#', 
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop', 
    comingSoon: true 
  },
  { 
    title: language === 'uz' ? 'Loyiha 4' : language === 'en' ? 'Project 4' : 'Проект 4', 
    description: language === 'uz' ? 'Tez orada' : language === 'en' ? 'Coming soon' : 'Скоро', 
    link: '#', 
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', 
    comingSoon: true 
  }
];

export const getExperiences = (language) => [
  { 
    title: 'Anor Bank', 
    role: language === 'uz' ? 'Jismoniy shaxslarga xizmat mutaxassisi' : language === 'en' ? 'Specialist at Services to Individuals' : 'Специалист отдела обслуживания', 
    period: language === 'uz' ? 'Aprel 2025 - Hozir' : language === 'en' ? 'April 2025 - Present' : 'Апрель 2025 - Сейчас', 
    location: language === 'uz' ? 'Toshkent, O\'zbekiston' : language === 'en' ? 'Tashkent, Uzbekistan' : 'Ташкент, Узбекистан', 
    tasks: language === 'uz' ? [
      'Mijozlarning moliyaviy holatini baholash', 
      'Kredit portfelini monitoring qilish', 
      'Risk boshqaruv siyosatiga rioya qilish'
    ] : language === 'en' ? [
      'Assessed clients\' financial standing', 
      'Monitored loan portfolio performance', 
      'Ensured compliance with risk policies'
    ] : [
      'Оценка финансового положения', 
      'Мониторинг кредитного портфеля', 
      'Соблюдение политик управления рисками'
    ] 
  },
  { 
    title: 'Dynamic Soft', 
    role: language === 'uz' ? 'Web Dasturchi' : language === 'en' ? 'Web Developer' : 'Веб-разработчик', 
    period: language === 'uz' ? 'Iyul 2024 - Avgust 2025' : language === 'en' ? 'July 2024 - August 2025' : 'Июль 2024 - Август 2025', 
    location: language === 'uz' ? 'Toshkent, O\'zbekiston' : language === 'en' ? 'Tashkent, Uzbekistan' : 'Ташкент, Узбекистан', 
    tasks: language === 'uz' ? [
      'React va TypeScript bilan funksiyalar yaratish', 
      'Next.js orqali SEO yaxshilash', 
      'Admin panel yaratish'
    ] : language === 'en' ? [
      'Developed features using React and TypeScript', 
      'Improved SEO with Next.js', 
      'Built admin panel'
    ] : [
      'Разработка функций на React и TypeScript', 
      'Улучшение SEO с Next.js', 
      'Создание админ-панели'
    ] 
  },
  { 
    title: 'IT-Park', 
    role: language === 'uz' ? 'JavaScript Dasturchi' : language === 'en' ? 'JavaScript Developer' : 'JavaScript Разработчик', 
    period: language === 'uz' ? 'Mart 2024 - Iyun 2024' : language === 'en' ? 'March 2024 - June 2024' : 'Март 2024 - Июнь 2024', 
    location: language === 'uz' ? 'Xorazm' : language === 'en' ? 'Khorezm' : 'Хорезм', 
    tasks: language === 'uz' ? [
      'Responsive web layout yaratish', 
      'Material UI bilan ishlash'
    ] : language === 'en' ? [
      'Built responsive web layouts', 
      'Worked with Material UI'
    ] : [
      'Создание адаптивных макетов', 
      'Работа с Material UI'
    ] 
  },
  { 
    title: 'IT-Forelead LLC', 
    role: language === 'uz' ? 'React Dasturchi' : language === 'en' ? 'React Developer' : 'React Разработчик', 
    period: language === 'uz' ? 'Yanvar 2023 - Iyun 2023' : language === 'en' ? 'January 2023 - June 2023' : 'Январь 2023 - Июнь 2023', 
    location: language === 'uz' ? 'Xorazm' : language === 'en' ? 'Khorezm' : 'Хорезм', 
    tasks: language === 'uz' ? [
      'React.js bilan komponentlar yaratish', 
      'Pixel-perfect web sahifalar'
    ] : language === 'en' ? [
      'Developed React.js components', 
      'Built pixel-perfect pages'
    ] : [
      'Разработка React.js компонентов', 
      'Создание pixel-perfect страниц'
    ] 
  }
];

export const getEducation = (language) => [
  { 
    school: 'Tashkent University of Information Technology', 
    degree: language === 'uz' ? 'Bakalavr, Axborot texnologiyalari' : language === 'en' ? 'Bachelor, Information Technology' : 'Бакалавр, Информационные технологии', 
    period: language === 'uz' ? 'Sentyabr 2020 - Iyun 2024' : language === 'en' ? 'September 2020 - June 2024' : 'Сентябрь 2020 - Июнь 2024', 
    location: language === 'uz' ? 'Toshkent' : language === 'en' ? 'Tashkent' : 'Ташкент', 
    gpa: 'GPA: 4.1 / 5.0' 
  },
  { 
    school: 'Taizhou University', 
    degree: language === 'uz' ? 'Bakalavr, Kompyuter muhandisligi' : language === 'en' ? 'Bachelor, Computer Engineering' : 'Бакалавр, Компьютерная инженерия', 
    period: language === 'uz' ? 'Sentyabr 2019 - Iyun 2020' : language === 'en' ? 'September 2019 - June 2020' : 'Сентябрь 2019 - Июнь 2020', 
    location: language === 'uz' ? 'Xitoy' : language === 'en' ? 'China' : 'Китай', 
    gpa: 'GPA: 3.8 / 4.0' 
  }
];
