import { useContext } from "react"
import { SettingsContext } from "@contexts/SettingsContext"

export const useSettings = () => {
  const ctx = useContext(SettingsContext)
  if (!ctx) throw new Error("useSettings deve ser usado dentro de um SettingsProvider")
  return ctx
}
