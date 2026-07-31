import { Check } from 'lucide-react'
import { cn } from '@utils/cn'

export function ChecklistItem({
  label,
  checked,
  onToggle,
}: {
  label: string
  checked: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] px-3.5 py-2.5 text-left transition-colors hover:border-[var(--color-border-strong)] focus-ring"
    >
      <span
        className={cn(
          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors',
          checked
            ? 'bg-[var(--color-success)] border-[var(--color-success)] text-black'
            : 'border-[var(--color-border-strong)]'
        )}
      >
        {checked && <Check size={13} strokeWidth={3} />}
      </span>
      <span
        className={cn(
          'text-sm',
          checked ? 'text-[var(--color-text-muted)] line-through' : 'text-[var(--color-text-primary)]'
        )}
      >
        {label}
      </span>
    </button>
  )
}
