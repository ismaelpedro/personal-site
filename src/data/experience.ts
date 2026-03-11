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
            'The digital ecosystem consists of two mobile applications: a customer-facing ordering app in Flutter and a delivery operations app in React Native, backed by services in Golang.',
            'Introduced a modular "micro-apps" architecture enabling new feature rollout 40% faster across squads.',
            'Increased order conversion by 26% through UX improvements and auto-approve flows.',
            'Work across Flutter, React Native, and Golang, owning features end-to-end from API to UI.',
            'Also assisted with frontend development using React.js for internal web dashboards.',
          ],
          pt: [
            'Alocado no Wingstop — uma das redes de fast-food de crescimento mais rápido nos EUA, com 2.000+ unidades e app com mais de 5M de downloads.',
            'O ecossistema digital consiste em dois aplicativos móveis: um app de pedidos para o cliente em Flutter e um app de operações de entrega em React Native, com serviços em Golang.',
            'Introduzi uma arquitetura modular de "micro-apps" que acelerou o lançamento de novas funcionalidades em 40% entre as squads.',
            'Aumentei a conversão de pedidos em 26% com melhorias de UX e fluxos de aprovação automática.',
            'Atuo com Flutter, React Native e Golang, entregando funcionalidades de ponta a ponta, da API à UI.',
            'Também auxiliei no desenvolvimento frontend com React.js para dashboards internos.',
          ],
          es: [
            'Asignado en Wingstop — una de las cadenas de comida rápida de mayor crecimiento en EE.UU., con 2.000+ locales y una app con más de 5M de descargas.',
            'El ecosistema digital consiste en dos aplicaciones móviles: una app de pedidos para el cliente en Flutter y una app de operaciones de entrega en React Native, respaldadas por servicios en Golang.',
            'Introduje una arquitectura modular de "micro-apps" que habilitó el lanzamiento de nuevas funciones un 40% más rápido entre los equipos.',
            'Aumenté la conversión de pedidos en un 26% mediante mejoras de UX y flujos de aprobación automática.',
            'Trabajo con Flutter, React Native y Golang, desarrollando funcionalidades de extremo a extremo desde la API hasta la UI.',
            'También asistí con el desarrollo frontend usando React.js para dashboards web internos.',
          ],
        },
      },
    ],
  },
  {
    company: 'TIDE',
    url: 'https://www.tide.co',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Aug 2023 - Apr 2025',
        startDate: new Date('2023-08-01'),
        endDate: new Date('2025-04-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Tide is a UK-based fintech platform providing business banking and financial services, with a mobile app surpassing +1.5M active users.',
            'Worked across the full product stack — mobile, web frontend, and backend microservices — delivering features within a banking-grade environment that demanded rigorous security standards.',
            'Applied security techniques including code obfuscation, certificate pinning, and data encryption across mobile and backend layers.',
            'Led efforts to meet WCAG accessibility standards across mobile and web surfaces.',
            'Built and maintained distributed backend services on AWS, using microservice architecture with event-driven communication, containerized deployments, and CI/CD pipelines.',
          ],
          pt: [
            'Tide é uma plataforma fintech do Reino Unido que oferece banking e serviços financeiros para empresas, com um app móvel com mais de 1,5M de usuários ativos.',
            'Atuei em toda a stack do produto — mobile, frontend web e microsserviços backend — entregando funcionalidades em um ambiente bancário que exigia rigorosos padrões de segurança.',
            'Apliquei técnicas de segurança incluindo ofuscação de código, certificate pinning e criptografia de dados nas camadas mobile e backend.',
            'Liderei esforços para atender os padrões de acessibilidade WCAG em superfícies mobile e web.',
            'Construí e mantive serviços backend distribuídos na AWS, usando arquitetura de microsserviços com comunicação orientada a eventos, deploys containerizados e pipelines de CI/CD.',
          ],
          es: [
            'Tide es una plataforma fintech del Reino Unido que ofrece banca empresarial y servicios financieros, con una app móvil que supera +1,5M de usuarios activos.',
            'Trabajé en toda la stack del producto — mobile, frontend web y microservicios backend — entregando funcionalidades en un entorno bancario que exigía rigurosos estándares de seguridad.',
            'Apliqué técnicas de seguridad incluyendo ofuscación de código, certificate pinning y cifrado de datos en las capas mobile y backend.',
            'Lideré esfuerzos para cumplir los estándares de accesibilidad WCAG en superficies mobile y web.',
            'Construí y mantuve servicios backend distribuidos en AWS, usando arquitectura de microservicios con comunicación orientada a eventos, despliegues containerizados y pipelines de CI/CD.',
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
        period: 'Jan 2022 - Jul 2023',
        startDate: new Date('2022-01-01'),
        endDate: new Date('2023-07-01'),
        isCurrent: false,
        bullets: {
          en: [
            'BTG Pactual is the largest investment bank in Latin America, with a native banking app surpassing 5M+ downloads on iOS and Android.',
            'Worked across two distinct mobile products: BTG Global, a standalone React Native app for offshore investments serving high-net-worth clients, and a Flutter module embedded into the native Android/iOS app via Method Channels.',
            'Built and integrated the Offshore Banking module, contributing to a product adopted by +50,000 high-net-worth clients.',
            'Increased bill payment conversion by 26% through UX improvements, auto-approve flows, and smart defaults.',
            'Improved app stability on the native-embedded Flutter side, cutting the crash rate and lifting the App Store rating from 3.9 to 4.6.',
            'Also contributed to frontend development using React.js for the web platform.',
          ],
          pt: [
            'BTG Pactual é o maior banco de investimento da América Latina, com app bancário nativo ultrapassando 5M+ de downloads no iOS e Android.',
            'Atuei em dois produtos mobile distintos: BTG Global, um app React Native standalone para investimentos offshore de clientes de alto patrimônio, e um módulo Flutter embutido no app nativo Android/iOS via Method Channels.',
            'Desenvolvi e integrei o módulo de Banking Offshore, contribuindo para um produto adotado por mais de 50.000 clientes de alto patrimônio.',
            'Aumentei a conversão de pagamentos em 26% com melhorias de UX, fluxos de aprovação automática e defaults inteligentes.',
            'Melhorei a estabilidade do app no módulo Flutter nativo, reduzindo a taxa de crashes e elevando a nota na App Store de 3,9 para 4,6.',
            'Também contribuí com o desenvolvimento frontend usando React.js para a plataforma web.',
          ],
          es: [
            'BTG Pactual es el banco de inversión más grande de América Latina, con una app bancaria nativa que supera los 5M+ de descargas en iOS y Android.',
            'Trabajé en dos productos mobile distintos: BTG Global, una app React Native standalone para inversiones offshore de clientes de alto patrimonio, y un módulo Flutter embebido en la app nativa Android/iOS vía Method Channels.',
            'Desarrollé e integré el módulo de Banca Offshore, contribuyendo a un producto adoptado por más de 50.000 clientes de alto patrimonio.',
            'Aumenté la conversión de pagos en un 26% mediante mejoras de UX, flujos de aprobación automática y valores predeterminados inteligentes.',
            'Mejoré la estabilidad de la app en el módulo Flutter nativo, reduciendo la tasa de crashes y elevando la calificación en la App Store de 3,9 a 4,6.',
            'También contribuí al desarrollo frontend usando React.js para la plataforma web.',
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
        period: 'Oct 2020 - Dec 2021',
        startDate: new Date('2020-10-01'),
        endDate: new Date('2021-12-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Unimed is one of Brazil\'s largest healthcare cooperatives. Worked on the "Unimed Rio Preto" medical app, scaling it to +100,000 active doctors.',
            'Beyond the mobile layer, contributed to the Node.js backend for API development and hospital system integrations.',
            'Led an architecture refactor that improved load time by 35%, measured via Firebase Performance Monitoring.',
            'Created a reusable design system adopted by 3 product teams, cutting development time of new features by 40%.',
            'Also assisted with frontend development using React.js for the web portal.',
          ],
          pt: [
            'Unimed é uma das maiores cooperativas de saúde do Brasil. Atuei no app médico "Unimed Rio Preto", escalando para +100.000 médicos ativos.',
            'Além da camada mobile, contribuí com o backend Node.js para desenvolvimento de APIs e integrações hospitalares.',
            'Liderei um refactor de arquitetura que melhorou o tempo de carregamento em 35%, medido via Firebase Performance Monitoring.',
            'Criei um design system reutilizável adotado por 3 times de produto, reduzindo o tempo de desenvolvimento de novas features em 40%.',
            'Também auxiliei no desenvolvimento frontend com React.js para o portal web.',
          ],
          es: [
            'Unimed es una de las mayores cooperativas de salud de Brasil. Trabajé en la app médica "Unimed Rio Preto", escalándola a +100.000 médicos activos.',
            'Más allá de la capa mobile, contribuí al backend Node.js para el desarrollo de APIs e integraciones hospitalarias.',
            'Lideré un refactor de arquitectura que mejoró el tiempo de carga en un 35%, medido con Firebase Performance Monitoring.',
            'Creé un design system reutilizable adoptado por 3 equipos de producto, reduciendo el tiempo de desarrollo de nuevas funcionalidades en un 40%.',
            'También colaboré en el desarrollo frontend con React.js para el portal web.',
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
        title: 'Fullstack Engineer',
        period: 'Dec 2019 - Sep 2020',
        startDate: new Date('2019-12-01'),
        endDate: new Date('2020-09-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Likin.do is a social-impact marketplace connecting conscious consumers with purpose-driven brands.',
            'Worked across the mobile app, the React web platform, and backend, building core features including product listing, checkout, and onboarding that boosted buyer conversions by 22%.',
            'Mentored the team on Clean Architecture, implemented Firebase Analytics and crash reporting, cutting issue resolution time from days to hours.',
            'Handled frontend development using React.js on the web platform, building and maintaining core UI features.',
          ],
          pt: [
            'Likin.do é um marketplace de impacto social conectando consumidores conscientes com marcas com propósito.',
            'Atuei no app mobile, na plataforma web React e no backend, desenvolvendo funcionalidades principais como listagem de produtos, checkout e onboarding, aumentando conversões de compradores em 22%.',
            'Mentorei o time em Clean Architecture, implementei Firebase Analytics e relatórios de crash, reduzindo o tempo de resolução de problemas de dias para horas.',
            'Realizei desenvolvimento frontend usando React.js na plataforma web, construindo e mantendo funcionalidades principais de UI.',
          ],
          es: [
            'Likin.do es un marketplace de impacto social que conecta consumidores conscientes con marcas con propósito.',
            'Trabajé en la app mobile, la plataforma web React y el backend, desarrollando funcionalidades clave como listado de productos, checkout y onboarding, aumentando las conversiones de compradores en un 22%.',
            'Mentoreé al equipo en Clean Architecture, implementé Firebase Analytics y reportes de crashes, reduciendo el tiempo de resolución de incidencias de días a horas.',
            'Realicé desarrollo frontend usando React.js en la plataforma web, construyendo y manteniendo funcionalidades principales de UI.',
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
        period: 'Mar 2019 - Nov 2019',
        startDate: new Date('2019-03-01'),
        endDate: new Date('2019-11-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Genial Investments is a Brazilian digital investment bank. Worked across the mobile apps and the React web trading platform.',
            'Built and optimized the stock order ("boleta") feature used by +1 million investors, reducing trade execution time by 25% (measured via backend latency monitoring with Datadog).',
            'Developed white-label banking apps for several brands, accelerating rollout from 3 months to 4 weeks through app flavors and micro-frontends.',
            'Enabled 5 parallel custom banking apps from a single codebase.',
          ],
          pt: [
            'Genial Investimentos é um banco digital de investimentos brasileiro. Atuei nos apps mobile e na plataforma web de trading em React.',
            'Desenvolvi e otimizei a funcionalidade de ordem de bolsa ("boleta") usada por +1 milhão de investidores, reduzindo o tempo de execução de trades em 25% (medido via Datadog).',
            'Desenvolvi apps bancários white-label para diversas marcas, acelerando o lançamento de 3 meses para 4 semanas com app flavors e micro-frontends.',
            'Viabilizei 5 apps bancários personalizados em paralelo a partir de uma única codebase.',
          ],
          es: [
            'Genial Inversiones es un banco digital de inversiones brasileño. Trabajé en las apps mobile y en la plataforma web de trading en React.',
            'Desarrollé y optimicé la funcionalidad de orden de bolsa ("boleta") utilizada por +1 millón de inversores, reduciendo el tiempo de ejecución de operaciones en un 25% (medido con Datadog).',
            'Desarrollé apps bancarias white-label para varias marcas, acelerando el lanzamiento de 3 meses a 4 semanas mediante app flavors y micro-frontends.',
            'Habilité 5 apps bancarias personalizadas en paralelo desde una única codebase.',
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
        period: 'Jun 2018 - Feb 2019',
        startDate: new Date('2018-06-01'),
        endDate: new Date('2019-02-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Albert Einstein is one of Latin America\'s most prestigious hospitals. Improved the medical app\'s performance for +5,000 physicians, reducing exam report loading time by 40%.',
            'Launched the "Exam Results PDF Download" feature, adopted by 90% of active users within the first month.',
          ],
          pt: [
            'Albert Einstein é um dos hospitais mais renomados da América Latina. Melhorei a performance do app médico para +5.000 médicos, reduzindo o tempo de carregamento de laudos em 40%.',
            'Lancei a funcionalidade de "Download de Resultados de Exames em PDF", adotada por 90% dos usuários ativos no primeiro mês.',
          ],
          es: [
            'Albert Einstein es uno de los hospitales más prestigiosos de América Latina. Mejoré el rendimiento de la app médica para +5.000 médicos, reduciendo el tiempo de carga de informes en un 40%.',
            'Lancé la funcionalidad de "Descarga de Resultados de Exámenes en PDF", adoptada por el 90% de los usuarios activos en el primer mes.',
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
        period: 'Sep 2017 - May 2018',
        startDate: new Date('2017-09-01'),
        endDate: new Date('2018-05-01'),
        isCurrent: false,
        bullets: {
          en: [
            'L\'Oréal is the world\'s largest cosmetics company. Built interactive in-store kiosks for 14+ luxury brands, increasing customer product engagement by 60%.',
            'Built a quiz-based recommendation engine generating 20,000+ product samples/month in Sephora stores.',
            'Reduced kiosk maintenance time by 50% using reusable web modules.',
          ],
          pt: [
            'L\'Oréal é a maior empresa de cosméticos do mundo. Desenvolvi quiosques interativos para 14+ marcas de luxo, aumentando o engajamento dos clientes com os produtos em 60%.',
            'Desenvolvi um motor de recomendação baseado em quiz que gerou mais de 20.000 amostras de produtos por mês nas lojas Sephora.',
            'Reduzi o tempo de manutenção dos quiosques em 50% usando módulos Web reutilizáveis.',
          ],
          es: [
            'L\'Oréal es la empresa de cosméticos más grande del mundo. Desarrollé kioscos interactivos para más de 14 marcas de lujo, aumentando el engagement de los clientes con los productos en un 60%.',
            'Desarrollé un motor de recomendación basado en cuestionarios que generó más de 20.000 muestras de productos al mes en tiendas Sephora.',
            'Reduje el tiempo de mantenimiento de los kioscos en un 50% usando módulos Web reutilizables.',
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
