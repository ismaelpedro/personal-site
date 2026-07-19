// Small inline flag SVGs — render crisply everywhere, unlike emoji flags which
// degrade to 2-letter codes on Windows.

interface FlagProps {
  className?: string
}

const base = 'inline-block rounded-sm shrink-0'

export function FlagBR({ className = '' }: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width="18" height="13" className={`${base} ${className}`} aria-hidden="true">
      <rect width="28" height="20" fill="#009b3a" />
      <path d="M14 2 26 10 14 18 2 10Z" fill="#fedf00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
    </svg>
  )
}

export function FlagGB({ className = '' }: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width="18" height="13" className={`${base} ${className}`} aria-hidden="true">
      <rect width="28" height="20" fill="#012169" />
      <path d="M0 0 28 20M28 0 0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0 28 20M28 0 0 20" stroke="#c8102e" strokeWidth="2" />
      <path d="M14 0V20M0 10H28" stroke="#fff" strokeWidth="6" />
      <path d="M14 0V20M0 10H28" stroke="#c8102e" strokeWidth="3.5" />
    </svg>
  )
}

export function FlagES({ className = '' }: FlagProps) {
  return (
    <svg viewBox="0 0 28 20" width="18" height="13" className={`${base} ${className}`} aria-hidden="true">
      <rect width="28" height="20" fill="#c60b1e" />
      <rect y="5" width="28" height="10" fill="#ffc400" />
    </svg>
  )
}
