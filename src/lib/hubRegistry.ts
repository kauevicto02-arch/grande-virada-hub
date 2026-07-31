import { lazy } from 'react'
import type { ComponentType } from 'react'
import {
  LayoutDashboard,
  GraduationCap,
  Sparkles,
  Lightbulb,
  Radar,
  Wrench,
  User,
  Heart,
  Settings,
  type LucideIcon,
} from 'lucide-react'

/**
 * Hub Registry
 * ------------
 * Fonte única de verdade sobre quais módulos ("Hubs") existem no sistema.
 * Sidebar, Header, Bottom Navigation e Busca Global leem esta lista em vez de
 * hardcodar rotas — assim, adicionar um novo Hub (TikTok Hub, YouTube Hub,
 * IA Hub, Fortnite Hub...) no futuro é apenas uma nova entrada aqui.
 */

export interface HubDefinition {
  id: string
  path: string
  i18nKey: string // chave de tradução do nome do hub
  icon: LucideIcon
  element: ComponentType
  showInSidebar: boolean
  showInBottomNav: boolean
  order: number
}

export const hubRegistry: HubDefinition[] = [
  {
    id: 'dashboard',
    path: '/dashboard',
    i18nKey: 'nav.dashboard',
    icon: LayoutDashboard,
    element: lazy(() => import('@features/dashboard/pages/DashboardPage')),
    showInSidebar: true,
    showInBottomNav: true,
    order: 0,
  },
  {
    id: 'academia',
    path: '/academia',
    i18nKey: 'nav.academia',
    icon: GraduationCap,
    element: lazy(() => import('@features/academia/pages/AcademiaPage')),
    showInSidebar: true,
    showInBottomNav: true,
    order: 1,
  },
  {
    id: 'arsenal-ia',
    path: '/arsenal-ia',
    i18nKey: 'nav.arsenalIa',
    icon: Sparkles,
    element: lazy(() => import('@features/arsenal-ia/pages/ArsenalIaPage')),
    showInSidebar: true,
    showInBottomNav: true,
    order: 2,
  },
  {
    id: 'laboratorio-ideias',
    path: '/laboratorio-ideias',
    i18nKey: 'nav.laboratorioIdeias',
    icon: Lightbulb,
    element: lazy(() => import('@features/laboratorio-ideias/pages/LaboratorioIdeiasPage')),
    showInSidebar: true,
    showInBottomNav: true,
    order: 3,
  },
  {
    id: 'radar-gta',
    path: '/radar-gta',
    i18nKey: 'nav.radarGta',
    icon: Radar,
    element: lazy(() => import('@features/radar-gta/pages/RadarGtaPage')),
    showInSidebar: true,
    showInBottomNav: false,
    order: 4,
  },
  {
    id: 'oficina-prompts',
    path: '/oficina-prompts',
    i18nKey: 'nav.oficinaPrompts',
    icon: Wrench,
    element: lazy(() => import('@features/oficina-prompts/pages/OficinaPromptsPage')),
    showInSidebar: true,
    showInBottomNav: false,
    order: 5,
  },
  {
    id: 'favoritos',
    path: '/favoritos',
    i18nKey: 'nav.favoritos',
    icon: Heart,
    element: lazy(() => import('@features/favoritos/pages/FavoritosPage')),
    showInSidebar: true,
    showInBottomNav: false,
    order: 6,
  },
  {
    id: 'perfil',
    path: '/perfil',
    i18nKey: 'nav.perfil',
    icon: User,
    element: lazy(() => import('@features/perfil/pages/PerfilPage')),
    showInSidebar: true,
    showInBottomNav: true,
    order: 7,
  },
  {
    id: 'configuracoes',
    path: '/configuracoes',
    i18nKey: 'nav.configuracoes',
    icon: Settings,
    element: lazy(() => import('@features/configuracoes/pages/ConfiguracoesPage')),
    showInSidebar: true,
    showInBottomNav: false,
    order: 8,
  },
]

export const getSidebarHubs = () =>
  [...hubRegistry].filter((h) => h.showInSidebar).sort((a, b) => a.order - b.order)

export const getBottomNavHubs = () =>
  [...hubRegistry].filter((h) => h.showInBottomNav).sort((a, b) => a.order - b.order)

export const getHubById = (id: string) => hubRegistry.find((h) => h.id === id)
