import { useState } from 'react'
import { experiences, getMonthsDuration, getBuildingHeight } from '@/data/experience'
import { useScrollIntoView } from '@/hooks/useScrollIntoView'

interface TooltipState {
  companyIndex: number
  roleIndex: number
}

export function IsometricBuildings() {
  const { ref, isVisible } = useScrollIntoView<HTMLDivElement>(0.2)
  const [tooltip, setTooltip] = useState<TooltipState | null>(null)

  // Flatten all roles into buildings
  const buildings = experiences.flatMap((entry, companyIndex) =>
    entry.roles.map((role, roleIndex) => {
      const months = getMonthsDuration(role.startDate, role.endDate)
      const height = getBuildingHeight(months)
      return { entry, role, height, companyIndex, roleIndex }
    })
  )

  return (
    <div ref={ref} className="w-full py-8 overflow-x-auto overflow-y-visible">
      <div className="flex items-end justify-center gap-[18px] min-h-[220px] relative">
        {buildings.map(({ entry, role, height, companyIndex, roleIndex }, flatIndex) => (
          <div
            key={`${entry.company}-${role.title}`}
            className="relative flex flex-col items-center"
            onMouseEnter={() => setTooltip({ companyIndex, roleIndex })}
            onMouseLeave={() => setTooltip(null)}
          >
            {/* Tooltip */}
            {tooltip?.companyIndex === companyIndex && tooltip?.roleIndex === roleIndex && (
              <div
                className="absolute bottom-full mb-3 left-1/2 z-10 whitespace-nowrap"
                style={{
                  background: 'var(--background)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  transform: 'translateX(-50%)',
                  animation: 'tooltipIn 0.15s ease forwards',
                }}
              >
                <p className="text-[12px] font-semibold text-foreground">{entry.company}</p>
                <p className="text-[10px] text-foreground/60">{role.title}</p>
                <p className="text-[10px] text-foreground/30 font-mono">{role.period}</p>
              </div>
            )}

            {/* Building wrapper */}
            <div
              className="relative"
              style={{
                width: '80px',
                height: isVisible ? `${height}px` : '0px',
                transition: `height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                transitionDelay: `${flatIndex * 0.12}s`,
              }}
            >
              {/* Front face */}
              <div
                className="absolute inset-0"
                style={{
                  background: role.isCurrent
                    ? 'linear-gradient(180deg, #1a2e24, #142019)'
                    : 'linear-gradient(180deg, #262626, #1a1a1a)',
                  border: `1px solid ${role.isCurrent ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.06)'}`,
                  transform: 'skewY(-4deg)',
                  transformOrigin: 'bottom left',
                  borderRadius: '2px 2px 0 0',
                }}
              />
              {/* Right face */}
              <div
                className="absolute top-0 bottom-0"
                style={{
                  width: '24px',
                  right: '-20px',
                  background: 'linear-gradient(180deg, #1a1a1a, #111)',
                  transform: 'skewY(8deg)',
                  transformOrigin: 'bottom left',
                }}
              />
              {/* Top face */}
              <div
                className="absolute"
                style={{
                  width: '80px',
                  height: '16px',
                  top: '-7px',
                  left: '2px',
                  background: role.isCurrent ? '#1f3a2c' : '#303030',
                  border: role.isCurrent ? '1px solid rgba(16,185,129,0.15)' : 'none',
                  transform: 'skewY(-4deg) skew(-20deg)',
                }}
              />
              {/* Glow for current */}
              {role.isCurrent && (
                <div
                  className="animate-pulse-glow absolute"
                  style={{
                    bottom: '-8px',
                    left: '50%',
                    width: '80%',
                    height: '24px',
                    background: 'radial-gradient(ellipse, rgba(16,185,129,0.3), transparent 70%)',
                  }}
                />
              )}
            </div>

            {/* Year label */}
            <p
              className="mt-3 text-center"
              style={{ fontSize: '9px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.05em' }}
            >
              {role.startDate.getFullYear()}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
