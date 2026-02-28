export const skillGroups = {
  mobile: ['Flutter', 'Dart', 'React Native', 'SwiftUI', 'Swift', 'iOS'],
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  backend: ['GoLang', 'Python', 'FastAPI', 'Node.js', 'GraphQL'],
  devops: ['AWS', 'Firebase', 'Supabase', 'PostgreSQL', 'MongoDB', 'CI/CD'],
  ai: ['Claude Code', 'Cursor', 'MCP', 'GPT', 'Gemini'],
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
