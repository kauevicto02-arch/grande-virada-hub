import { courseModules } from '@data/course'
import { ideas } from '@data/ideas'
import { news } from '@data/news'
import { promptLibrary } from '@data/prompts'
import { aiTools } from '@data/tools'
import { dailyMissions, getTodayMission } from '@data/missions'

/**
 * ContentService
 * --------------
 * Hoje lê dos arquivos em data/ (mock). No futuro (V2.5+), cada método pode
 * ser reimplementado com fetch para uma API real, sem que Academia, Arsenal
 * IA, Laboratório de Ideias, Radar GTA ou Oficina de Prompts precisem mudar
 * uma linha sequer — eles só conhecem esta interface.
 */
export const contentService = {
  getCourseModules: async () => courseModules,
  getModuleById: async (id: string) => courseModules.find((m) => m.id === id) ?? null,

  getIdeas: async () => ideas,

  getNews: async () => news,

  getPromptLibrary: async () => promptLibrary,

  getAiTools: async () => aiTools,

  getDailyMissions: async () => dailyMissions,
  getTodayMission: async () => getTodayMission(),
}
