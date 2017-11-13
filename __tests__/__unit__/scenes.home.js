import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
// import sinon from 'sinon'
import HomeScreen from '@scenes/Home'
import { actions, loadItems, addItem } from '@scenes/Home/actions'
import reducer from '@scenes/Home/reducer'

const state = {}
const mockStore = configureStore([thunk])

describe('Scene Home', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<HomeScreen store={mockStore(state)} />)
    expect(wrapper).toMatchSnapshot()
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

describe('Home reducer', () => {
  it('reduces initial state', () => {
    expect(reducer(null, { type: 'None' })).toMatchSnapshot()
  })

  it('reduces item loading', () => {
    expect(
      reducer(null, {
        type: actions.LOAD_ITEMS,
        value: {
          '0': {
            id: 'item',
            title: 'ITEM',
            notes: 'item notes',
            created: new Date(999),
          },
        },
      })
    ).toMatchSnapshot()
  })
})
