import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Lightbulb } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { Select } from '@components/ui/Select'
import { Input } from '@components/ui/Input'
import { EmptyState } from '@components/ui/EmptyState'
import { ideas } from '@data/ideas'
import { IdeaCard } from '../components/IdeaCard'
import type { IdeaCategory, SocialPlatform } from '@/types/entities'

const categories: IdeaCategory[] = [
  'curiosidades',
  'misterios',
  'teorias',
  'mapa',
  'personagens',
  'veiculos',
  'missoes',
  'gameplay',
]

const platforms: SocialPlatform[] = ['tiktok', 'shorts', 'reels', 'youtube']

export default function LaboratorioIdeiasPage() {
  const { t } = useTranslation('ideas')

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<'all' | IdeaCategory>('all')
  const [platform, setPlatform] = useState<'all' | SocialPlatform>('all')

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesSearch =
        !search.trim() ||
        idea.title.toLowerCase().includes(search.toLowerCase()) ||
        idea.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'all' || idea.category === category
      const matchesPlatform = platform === 'all' || idea.platform === platform
      return matchesSearch && matchesCategory && matchesPlatform
    })
  }, [search, category, platform])

  return (
    <div>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <Input placeholder={t('filters.search')} value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select
          label={undefined}
          value={category}
          onChange={(e) => setCategory(e.target.value as 'all' | IdeaCategory)}
          options={[
            { value: 'all', label: t('filters.all') },
            ...categories.map((c) => ({ value: c, label: t(`categories.${c}`) })),
          ]}
        />
        <Select
          label={undefined}
          value={platform}
          onChange={(e) => setPlatform(e.target.value as 'all' | SocialPlatform)}
          options={[
            { value: 'all', label: t('filters.all') },
            ...platforms.map((p) => ({ value: p, label: t(`platforms.${p}`) })),
          ]}
        />
      </div>

      {filteredIdeas.length === 0 ? (
        <EmptyState icon={<Lightbulb size={28} />} title={t('empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  )
}
