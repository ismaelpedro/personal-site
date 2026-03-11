import { useApp } from '@/context/AppContext'
import { experiences } from '@/data/experience'
import { SectionLabel } from '@/components/ui/SectionLabel'

function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  )
}

export function Experience() {
  const { t, language } = useApp()

  return (
    <section id="experience" className="space-y-5">
      <SectionLabel>{t.experience.label}</SectionLabel>

      {/* Experience card */}
      <div className="rounded-xl border border-foreground/10 overflow-hidden flex">
        {/* Card header — sticky sidebar */}
        <div className="flex flex-col items-center gap-3 px-4 py-5 border-r border-foreground/5 shrink-0 w-14">
          <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50">
            <BriefcaseIcon />
          </div>
          <span className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
            {t.experience.workExperience}
          </span>
        </div>

        {/* Companies */}
        <div className="flex-1 min-w-0">
        {experiences.map((entry, entryIndex) => (
          <div key={entry.company}>
            {/* Company name — centered separator */}
            <div className="px-5 pt-6 pb-3 text-center">
              <span className="text-xs font-bold tracking-widest text-foreground uppercase">{entry.company}</span>
            </div>

            {/* Left timeline for roles */}
            <div className="relative px-5 pb-5">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-foreground/10" />

              <div className="space-y-6">
                {entry.roles.map((role) => {
                  const bullets = role.bullets[language]

                  return (
                    <div key={role.title} className="flex gap-4">
                      {/* Timeline dot */}
                      <div className="shrink-0 w-3 h-3 rounded-full bg-foreground/20 border-2 border-background mt-1.5 z-10" />

                      <div className="flex-1 min-w-0">
                        {/* Role title + date badge */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-sm font-semibold text-foreground">
                            {role.title}
                            {role.isCurrent && (
                              <span className="ml-2 text-[10px] text-emerald-500 font-normal">● {t.experience.current}</span>
                            )}
                          </h3>
                          <span className="text-[11px] text-foreground/50 bg-foreground/5 border border-foreground/10 rounded-full px-2.5 py-0.5 shrink-0 font-mono">
                            {role.period}
                          </span>
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-1.5 mb-2">
                          {bullets.map((bullet, bi) => (
                            <li key={bi} className="flex gap-2 text-sm text-foreground/50 leading-relaxed">
                              <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-foreground/30" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Divider between companies */}
            {entryIndex < experiences.length - 1 && (
              <div className="h-px bg-foreground/5 mx-5" />
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}
