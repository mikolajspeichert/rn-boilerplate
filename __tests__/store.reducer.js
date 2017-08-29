import reducer from '@store/reducer'

describe('Main reducer', () => {
  it('reduces initial state', () => {
    expect(reducer({}, { type: 'None' })).toMatchSnapshot()
  })

  it('reduces navigation', () => {
    expect(reducer({}, { type: 'More' })).toMatchSnapshot()
  })
})
