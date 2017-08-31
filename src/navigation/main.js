import React from 'react'
import { connect } from 'react-redux'
import {
  addNavigationHelpers,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation'

import HomeScreen from '@scenes/Home'
import AddScreen from '@scenes/Add'
import SettingsScreen from '@scenes/Settings'

export const Navigator = TabNavigator(
  {
    Home: { screen: HomeScreen },
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

const Nav = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => {
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(Nav)
