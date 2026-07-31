import type { ReactNode } from 'react'
import { Inbox } from 'lucide-react'

export function EmptyState({
  title,
  description,
  icon,
  action,
}: {
  title: string
  description?: string
  icon?: ReactNode
  action?: ReactNode
}) {
  return (
    <div className="glass-card flex flex-col items-center justify-center text-center gap-3 py-14 px-6">
      <div className="rounded-full bg-white/5 p-4 text-[var(--color-text-muted)]">
        {icon ?? <Inbox size={28} />}
      </div>
      <h3 className="text-base font-medium text-[var(--color-text-primary)]">{title}</h3>
      {description && <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">{description}</p>}
      {action}
    </div>
  )
}
