'use strict'

/* global fetch */

import { init } from 'i18next'
import 'isomorphic-fetch'

export const startI18n = file =>
  init({
    fallbackLng: 'pt',
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
