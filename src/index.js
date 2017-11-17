import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from '@store'
import Navigator from '@navigation/Main'

export class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Navigator />
      </Provider>
    )
  }
}

export default () => {
  AppRegistry.registerComponent('boilerplate', () => App)
}
