import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  Clapperboard,
  Heading,
  Hash,
  FileText,
  Image,
  Video,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@utils/cn'
import type { AiTool } from '@/types/entities'

const iconMap: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  clapperboard: Clapperboard,
  heading: Heading,
  hash: Hash,
  'file-text': FileText,
  image: Image,
  video: Video,
}

export function ToolCard({
  tool,
  active,
  onSelect,
}: {
  tool: AiTool
  active: boolean
  onSelect: () => void
}) {
  const { t } = useTranslation('arsenal')
  const Icon = iconMap[tool.icon] ?? Lightbulb

  return (
    <motion.button
      whileHover={{ y: -3 }}
      onClick={onSelect}
      className={cn(
        'glass-card flex flex-col items-start gap-3 p-4 text-left focus-ring',
        active && 'border-[var(--color-brand-cyan)] shadow-[var(--shadow-glow-cyan)]'
      )}
    >
      <div className="rounded-[var(--radius-md)] bg-white/5 p-2.5 text-[var(--color-brand-pink)]">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
          {t(`tools.${tool.id}.name`)}
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1 line-clamp-2">
          {t(`tools.${tool.id}.description`)}
        </p>
      </div>
    </motion.button>
  )
}
