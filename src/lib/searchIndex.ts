import { courseModules } from '@data/course'
import { ideas } from '@data/ideas'
import { news } from '@data/news'
import { promptLibrary } from '@data/prompts'
import { aiTools } from '@data/tools'
import type { SearchIndexEntry } from '@/types/entities'

/**
 * Índice de busca unificado.
 * Normaliza Academia, Ideias, Prompts, Ferramentas e Radar num formato único,
 * para que a Busca Global (item 9 do PRD) percorra uma única lista em vez de
 * cinco arrays diferentes. Adicionar uma nova fonte buscável (ex: um novo Hub)
 * é só adicionar um novo bloco de `.map(...)` abaixo.
 */
export const buildSearchIndex = (): SearchIndexEntry[] => {
  const academiaEntries: SearchIndexEntry[] = courseModules.map((m) => ({
    id: m.id,
    type: 'academia',
    title: m.title,
    description: m.shortDescription,
    route: `/academia/${m.id}`,
    keywords: [m.title, m.shortDescription],
  }))

  const ideiasEntries: SearchIndexEntry[] = ideas.map((i) => ({
    id: i.id,
    type: 'ideia',
    title: i.title,
    description: i.description,
    route: '/laboratorio-ideias',
    keywords: [i.title, i.description, i.category, i.platform],
  }))

  const promptEntries: SearchIndexEntry[] = promptLibrary.map((p) => ({
    id: p.id,
    type: 'prompt',
    title: p.title,
    description: p.description,
    route: '/oficina-prompts',
    keywords: [p.title, p.description, p.category],
  }))

  const toolEntries: SearchIndexEntry[] = aiTools.map((t) => ({
    id: t.id,
    type: 'ferramenta',
    title: t.id,
    description: t.id,
    route: '/arsenal-ia',
    keywords: [t.id],
  }))

  const radarEntries: SearchIndexEntry[] = news.map((n) => ({
    id: n.id,
    type: 'radar',
    title: n.title,
    description: n.summary,
    route: '/radar-gta',
    keywords: [n.title, n.summary, n.category],
  }))

  return [...academiaEntries, ...ideiasEntries, ...promptEntries, ...toolEntries, ...radarEntries]
}

export const searchInIndex = (query: string, index: SearchIndexEntry[]): SearchIndexEntry[] => {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []
  return index.filter((entry) =>
    entry.keywords.some((k) => k.toLowerCase().includes(normalized)) ||
    entry.title.toLowerCase().includes(normalized) ||
    entry.description.toLowerCase().includes(normalized)
  )
}
