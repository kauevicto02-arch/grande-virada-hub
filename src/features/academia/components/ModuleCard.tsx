import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { PlayCircle } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { ProgressBar } from '@components/ui/ProgressBar'
import { Badge } from '@components/ui/Badge'
import type { CourseModule } from '@/types/entities'

interface ModuleCardProps {
  module: CourseModule & { progressPercent: number }
}

export function ModuleCard({ module }: ModuleCardProps) {
  const { t } = useTranslation('academia')
  const navigate = useNavigate()

  return (
    <Card
      className="group cursor-pointer flex flex-col gap-3"
      onClick={() => navigate(`/academia/${module.id}`)}
    >
      <div className="relative aspect-video overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-black/30">
        <img
          src={module.coverImage}
          alt={`Capa do módulo ${module.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full bg-black/55 p-2 text-[var(--color-brand-cyan)] backdrop-blur-sm">
          <PlayCircle size={20} />
        </div>
        {module.progressPercent === 100 && (
          <div className="absolute right-3 top-3">
            <Badge variant="success">✓</Badge>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1">{module.title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{module.shortDescription}</p>
      </div>
      <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
        <span>{t('lessonsCount', { count: module.lessonsCount })}</span>
        <span>•</span>
        <span>{t('estimatedTime', { minutes: module.estimatedMinutes })}</span>
      </div>
      <ProgressBar value={module.progressPercent} />
    </Card>
  )
}
