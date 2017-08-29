import React, { Component } from 'react'
import { Button } from 'react-native'

class SpecialButton extends Component {
  render() {
    const { onPress, title } = this.props
    return <Button onPress={onPress} title={title} color="#c12323" />
  }
}

export default SpecialButton
