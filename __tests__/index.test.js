import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Index, { App } from '../src/index'

describe('Application', () => {
  it('renders', () => {
    renderer.create(<App />)
  })
})
