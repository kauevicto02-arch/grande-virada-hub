import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { getSidebarHubs } from '@lib/hubRegistry'
import { cn } from '@utils/cn'

export function Sidebar() {
  const { t } = useTranslation()
  const hubs = getSidebarHubs()

  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex md:w-64 lg:w-72 shrink-0 flex-col border-r border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/60 backdrop-blur-xl p-4"
    >
      <div className="flex items-center gap-2.5 px-2 py-3 mb-4">
        <div className="h-9 w-9 rounded-[var(--radius-sm)] bg-gradient-to-br from-[var(--color-brand-pink)] to-[var(--color-brand-cyan)]" />
        <span className="text-lg font-semibold text-gradient-brand">{t('appName')}</span>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {hubs.map((hub) => (
          <NavLink
            key={hub.id}
            to={hub.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-sm transition-colors focus-ring',
                isActive
                  ? 'bg-white/8 text-[var(--color-text-primary)] border border-[var(--color-border-strong)]'
                  : 'text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-[var(--color-text-primary)]'
              )
            }
          >
            <hub.icon size={18} />
            {t(hub.i18nKey)}
          </NavLink>
        ))}
      </nav>

      <div className="px-2 py-3 text-xs text-[var(--color-text-muted)]">v1.0.0</div>
    </motion.aside>
  )
}
