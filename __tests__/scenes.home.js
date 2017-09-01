import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import sinon from 'sinon'
import HomeScreen from '@scenes/Home'
import reducer from '@scenes/Home/reducer'
import {loadItems } from '@scenes/Home/actions'

const state = {}
const mockStore = configureStore()

describe('Home Screen', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<HomeScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('dispatches navigation action', () => {
    console.log()
  })
})

describe('Home reducer', () => {
  it('reduces initial state', () => {
    expect(reducer({}, { type: 'None' }).home).toMatchSnapshot()
  })
})

describe('Home actions', () => {
  beforeEach(() => {
    console.log('Initializing realm')
  })

  it('load items correctly', async () => {
    const items = await loadItems()
    expect(items).toMatchSnapshot()
  })
})
