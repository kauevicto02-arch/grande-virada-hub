import type { LucideIcon } from 'lucide-react'
import { Card } from '@components/ui/Card'

export function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon
  label: string
  value: string | number
}) {
  return (
    <Card className="flex items-center gap-4">
      <div className="rounded-[var(--radius-md)] bg-white/5 p-3 text-[var(--color-brand-cyan)]">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-semibold text-[var(--color-text-primary)]">{value}</p>
        <p className="text-xs text-[var(--color-text-secondary)]">{label}</p>
      </div>
    </Card>
  )
}
