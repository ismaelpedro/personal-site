import type { ExperienceEntry } from '@/types'

export const experiences: ExperienceEntry[] = [
  {
    company: 'World Wide Technology',
    url: 'https://www.wwt.com',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Apr 2025 - Present',
        startDate: new Date('2025-04-01'),
        endDate: null,
        isCurrent: true,
        bullets: [
          'Allocated on a food delivery project with two apps: React Native for couriers and Flutter for customers, both with native integrations.',
          'Introduced modular "micro-apps" architecture, enabling new feature rollout 40% faster across squads.',
        ],
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
        bullets: [
          'Built and integrated the Offshore Banking module, contributing to a product adopted by +50k high-net-worth clients.',
          'Increased bill payment conversion by 26% through UX improvements, auto-approve flows and smart defaults.',
          'Improved banking app stability, cutting crash rate by 30% and boosting App Store rating from 3.9 to 4.6.',
        ],
      },
    ],
  },
  {
    company: 'Unimed',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2022 - Jul 2022',
        startDate: new Date('2022-01-01'),
        endDate: new Date('2022-07-01'),
        isCurrent: false,
        bullets: [
          'Scaled the "Unimed Rio Preto" medical app to +100k active doctors, improving load time by 35% with an architecture refactor.',
          'Created a reusable design system adopted by 3 product teams, cutting development time of new features by 40%.',
          'Implemented biometric login and secure data access, reducing login friction and increasing daily active users by 22%.',
        ],
      },
    ],
  },
  {
    company: 'Likin.do',
    url: 'https://likin.do',
    roles: [
      {
        title: 'Mobile Developer',
        period: 'Oct 2020 - Dec 2021',
        startDate: new Date('2020-10-01'),
        endDate: new Date('2021-12-01'),
        isCurrent: false,
        bullets: [
          'Built core features (product listing, checkout, onboarding) for a social-impact marketplace, boosting buyer conversions by 22%.',
          'Mentored team in Clean Architecture and GetX, reducing production bugs by 30%.',
          'Implemented Firebase analytics + crash reporting, cutting issue resolution time from days to hours.',
        ],
      },
    ],
  },
  {
    company: 'Genial Investments Bank',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Dec 2019 - Sep 2020',
        startDate: new Date('2019-12-01'),
        endDate: new Date('2020-09-01'),
        isCurrent: false,
        bullets: [
          'Built and optimized the stock order ("boleta") feature used by +1M investors, reducing trade execution time by 25%.',
          'Developed white-label banking apps for brands like Flamengo BRB and TC, accelerating rollout from 3 months to 4 weeks.',
          'Introduced app flavors and micro-frontends, reducing maintenance complexity and enabling 5 parallel custom banking apps.',
        ],
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
        bullets: [
          'Improved medical app performance for +5k physicians, reducing exam report loading time by 40%.',
          'Launched "Exam Results PDF download" feature, adopted by 90% of active users within the first month.',
          'Reduced critical crashes by 30% through refactor and BLoC/Cubit state management.',
        ],
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
        bullets: [
          'Built interactive in-store kiosks for 14+ luxury brands, increasing customer product engagement by 60%.',
          'Developed quiz-based recommendation system that generated 20k+ product samples/month in Sephora stores.',
          'Reduced kiosk maintenance time by 50% using reusable Flutter Web modules and Firebase-based analytics.',
        ],
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
        bullets: [
          'Developed a health inspection app for city agents, replacing paper forms and increasing field productivity by 50%.',
          'Implemented offline data sync with SQLite, enabling 100% functionality in low-connectivity areas.',
          'Reduced manual report processing time from 3 days to a few hours via digital data submission.',
        ],
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
