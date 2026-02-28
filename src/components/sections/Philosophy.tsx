import { useApp } from '@/context/AppContext'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Philosophy() {
  const { t } = useApp()

  return (
    <section id="philosophy" className="space-y-5">
      <SectionLabel>{t.philosophy.label}</SectionLabel>

      <div className="p-6 rounded-lg bg-foreground/[0.03] border border-foreground/5 space-y-4">
        {/* Quote icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-foreground/30"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>

        <div className="space-y-4">
          <p className="text-sm leading-[1.8] text-foreground/60 italic">
            {t.philosophy.quote}
          </p>
          <p className="text-sm leading-[1.8] text-foreground/40">
            {t.philosophy.body.replace(t.philosophy.highlightWord, '').split('').length > 0 && (
              <>
                {t.philosophy.body.split(t.philosophy.highlightWord).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-foreground/70 font-medium">{t.philosophy.highlightWord}</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
