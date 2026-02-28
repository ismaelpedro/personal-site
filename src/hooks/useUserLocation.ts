import { useState, useEffect } from 'react'
import type { LocationState, Region } from '@/types'

const AMERICAS_CONTINENTS = new Set(['SA', 'NA'])

function mapContinentToRegion(continentCode: string): Region {
  return AMERICAS_CONTINENTS.has(continentCode) ? 'americas' : 'europe'
}

export function useUserLocation(): LocationState {
  const [state, setState] = useState<LocationState>({
    region: 'americas',
    loading: true,
    error: false,
  })

  useEffect(() => {
    let cancelled = false

    async function detect() {
      try {
        const response = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000),
        })
        if (!response.ok) throw new Error('Failed to fetch location')
        const data = await response.json() as { continent_code?: string }
        if (cancelled) return
        const region = mapContinentToRegion(data.continent_code ?? '')
        setState({ region, loading: false, error: false })
      } catch {
        if (cancelled) return
        setState({ region: 'americas', loading: false, error: true })
      }
    }

    detect()
    return () => { cancelled = true }
  }, [])

  return state
}
