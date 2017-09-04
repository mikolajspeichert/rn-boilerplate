import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Cell from '@reusable/Cell'

describe('Reusable Cell', () => {
  it('renders correctly', () => {
    expect(
      renderer.create(<Cell id="cell" title="Cell" onPress={jest.fn()} />)
    ).toMatchSnapshot()
  })
})
