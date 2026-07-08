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
    backend: string
    distributed: string
    databases: string
    cloud: string
    architecture: string
    observability: string
    frontend: string
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
      roles: ['Senior Software Engineer', 'Backend Engineer (Go / Node.js)', 'Full Stack Developer', 'React/React Native Developer', 'Flutter Engineer'],
      bio: 'I build reliable, scalable software across the full stack. Backend focus in Go and Node.js on AWS, with strong frontend and mobile delivery in React, React Native, and Flutter. Based between Brazil and Spain.',
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
      bio1: 'Senior Software Engineer with 8+ years building production systems at scale across fintech, healthcare, and banking. Backend focus in Go and Node.js on AWS, with strong frontend and mobile delivery in React, React Native, and Flutter.',
      bio2: 'I own products end-to-end for distributed teams across the US, UK, and EU, with strong fundamentals in distributed systems and microservices — turning complex problems into production-ready systems that drive growth, efficiency, and real business value.',
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
      backend: 'Backend',
      distributed: 'Distributed Systems',
      databases: 'Databases',
      cloud: 'Cloud & Infra',
      architecture: 'Architecture',
      observability: 'Observability & Testing',
      frontend: 'Frontend & Mobile',
      ai: 'AI',
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
      roles: ['Engenheiro de Software Sênior', 'Backend Engineer (Go / Node.js)', 'Desenvolvedor Full Stack', 'Desenvolvedor React/React Native', 'Flutter Engineer'],
      bio: 'Construo software confiável e escalável em toda a stack. Foco em backend com Go e Node.js na AWS, com forte entrega em frontend e mobile usando React, React Native e Flutter. Entre Brasil e Espanha.',
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
      bio1: 'Engenheiro de Software Sênior com mais de 8 anos construindo sistemas de produção em escala nos setores de fintech, saúde e bancário. Foco em backend com Go e Node.js na AWS, com forte entrega em frontend e mobile usando React, React Native e Flutter.',
      bio2: 'Entrego produtos de ponta a ponta para times distribuídos nos EUA, Reino Unido e Europa, com sólidos fundamentos em sistemas distribuídos e microsserviços — transformando problemas complexos em sistemas prontos para produção que geram crescimento, eficiência e valor real de negócio.',
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
      backend: 'Backend',
      distributed: 'Sistemas Distribuídos',
      databases: 'Bancos de Dados',
      cloud: 'Cloud & Infra',
      architecture: 'Arquitetura',
      observability: 'Observabilidade & Testes',
      frontend: 'Frontend & Mobile',
      ai: 'IA',
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
      roles: ['Ingeniero de Software Senior', 'Backend Engineer (Go / Node.js)', 'Desarrollador Full Stack', 'Desarrollador React/React Native', 'Flutter Engineer'],
      bio: 'Desarrollo software fiable y escalable a lo largo de toda la stack. Enfoque en backend con Go y Node.js en AWS, con sólida entrega en frontend y mobile usando React, React Native y Flutter. Entre Brasil y España.',
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
      bio1: 'Ingeniero de Software Senior con más de 8 años construyendo sistemas de producción a escala en los sectores fintech, salud y bancario. Enfoque en backend con Go y Node.js en AWS, con sólida entrega en frontend y mobile usando React, React Native y Flutter.',
      bio2: 'Entrego productos de extremo a extremo para equipos distribuidos en EE.UU., Reino Unido y Europa, con fuertes fundamentos en sistemas distribuidos y microservicios — transformando problemas complejos en sistemas listos para producción que impulsan el crecimiento, la eficiencia y el valor real de negocio.',
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
      backend: 'Backend',
      distributed: 'Sistemas Distribuidos',
      databases: 'Bases de Datos',
      cloud: 'Cloud & Infra',
      architecture: 'Arquitectura',
      observability: 'Observabilidad & Testing',
      frontend: 'Frontend & Mobile',
      ai: 'IA',
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
