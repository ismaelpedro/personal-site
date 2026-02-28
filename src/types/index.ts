export type Region = 'americas' | 'europe'
export type Language = 'en' | 'pt' | 'es'
export type Theme = 'dark' | 'light'

export interface ExperienceRole {
  title: string
  period: string
  startDate: Date
  endDate: Date | null
  bullets: string[]
  isCurrent: boolean
}

export interface ExperienceEntry {
  company: string
  roles: ExperienceRole[]
  url?: string
}

/** @deprecated use ExperienceEntry with roles instead */
export interface LegacyExperienceEntry {
  company: string
  role: string
  period: string
  startDate: Date
  endDate: Date | null
  url?: string
  isCurrent: boolean
}

export interface LocationState {
  region: Region
  loading: boolean
  error: boolean
}
