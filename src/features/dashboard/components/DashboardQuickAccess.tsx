import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getSidebarHubs } from '@lib/hubRegistry'
import { SectionTitle } from '@components/shared/SectionTitle'

export function DashboardQuickAccess() {
  const { t } = useTranslation('dashboard')
  const navigate = useNavigate()
  const hubs = getSidebarHubs().filter((h) => h.id !== 'dashboard')

  return (
    <div className="mt-8">
      <SectionTitle title={t('quickAccess')} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {hubs.map((hub) => (
          <motion.button
            key={hub.id}
            whileHover={{ y: -3 }}
            onClick={() => navigate(hub.path)}
            className="glass-card flex flex-col items-center gap-2 p-4 text-center focus-ring"
          >
            <hub.icon size={22} className="text-[var(--color-brand-cyan)]" />
            <span className="text-xs text-[var(--color-text-secondary)]">{t(hub.i18nKey, { ns: 'common' })}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
