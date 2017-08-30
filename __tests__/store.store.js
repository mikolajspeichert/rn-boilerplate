import store from '@store/store'

describe('Store', () => {
  it('creates correctly', () => {
    expect(store()).toMatchSnapshot()
  })
})
