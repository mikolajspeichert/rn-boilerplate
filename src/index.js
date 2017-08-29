import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '@store/store'
import MainNavigator from '@navigation/MainNavigator'

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <MainNavigator />
      </Provider>
    )
  }
}

export default App
