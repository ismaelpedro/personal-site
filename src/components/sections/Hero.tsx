import { useApp } from '@/context/AppContext'
import { useUserLocation } from '@/hooks/useUserLocation'
import { useTypingAnimation } from '@/hooks/useTypingAnimation'
import type { Region } from '@/types'

const CV_URLS: Record<Region, string> = {
  americas: '/resumes/resume_ismael_br.pdf',
  europe: '/resumes/resume_ismael_es.pdf',
}

export function Hero() {
  const { t } = useApp()
  const { region, loading } = useUserLocation()
  const typedRole = useTypingAnimation(t.hero.roles)

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      {/* Avatar */}
      <div className="w-48 h-48 rounded-full overflow-hidden border border-foreground/10 mt-16 mb-4">
        <img
          src="/avatar.jpg"
          alt="Ismael Pedro"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Open to work badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-emerald-400">{t.hero.openToWork}</span>
      </div>

      {/* Name */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-foreground leading-none tracking-tight mb-6">
        {t.hero.greeting}
      </h1>

      {/* Typing subtitle */}
      <p className="text-lg sm:text-xl md:text-2xl text-foreground/50 font-mono mb-10 flex items-center justify-center gap-0.5 h-9">
        {typedRole}
        <span className="typing-cursor" aria-hidden="true" />
      </p>

      {/* CV Download */}
      {!loading && (
        <a
          href={CV_URLS[region]}
          download
          className="inline-flex items-center gap-2 text-sm text-foreground bg-foreground/10 hover:bg-foreground/15 border border-foreground/10 hover:border-foreground/20 px-4 py-2 rounded-md transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          {t.hero.downloadCV}
        </a>
      )}
    </section>
  )
}
