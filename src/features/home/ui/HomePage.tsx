import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export function HomePage() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-dvh items-center justify-center bg-neutral-50 text-neutral-900">
      <h1 className={cn('text-3xl font-semibold tracking-tight', 'sm:text-4xl')}>
        {t('app.name')}
      </h1>
    </main>
  )
}
