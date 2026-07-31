import { useContext } from "react"
import { FavoritesContext } from "@contexts/FavoritesContext"

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext)
  if (!ctx) throw new Error("useFavorites deve ser usado dentro de um FavoritesProvider")
  return ctx
}
