import type { ReactNode } from 'react'
import { cn } from '@utils/cn'

type BadgeVariant = 'pink' | 'cyan' | 'purple' | 'neutral' | 'success' | 'warning'

const variantClasses: Record<BadgeVariant, string> = {
  pink: 'bg-[var(--color-brand-pink)]/15 text-[var(--color-brand-pink)] border-[var(--color-brand-pink)]/30',
  cyan: 'bg-[var(--color-brand-cyan)]/15 text-[var(--color-brand-cyan)] border-[var(--color-brand-cyan)]/30',
  purple: 'bg-[var(--color-brand-purple)]/15 text-[var(--color-brand-purple)] border-[var(--color-brand-purple)]/30',
  neutral: 'bg-white/5 text-[var(--color-text-secondary)] border-[var(--color-border-subtle)]',
  success: 'bg-[var(--color-success)]/15 text-[var(--color-success)] border-[var(--color-success)]/30',
  warning: 'bg-[var(--color-warning)]/15 text-[var(--color-warning)] border-[var(--color-warning)]/30',
}

export function Badge({ children, variant = 'neutral' }: { children: ReactNode; variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap',
        variantClasses[variant]
      )}
    >
      {children}
    </span>
  )
}
