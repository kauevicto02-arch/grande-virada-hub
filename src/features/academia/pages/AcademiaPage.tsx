import { useTranslation } from 'react-i18next'
import { SectionTitle } from '@components/shared/SectionTitle'
import { ProgressBar } from '@components/ui/ProgressBar'
import { Card } from '@components/ui/Card'
import { EmptyState } from '@components/ui/EmptyState'
import { GraduationCap } from 'lucide-react'
import { ModuleCard } from '../components/ModuleCard'
import { useCourseProgress } from '../hooks/useCourseProgress'

export default function AcademiaPage() {
  const { t } = useTranslation('academia')
  const { modulesWithProgress, overallProgress } = useCourseProgress()

  return (
    <div>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      <Card className="mb-6">
        <ProgressBar value={overallProgress} label={t('progressSummary')} />
      </Card>

      {modulesWithProgress.length === 0 ? (
        <EmptyState icon={<GraduationCap size={28} />} title={t('empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modulesWithProgress.map((mod) => (
            <ModuleCard key={mod.id} module={mod} />
          ))}
        </div>
      )}
    </div>
  )
}
