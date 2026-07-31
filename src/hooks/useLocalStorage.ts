import { useState } from "react"
import { storage } from "@lib/storage"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => storage.get<T>(key, initialValue))

  const update = (next: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const resolved = typeof next === "function" ? (next as (prev: T) => T)(prev) : next
      storage.set(key, resolved)
      return resolved
    })
  }

  return [value, update] as const
}
