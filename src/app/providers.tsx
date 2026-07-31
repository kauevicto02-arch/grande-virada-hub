import type { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from '@contexts/LanguageContext'
import { ThemeProvider } from '@contexts/ThemeContext'
import { UserProvider } from '@contexts/UserContext'
import { ProgressProvider } from '@contexts/ProgressContext'
import { FavoritesProvider } from '@contexts/FavoritesContext'
import { SettingsProvider } from '@contexts/SettingsContext'
import { ToastProvider } from '@contexts/ToastContext'

// Composição de todos os Contexts do sistema (item 16 do PRD).
// Cada Context tem responsabilidade única — nunca um Context gigante.
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>
              <UserProvider>
                <ProgressProvider>
                  <FavoritesProvider>{children}</FavoritesProvider>
                </ProgressProvider>
              </UserProvider>
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
      </SettingsProvider>
    </BrowserRouter>
  )
}
