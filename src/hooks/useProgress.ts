import { useContext } from "react"
import { ProgressContext } from "@contexts/ProgressContext"

export const useProgress = () => {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error("useProgress deve ser usado dentro de um ProgressProvider")
  return ctx
}
