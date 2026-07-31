import { useTranslation } from 'react-i18next'
import { Copy } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'

export function PromptResult({
  result,
  onCopy,
}: {
  result: string
  onCopy: () => void
}) {
  const { t } = useTranslation('arsenal')
  const { t: tCommon } = useTranslation()

  return (
    <Card>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{t('result.title')}</h3>
        {result && (
          <Button size="sm" variant="secondary" icon={<Copy size={14} />} onClick={onCopy}>
            {tCommon('actions.copy')}
          </Button>
        )}
      </div>
      {result ? (
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {result}
        </p>
      ) : (
        <p className="text-sm text-[var(--color-text-muted)]">{t('result.placeholder')}</p>
      )}
    </Card>
  )
}
