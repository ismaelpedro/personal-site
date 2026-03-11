import type { Language } from '@/types'

export interface Translations {
  nav: {
    home: string
    resume: string
    philosophy: string
    contact: string
  }
  hero: {
    greeting: string
    roles: string[]
    bio: string
    locationAméricas: string
    locationEurope: string
    contactBtn: string
    twitter: string
    linkedin: string
    downloadCV: string
    alsoAvailable: string
    openToWork: string
  }
  about: {
    label: string
    bio1: string
    bio2: string
    locationBody: string
  }
  philosophy: {
    label: string
    quote: string
    body: string
    highlightWord: string
  }
  experience: {
    label: string
    current: string
    workExperience: string
    seeMore: string
    seeLess: string
  }
  skills: {
    label: string
    tech: string
    mobile: string
    frontend: string
    backend: string
    devops: string
    ai: string
    education: string
    languages: string
    proficiency: {
      native: string
      advanced: string
      intermediate: string
      basic: string
    }
  }
  contact: {
    title: string
    subtitle: string
    copy: string
    copied: string
  }
  footer: {
    version: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      resume: 'Resume',
      philosophy: 'Philosophy',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Ismael Pedro',
      roles: ['Software Engineer', 'Flutter Engineer', 'React/React Native Developer', 'Full Stack Developer', 'iOS Developer'],
      bio: 'I build reliable, maintainable software across the full stack. Experienced with Java, Spring Boot, React, and cloud-native systems. Based between Brazil and Spain.',
      locationAméricas: 'Available · Brazil',
      locationEurope: 'Available · Spain',
      contactBtn: 'Contact',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      downloadCV: 'Download CV',
      alsoAvailable: 'Also available:',
      openToWork: 'Open to work',
    },
    about: {
      label: 'About',
      bio1: 'With over 8 years of experience delivering high-impact solutions across healthcare, finance, e-commerce, fitness, and education, I specialize in building scalable, maintainable, and user-centric apps that empower users and drive real business results.',
      bio2: 'I\'ve contributed to applications with over 5 million downloads, collaborating with renowned organizations.',
      locationBody: 'Brazilian citizen based between Brazil and Spain. Holder of a Spanish Digital Nomad Visa, enabling full legal remote collaboration with European companies. Open to remote international roles and B2B contracts. Operating through a US LLC — payments can be arranged via traditional methods as well as BTC and USDT.',
    },
    philosophy: {
      label: 'Philosophy',
      quote: '"What drives me is solving real problems through clean, maintainable code."',
      body: 'I believe great software lives at the intersection of technical rigor and human empathy. Whether architecting backend systems or crafting UI, I focus on clarity, purposeful decisions, and leaving every codebase better than I found it. I\'m always learning — from the community, from feedback, and from the systems I help build.',
      highlightWord: 'feedback',
    },
    experience: {
      label: 'Experience',
      current: 'current',
      workExperience: 'Work Experience',
      seeMore: 'See more',
      seeLess: 'See less',
    },
    skills: {
      label: 'Skills & Education',
      tech: 'Tech Skills',
      mobile: 'Mobile',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'Cloud & DevOps',
      ai: 'AI & Tools',
      education: 'Education',
      languages: 'Languages',
      proficiency: {
        native: 'Native',
        advanced: 'Advanced',
        intermediate: 'Intermediate',
        basic: 'Basic',
      },
    },
    contact: {
      title: 'Say Hello!',
      subtitle: "I'm always open to new opportunities and conversations.",
      copy: 'Copy',
      copied: 'Copied!',
    },
    footer: {
      version: 'v1.0.0',
    },
  },

  pt: {
    nav: {
      home: 'Início',
      resume: 'Currículo',
      philosophy: 'Filosofia',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Ismael Pedro',
      roles: ['Engenheiro de Software', 'Flutter Engineer', 'Desenvolvedor React/React Native', 'Desenvolvedor Full Stack', 'Desenvolvedor iOS'],
      bio: 'Construo software confiável e de fácil manutenção em toda a stack. Experiente com Java, Spring Boot, React e sistemas cloud-native. Entre Brasil e Espanha.',
      locationAméricas: 'Disponível · Brasil',
      locationEurope: 'Disponível · Espanha',
      contactBtn: 'Contato',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      downloadCV: 'Baixar CV',
      alsoAvailable: 'Também disponível:',
      openToWork: 'Aberto a oportunidades',
    },
    about: {
      label: 'Sobre',
      bio1: 'Com mais de 8 anos de experiência entregando soluções de alto impacto em saúde, finanças, e-commerce, fitness e educação, sou especializado em construir apps escaláveis, de fácil manutenção e centrados no usuário.',
      bio2: 'Contribuí para aplicações com mais de 5 milhões de downloads, colaborando com organizações renomadas.',
      locationBody: 'Cidadão brasileiro baseado entre Brasil e Espanha. Detentor de um Visto de Nômade Digital espanhol, permitindo colaboração remota legal com empresas europeias. Aberto a contratos internacionais remotos e B2B. Operando através de uma LLC americana — pagamentos via métodos tradicionais, BTC e USDT.',
    },
    philosophy: {
      label: 'Filosofia',
      quote: '"O que me motiva é resolver problemas reais com código limpo e sustentável."',
      body: 'Acredito que um bom software vive na interseção entre rigor técnico e empatia humana. Seja arquitetando sistemas backend ou criando interfaces, foco em clareza, decisões com propósito e em deixar cada codebase melhor do que encontrei. Estou sempre aprendendo — da comunidade, do feedback e dos sistemas que ajudo a construir.',
      highlightWord: 'feedback',
    },
    experience: {
      label: 'Experiência',
      current: 'atual',
      workExperience: 'Experiência Profissional',
      seeMore: 'Ver mais',
      seeLess: 'Ver menos',
    },
    skills: {
      label: 'Habilidades & Formação',
      tech: 'Tecnologias',
      mobile: 'Mobile',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'Cloud & DevOps',
      ai: 'IA & Ferramentas',
      education: 'Formação',
      languages: 'Idiomas',
      proficiency: {
        native: 'Nativo',
        advanced: 'Avançado',
        intermediate: 'Intermediário',
        basic: 'Básico',
      },
    },
    contact: {
      title: 'Olá!',
      subtitle: 'Estou sempre aberto a novas oportunidades e conversas.',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    footer: {
      version: 'v1.0.0',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      resume: 'Currículum',
      philosophy: 'Filosofía',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Ismael Pedro',
      roles: ['Ingeniero de Software', 'Flutter Engineer', 'Desarrollador React/React Native', 'Desarrollador Full Stack', 'Desarrollador iOS'],
      bio: 'Desarrollo software fiable y mantenible a lo largo de toda la stack. Con experiencia en Java, Spring Boot, React y sistemas cloud-native. Entre Brasil y España.',
      locationAméricas: 'Disponible · Brasil',
      locationEurope: 'Disponible · España',
      contactBtn: 'Contacto',
      twitter: 'Twitter',
      linkedin: 'LinkedIn',
      downloadCV: 'Descargar CV',
      alsoAvailable: 'También disponible:',
      openToWork: 'Abierto a oportunidades',
    },
    about: {
      label: 'Sobre mí',
      bio1: 'Con más de 8 años de experiencia entregando soluciones de alto impacto en salud, finanzas, e-commerce, fitness y educación, me especializo en construir apps escalables, mantenibles y centradas en el usuario.',
      bio2: 'He contribuido a aplicaciones con más de 5 millones de descargas, colaborando con organizaciones reconocidas.',
      locationBody: 'Ciudadano brasileño basado entre Brasil y España. Titular de una Visa de Nómada Digital española, que permite colaboración remota legal con empresas europeas. Abierto a contratos internacionales remotos y B2B. Operando a través de una LLC de EE.UU. — pagos vía métodos tradicionales, BTC y USDT.',
    },
    philosophy: {
      label: 'Filosofía',
      quote: '"Lo que me impulsa es resolver problemas reales con código limpio y mantenible."',
      body: 'Creo que el buen software vive en la intersección entre el rigor técnico y la empatía humana. Ya sea arquitectando sistemas backend o diseñando interfaces, me enfoco en la claridad, las decisiones con propósito y en dejar cada codebase mejor de como lo encontré. Siempre estoy aprendiendo — de la comunidad, del feedback y de los sistemas que ayudo a construir.',
      highlightWord: 'feedback',
    },
    experience: {
      label: 'Experiencia',
      current: 'actual',
      workExperience: 'Experiencia Laboral',
      seeMore: 'Ver más',
      seeLess: 'Ver menos',
    },
    skills: {
      label: 'Habilidades & Educación',
      tech: 'Tecnologías',
      mobile: 'Mobile',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'Cloud & DevOps',
      ai: 'IA & Herramientas',
      education: 'Educación',
      languages: 'Idiomas',
      proficiency: {
        native: 'Nativo',
        advanced: 'Avanzado',
        intermediate: 'Intermedio',
        basic: 'Básico',
      },
    },
    contact: {
      title: '¡Hola!',
      subtitle: 'Siempre estoy abierto a nuevas oportunidades y conversaciones.',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    footer: {
      version: 'v1.0.0',
    },
  },
}
