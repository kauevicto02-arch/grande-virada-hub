import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Sparkles } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Input } from '@components/ui/Input'
import { Select } from '@components/ui/Select'
import { Button } from '@components/ui/Button'
import type { AiToolId } from '@/types/entities'
import { buildIdeasPrompt, buildTitlesPrompt, buildHashtagsPrompt, buildDescriptionsPrompt } from '../prompts/ideaPrompts'
import { buildScriptPrompt } from '../prompts/scriptPrompts'
import { buildImagePrompt } from '../prompts/imagePrompts'
import { buildVideoPrompt } from '../prompts/videoPrompts'

const platformOptions = ['TikTok', 'YouTube Shorts', 'Instagram Reels', 'YouTube']
const toneOptions = ['Descontraído', 'Analítico', 'Épico', 'Humorístico', 'Misterioso']
const styleOptions = ['Cinematográfico', 'Synthwave', 'Realista', 'Ilustrativo']
const formatOptions = ['9:16 vertical', '16:9 horizontal', '1:1 quadrado']
const languageOptions = [
  { value: 'pt-BR', label: 'Português' },
  { value: 'en', label: 'English' },
]

interface PromptFormProps {
  toolId: AiToolId
  onGenerate: (prompt: string) => void
}

export function PromptForm({ toolId, onGenerate }: PromptFormProps) {
  const { t } = useTranslation('arsenal')
  const [theme, setTheme] = useState('')
  const [platform, setPlatform] = useState(platformOptions[0])
  const [quantity, setQuantity] = useState(5)
  const [tone, setTone] = useState(toneOptions[0])
  const [duration, setDuration] = useState('60 segundos')
  const [objective, setObjective] = useState('')
  const [style, setStyle] = useState(styleOptions[0])
  const [format, setFormat] = useState(formatOptions[0])
  const [language, setLanguage] = useState<'pt-BR' | 'en'>('pt-BR')

  const handleGenerate = () => {
    let prompt = ''
    switch (toolId) {
      case 'ideas-generator':
        prompt = buildIdeasPrompt({ theme, platform, quantity, tone })
        break
      case 'titles-generator':
        prompt = buildTitlesPrompt({ theme, quantity, style: tone })
        break
      case 'hashtags-generator':
        prompt = buildHashtagsPrompt({ theme, language, platform })
        break
      case 'descriptions-generator':
        prompt = buildDescriptionsPrompt({ theme, objective, platform })
        break
      case 'script-generator':
        prompt = buildScriptPrompt({ theme, duration, socialNetwork: platform, tone, objective })
        break
      case 'image-prompt-generator':
        prompt = buildImagePrompt({ theme, style, format, language })
        break
      case 'video-prompt-generator':
        prompt = buildVideoPrompt({ theme, style, format, language })
        break
    }
    onGenerate(prompt)
  }

  const showPlatform = ['ideas-generator', 'hashtags-generator', 'descriptions-generator', 'script-generator'].includes(toolId)
  const showQuantity = ['ideas-generator', 'titles-generator'].includes(toolId)
  const showTone = ['ideas-generator', 'titles-generator', 'script-generator'].includes(toolId)
  const showDuration = toolId === 'script-generator'
  const showObjective = ['descriptions-generator', 'script-generator'].includes(toolId)
  const showStyleFormat = ['image-prompt-generator', 'video-prompt-generator'].includes(toolId)
  const showLanguage = ['hashtags-generator', 'image-prompt-generator', 'video-prompt-generator'].includes(toolId)

  return (
    <Card>
      <div className="space-y-4">
        <Input
          label={t('fields.theme')}
          placeholder="Ex: teorias sobre o mapa"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />

        {showPlatform && (
          <Select
            label={t('fields.platform')}
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            options={platformOptions.map((p) => ({ value: p, label: p }))}
          />
        )}

        <div className="grid grid-cols-2 gap-3">
          {showQuantity && (
            <Input
              type="number"
              min={1}
              max={20}
              label={t('fields.quantity')}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          )}
          {showTone && (
            <Select
              label={t('fields.tone')}
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              options={toneOptions.map((o) => ({ value: o, label: o }))}
            />
          )}
        </div>

        {showDuration && (
          <Input
            label={t('fields.duration')}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        )}

        {showObjective && (
          <Input
            label={t('fields.objective')}
            placeholder="Ex: gerar comentários"
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          />
        )}

        {showStyleFormat && (
          <div className="grid grid-cols-2 gap-3">
            <Select
              label={t('fields.style')}
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              options={styleOptions.map((o) => ({ value: o, label: o }))}
            />
            <Select
              label={t('fields.format')}
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              options={formatOptions.map((o) => ({ value: o, label: o }))}
            />
          </div>
        )}

        {showLanguage && (
          <Select
            label={t('fields.language')}
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'pt-BR' | 'en')}
            options={languageOptions}
          />
        )}

        <Button
          fullWidth
          icon={<Sparkles size={16} />}
          disabled={!theme.trim()}
          onClick={handleGenerate}
        >
          {t('generate')}
        </Button>
      </div>
    </Card>
  )
}
