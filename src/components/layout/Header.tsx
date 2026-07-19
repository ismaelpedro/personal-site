import { useState } from 'react'
import { useApp } from '@/context/AppContext'
import type { Language } from '@/types'

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
]

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 20H5a2 2 0 0 1-2-2v-9.5a2 2 0 0 1 .8-1.6l7-5.25a2 2 0 0 1 2.4 0l7 5.25a2 2 0 0 1 .8 1.6V18a2 2 0 0 1-2 2h-4" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 11v4" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="17 8 22 12 17 16" />
      <polyline points="7 8 2 12 7 16" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" />
      <path d="m3 7 8.25 6.25a2 2 0 0 0 2.5 0L22 7" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

interface NavButtonProps {
  scrollTo?: string
  onClick?: () => void
  label: string
  children: React.ReactNode
}

function NavButton({ scrollTo, onClick, label, children }: NavButtonProps) {
  const cls =
    'w-9 h-9 flex items-center justify-center rounded-lg text-foreground/50 hover:text-foreground hover:bg-foreground/10 transition-all duration-200'

  function handleClick() {
    if (scrollTo) {
      const el = document.getElementById(scrollTo)
      el?.scrollIntoView({ behavior: 'smooth' })
    } else {
      onClick?.()
    }
  }

  return (
    <button onClick={handleClick} aria-label={label} className={cls}>
      {children}
    </button>
  )
}

interface HeaderProps {
  onContactClick: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const { theme, toggleTheme, language, setLanguage, t } = useApp()
  const [langOpen, setLangOpen] = useState(false)

  const currentLang = LANGUAGES.find((l) => l.code === language)!

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
      {/* Main nav pill */}
      <nav className="flex items-center gap-0.5 px-2 py-1.5 rounded-2xl bg-background/80 border border-foreground/10 backdrop-blur-md shadow-lg">
        <NavButton scrollTo="home" label={t.nav.home}>
          <HomeIcon />
        </NavButton>
        <NavButton scrollTo="skills" label={t.skills.label}>
          <CodeIcon />
        </NavButton>
        <NavButton scrollTo="experience" label={t.nav.resume}>
          <BriefcaseIcon />
        </NavButton>
        <NavButton onClick={onContactClick} label={t.nav.contact}>
          <MailIcon />
        </NavButton>
      </nav>

      {/* Theme + Language pill */}
      <div className="flex items-center gap-0.5 px-2 py-1.5 rounded-2xl bg-background/80 border border-foreground/10 backdrop-blur-md shadow-lg">
        <NavButton onClick={toggleTheme} label="Toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </NavButton>

        {/* Language dropdown trigger */}
        <div className="relative">
          <button
            onClick={() => setLangOpen((o) => !o)}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-foreground/50 hover:text-foreground hover:bg-foreground/10 transition-all duration-200 text-base leading-none"
            aria-label="Change language"
          >
            {currentLang.flag}
          </button>

          {langOpen && (
            <>
              {/* Backdrop to close */}
              <div className="fixed inset-0 z-10" onClick={() => setLangOpen(false)} />
              <div className="absolute right-0 top-full mt-2 py-1 rounded-xl bg-background border border-foreground/10 shadow-xl backdrop-blur-md min-w-[145px] z-20">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setLangOpen(false) }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-foreground/5 ${
                      lang.code === language ? 'text-foreground' : 'text-foreground/50'
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.label}</span>
                    {lang.code === language && (
                      <svg className="ml-auto shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
