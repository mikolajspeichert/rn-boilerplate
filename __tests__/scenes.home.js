import 'react-native'
import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import sinon from 'sinon'
import HomeScreen from '@scenes/Home'
import { loadItems } from '@scenes/Home/actions'
import storage from '@storage'

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

describe('Home action', () => {
  beforeEach(async () => {
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

  afterEach(async () => {
    let realm = await storage
    realm.write(() => {
      realm.delete(realm.objects('Item'))
    })

    realm.close()
  })

  it('loads items correctly', done => {
    const fakeDispatch = action => {
      expect(action).toMatchSnapshot()
      done()
    }
    loadItems()(fakeDispatch)
  })
})
