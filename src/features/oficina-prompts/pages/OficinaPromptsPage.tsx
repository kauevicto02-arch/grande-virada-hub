import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Wrench } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { EmptyState } from '@components/ui/EmptyState'
import { cn } from '@utils/cn'
import { promptLibrary } from '@data/prompts'
import { PromptCard } from '../components/PromptCard'
import type { PromptCategory } from '@/types/entities'

const categories: PromptCategory[] = [
  'tiktok',
  'shorts',
  'youtube',
  'instagram',
  'imagens',
  'videos',
  'thumbnail',
  'storytelling',
  'gancho',
  'cta',
]

export default function OficinaPromptsPage() {
  const { t } = useTranslation('oficina')
  const { t: tIdeas } = useTranslation('ideas')
  const [activeCategory, setActiveCategory] = useState<'all' | PromptCategory>('all')

  const filtered = useMemo(
    () => (activeCategory === 'all' ? promptLibrary : promptLibrary.filter((p) => p.category === activeCategory)),
    [activeCategory]
  )

  return (
    <div>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={cn(
            'rounded-full border px-3.5 py-1.5 text-xs transition-colors focus-ring',
            activeCategory === 'all'
              ? 'border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10'
              : 'border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
          )}
        >
          {tIdeas('filters.all')}
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-xs transition-colors focus-ring',
              activeCategory === c
                ? 'border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10'
                : 'border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
            )}
          >
            {t(`categories.${c}`)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={<Wrench size={28} />} title={t('empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  )
}
