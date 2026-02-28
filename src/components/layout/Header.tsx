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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
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
