import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
// import { shallow } from 'enzyme'
import AddScreen from '@scenes/Add'

const state = {}
const mockStore = configureStore()

describe('AddScreen', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<AddScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })
})
