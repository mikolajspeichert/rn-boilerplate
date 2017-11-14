import React from 'react'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation'

import Main from '@scenes/Main'
import AddScreen from '@scenes/Add'
import SettingsScreen from '@scenes/Settings'

export const MainNavigator = TabNavigator(
  {
    Home: { screen: Main },
    Add: { screen: AddScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    lazy: false,
    tabBarOptions: {
      activeBackgroundColor: '#3c3c3c',
      inactiveBackgroundColor: '#505050',
      showLabel: false,
      activeTintColor: '#fafafa',
      inactiveTintColor: '#fafafa',
    },
  }
)

const Navigator = ({ dispatch, state }) => (
  <MainNavigator
    navigation={addNavigationHelpers({ dispatch, state: state })}
  />
)

const mapStateToProps = state => {
  return {
    state: state.navigation.main,
  }
}

export default connect(mapStateToProps)(Navigator)
