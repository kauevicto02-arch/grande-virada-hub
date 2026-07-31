// Wrapper fino sobre localStorage. Centralizado aqui para que, quando o
// backend real existir (ver PRD V2.5), baste trocar a implementação interna
// dos services sem alterar quem os consome.

const PREFIX = 'gvh:' // Grande Virada Hub

export const storage = {
  get<T>(key: string, fallback: T): T {
    try {
      const raw = localStorage.getItem(PREFIX + key)
      if (!raw) return fallback
      return JSON.parse(raw) as T
    } catch {
      return fallback
    }
  },
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value))
    } catch {
      // Silenciosamente ignora falhas de storage (ex: modo privado do navegador)
    }
  },
  remove(key: string): void {
    localStorage.removeItem(PREFIX + key)
  },
}
