import 'react-native'
import React from 'react'
const detox = require('detox')
const config = require('../../package.json').detox

beforeAll(async () => {
  await detox.init(config)
})

afterAll(async () => {
  await detox.cleanup()
})

beforeEach(async () => {
  await device.reloadReactNative()
})

describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible()
  })
})
