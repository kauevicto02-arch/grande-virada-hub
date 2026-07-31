import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSearch } from '@hooks/useSearch'
import { useOnClickOutside } from '@hooks/useOnClickOutside'

const typeLabels: Record<string, string> = {
  academia: 'Academia',
  ideia: 'Ideia',
  prompt: 'Prompt',
  ferramenta: 'Ferramenta',
  radar: 'Radar',
}

export function SearchBar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { query, setQuery, results, isSearching } = useSearch()
  const [focused, setFocused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(containerRef, () => setFocused(false))

  const showDropdown = focused && isSearching

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)] px-3.5 py-2.5 focus-within:border-[var(--color-brand-cyan)] transition-colors">
        <Search size={16} className="text-[var(--color-text-muted)] shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={t('search.placeholder')}
          className="w-full bg-transparent text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] outline-none"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
            aria-label="Limpar busca"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="glass-card absolute left-0 right-0 top-[calc(100%+8px)] z-40 max-h-96 overflow-y-auto bg-[var(--color-bg-elevated)] p-2"
          >
            {results.length === 0 ? (
              <p className="px-3 py-4 text-sm text-[var(--color-text-secondary)]">{t('search.noResults')}</p>
            ) : (
              results.slice(0, 8).map((r) => (
                <button
                  key={`${r.type}-${r.id}`}
                  onClick={() => {
                    navigate(r.route)
                    setFocused(false)
                    setQuery('')
                  }}
                  className="flex w-full flex-col items-start gap-0.5 rounded-[var(--radius-sm)] px-3 py-2.5 text-left hover:bg-white/5 focus-ring"
                >
                  <span className="text-xs uppercase tracking-wide text-[var(--color-brand-cyan)]">
                    {typeLabels[r.type] ?? r.type}
                  </span>
                  <span className="text-sm text-[var(--color-text-primary)]">{r.title}</span>
                </button>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
