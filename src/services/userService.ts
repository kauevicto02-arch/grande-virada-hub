import { storage } from '@lib/storage'
import type { UserProfile, UserStats } from '@/types/entities'

const PROFILE_KEY = 'profile'
const STATS_KEY = 'stats'

const defaultProfile = (): UserProfile => ({
  name: 'Criador',
  language: 'pt-BR',
  joinedAt: new Date().toISOString(),
  lastAccess: new Date().toISOString(),
})

const defaultStats: UserStats = {
  promptsCopied: 0,
  favoritedIdeas: 0,
  modulesCompleted: 0,
  toolsUsage: {},
}

export const userService = {
  getProfile(): UserProfile {
    return storage.get<UserProfile>(PROFILE_KEY, defaultProfile())
  },

  updateProfile(partial: Partial<UserProfile>): UserProfile {
    const current = userService.getProfile()
    const updated = { ...current, ...partial }
    storage.set(PROFILE_KEY, updated)
    return updated
  },

  registerAccess(): void {
    userService.updateProfile({ lastAccess: new Date().toISOString() })
  },

  getStats(): UserStats {
    return storage.get<UserStats>(STATS_KEY, defaultStats)
  },

  incrementPromptsCopied(toolId?: string): UserStats {
    const stats = userService.getStats()
    stats.promptsCopied += 1
    if (toolId) {
      stats.toolsUsage[toolId] = (stats.toolsUsage[toolId] ?? 0) + 1
    }
    storage.set(STATS_KEY, stats)
    return stats
  },

  setModulesCompleted(count: number): UserStats {
    const stats = userService.getStats()
    stats.modulesCompleted = count
    storage.set(STATS_KEY, stats)
    return stats
  },

  setFavoritedIdeas(count: number): UserStats {
    const stats = userService.getStats()
    stats.favoritedIdeas = count
    storage.set(STATS_KEY, stats)
    return stats
  },

  getDaysUsingHub(): number {
    const profile = userService.getProfile()
    const joined = new Date(profile.joinedAt).getTime()
    const now = Date.now()
    return Math.max(1, Math.floor((now - joined) / (1000 * 60 * 60 * 24)) + 1)
  },
}
