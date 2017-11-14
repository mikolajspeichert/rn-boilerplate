import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'

import Navigator from '@navigation/Main'

const state = {
  navigation: {
    main: {
      index: 0,
      routes: [{ routeName: 'Home' }],
    },
  },
}
const mockStore = configureStore()

describe('Main navigator', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Navigator store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })
})
