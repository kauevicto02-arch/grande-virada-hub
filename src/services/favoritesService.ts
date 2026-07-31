import { storage } from '@lib/storage'
import type { FavoritableType, FavoriteItem } from '@/types/entities'

const KEY = 'favorites'

export const favoritesService = {
  getAll(): FavoriteItem[] {
    return storage.get<FavoriteItem[]>(KEY, [])
  },

  isFavorite(id: string, type: FavoritableType): boolean {
    return favoritesService.getAll().some((f) => f.id === id && f.type === type)
  },

  toggle(id: string, type: FavoritableType): FavoriteItem[] {
    const current = favoritesService.getAll()
    const exists = current.some((f) => f.id === id && f.type === type)
    const next = exists
      ? current.filter((f) => !(f.id === id && f.type === type))
      : [...current, { id, type, addedAt: new Date().toISOString() }]
    storage.set(KEY, next)
    return next
  },

  getByType(type: FavoritableType): FavoriteItem[] {
    return favoritesService.getAll().filter((f) => f.type === type)
  },
}
