import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import icons from '@assets/icons'
import I18n from '@i18n'

import styles from './styles'
import { defaultAction } from './actions'

class Main extends Component {
  static propTypes = {
    defaultAction: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: I18n.t('main.title'),
    tabBarIcon: <Image source={icons.check} style={styles.icon} />,
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>{I18n.t('main.example')}</Text>
      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    defaultAction: () => dispatch(defaultAction),
  })
)(Main)
