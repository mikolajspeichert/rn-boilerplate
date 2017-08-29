import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import sinon from 'sinon'
import HomeScreen from '@scenes/Home'

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
