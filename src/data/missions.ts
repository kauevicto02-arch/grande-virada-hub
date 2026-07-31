import type { DailyMission } from '@/types/entities'

// Mock data da Missão do Dia. Preparado para futuramente vir de uma API
// que calcula a missão ideal com base no progresso real do usuário.

export const dailyMissions: DailyMission[] = [
  {
    id: 'mission-continue-course',
    title: 'missions.continueCourse.title',
    description: 'missions.continueCourse.description',
    ctaLabel: 'missions.continueCourse.cta',
    ctaRoute: '/academia',
    icon: 'graduation-cap',
  },
  {
    id: 'mission-create-content',
    title: 'missions.createContent.title',
    description: 'missions.createContent.description',
    ctaLabel: 'missions.createContent.cta',
    ctaRoute: '/arsenal-ia',
    icon: 'sparkles',
  },
  {
    id: 'mission-explore-radar',
    title: 'missions.exploreRadar.title',
    description: 'missions.exploreRadar.description',
    ctaLabel: 'missions.exploreRadar.cta',
    ctaRoute: '/radar-gta',
    icon: 'radar',
  },
]

export const getTodayMission = (): DailyMission => {
  const dayIndex = new Date().getDate() % dailyMissions.length
  return dailyMissions[dayIndex]
}
