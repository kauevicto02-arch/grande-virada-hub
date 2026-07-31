// Tipos centrais do domínio do Grande Virada Hub.
// Todo módulo (hub) deve reutilizar/estender estes tipos em vez de criar tipos soltos.

export type FavoritableType = 'course' | 'idea' | 'prompt' | 'tool' | 'news'

export interface FavoriteItem {
  id: string
  type: FavoritableType
  addedAt: string
}

// ---------- Academia (Curso) ----------

export interface Lesson {
  id: string
  moduleId: string
  title: string
  description: string
  videoPlaceholder: boolean
  videoUrl?: string
  pdfUrl?: string
  materials: { id: string; label: string; url: string }[]
  durationMinutes: number
  order: number
}

export interface CourseModule {
  id: string
  title: string
  shortDescription: string
  coverImage: string
  lessonsCount: number
  estimatedMinutes: number
  order: number
  lessons: Lesson[]
}

export interface ProgressState {
  completedLessons: string[] // lesson ids
  lastLessonId?: string
}

// ---------- Arsenal IA (Central de Prompts) ----------

export type AiToolId =
  | 'ideas-generator'
  | 'script-generator'
  | 'titles-generator'
  | 'hashtags-generator'
  | 'descriptions-generator'
  | 'image-prompt-generator'
  | 'video-prompt-generator'

export interface AiTool {
  id: AiToolId
  icon: string
  order: number
}

// ---------- Laboratório de Ideias ----------

export type IdeaCategory =
  | 'curiosidades'
  | 'misterios'
  | 'teorias'
  | 'mapa'
  | 'personagens'
  | 'veiculos'
  | 'missoes'
  | 'gameplay'

export type SocialPlatform = 'tiktok' | 'shorts' | 'reels' | 'youtube'

export type ViralPotential = 'baixo' | 'medio' | 'alto' | 'altissimo'

export interface Idea {
  id: string
  title: string
  description: string
  category: IdeaCategory
  viralPotential: ViralPotential
  platform: SocialPlatform
  createdAt: string
}

// ---------- Radar GTA ----------

export type NewsCategory = 'noticia' | 'trailer' | 'rumor' | 'data' | 'alta'

export interface NewsItem {
  id: string
  title: string
  summary: string
  category: NewsCategory
  image: string
  date: string
}

// ---------- Oficina de Prompts ----------

export type PromptCategory =
  | 'tiktok'
  | 'shorts'
  | 'youtube'
  | 'instagram'
  | 'imagens'
  | 'videos'
  | 'thumbnail'
  | 'storytelling'
  | 'gancho'
  | 'cta'

export interface PromptItem {
  id: string
  title: string
  description: string
  objective: string
  language: string
  category: PromptCategory
  content: string
}

// ---------- Missão do Dia ----------

export interface DailyMission {
  id: string
  title: string
  description: string
  ctaLabel: string
  ctaRoute: string
  icon: string
}

// ---------- Busca Global ----------

export type SearchResultType = 'academia' | 'ideia' | 'prompt' | 'ferramenta' | 'radar'

export interface SearchIndexEntry {
  id: string
  type: SearchResultType
  title: string
  description: string
  route: string
  keywords: string[]
}

// ---------- Perfil / Usuário ----------

export interface UserProfile {
  name: string
  language: string
  joinedAt: string
  lastAccess: string
}

export interface UserStats {
  promptsCopied: number
  favoritedIdeas: number
  modulesCompleted: number
  toolsUsage: Record<string, number>
}

// ---------- Configurações ----------

export interface AppSettings {
  theme: 'dark' | 'light'
  language: string
  notificationsEnabled: boolean
  soundEnabled: boolean
  animationsEnabled: boolean
}
