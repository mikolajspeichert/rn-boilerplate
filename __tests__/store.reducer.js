import reducer from '@store/reducer'

describe('Main reducer', () => {
  it('reduces initial state', () => {
    expect(reducer({}, { type: 'None' }).nav.index).toBe(0)
  })

  it('reduces navigation', () => {
    let effect = reducer({}, { type: 'Add' }).nav
    expect(effect.index).toBe(1)
    expect(
      effect.routes.filter(route => route.routeName === 'Add')
    ).toHaveLength(1)
  })
})
