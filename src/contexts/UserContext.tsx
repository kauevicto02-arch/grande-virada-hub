import { createContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { userService } from '@services/userService'
import type { UserProfile, UserStats } from '@/types/entities'

interface UserContextValue {
  profile: UserProfile
  stats: UserStats
  updateName: (name: string) => void
  registerPromptCopied: (toolId?: string) => void
  refreshStats: () => void
}

export const UserContext = createContext<UserContextValue | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(() => userService.getProfile())
  const [stats, setStats] = useState<UserStats>(() => userService.getStats())

  useEffect(() => {
    userService.registerAccess()
    setProfile(userService.getProfile())
  }, [])

  const updateName = (name: string) => {
    setProfile(userService.updateProfile({ name }))
  }

  const registerPromptCopied = (toolId?: string) => {
    setStats(userService.incrementPromptsCopied(toolId))
  }

  const refreshStats = () => setStats(userService.getStats())

  const value = useMemo(
    () => ({ profile, stats, updateName, registerPromptCopied, refreshStats }),
    [profile, stats]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
