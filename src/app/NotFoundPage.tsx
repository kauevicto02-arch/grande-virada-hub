import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { EmptyState } from '@components/ui/EmptyState'
import { Button } from '@components/ui/Button'

export default function NotFoundPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <EmptyState
        icon={<Compass size={28} />}
        title={t('notFound.title')}
        description={t('notFound.description')}
        action={
          <Button onClick={() => navigate('/dashboard')} className="mt-2">
            {t('notFound.cta')}
          </Button>
        }
      />
    </div>
  )
}
