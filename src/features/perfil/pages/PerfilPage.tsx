import { useTranslation } from 'react-i18next'
import { Trophy, Copy, Heart, Calendar, User as UserIcon } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Card } from '@components/ui/Card'
import { Input } from '@components/ui/Input'
import { StatCard } from '@components/shared/StatCard'
import { useUser } from '@hooks/useUser'
import { userService } from '@services/userService'
import { aiTools } from '@data/tools'

export default function PerfilPage() {
  const { t } = useTranslation('perfil')
  const { profile, stats, updateName } = useUser()
  const daysUsingHub = userService.getDaysUsingHub()

  const mostUsedTools = Object.entries(stats.toolsUsage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <div>
      <SectionTitle title={t('title')} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="lg:col-span-1 flex flex-col items-center text-center gap-3">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-purple)] flex items-center justify-center text-2xl font-semibold">
            {profile.name.slice(0, 1).toUpperCase()}
          </div>
          <Input
            label={t('editName')}
            value={profile.name}
            onChange={(e) => updateName(e.target.value)}
          />
          <p className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <Calendar size={13} />
            {t('daysUsingHub')}: {daysUsingHub}
          </p>
        </Card>

        <div className="lg:col-span-2 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard icon={Trophy} label={t('modulesCompleted')} value={stats.modulesCompleted} />
            <StatCard icon={Copy} label={t('promptsCopied')} value={stats.promptsCopied} />
            <StatCard icon={Heart} label={t('favoritedIdeas')} value={stats.favoritedIdeas} />
          </div>

          <Card>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-[var(--color-text-primary)]">
              <UserIcon size={16} />
              {t('mostUsedTools')}
            </h3>
            {mostUsedTools.length === 0 ? (
              <p className="text-sm text-[var(--color-text-muted)]">{t('noToolsYet')}</p>
            ) : (
              <div className="space-y-2">
                {mostUsedTools.map(([toolId, count]) => {
                  const tool = aiTools.find((t) => t.id === toolId)
                  return (
                    <div
                      key={toolId}
                      className="flex items-center justify-between rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] px-3.5 py-2.5 text-sm"
                    >
                      <span className="text-[var(--color-text-secondary)]">{tool?.id ?? toolId}</span>
                      <span className="text-[var(--color-text-primary)] font-medium">{count}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
