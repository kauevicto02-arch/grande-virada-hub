import { useTranslation } from 'react-i18next'
import { SearchBar } from '@components/shared/SearchBar'
import { LanguageSelector } from '@components/shared/LanguageSelector'
import { useUser } from '@hooks/useUser'

export function Header() {
  const { t } = useTranslation()
  const { profile } = useUser()

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-base)]/80 backdrop-blur-xl px-4 md:px-6 py-3.5">
      <div className="flex-1">
        <SearchBar />
      </div>
      <LanguageSelector />
      <div className="hidden sm:flex items-center gap-2.5 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] px-3 py-2">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-purple)] flex items-center justify-center text-xs font-semibold">
          {profile.name.slice(0, 1).toUpperCase()}
        </div>
        <span className="text-sm text-[var(--color-text-secondary)]">{profile.name}</span>
      </div>
      <span className="sr-only">{t('appName')}</span>
    </header>
  )
}
