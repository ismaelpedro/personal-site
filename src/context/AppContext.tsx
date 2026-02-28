import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { translations } from '@/i18n/translations'
import type { Language, Theme } from '@/types'
import type { Translations } from '@/i18n/translations'

interface AppContextValue {
  theme: Theme
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme()
  const [language, setLanguage] = useState<Language>('en')

  const value = useMemo<AppContextValue>(
    () => ({
      theme,
      toggleTheme: toggle,
      language,
      setLanguage,
      t: translations[language],
    }),
    [theme, toggle, language, setLanguage]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
