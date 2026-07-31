import { useEffect } from 'react'
import { courseModules } from '@data/course'
import { useProgress } from '@hooks/useProgress'
import { useUser } from '@hooks/useUser'
import { userService } from '@services/userService'

// Hook de domínio da Academia: calcula progresso por módulo e progresso
// geral, e mantém as estatísticas do usuário (módulos concluídos) em sincronia.
export function useCourseProgress() {
  const { getModuleProgress, progress } = useProgress()
  const { refreshStats } = useUser()

  const modulesWithProgress = courseModules.map((mod) => ({
    ...mod,
    progressPercent: getModuleProgress(
      mod.id,
      mod.lessons.map((l) => l.id)
    ),
  }))

  const totalLessons = courseModules.reduce((acc, m) => acc + m.lessons.length, 0)
  const overallProgress =
    totalLessons === 0 ? 0 : Math.round((progress.completedLessons.length / totalLessons) * 100)

  const completedModulesCount = modulesWithProgress.filter((m) => m.progressPercent === 100).length

  useEffect(() => {
    userService.setModulesCompleted(completedModulesCount)
    refreshStats()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completedModulesCount])

  return { modulesWithProgress, overallProgress, completedModulesCount }
}
