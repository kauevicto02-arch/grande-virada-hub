import { createContext, useMemo, useState, type ReactNode } from 'react'
import { favoritesService } from '@services/favoritesService'
import type { FavoritableType, FavoriteItem } from '@/types/entities'

interface FavoritesContextValue {
  favorites: FavoriteItem[]
  isFavorite: (id: string, type: FavoritableType) => boolean
  toggleFavorite: (id: string, type: FavoritableType) => void
  getByType: (type: FavoritableType) => FavoriteItem[]
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(null)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => favoritesService.getAll())

  const toggleFavorite = (id: string, type: FavoritableType) => {
    setFavorites(favoritesService.toggle(id, type))
  }

  const isFavorite = (id: string, type: FavoritableType) =>
    favorites.some((f) => f.id === id && f.type === type)

  const getByType = (type: FavoritableType) => favorites.filter((f) => f.type === type)

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite, getByType }),
    [favorites]
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
