import type { ComponentType } from 'react'
import { useApp } from '@/context/AppContext'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { skillGroups, education, languageProficiencies } from '@/data/skills'
import type { LanguageProficiency } from '@/data/skills'
import { skillIcons } from '@/data/skillIcons'
import { FlagBR, FlagGB, FlagES } from '@/components/ui/Flags'

const languageFlags: Record<string, ComponentType<{ className?: string }>> = {
  Portuguese: FlagBR,
  English: FlagGB,
  Spanish: FlagES,
}

function CodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  )
}

interface SkillChipProps { label: string }

function SkillChip({ label }: SkillChipProps) {
  const Icon = skillIcons[label]
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/10 bg-foreground/[0.04] text-xs text-foreground/70 hover:border-foreground/20 hover:text-foreground transition-all">
      {Icon ? (
        <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/25 shrink-0" aria-hidden="true" />
      )}
      {label}
    </span>
  )
}

interface DotRatingProps { filled: number; total?: number }

function DotRating({ filled, total = 6 }: DotRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i < filled ? 'bg-foreground/70' : 'bg-foreground/15'
          }`}
        />
      ))}
    </div>
  )
}

export function Skills() {
  const { t, language } = useApp()

  const skillCategories = [
    { label: t.skills.backend, items: skillGroups.backend },
    { label: t.skills.distributed, items: skillGroups.distributed },
    { label: t.skills.databases, items: skillGroups.databases },
    { label: t.skills.cloud, items: skillGroups.cloud },
    { label: t.skills.architecture, items: skillGroups.architecture },
    { label: t.skills.observability, items: skillGroups.observability },
    { label: t.skills.frontend, items: skillGroups.frontend },
    { label: t.skills.ai, items: skillGroups.ai },
  ]

  return (
    <section id="skills" className="space-y-5">
      <SectionLabel>{t.skills.label}</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Skills card — spans 2 cols on md */}
        <div className="md:col-span-2 rounded-xl border border-foreground/10 overflow-hidden">
          {/* Card header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/5">
            <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50">
              <CodeIcon />
            </div>
            <span className="text-sm font-semibold text-foreground">{t.skills.tech}</span>
          </div>

          {/* Grid of skill categories */}
          <div className="grid grid-cols-2 gap-6 p-5">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">{cat.label}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Education + Languages stacked */}
        <div className="flex flex-col gap-4">
          {/* Education card */}
          <div className="rounded-xl border border-foreground/10 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/5">
              <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50">
                <GraduationIcon />
              </div>
              <span className="text-sm font-semibold text-foreground">{t.skills.education}</span>
            </div>
            <div className="p-5 space-y-4">
              {education.map((edu) => (
                <div key={edu.institution}>
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">{edu.institution}</p>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <p className="text-xs text-foreground/50 font-mono">{edu.degree}</p>
                    <span className="text-[10px] text-foreground/40 bg-foreground/5 border border-foreground/10 rounded-full px-2 py-0.5 font-mono shrink-0">
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages card */}
          <div className="rounded-xl border border-foreground/10 overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-foreground/5">
              <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-foreground/50">
                <GlobeIcon />
              </div>
              <span className="text-sm font-semibold text-foreground">{t.skills.languages}</span>
            </div>
            <div className="p-5 space-y-4">
              {languageProficiencies.map((lang: LanguageProficiency) => {
                const Flag = languageFlags[lang.name.en]
                return (
                  <div key={lang.level} className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 text-sm text-foreground/60">
                      {Flag && <Flag />}
                      {lang.name[language]}
                      <span className="text-foreground/30 text-xs">({lang.cefr})</span>
                    </span>
                    <DotRating filled={lang.dots} total={6} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
