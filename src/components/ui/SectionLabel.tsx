interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <h2 className="text-xs font-medium text-foreground uppercase tracking-widest opacity-40">
      {children}
    </h2>
  )
}
