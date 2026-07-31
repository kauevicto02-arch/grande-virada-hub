import { useTranslation } from 'react-i18next'
import { Trophy, Copy, Heart } from 'lucide-react'
import { StatCard } from '@components/shared/StatCard'
import { useUser } from '@hooks/useUser'
import { useFavorites } from '@hooks/useFavorites'

export function DashboardStats() {
  const { t } = useTranslation('dashboard')
  const { stats } = useUser()
  const { favorites } = useFavorites()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard icon={Trophy} label={t('statsModulesCompleted')} value={stats.modulesCompleted} />
      <StatCard icon={Copy} label={t('statsPromptsCopied')} value={stats.promptsCopied} />
      <StatCard icon={Heart} label={t('statsFavorites')} value={favorites.length} />
    </div>
  )
}
