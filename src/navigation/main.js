import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import HomeScreen from '@scenes/Home'
import MoreScreen from '@scenes/More'

export const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  More: { screen: MoreScreen },
})

const Nav = ({ dispatch, nav }) => (
  <Navigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => {
  console.log(state)
  return {
    nav: state.nav,
  }
}

export default connect(mapStateToProps)(Nav)
