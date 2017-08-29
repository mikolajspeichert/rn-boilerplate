import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../index.android'

jest.mock('react-native-i18n', () => {
  const i18njs = require('i18n-js')
  const en = require('@i18n/locales/en')
  i18njs.translations = { en } // Optional ('en' is the default)

  return {
    t: jest.fn((k, o) => i18njs.t(k, o)),
  }
})

describe('Testing initial renders', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Index />)
  })
})
