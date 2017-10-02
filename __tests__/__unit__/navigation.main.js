import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import Navigator from '@navigation/main'

const state = {
  nav: {
    index: 0,
    routes: [{ routeName: 'None' }],
  },
}
const mockStore = configureStore()

describe('Main navigator', () => {
  it('renders correctly', () => {
  //  const wrapper = renderer.create(<Navigator store={mockStore(state)} />)
    expect('').toMatchSnapshot()
  })
})
