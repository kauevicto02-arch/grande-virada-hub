import { buildSearchIndex, searchInIndex } from '@lib/searchIndex'
import type { SearchIndexEntry } from '@/types/entities'

let cachedIndex: SearchIndexEntry[] | null = null

export const searchService = {
  getIndex(): SearchIndexEntry[] {
    if (!cachedIndex) {
      cachedIndex = buildSearchIndex()
    }
    return cachedIndex
  },

  search(query: string): SearchIndexEntry[] {
    return searchInIndex(query, searchService.getIndex())
  },
}
