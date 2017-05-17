import i18n from 'i18next'

const startI18n = file => i18n.init({
  fallbackLng: 'en',
  resources: file,
  load: 'languageOnly',
  ns: ['common'],
  defaultNS: 'common',
  debug: false
})

export default startI18n
