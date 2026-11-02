import i18n, { i18nReady } from './config'

describe('i18n', () => {
  beforeAll(async () => {
    await i18nReady
  })

  it('translates the app name in English', async () => {
    await i18n.changeLanguage('en')
    expect(i18n.t('app.name')).toBe('React Template')
  })

  it('translates the app name in Czech', async () => {
    await i18n.changeLanguage('cs')
    expect(i18n.t('app.name')).toBe('React šablona')
  })
})
