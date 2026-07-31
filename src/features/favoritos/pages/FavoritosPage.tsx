import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Heart } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { EmptyState } from '@components/ui/EmptyState'
import { cn } from '@utils/cn'
import { useFavorites } from '@hooks/useFavorites'
import { ideas } from '@data/ideas'
import { promptLibrary } from '@data/prompts'
import { news } from '@data/news'
import { IdeaCard } from '@features/laboratorio-ideias/components/IdeaCard'
import { PromptCard } from '@features/oficina-prompts/components/PromptCard'
import { NewsCard } from '@features/radar-gta/components/NewsCard'
import type { FavoritableType } from '@/types/entities'

const tabs: FavoritableType[] = ['idea', 'prompt', 'news']

export default function FavoritosPage() {
  const { t } = useTranslation('favoritos')
  const { getByType } = useFavorites()
  const [activeTab, setActiveTab] = useState<FavoritableType>('idea')

  const favoriteIdeaIds = new Set(getByType('idea').map((f) => f.id))
  const favoritePromptIds = new Set(getByType('prompt').map((f) => f.id))
  const favoriteNewsIds = new Set(getByType('news').map((f) => f.id))

  const favoritedIdeas = ideas.filter((i) => favoriteIdeaIds.has(i.id))
  const favoritedPrompts = promptLibrary.filter((p) => favoritePromptIds.has(p.id))
  const favoritedNews = news.filter((n) => favoriteNewsIds.has(n.id))

  const counts: Record<FavoritableType, number> = {
    course: 0,
    idea: favoritedIdeas.length,
    prompt: favoritedPrompts.length,
    tool: 0,
    news: favoritedNews.length,
  }

  const renderContent = () => {
    if (activeTab === 'idea') {
      return favoritedIdeas.length === 0 ? (
        <EmptyState icon={<Heart size={28} />} title={t('empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritedIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )
    }
    if (activeTab === 'prompt') {
      return favoritedPrompts.length === 0 ? (
        <EmptyState icon={<Heart size={28} />} title={t('empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoritedPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )
    }
    return favoritedNews.length === 0 ? (
      <EmptyState icon={<Heart size={28} />} title={t('empty')} />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoritedNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    )
  }

  return (
    <div>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-xs transition-colors focus-ring',
              activeTab === tab
                ? 'border-[var(--color-brand-cyan)] text-[var(--color-brand-cyan)] bg-[var(--color-brand-cyan)]/10'
                : 'border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
            )}
          >
            {t(`tabs.${tab}`)} ({counts[tab]})
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  )
}
