import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// pt-BR
import ptCommon from '@locales/pt-BR/common.json'
import ptDashboard from '@locales/pt-BR/dashboard.json'
import ptAcademia from '@locales/pt-BR/academia.json'
import ptArsenal from '@locales/pt-BR/arsenal.json'
import ptIdeas from '@locales/pt-BR/ideas.json'
import ptRadar from '@locales/pt-BR/radar.json'
import ptOficina from '@locales/pt-BR/oficina.json'
import ptPerfil from '@locales/pt-BR/perfil.json'
import ptConfig from '@locales/pt-BR/config.json'
import ptFavoritos from '@locales/pt-BR/favoritos.json'

// es-AR
import esCommon from '@locales/es-AR/common.json'
import esDashboard from '@locales/es-AR/dashboard.json'
import esAcademia from '@locales/es-AR/academia.json'
import esArsenal from '@locales/es-AR/arsenal.json'
import esIdeas from '@locales/es-AR/ideas.json'
import esRadar from '@locales/es-AR/radar.json'
import esOficina from '@locales/es-AR/oficina.json'
import esPerfil from '@locales/es-AR/perfil.json'
import esConfig from '@locales/es-AR/config.json'
import esFavoritos from '@locales/es-AR/favoritos.json'

export const supportedLanguages = ['pt-BR', 'es-AR'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

export const defaultNS = 'common'

export const resources = {
  'pt-BR': {
    common: ptCommon,
    dashboard: ptDashboard,
    academia: ptAcademia,
    arsenal: ptArsenal,
    ideas: ptIdeas,
    radar: ptRadar,
    oficina: ptOficina,
    perfil: ptPerfil,
    config: ptConfig,
    favoritos: ptFavoritos,
  },
  'es-AR': {
    common: esCommon,
    dashboard: esDashboard,
    academia: esAcademia,
    arsenal: esArsenal,
    ideas: esIdeas,
    radar: esRadar,
    oficina: esOficina,
    perfil: esPerfil,
    config: esConfig,
    favoritos: esFavoritos,
  },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    supportedLngs: supportedLanguages as unknown as string[],
    defaultNS,
    ns: Object.keys(resources['pt-BR']),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'gvh:language',
      caches: ['localStorage'],
    },
  })

export default i18n
