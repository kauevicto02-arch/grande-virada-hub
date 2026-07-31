import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Heart, Wand2, Newspaper } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { useFavorites } from '@hooks/useFavorites'
import type { NewsItem } from '@/types/entities'

const categoryVariant: Record<NewsItem['category'], 'neutral' | 'cyan' | 'pink' | 'purple' | 'warning'> = {
  noticia: 'neutral',
  trailer: 'cyan',
  rumor: 'warning',
  data: 'purple',
  alta: 'pink',
}

export function NewsCard({ news }: { news: NewsItem }) {
  const { t } = useTranslation('radar')
  const { t: tCommon } = useTranslation()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(news.id, 'news')

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex h-32 w-full items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-brand-purple)]/25 to-[var(--color-brand-cyan)]/15 border border-[var(--color-border-subtle)]">
        <Newspaper size={28} className="text-[var(--color-text-muted)]" />
      </div>

      <div className="flex items-center justify-between gap-2">
        <Badge variant={categoryVariant[news.category]}>{t(`categories.${news.category}`)}</Badge>
        <button
          onClick={() => toggleFavorite(news.id, 'news')}
          aria-label={favorited ? tCommon('actions.unfavorite') : tCommon('actions.favorite')}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-pink)] transition-colors focus-ring rounded-full p-1"
        >
          <Heart size={17} fill={favorited ? 'var(--color-brand-pink)' : 'none'} className={favorited ? 'text-[var(--color-brand-pink)]' : ''} />
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{news.title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{news.summary}</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)]">
          {new Date(news.date).toLocaleDateString()}
        </span>
        <Button variant="secondary" size="sm" icon={<Wand2 size={14} />} onClick={() => navigate('/arsenal-ia')}>
          {t('createContent')}
        </Button>
      </div>
    </Card>
  )
}
