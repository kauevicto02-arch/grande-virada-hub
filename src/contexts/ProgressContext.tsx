import { createContext, useMemo, useState, type ReactNode } from 'react'
import { progressService } from '@services/progressService'
import type { ProgressState } from '@/types/entities'

interface ProgressContextValue {
  progress: ProgressState
  markLessonCompleted: (lessonId: string) => void
  unmarkLessonCompleted: (lessonId: string) => void
  isLessonCompleted: (lessonId: string) => boolean
  getModuleProgress: (moduleId: string, lessonIds: string[]) => number
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => progressService.getState())

  const markLessonCompleted = (lessonId: string) => {
    setProgress(progressService.markLessonCompleted(lessonId))
  }

  const unmarkLessonCompleted = (lessonId: string) => {
    setProgress(progressService.unmarkLessonCompleted(lessonId))
  }

  const isLessonCompleted = (lessonId: string) => progress.completedLessons.includes(lessonId)

  const getModuleProgress = (_moduleId: string, lessonIds: string[]) =>
    progressService.getModuleProgress(_moduleId, lessonIds)

  const value = useMemo(
    () => ({ progress, markLessonCompleted, unmarkLessonCompleted, isLessonCompleted, getModuleProgress }),
    [progress]
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}
