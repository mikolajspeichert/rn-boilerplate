import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
// import sinon from 'sinon'
import HomeScreen from '@scenes/Home'
import { loadItems, addItem } from '@scenes/Home/actions'
import storage from '@storage'

const state = {}
const mockStore = configureStore([thunk])

beforeAll(async () => {
  let realm = await storage
  realm.write(() => {
    realm.create('Item', {
      id: 'first',
      title: 'FIRST_ITEM',
      notes: 'No notes on this one',
      created: new Date(1),
    })
    realm.create('Item', {
      id: 'second',
      title: 'Second item',
      notes: 'Some notes',
      created: new Date(100),
    })
  })
})

afterAll(async () => {
  let realm = await storage
  realm.write(() => {
    realm.delete(realm.objects('Item'))
  })

  realm.close()
})

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
