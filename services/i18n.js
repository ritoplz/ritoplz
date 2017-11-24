'use strict'

import i18n from 'i18next'
import axios from 'axios'
import LngDetector from 'i18next-browser-languagedetector'

export const startI18n = file =>
  i18n.use(LngDetector).init({
    fallbackLng: 'en',
    resources: file,
    load: 'languageOnly',
    ns: ['common'],
    defaultNS: 'common',
    debug: false,
    react: {
      wait: true
    }
  })

export async function getTranslation(lang, file) {
  const i18nUrl = process.env.I18N_URL || 'http://localhost:3000/static/locales'
  const response = await axios(`${i18nUrl}/${lang}/${file}.json`)

  return {
    [lang]: {
      [file]: response.data
    }
  }
}
