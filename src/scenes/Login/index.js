import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import icons from '@assets/icons'
import I18n from '@i18n'

import styles from './styles'
import { moveToOnboarding } from './actions'

class Login extends Component {
  static propTypes = {
    move: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: I18n.t('login.title'),
    tabBarIcon: <Image source={icons.check} style={styles.icon} />,
  }

  render() {
    return (
      <View style={styles.login}>
        <Text>{I18n.t('login.example')}</Text>
        <Button onPress={() => this.props.move()} title="Move" />
      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    move: () => dispatch(moveToOnboarding()),
  })
)(Login)
