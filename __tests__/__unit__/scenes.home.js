import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
// import sinon from 'sinon'
import HomeScreen from '@scenes/Home'
import { loadItems, addItem } from '@scenes/Home/actions'

const state = {}
const mockStore = configureStore([thunk])

describe('Home Screen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomeScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('dispatches navigation action', () => {
    console.log()
  })
})

describe('Home action', () => {
  it('loads items correctly', done => {
    const mockDispatch = action => {
      expect(action).toMatchSnapshot()
      done()
    }
    loadItems()(mockDispatch)
  })

  it('adds item correctly', done => {
    const mockItem = {
      id: 'mock',
      title: 'mock',
    }
    const mockDispatch = action => {
      expect(action).toMatchSnapshot()
      done()
    }
    addItem(mockItem)(mockDispatch)
  })
})
