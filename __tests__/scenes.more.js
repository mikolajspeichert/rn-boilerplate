import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
// import { shallow } from 'enzyme'
import MoreScreen from '@scenes/More'

const state = {}
const mockStore = configureStore()

describe('Mome Screen', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<MoreScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })
})
