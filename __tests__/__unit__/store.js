import store from '@store'
import reducer from '@store/reducer'
import { actions } from '@scenes/Home/actions'

describe('Store', () => {
  it('creates correctly', () => {
    expect(store()).toMatchSnapshot()
  })
})

describe('Main reducer', () => {
  it('reduces initial state', () => {
    expect(reducer({}, { type: 'None' }).nav.index).toBe(0)
  })

  it('reduces navigation', () => {
    let state = reducer({}, { type: 'Add' }).nav
    expect(state.index).toBe(1)
    expect(
      state.routes.filter(route => route.routeName === 'Add')
    ).toHaveLength(1)
  })
})
