import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
// import { shallow } from 'enzyme'
import SettingsScreen from '@scenes/Settings'

const state = {}
const mockStore = configureStore()

describe('SettingsScreen', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<SettingsScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })
})
