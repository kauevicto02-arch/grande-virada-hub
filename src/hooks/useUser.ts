import { useContext } from "react"
import { UserContext } from "@contexts/UserContext"

export const useUser = () => {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error("useUser deve ser usado dentro de um UserProvider")
  return ctx
}
