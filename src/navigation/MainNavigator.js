import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import HomeScreen from '@scenes/Home'

export const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
})

const Nav = ({ dispatch, nav }) =>
  <MainNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(Nav)
