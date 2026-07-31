import { useContext } from "react"
import { LanguageContext } from "@contexts/LanguageContext"

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage deve ser usado dentro de um LanguageProvider")
  return ctx
}
