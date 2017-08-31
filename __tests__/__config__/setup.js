jest.mock('react-native-i18n', () => {
  const i18njs = require('i18n-js')
  const en = require('@i18n/locales/en')
  i18njs.translations = { en } // Optional ('en' is the default)

  return {
    t: jest.fn((k, o) => i18njs.t(k, o)),
  }
})

jest.mock('@assets/icons', () => jest.fn())
jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'))
