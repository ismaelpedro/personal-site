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
            'Allocated on Wingstop — a QSR brand with 3,000+ restaurants worldwide and $5.3B+ in system-wide sales, where 73%+ of orders are digital. Two customer-facing apps: an ordering app (Flutter) and a delivery app (React Native), backed by a Go services layer on AWS.',
            'Worked across the full stack of the consumer platform: the Flutter ordering app, the React Native delivery app, and the shared Go backend powering both.',
            'Designed and built Go microservices on AWS that consolidated ordering and delivery behind a unified API, removing duplicated business logic across the two apps.',
            'Optimized observability across the distributed Go backend by enhancing structured logging, traces, and metrics, cutting error-log volume 97.3% and Datadog monitoring cost 55%.',
            'Integrated LLM workflows into the production platform (Claude Code, MCP, agent-based pipelines) to automate engineering and operational tasks and accelerate delivery.',
          ],
          pt: [
            'Alocado no Wingstop — uma marca de QSR com 3.000+ restaurantes no mundo e mais de US$ 5,3B em vendas totais, onde 73%+ dos pedidos são digitais. Dois apps para o cliente: um app de pedidos (Flutter) e um app de entrega (React Native), com uma camada de serviços em Go na AWS.',
            'Atuei em toda a stack da plataforma de consumo: o app de pedidos em Flutter, o app de entrega em React Native e o backend Go compartilhado que alimenta ambos.',
            'Projetei e construí microsserviços em Go na AWS que consolidaram pedidos e entregas atrás de uma API unificada, eliminando lógica de negócio duplicada entre os dois apps.',
            'Otimizei a observabilidade no backend Go distribuído aprimorando logging estruturado, traces e métricas, reduzindo o volume de error-logs em 97,3% e o custo de monitoramento no Datadog em 55%.',
            'Integrei workflows de LLM à plataforma de produção (Claude Code, MCP, pipelines baseados em agentes) para automatizar tarefas de engenharia e operação e acelerar a entrega.',
          ],
          es: [
            'Asignado en Wingstop — una marca de QSR con 3.000+ restaurantes en el mundo y más de $5,3B en ventas totales, donde el 73%+ de los pedidos son digitales. Dos apps para el cliente: una app de pedidos (Flutter) y una app de entrega (React Native), respaldadas por una capa de servicios en Go sobre AWS.',
            'Trabajé en toda la stack de la plataforma de consumo: la app de pedidos en Flutter, la app de entrega en React Native y el backend Go compartido que alimenta a ambas.',
            'Diseñé y construí microservicios en Go sobre AWS que consolidaron pedidos y entregas tras una API unificada, eliminando lógica de negocio duplicada entre las dos apps.',
            'Optimicé la observabilidad en el backend Go distribuido mejorando el logging estructurado, traces y métricas, reduciendo el volumen de error-logs un 97,3% y el coste de monitoreo en Datadog un 55%.',
            'Integré workflows de LLM en la plataforma de producción (Claude Code, MCP, pipelines basados en agentes) para automatizar tareas de ingeniería y operación y acelerar la entrega.',
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
            'Tide is the UK\'s leading SME business-banking platform: ~900K UK members (15% market share) and 1.5M+ globally, in a security- and compliance-critical environment.',
            'Built and owned Node.js backend services on AWS (Lambda, API Gateway, SQS), driving a modernization effort that introduced Go services and migrated high-throughput endpoints from Node.js to Go.',
            'Delivered features across backend microservices (Node.js on AWS), web frontend, and mobile in a banking-grade platform serving 1.5M+ users.',
            'Hardened security with code obfuscation, certificate pinning, and end-to-end data encryption across mobile and backend layers.',
            'Led WCAG accessibility compliance across mobile and web surfaces.',
          ],
          pt: [
            'Tide é a principal plataforma de banking para PMEs do Reino Unido: ~900K membros no Reino Unido (15% de market share) e mais de 1,5M globalmente, em um ambiente crítico de segurança e compliance.',
            'Construí e fui responsável por serviços backend em Node.js na AWS (Lambda, API Gateway, SQS), conduzindo um esforço de modernização que introduziu serviços em Go e migrou endpoints de alto throughput de Node.js para Go.',
            'Entreguei funcionalidades em microsserviços backend (Node.js na AWS), frontend web e mobile em uma plataforma bancária que atende mais de 1,5M de usuários.',
            'Reforcei a segurança com ofuscação de código, certificate pinning e criptografia de dados de ponta a ponta nas camadas mobile e backend.',
            'Liderei a conformidade de acessibilidade WCAG em superfícies mobile e web.',
          ],
          es: [
            'Tide es la principal plataforma de banca para PYMEs del Reino Unido: ~900K miembros en el Reino Unido (15% de cuota de mercado) y más de 1,5M globalmente, en un entorno crítico de seguridad y compliance.',
            'Construí y fui responsable de servicios backend en Node.js sobre AWS (Lambda, API Gateway, SQS), impulsando un esfuerzo de modernización que introdujo servicios en Go y migró endpoints de alto throughput de Node.js a Go.',
            'Entregué funcionalidades en microservicios backend (Node.js sobre AWS), frontend web y mobile en una plataforma bancaria que atiende a más de 1,5M de usuarios.',
            'Reforcé la seguridad con ofuscación de código, certificate pinning y cifrado de datos de extremo a extremo en las capas mobile y backend.',
            'Lideré el cumplimiento de accesibilidad WCAG en superficies mobile y web.',
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
            'BTG Pactual is the largest investment bank in Latin America, with $190B+ in wealth under management; native banking app with 5M+ downloads plus a standalone offshore app.',
            'Built and integrated the Offshore Banking module on BTG Global (React Native), adopted by 50,000+ high-net-worth clients.',
            'Increased bill-payment conversion 26% via UX improvements, auto-approve flows, and smart defaults.',
            'Lifted the App Store rating from 3.9 to 4.6 by cutting the crash rate on the native-embedded Flutter module.',
            'Engineered white-label banking apps with app flavors and micro-frontends, cutting rollout from 3 months to 4 weeks and enabling 5 parallel apps from one codebase.',
            'Developed Node.js backend services on AWS and React.js web features; integrated Firebase and Sentry with CI/CD via GitHub Actions.',
          ],
          pt: [
            'BTG Pactual é o maior banco de investimento da América Latina, com mais de US$ 190B sob gestão; app bancário nativo com 5M+ de downloads e um app offshore standalone.',
            'Desenvolvi e integrei o módulo de Banking Offshore no BTG Global (React Native), adotado por mais de 50.000 clientes de alto patrimônio.',
            'Aumentei a conversão de pagamentos em 26% com melhorias de UX, fluxos de aprovação automática e defaults inteligentes.',
            'Elevei a nota na App Store de 3,9 para 4,6 reduzindo a taxa de crashes no módulo Flutter nativo.',
            'Desenvolvi apps bancários white-label com app flavors e micro-frontends, reduzindo o lançamento de 3 meses para 4 semanas e viabilizando 5 apps em paralelo a partir de uma única codebase.',
            'Desenvolvi serviços backend em Node.js na AWS e features web em React.js; integrei Firebase e Sentry com CI/CD via GitHub Actions.',
          ],
          es: [
            'BTG Pactual es el banco de inversión más grande de América Latina, con más de $190B bajo gestión; app bancaria nativa con 5M+ de descargas y una app offshore standalone.',
            'Desarrollé e integré el módulo de Banca Offshore en BTG Global (React Native), adoptado por más de 50.000 clientes de alto patrimonio.',
            'Aumenté la conversión de pagos un 26% mediante mejoras de UX, flujos de aprobación automática y valores predeterminados inteligentes.',
            'Elevé la calificación en la App Store de 3,9 a 4,6 reduciendo la tasa de crashes en el módulo Flutter nativo.',
            'Desarrollé apps bancarias white-label con app flavors y micro-frontends, reduciendo el lanzamiento de 3 meses a 4 semanas y habilitando 5 apps en paralelo desde una única codebase.',
            'Desarrollé servicios backend en Node.js sobre AWS y features web en React.js; integré Firebase y Sentry con CI/CD vía GitHub Actions.',
          ],
        },
      },
    ],
  },
  {
    company: 'Unimed',
    url: 'https://www.unimed.coop.br',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Oct 2020 - Dec 2021',
        startDate: new Date('2020-10-01'),
        endDate: new Date('2021-12-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Unimed is one of Brazil\'s largest healthcare cooperatives. Scaled the "Rio Preto" medical app to 100,000+ active physicians.',
            'Introduced a modular micro-apps architecture across squads, accelerating new-feature rollout 40%.',
            'Led an architecture refactor that improved load time 35% (measured via Firebase Performance Monitoring).',
            'Built a reusable design system adopted by 3 product teams, cutting new-feature development time 40%.',
            'Developed Node.js backend APIs on AWS and hospital-system integrations.',
          ],
          pt: [
            'Unimed é uma das maiores cooperativas de saúde do Brasil. Escalei o app médico "Rio Preto" para 100.000+ médicos ativos.',
            'Introduzi uma arquitetura modular de micro-apps entre as squads, acelerando o lançamento de novas funcionalidades em 40%.',
            'Liderei um refactor de arquitetura que melhorou o tempo de carregamento em 35% (medido via Firebase Performance Monitoring).',
            'Construí um design system reutilizável adotado por 3 times de produto, reduzindo o tempo de desenvolvimento de novas features em 40%.',
            'Desenvolvi APIs backend em Node.js na AWS e integrações com sistemas hospitalares.',
          ],
          es: [
            'Unimed es una de las mayores cooperativas de salud de Brasil. Escalé la app médica "Rio Preto" a 100.000+ médicos activos.',
            'Introduje una arquitectura modular de micro-apps entre los equipos, acelerando el lanzamiento de nuevas funciones un 40%.',
            'Lideré un refactor de arquitectura que mejoró el tiempo de carga un 35% (medido con Firebase Performance Monitoring).',
            'Construí un design system reutilizable adoptado por 3 equipos de producto, reduciendo el tiempo de desarrollo de nuevas funcionalidades un 40%.',
            'Desarrollé APIs backend en Node.js sobre AWS e integraciones con sistemas hospitalarios.',
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
            'Likin.do is a social-impact marketplace connecting consumers with purpose-driven brands.',
            'Built core marketplace features (product listing, checkout, onboarding) that boosted buyer conversion 22%.',
            'Mentored the team on Clean Architecture; set up Firebase Analytics and crash reporting, cutting issue resolution from days to hours.',
            'Delivered React.js web features across the platform.',
          ],
          pt: [
            'Likin.do é um marketplace de impacto social conectando consumidores com marcas com propósito.',
            'Desenvolvi funcionalidades principais do marketplace (listagem de produtos, checkout, onboarding) que aumentaram a conversão de compradores em 22%.',
            'Mentorei o time em Clean Architecture; configurei Firebase Analytics e relatórios de crash, reduzindo o tempo de resolução de problemas de dias para horas.',
            'Entreguei funcionalidades web em React.js em toda a plataforma.',
          ],
          es: [
            'Likin.do es un marketplace de impacto social que conecta consumidores con marcas con propósito.',
            'Desarrollé funcionalidades clave del marketplace (listado de productos, checkout, onboarding) que aumentaron la conversión de compradores un 22%.',
            'Mentoreé al equipo en Clean Architecture; configuré Firebase Analytics y reportes de crashes, reduciendo el tiempo de resolución de incidencias de días a horas.',
            'Entregué funcionalidades web en React.js en toda la plataforma.',
          ],
        },
      },
    ],
  },
  {
    company: 'Genial Investments Bank',
    url: 'https://www.genialinvestimentos.com.br',
    roles: [
      {
        title: 'Fullstack Engineer',
        period: 'Mar 2019 - Nov 2019',
        startDate: new Date('2019-03-01'),
        endDate: new Date('2019-11-01'),
        isCurrent: false,
        bullets: {
          en: [
            'Genial is one of Brazil\'s largest independent investment platforms: 2M+ clients and $50B+ in assets under custody, with mobile and web trading platforms.',
            'Built and optimized the stock-order feature used by 1M+ investors, cutting trade-execution time 25% (Node.js backend on AWS, latency monitoring via Datadog).',
            'Built white-label fintech applications, delivering branded trading and investment experiences from a shared codebase for partner institutions.',
          ],
          pt: [
            'Genial é uma das maiores plataformas independentes de investimento do Brasil: 2M+ de clientes e mais de US$ 50B em ativos sob custódia, com plataformas de trading mobile e web.',
            'Desenvolvi e otimizei a funcionalidade de ordem de bolsa usada por 1M+ de investidores, reduzindo o tempo de execução de trades em 25% (backend Node.js na AWS, monitoramento de latência via Datadog).',
            'Construí aplicações fintech white-label, entregando experiências de trading e investimento com marca própria a partir de uma codebase compartilhada para instituições parceiras.',
          ],
          es: [
            'Genial es una de las mayores plataformas independientes de inversión de Brasil: 2M+ de clientes y más de $50B en activos bajo custodia, con plataformas de trading mobile y web.',
            'Desarrollé y optimicé la funcionalidad de orden de bolsa utilizada por 1M+ de inversores, reduciendo el tiempo de ejecución de operaciones un 25% (backend Node.js sobre AWS, monitoreo de latencia via Datadog).',
            'Construí aplicaciones fintech white-label, entregando experiencias de trading e inversión con marca propia desde una codebase compartida para instituciones socias.',
          ],
        },
      },
    ],
  },
  {
    company: 'Hospital Israelita Albert Einstein',
    url: 'https://www.einstein.br',
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
    url: 'https://www.loreal.com',
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
