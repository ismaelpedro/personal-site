export const skillGroups = {
  backend: ['Go', 'Node.js', 'TypeScript', 'Python', 'FastAPI', 'Django'],
  distributed: ['Microservices', 'gRPC', 'GraphQL', 'REST API', 'Kafka', 'RabbitMQ', 'Redis', 'LLM applications'],
  databases: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'NoSQL'],
  cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Azure DevOps'],
  architecture: ['Clean Architecture', 'DDD', 'TDD', 'BDD', 'Event-Driven'],
  observability: ['Datadog', 'Sentry', 'Grafana', 'Jest', 'PyTest', 'Mockito'],
  frontend: ['React.js', 'Next.js', 'React Native', 'Flutter', 'Expo'],
  ai: ['Claude Code', 'Cursor', 'MCP', 'LLM integrations', 'Agent-based workflows'],
}

export const education = [
  {
    institution: 'IFPB, Brazil',
    degree: 'Information Technology',
    period: '2019 – 2023',
  },
]

export interface LanguageProficiency {
  name: Record<string, string>
  dots: number // 1-6
  cefr: string
  level: 'native' | 'advanced' | 'intermediate' | 'basic'
}

export const languageProficiencies: LanguageProficiency[] = [
  {
    name: { en: 'Portuguese', pt: 'Português', es: 'Portugués' },
    dots: 6,
    cefr: 'C2',
    level: 'native',
  },
  {
    name: { en: 'English', pt: 'Inglês', es: 'Inglés' },
    dots: 5,
    cefr: 'C1',
    level: 'advanced',
  },
  {
    name: { en: 'Spanish', pt: 'Espanhol', es: 'Español' },
    dots: 4,
    cefr: 'B2',
    level: 'advanced',
  },
]
