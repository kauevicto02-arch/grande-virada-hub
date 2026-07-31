import { useMemo, useState } from "react"
import { searchService } from "@services/searchService"
import { useDebounce } from "./useDebounce"

export function useSearch() {
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 250)

  const results = useMemo(() => searchService.search(debouncedQuery), [debouncedQuery])

  return { query, setQuery, results, isSearching: debouncedQuery.trim().length > 0 }
}
