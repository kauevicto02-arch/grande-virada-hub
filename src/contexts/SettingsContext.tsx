import { createContext, useMemo, useState, type ReactNode } from 'react'
import { storage } from '@lib/storage'
import type { AppSettings } from '@/types/entities'

const KEY = 'settings'

const defaultSettings: AppSettings = {
  theme: 'dark',
  language: 'pt-BR',
  notificationsEnabled: true,
  soundEnabled: true,
  animationsEnabled: true,
}

interface SettingsContextValue {
  settings: AppSettings
  updateSettings: (partial: Partial<AppSettings>) => void
}

export const SettingsContext = createContext<SettingsContextValue | null>(null)

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(() =>
    storage.get<AppSettings>(KEY, defaultSettings)
  )

  const updateSettings = (partial: Partial<AppSettings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...partial }
      storage.set(KEY, next)
      return next
    })
  }

  const value = useMemo(() => ({ settings, updateSettings }), [settings])

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
