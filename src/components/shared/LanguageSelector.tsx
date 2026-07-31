import { Globe } from 'lucide-react'
import { useLanguage } from '@hooks/useLanguage'
import { useTranslation } from 'react-i18next'
import type { SupportedLanguage } from '@lib/i18n'

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, supportedLanguages } = useLanguage()
  const { t } = useTranslation()

  return (
    <label className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm text-[var(--color-text-secondary)]">
      <Globe size={16} />
      {!compact && <span className="sr-only">{t('config.language', { ns: 'config' })}</span>}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
        className="bg-transparent text-[var(--color-text-primary)] outline-none"
      >
        {supportedLanguages.map((lang) => (
          <option key={lang} value={lang} className="bg-[var(--color-bg-elevated)]">
            {t(`language.${lang}`)}
          </option>
        ))}
      </select>
    </label>
  )
}
