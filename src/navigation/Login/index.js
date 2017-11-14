import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import MainNavigator from '@navigation/Main'
import Login from '@scenes/Login'
import Onboarding from '@scenes/Onboarding'

export const LoginNavigator = StackNavigator({
  Onboarding: {
    screen: Onboarding,
  },
  Login: {
    screen: Login,
  },
  Main: {
    screen: MainNavigator,
    navigationOptions: {
      title: 'Main',
      headerLeft: null,
    },
  },
})

const Navigator = ({ dispatch, state }) => (
  <LoginNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: state.navigation.login,
    })}
  />
)

export default connect(state => ({ state }))(Navigator)
