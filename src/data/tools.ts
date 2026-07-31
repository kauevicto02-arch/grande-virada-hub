import type { AiTool } from '@/types/entities'

// Lista das ferramentas do Arsenal IA. O rótulo/descrição de cada uma vem do
// i18n (namespace "arsenal"), este arquivo só define quais existem e a ordem.

export const aiTools: AiTool[] = [
  { id: 'ideas-generator', icon: 'lightbulb', order: 1 },
  { id: 'script-generator', icon: 'clapperboard', order: 2 },
  { id: 'titles-generator', icon: 'heading', order: 3 },
  { id: 'hashtags-generator', icon: 'hash', order: 4 },
  { id: 'descriptions-generator', icon: 'file-text', order: 5 },
  { id: 'image-prompt-generator', icon: 'image', order: 6 },
  { id: 'video-prompt-generator', icon: 'video', order: 7 },
]
