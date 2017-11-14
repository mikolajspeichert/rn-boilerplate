import store from '@store'
import reducer from '@store/reducer'

describe('Store', () => {
  it('creates correctly', () => {
    expect(store()).toMatchSnapshot()
  })
})

describe('Main reducer', () => {
  it('reduces initial state', () => {
    expect(reducer(undefined, { type: 'None' }).navigation.main.index).toBe(0)
  })
})
