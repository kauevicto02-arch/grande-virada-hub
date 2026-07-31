import { NavLink } from 'react-router-dom'
import { getBottomNavHubs } from '@lib/hubRegistry'
import { cn } from '@utils/cn'

export function BottomNavigation() {
  const hubs = getBottomNavHubs()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/90 backdrop-blur-xl px-2 py-2 md:hidden">
      {hubs.map((hub) => (
        <NavLink
          key={hub.id}
          to={hub.path}
          className={({ isActive }) =>
            cn(
              'flex flex-col items-center gap-1 rounded-[var(--radius-sm)] px-3 py-1.5 text-[10px] transition-colors focus-ring',
              isActive ? 'text-[var(--color-brand-cyan)]' : 'text-[var(--color-text-muted)]'
            )
          }
        >
          <hub.icon size={20} />
        </NavLink>
      ))}
    </nav>
  )
}
