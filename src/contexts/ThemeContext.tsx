import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { storage } from '@lib/storage'

// V1 é Dark Mode fixo, mas a arquitetura já suporta Light Mode futuramente
// (item 14 do PRD) sem qualquer refatoração — basta o usuário poder escolher
// 'light' e o restante do Design System (variáveis CSS) responde sozinho.
export type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

const THEME_KEY = 'theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => storage.get<Theme>(THEME_KEY, 'dark'))

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    storage.set(THEME_KEY, next)
  }

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
