import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { storage } from '@lib/storage'
import { supportedLanguages, type SupportedLanguage } from '@lib/i18n'

interface LanguageContextValue {
  language: SupportedLanguage
  setLanguage: (lang: SupportedLanguage) => void
  supportedLanguages: readonly SupportedLanguage[]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

const LANGUAGE_KEY = 'language'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation()
  const [language, setLanguageState] = useState<SupportedLanguage>(() =>
    storage.get<SupportedLanguage>(LANGUAGE_KEY, 'pt-BR')
  )

  const setLanguage = useCallback(
    (lang: SupportedLanguage) => {
      setLanguageState(lang)
      storage.set(LANGUAGE_KEY, lang)
      void i18n.changeLanguage(lang)
    },
    [i18n]
  )

  const value = useMemo(
    () => ({ language, setLanguage, supportedLanguages }),
    [language, setLanguage]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
