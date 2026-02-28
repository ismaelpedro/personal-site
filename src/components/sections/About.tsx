import { useApp } from '@/context/AppContext'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function About() {
  const { t } = useApp()

  return (
    <section id="about" className="space-y-5">
      <SectionLabel>{t.about.label}</SectionLabel>

      <div className="rounded-xl border border-foreground/10 p-5 space-y-4">
        <p className="text-sm leading-relaxed text-foreground/60">{t.about.bio1}</p>
        <p className="text-sm leading-relaxed text-foreground/50">{t.about.bio2}</p>
        <p className="text-sm leading-relaxed text-foreground/40">{t.about.locationBody}</p>
      </div>
    </section>
  )
}
