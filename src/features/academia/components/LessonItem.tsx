import { PlayCircle, CheckCircle2 } from 'lucide-react'
import { cn } from '@utils/cn'
import type { Lesson } from '@/types/entities'

export function LessonItem({
  lesson,
  active,
  completed,
  onSelect,
}: {
  lesson: Lesson
  active: boolean
  completed: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'flex w-full items-center gap-3 rounded-[var(--radius-sm)] px-3.5 py-3 text-left transition-colors focus-ring',
        active ? 'bg-white/8 border border-[var(--color-border-strong)]' : 'hover:bg-white/5'
      )}
    >
      {completed ? (
        <CheckCircle2 size={18} className="text-[var(--color-success)] shrink-0" />
      ) : (
        <PlayCircle size={18} className="text-[var(--color-text-muted)] shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[var(--color-text-primary)] truncate">{lesson.title}</p>
        <p className="text-xs text-[var(--color-text-muted)]">{lesson.durationMinutes} min</p>
      </div>
    </button>
  )
}
