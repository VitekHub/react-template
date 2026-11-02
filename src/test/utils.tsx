import { render } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import i18n from 'i18next'
import en from '@/i18n/locales/en/common.json'
import cs from '@/i18n/locales/cs/common.json'

const testI18n = i18n.createInstance()

await testI18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    cs: { common: cs },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'cs'],
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: 0,
    },
  },
})

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={testQueryClient}>
      <I18nextProvider i18n={testI18n}>{children}</I18nextProvider>
    </QueryClientProvider>
  )
}

function customRender(ui: ReactElement, options = {}) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export { customRender as render }
export * from '@testing-library/react'
export * from '@testing-library/user-event'
