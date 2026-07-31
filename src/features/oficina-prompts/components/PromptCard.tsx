import { useTranslation } from 'react-i18next'
import { Copy, Heart } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { useFavorites } from '@hooks/useFavorites'
import { useUser } from '@hooks/useUser'
import { useToast } from '@hooks/useToast'
import type { PromptItem } from '@/types/entities'

export function PromptCard({ prompt }: { prompt: PromptItem }) {
  const { t } = useTranslation('oficina')
  const { t: tCommon } = useTranslation()
  const { isFavorite, toggleFavorite } = useFavorites()
  const { registerPromptCopied } = useUser()
  const { showToast } = useToast()
  const favorited = isFavorite(prompt.id, 'prompt')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.content)
    } catch {
      // usuário ainda consegue selecionar o texto manualmente
    }
    registerPromptCopied()
    showToast(tCommon('toasts.promptCopied'))
  }

  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <Badge variant="cyan">{t(`categories.${prompt.category}`)}</Badge>
        <button
          onClick={() => toggleFavorite(prompt.id, 'prompt')}
          aria-label={favorited ? tCommon('actions.unfavorite') : tCommon('actions.favorite')}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-brand-pink)] transition-colors focus-ring rounded-full p-1"
        >
          <Heart size={17} fill={favorited ? 'var(--color-brand-pink)' : 'none'} className={favorited ? 'text-[var(--color-brand-pink)]' : ''} />
        </button>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{prompt.title}</h3>
        <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2">{prompt.description}</p>
      </div>

      <Button variant="secondary" size="sm" icon={<Copy size={14} />} onClick={handleCopy}>
        {tCommon('actions.copy')}
      </Button>
    </Card>
  )
}
