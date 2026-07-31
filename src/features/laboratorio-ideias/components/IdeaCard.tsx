import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Heart, Wand2 } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { useFavorites } from '@hooks/useFavorites'
import type { Idea } from '@/types/entities'

const potentialVariant: Record<Idea['viralPotential'], 'neutral' | 'cyan' | 'pink' | 'purple'> = {
  baixo: 'neutral',
  medio: 'cyan',
  alto: 'pink',
  altissimo: 'purple',
}

export function IdeaCard({ idea }: { idea: Idea }) {
  const { t } = useTranslation('ideas')
  const { t: tCommon } = useTranslation()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(idea.id, 'idea')

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <Badge variant="neutral">{t(`categories.${idea.category}`)}</Badge>
        <button
          onClick={() => toggleFavorite(idea.id, 'idea')}
          aria-label={favorited ? tCommon('actions.unfavorite') : tCommon('actions.favorite')}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-pink)] transition-colors focus-ring rounded-full p-1"
        >
          <Heart size={18} fill={favorited ? 'var(--color-brand-pink)' : 'none'} className={favorited ? 'text-[var(--color-brand-pink)]' : ''} />
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{idea.title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{idea.description}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="cyan">{t(`platforms.${idea.platform}`)}</Badge>
        <Badge variant={potentialVariant[idea.viralPotential]}>
          {t(`viralPotential.${idea.viralPotential}`)}
        </Badge>
      </div>

      <Button
        variant="secondary"
        size="sm"
        icon={<Wand2 size={14} />}
        onClick={() => navigate('/arsenal-ia')}
      >
        {tCommon('actions.createContent')}
      </Button>
    </Card>
  )
}
