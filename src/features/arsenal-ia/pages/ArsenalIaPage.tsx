import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Info } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { aiTools } from '@data/tools'
import type { AiToolId } from '@/types/entities'
import { ToolCard } from '../components/ToolCard'
import { PromptForm } from '../components/PromptForm'
import { PromptResult } from '../components/PromptResult'
import { useUser } from '@hooks/useUser'
import { useToast } from '@hooks/useToast'

export default function ArsenalIaPage() {
  const { t } = useTranslation('arsenal')
  const { t: tCommon } = useTranslation()
  const { registerPromptCopied } = useUser()
  const { showToast } = useToast()

  const [activeToolId, setActiveToolId] = useState<AiToolId>(aiTools[0].id)
  const [result, setResult] = useState('')

  const handleGenerate = (prompt: string) => {
    setResult(prompt)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result)
    } catch {
      // Em navegadores sem permissão de clipboard, o usuário ainda vê o texto na tela.
    }
    registerPromptCopied(activeToolId)
    showToast(tCommon('toasts.promptCopied'))
  }

  return (
    <div>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      <div className="mb-6 flex items-center gap-2.5 rounded-[var(--radius-md)] border border-[var(--color-brand-cyan)]/25 bg-[var(--color-brand-cyan)]/5 px-4 py-3 text-sm text-[var(--color-text-secondary)]">
        <Info size={16} className="text-[var(--color-brand-cyan)] shrink-0" />
        {t('notAiNotice')}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
        {aiTools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            active={tool.id === activeToolId}
            onSelect={() => {
              setActiveToolId(tool.id)
              setResult('')
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PromptForm toolId={activeToolId} onGenerate={handleGenerate} />
        <PromptResult result={result} onCopy={handleCopy} />
      </div>
    </div>
  )
}
