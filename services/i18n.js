'use strict'

/* global fetch */

import i18n from 'i18next'
import 'isomorphic-fetch'

export const startI18n = file =>
  i18n.init({
    fallbackLng: 'en',
    resources: file,
    load: 'languageOnly',
    ns: ['common'],
    defaultNS: 'common',
    debug: false
  })

export async function getTranslation(lang, file, baseUrl) {
  const response = await fetch(`${baseUrl}${lang}/${file}.json`)
  const json = await response.json()

  return {
    [lang]: {
      [file]: json
    }
  }
}
