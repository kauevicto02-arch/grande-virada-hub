import { useTranslation } from 'react-i18next'
import { Moon, Sun, Bell, Volume2, Sparkles } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Card } from '@components/ui/Card'
import { LanguageSelector } from '@components/shared/LanguageSelector'
import { useSettings } from '@hooks/useSettings'
import { useToast } from '@hooks/useToast'
import { cn } from '@utils/cn'

function ToggleRow({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
        {icon}
        {label}
      </span>
      <button
        onClick={() => onChange(!checked)}
        className={cn(
          'h-6 w-11 rounded-full transition-colors relative focus-ring',
          checked ? 'bg-[var(--color-brand-pink)]' : 'bg-white/10'
        )}
        aria-pressed={checked}
      >
        <span
          className={cn(
            'absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform',
            checked ? 'translate-x-5' : 'translate-x-0.5'
          )}
        />
      </button>
    </div>
  )
}

export default function ConfiguracoesPage() {
  const { t } = useTranslation('config')
  const { t: tCommon } = useTranslation()
  const { settings, updateSettings } = useSettings()
  const { showToast } = useToast()

  const handleUpdate = (partial: Partial<typeof settings>) => {
    updateSettings(partial)
    showToast(tCommon('toasts.settingsSaved'))
  }

  return (
    <div>
      <SectionTitle title={t('title')} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card>
          <h3 className="text-sm font-semibold mb-3 text-[var(--color-text-primary)]">{t('language')}</h3>
          <LanguageSelector />
        </Card>

        <Card>
          <h3 className="text-sm font-semibold mb-1 text-[var(--color-text-primary)]">{t('theme')}</h3>
          <div className="flex gap-2 mt-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10 py-2.5 text-sm text-[var(--color-brand-cyan)]">
              <Moon size={16} />
              {t('themeDark')}
            </button>
            <button
              disabled
              className="flex flex-1 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] py-2.5 text-sm text-[var(--color-text-muted)] opacity-50 cursor-not-allowed"
            >
              <Sun size={16} />
              {t('themeLight')}
            </button>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <div className="divide-y divide-[var(--color-border-subtle)]">
            <ToggleRow
              icon={<Bell size={16} />}
              label={t('notifications')}
              checked={settings.notificationsEnabled}
              onChange={(v) => handleUpdate({ notificationsEnabled: v })}
            />
            <ToggleRow
              icon={<Volume2 size={16} />}
              label={t('sound')}
              checked={settings.soundEnabled}
              onChange={(v) => handleUpdate({ soundEnabled: v })}
            />
            <ToggleRow
              icon={<Sparkles size={16} />}
              label={t('animations')}
              checked={settings.animationsEnabled}
              onChange={(v) => handleUpdate({ animationsEnabled: v })}
            />
          </div>
        </Card>
      </div>

      <p className="mt-6 text-xs text-[var(--color-text-muted)]">{t('version')}: 1.0.0</p>
    </div>
  )
}
