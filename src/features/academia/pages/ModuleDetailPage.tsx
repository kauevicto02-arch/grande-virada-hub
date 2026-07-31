import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft, ChevronRight, FileText, PlayCircle } from 'lucide-react'
import { courseModules } from '@data/course'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { EmptyState } from '@components/ui/EmptyState'
import { LessonItem } from '../components/LessonItem'
import { ChecklistItem } from '../components/ChecklistItem'
import { useProgress } from '@hooks/useProgress'
import { useToast } from '@hooks/useToast'

export default function ModuleDetailPage() {
  const { moduleId } = useParams()
  const { t } = useTranslation('academia')
  const { t: tCommon } = useTranslation()
  const navigate = useNavigate()
  const { isLessonCompleted, markLessonCompleted, unmarkLessonCompleted } = useProgress()
  const { showToast } = useToast()

  const courseModule = useMemo(() => courseModules.find((m) => m.id === moduleId), [moduleId])
  const [activeLessonId, setActiveLessonId] = useState(courseModule?.lessons[0]?.id)

  if (!courseModule) {
    return (
      <EmptyState
        title={t('empty')}
        action={
          <Button onClick={() => navigate('/academia')}>{t('moduleDetail.backToModule')}</Button>
        }
      />
    )
  }

  const activeLesson =
    courseModule.lessons.find((l) => l.id === activeLessonId) ?? courseModule.lessons[0]
  const activeIndex = courseModule.lessons.findIndex((l) => l.id === activeLesson.id)
  const nextLesson = courseModule.lessons[activeIndex + 1]

  const completed = isLessonCompleted(activeLesson.id)

  const toggleComplete = () => {
    if (completed) {
      unmarkLessonCompleted(activeLesson.id)
    } else {
      markLessonCompleted(activeLesson.id)
      showToast(tCommon('toasts.lessonCompleted'))
    }
  }

  return (
    <div>
      <button
        onClick={() => navigate('/academia')}
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus-ring"
      >
        <ArrowLeft size={16} />
        {t('moduleDetail.backToModule')}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-5">
          <Card>
            {activeLesson.videoUrl ? (
              <video
                key={activeLesson.id}
                controls
                preload="metadata"
                poster={courseModule.coverImage}
                className="aspect-video w-full rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-black object-contain"
              >
                <source src={activeLesson.videoUrl} type="video/mp4" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
            ) : (
              <div className="aspect-video w-full rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-bg-elevated)] to-black flex flex-col items-center justify-center gap-2 border border-[var(--color-border-subtle)]">
                <PlayCircle size={40} className="text-[var(--color-brand-cyan)]" />
                <p className="text-xs text-[var(--color-text-muted)] px-6 text-center">
                  {t('moduleDetail.videoPlaceholder')}
                </p>
              </div>
            )}
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold mb-1.5">{activeLesson.title}</h1>
                <p className="text-sm text-[var(--color-text-secondary)]">{activeLesson.description}</p>
              </div>
              <Badge variant="cyan">{activeLesson.durationMinutes} min</Badge>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant={completed ? 'secondary' : 'primary'} size="sm" onClick={toggleComplete}>
                {completed ? tCommon('actions.markIncomplete') : tCommon('actions.markComplete')}
              </Button>
              {nextLesson && (
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<ChevronRight size={16} />}
                  onClick={() => setActiveLessonId(nextLesson.id)}
                >
                  {t('moduleDetail.nextLesson')}
                </Button>
              )}
            </div>
          </Card>

          {activeLesson.materials.length > 0 && (
            <Card>
              <h3 className="text-sm font-semibold mb-3 text-[var(--color-text-primary)]">
                {t('moduleDetail.materials')}
              </h3>
              <div className="space-y-2">
                {activeLesson.materials.map((mat) => (
                  <a
                    key={mat.id}
                    href={mat.url}
                    className="flex items-center gap-2.5 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] px-3.5 py-2.5 text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    <FileText size={16} />
                    {mat.label}
                  </a>
                ))}
              </div>
            </Card>
          )}

          <Card>
            <h3 className="text-sm font-semibold mb-3 text-[var(--color-text-primary)]">
              {t('moduleDetail.checklist')}
            </h3>
            <ChecklistItem label={activeLesson.title} checked={completed} onToggle={toggleComplete} />
          </Card>
        </div>

        <Card padded className="h-fit lg:sticky lg:top-20">
          <h3 className="text-sm font-semibold mb-3 text-[var(--color-text-primary)]">{courseModule.title}</h3>
          <div className="space-y-1">
            {courseModule.lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                active={lesson.id === activeLesson.id}
                completed={isLessonCompleted(lesson.id)}
                onSelect={() => setActiveLessonId(lesson.id)}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
