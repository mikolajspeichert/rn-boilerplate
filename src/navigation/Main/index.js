import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import Main from '@scenes/Main'
import Add from '@scenes/Add'
import Settings from '@scenes/Settings'
import Splash from '@scenes/Splash'
import LoginNavigator from '@navigation/Login'

const Routes = {
  Splash: 'Splash',
  Login: 'Login',
  Main: 'Main',
  Add: 'Add',
  Settings: 'Settings',
}

/**
* See https://reactnavigation.org/docs/navigators/stack#RouteConfigs
*/
const MainNavigator = StackNavigator(
  {
    [Routes.Splash]: { screen: Splash },
    [Routes.Login]: {
      screen: LoginNavigator,
      navigationOptions: { header: null },
    },
    [Routes.Main]: { screen: Main },
    [Routes.Add]: { screen: Add },
    [Routes.Settings]: { screen: Settings },
  },
  {
    initialRouteName: Routes.Splash,
  }
)

/**
* We treat Navigator as a wrapper for scenes inside.
*/
const Navigator = ({ dispatch, state }) => (
  <MainNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: state.navigation,
    })}
  />
)

export { Routes, MainNavigator }
export default connect(state => ({ state }))(Navigator)
