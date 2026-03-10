import type { ExperienceEntry } from '@/types'

export const experiences: ExperienceEntry[] = [
  {
    company: 'World Wide Technology',
    url: 'https://www.wwt.com',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Apr 2025 - Present',
        startDate: new Date('2025-04-01'),
        endDate: null,
        isCurrent: true,
        bullets: {
          en: [
            'Allocated on Wingstop — one of the fastest-growing QSR chains in the US with 2,000+ locations and a customer app with 5M+ downloads.',
            'Introduced a modular "micro-apps" architecture enabling new feature rollout 40% faster across squads.',
            'Increased order conversion by 26% through UX improvements and auto-approve flows.',
            'Work across Flutter, React Native, and Golang, owning features end-to-end from API to UI.',
          ],
          pt: [
            'Alocado no Wingstop — uma das redes de fast-food de crescimento mais rápido nos EUA, com 2.000+ unidades e app com mais de 5M de downloads.',
            'Introduzi uma arquitetura modular de "micro-apps" que acelerou o lançamento de novas funcionalidades em 40% entre as squads.',
            'Aumentei a conversão de pedidos em 26% com melhorias de UX e fluxos de aprovação automática.',
            'Atuo com Flutter, React Native e Golang, entregando funcionalidades de ponta a ponta, da API à UI.',
          ],
          es: [
            'Asignado en Wingstop — una de las cadenas de comida rápida de mayor crecimiento en EE.UU., con 2.000+ locales y una app con más de 5M de descargas.',
            'Introduje una arquitectura modular de "micro-apps" que habilitó el lanzamiento de nuevas funciones un 40% más rápido entre los equipos.',
            'Aumenté la conversión de pedidos en un 26% mediante mejoras de UX y flujos de aprobación automática.',
            'Trabajo con Flutter, React Native y Golang, desarrollando funcionalidades de extremo a extremo desde la API hasta la UI.',
          ],
        },
      },
    ],
  },
  {
    company: 'BTG Pactual Bank',
    url: 'https://www.btgpactual.com',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Aug 2022 - Apr 2025',
        startDate: new Date('2022-08-01'),
        endDate: new Date('2025-04-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Worked on BTG Pactual — the largest investment bank in Latin America, with a native banking app surpassing 5M+ downloads on iOS and Android.',
            'Built and integrated the Offshore Banking module for BTG Global, contributing to a product adopted by +50,000 high-net-worth clients.',
            'Increased bill payment conversion by 26% through UX improvements, auto-approve flows, and smart defaults.',
            'Improved app stability on the native-embedded Flutter side, cutting the crash rate and lifting the App Store rating from 3.9 to 4.6.',
            'Stack: React Native, Flutter with Method Channels, Clean Architecture, Node.js, GitHub Actions, Firebase, and Sentry.',
          ],
          pt: [
            'Atuei no BTG Pactual — o maior banco de investimento da América Latina, com app bancário nativo ultrapassando 5M+ de downloads no iOS e Android.',
            'Desenvolvi e integrei o módulo de Banking Offshore para o BTG Global, contribuindo para um produto adotado por mais de 50.000 clientes de alto patrimônio.',
            'Aumentei a conversão de pagamentos em 26% com melhorias de UX, fluxos de aprovação automática e defaults inteligentes.',
            'Melhorei a estabilidade do app no módulo Flutter nativo, reduzindo a taxa de crashes e elevando a nota na App Store de 3,9 para 4,6.',
            'Stack: React Native, Flutter com Method Channels, Clean Architecture, Node.js, GitHub Actions, Firebase e Sentry.',
          ],
          es: [
            'Trabajé en BTG Pactual — el banco de inversión más grande de América Latina, con una app bancaria nativa que supera los 5M+ de descargas en iOS y Android.',
            'Desarrollé e integré el módulo de Banca Offshore para BTG Global, contribuyendo a un producto adoptado por más de 50.000 clientes de alto patrimonio.',
            'Aumenté la conversión de pagos en un 26% mediante mejoras de UX, flujos de aprobación automática y valores predeterminados inteligentes.',
            'Mejoré la estabilidad de la app en el módulo Flutter nativo, reduciendo la tasa de crashes y elevando la calificación en la App Store de 3,9 a 4,6.',
            'Stack: React Native, Flutter con Method Channels, Clean Architecture, Node.js, GitHub Actions, Firebase y Sentry.',
          ],
        },
      },
    ],
  },
  {
    company: 'Unimed',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Jan 2022 - Jul 2022',
        startDate: new Date('2022-01-01'),
        endDate: new Date('2022-07-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Scaled the "Unimed Rio Preto" medical app to +100,000 active doctors, contributing to both mobile and Node.js backend for API development and hospital system integrations.',
            'Led an architecture refactor that improved load time by 35%, measured via Firebase Performance Monitoring.',
            'Created a reusable design system adopted by 3 product teams, cutting development time of new features by 40%.',
            'Assisted with frontend development using React.js for the web portal.',
          ],
          pt: [
            'Escalei o app médico "Unimed Rio Preto" para +100.000 médicos ativos, contribuindo com mobile e backend Node.js para desenvolvimento de APIs e integrações hospitalares.',
            'Liderei um refactor de arquitetura que melhorou o tempo de carregamento em 35%, medido via Firebase Performance Monitoring.',
            'Criei um design system reutilizável adotado por 3 times de produto, reduzindo o tempo de desenvolvimento de novas features em 40%.',
            'Auxiliei no desenvolvimento frontend com React.js para o portal web.',
          ],
          es: [
            'Escalé la app médica "Unimed Rio Preto" a +100.000 médicos activos, contribuyendo en mobile y backend Node.js para el desarrollo de APIs e integraciones hospitalarias.',
            'Lideré un refactor de arquitectura que mejoró el tiempo de carga en un 35%, medido con Firebase Performance Monitoring.',
            'Creé un design system reutilizable adoptado por 3 equipos de producto, reduciendo el tiempo de desarrollo de nuevas funcionalidades en un 40%.',
            'Colaboré en el desarrollo frontend con React.js para el portal web.',
          ],
        },
      },
    ],
  },
  {
    company: 'Likin.do',
    url: 'https://likin.do',
    roles: [
      {
        title: 'Fullstack Developer',
        period: 'Oct 2020 - Dec 2021',
        startDate: new Date('2020-10-01'),
        endDate: new Date('2021-12-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Built core features (product listing, checkout, onboarding) for a social-impact marketplace across Flutter mobile and React web, boosting buyer conversions by 22%.',
            'Mentored the team on Clean Architecture and GetX, reducing production bugs by 30%.',
            'Implemented Firebase Analytics and crash reporting, cutting issue resolution time from days to hours.',
          ],
          pt: [
            'Desenvolvi funcionalidades principais (listagem de produtos, checkout, onboarding) para um marketplace de impacto social no Flutter mobile e React web, aumentando conversões de compradores em 22%.',
            'Mentorei o time em Clean Architecture e GetX, reduzindo bugs em produção em 30%.',
            'Implementei Firebase Analytics e relatórios de crash, reduzindo o tempo de resolução de problemas de dias para horas.',
          ],
          es: [
            'Desarrollé funcionalidades clave (listado de productos, checkout, onboarding) para un marketplace de impacto social en Flutter mobile y React web, aumentando las conversiones de compradores en un 22%.',
            'Mentoreé al equipo en Clean Architecture y GetX, reduciendo bugs en producción en un 30%.',
            'Implementé Firebase Analytics y reportes de crashes, reduciendo el tiempo de resolución de incidencias de días a horas.',
          ],
        },
      },
    ],
  },
  {
    company: 'Genial Investments Bank',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Dec 2019 - Sep 2020',
        startDate: new Date('2019-12-01'),
        endDate: new Date('2020-09-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Built and optimized the stock order ("boleta") feature used by +1 million investors, reducing trade execution time by 25% (measured via Datadog backend latency monitoring).',
            'Developed white-label banking apps for several brands, accelerating rollout from 3 months to 4 weeks through app flavors and micro-frontends.',
            'Enabled 5 parallel custom banking apps from a single codebase, reducing maintenance complexity significantly.',
          ],
          pt: [
            'Desenvolvi e otimizei a funcionalidade de ordem de bolsa ("boleta") usada por +1 milhão de investidores, reduzindo o tempo de execução de trades em 25% (medido via Datadog).',
            'Desenvolvi apps bancários white-label para diversas marcas, acelerando o lançamento de 3 meses para 4 semanas com app flavors e micro-frontends.',
            'Viabilizei 5 apps bancários personalizados em paralelo a partir de uma única codebase, reduzindo significativamente a complexidade de manutenção.',
          ],
          es: [
            'Desarrollé y optimicé la funcionalidad de orden de bolsa ("boleta") utilizada por +1 millón de inversores, reduciendo el tiempo de ejecución de operaciones en un 25% (medido con Datadog).',
            'Desarrollé apps bancarias white-label para varias marcas, acelerando el lanzamiento de 3 meses a 4 semanas mediante app flavors y micro-frontends.',
            'Habilité 5 apps bancarias personalizadas en paralelo desde una única codebase, reduciendo significativamente la complejidad de mantenimiento.',
          ],
        },
      },
    ],
  },
  {
    company: 'Hospital Israelita Albert Einstein',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Mar 2019 - Nov 2019',
        startDate: new Date('2019-03-01'),
        endDate: new Date('2019-11-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Improved the medical app performance for +5,000 physicians at one of Latin America\'s most prestigious hospitals, reducing exam report loading time by 40%.',
            'Launched the "Exam Results PDF Download" feature, adopted by 90% of active users within the first month.',
            'Reduced critical crashes by 30% through refactoring and BLoC/Cubit state management.',
          ],
          pt: [
            'Melhorei a performance do app médico para +5.000 médicos em um dos hospitais mais renomados da América Latina, reduzindo o tempo de carregamento de laudos em 40%.',
            'Lancei a funcionalidade de "Download de Resultados de Exames em PDF", adotada por 90% dos usuários ativos no primeiro mês.',
            'Reduzi crashes críticos em 30% com refatoração e gerenciamento de estado com BLoC/Cubit.',
          ],
          es: [
            'Mejoré el rendimiento de la app médica para +5.000 médicos en uno de los hospitales más prestigiosos de América Latina, reduciendo el tiempo de carga de informes en un 40%.',
            'Lancé la funcionalidad de "Descarga de Resultados de Exámenes en PDF", adoptada por el 90% de los usuarios activos en el primer mes.',
            'Reduje crashes críticos en un 30% mediante refactorización y gestión de estado con BLoC/Cubit.',
          ],
        },
      },
    ],
  },
  {
    company: "L'Oréal",
    roles: [
      {
        title: 'Web Developer',
        period: 'Jun 2018 - Feb 2019',
        startDate: new Date('2018-06-01'),
        endDate: new Date('2019-02-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Built interactive in-store kiosks for 14+ luxury brands at the world\'s largest cosmetics company, increasing customer product engagement by 60%.',
            'Developed a quiz-based recommendation system that generated 20,000+ product samples per month in Sephora stores (internal CRM reports).',
            'Reduced kiosk maintenance time by 50% using reusable Web modules and Firebase analytics.',
          ],
          pt: [
            'Desenvolvi quiosques interativos para 14+ marcas de luxo na maior empresa de cosméticos do mundo, aumentando o engajamento dos clientes com os produtos em 60%.',
            'Desenvolvi um sistema de recomendação baseado em quiz que gerou mais de 20.000 amostras de produtos por mês nas lojas Sephora (relatórios internos de CRM).',
            'Reduzi o tempo de manutenção dos quiosques em 50% usando módulos Web reutilizáveis e analytics com Firebase.',
          ],
          es: [
            'Desarrollé kioscos interactivos para más de 14 marcas de lujo en la empresa de cosméticos más grande del mundo, aumentando el engagement de los clientes con los productos en un 60%.',
            'Desarrollé un sistema de recomendación basado en cuestionarios que generó más de 20.000 muestras de productos al mes en tiendas Sephora (informes internos de CRM).',
            'Reduje el tiempo de mantenimiento de los kioscos en un 50% usando módulos Web reutilizables y analytics con Firebase.',
          ],
        },
      },
    ],
  },
  {
    company: 'Logon Computing',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2018 - May 2018',
        startDate: new Date('2018-01-01'),
        endDate: new Date('2018-05-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Developed a health inspection app for city agents, replacing paper forms and increasing field productivity by 50%.',
            'Implemented offline data sync with SQLite, enabling full functionality in low-connectivity areas.',
            'The digital submission workflow reduced manual report processing from 3 days to a few hours.',
          ],
          pt: [
            'Desenvolvi um app de inspeção sanitária para agentes municipais, substituindo formulários em papel e aumentando a produtividade em campo em 50%.',
            'Implementei sincronização de dados offline com SQLite, garantindo 100% de funcionalidade em áreas com baixa conectividade.',
            'O fluxo de envio digital reduziu o processamento manual de relatórios de 3 dias para poucas horas.',
          ],
          es: [
            'Desarrollé una app de inspección sanitaria para agentes municipales, reemplazando formularios en papel y aumentando la productividad en campo en un 50%.',
            'Implementé sincronización de datos offline con SQLite, habilitando funcionalidad completa en zonas de baja conectividad.',
            'El flujo de envío digital redujo el procesamiento manual de informes de 3 días a pocas horas.',
          ],
        },
      },
    ],
  },
]

export function getMonthsDuration(start: Date, end: Date | null): number {
  const endDate = end ?? new Date()
  const months =
    (endDate.getFullYear() - start.getFullYear()) * 12 +
    (endDate.getMonth() - start.getMonth())
  return Math.max(months, 1)
}

export function getBuildingHeight(months: number): number {
  const MIN_HEIGHT = 60
  const MAX_HEIGHT = 180
  const MONTHS_AT_MAX = 36
  const height = MIN_HEIGHT + ((months / MONTHS_AT_MAX) * (MAX_HEIGHT - MIN_HEIGHT))
  return Math.min(Math.max(Math.round(height), MIN_HEIGHT), MAX_HEIGHT)
}
