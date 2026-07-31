import { storage } from '@lib/storage'
import type { ProgressState } from '@/types/entities'

const KEY = 'progress'

const defaultState: ProgressState = {
  completedLessons: [],
  lastLessonId: undefined,
}

/**
 * ProgressService
 * ---------------
 * Persiste progresso hoje em localStorage. A assinatura já é compatível com
 * uma futura API (GET /progress, POST /progress/lesson/:id) — basta trocar
 * a implementação interna.
 */
export const progressService = {
  getState(): ProgressState {
    return storage.get<ProgressState>(KEY, defaultState)
  },

  markLessonCompleted(lessonId: string): ProgressState {
    const state = progressService.getState()
    if (!state.completedLessons.includes(lessonId)) {
      state.completedLessons.push(lessonId)
    }
    state.lastLessonId = lessonId
    storage.set(KEY, state)
    return state
  },

  unmarkLessonCompleted(lessonId: string): ProgressState {
    const state = progressService.getState()
    state.completedLessons = state.completedLessons.filter((id) => id !== lessonId)
    storage.set(KEY, state)
    return state
  },

  isLessonCompleted(lessonId: string): boolean {
    return progressService.getState().completedLessons.includes(lessonId)
  },

  getModuleProgress(moduleId: string, lessonIdsInModule: string[]): number {
    if (lessonIdsInModule.length === 0) return 0
    const state = progressService.getState()
    const done = lessonIdsInModule.filter((id) => state.completedLessons.includes(id)).length
    return Math.round((done / lessonIdsInModule.length) * 100)
  },
}
