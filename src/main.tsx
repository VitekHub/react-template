import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import '@/i18n/config'
import { AppProviders } from '@/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders />
  </StrictMode>,
)
