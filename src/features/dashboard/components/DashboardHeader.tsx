import { useTranslation } from 'react-i18next'
import { useUser } from '@hooks/useUser'

export function DashboardHeader() {
  const { t } = useTranslation('dashboard')
  const { profile } = useUser()

  return (
    <div className="mb-6">
      <h1 className="text-2xl md:text-3xl font-semibold">
        {t('welcome', { name: profile.name })}
      </h1>
      <p className="text-sm md:text-base text-[var(--color-text-secondary)] mt-1.5">{t('subtitle')}</p>
    </div>
  )
}
