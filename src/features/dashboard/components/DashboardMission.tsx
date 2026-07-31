import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Sparkles, GraduationCap, Radar, type LucideIcon } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { getTodayMission } from '@data/missions'

const iconMap: Record<string, LucideIcon> = {
  'graduation-cap': GraduationCap,
  sparkles: Sparkles,
  radar: Radar,
}

export function DashboardMission() {
  const { t } = useTranslation('dashboard')
  const navigate = useNavigate()
  const mission = getTodayMission()
  const Icon = iconMap[mission.icon] ?? Sparkles

  return (
    <Card className="relative overflow-hidden">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--color-brand-pink)]/20 blur-3xl" />
      <p className="text-xs uppercase tracking-wide text-[var(--color-brand-cyan)] mb-2">
        {t('missionOfDay')}
      </p>
      <div className="flex items-start gap-4">
        <div className="rounded-[var(--radius-md)] bg-white/5 p-3 text-[var(--color-brand-pink)] shrink-0">
          <Icon size={22} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{t(mission.title)}</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">{t(mission.description)}</p>
          <Button size="sm" onClick={() => navigate(mission.ctaRoute)}>
            {t(mission.ctaLabel)}
          </Button>
        </div>
      </div>
    </Card>
  )
}
