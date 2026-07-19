import { useEffect, useState } from 'react'
import type { Language } from '@/types'

function getInitialLanguage(): Language {
  const stored = localStorage.getItem('language') as Language | null
  if (stored === 'en' || stored === 'pt' || stored === 'es') return stored
  const browserLang = navigator.language.slice(0, 2)
  if (browserLang === 'pt') return 'pt'
  if (browserLang === 'es') return 'es'
  return 'en'
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      return getInitialLanguage()
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  function setLanguage(lang: Language) {
    setLanguageState(lang)
  }

  return { language, setLanguage }
}
