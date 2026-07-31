import { useTranslation } from 'react-i18next'
import { Radar } from 'lucide-react'
import { SectionTitle } from '@components/shared/SectionTitle'
import { EmptyState } from '@components/ui/EmptyState'
import { news } from '@data/news'
import { NewsCard } from '../components/NewsCard'

export default function RadarGtaPage() {
  const { t } = useTranslation('radar')

  return (
    <div>
      <SectionTitle title={t('title')} subtitle={t('subtitle')} />

      {news.length === 0 ? (
        <EmptyState icon={<Radar size={28} />} title={t('empty')} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </div>
  )
}
