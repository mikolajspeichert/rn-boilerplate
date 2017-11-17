import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import icons from '@assets/icons'
import I18n from '@i18n'

import styles from './styles'
import { moveToAdd, moveToSettings, moveToLogin } from './actions'

class Main extends Component {
  static propTypes = {
    moveToAdd: PropTypes.func.isRequired,
    moveToSettings: PropTypes.func.isRequired,
    moveToLogin: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: I18n.t('main.title'),
    headerLeft: null,
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>{I18n.t('main.example')}</Text>
        <Button onPress={() => this.props.moveToAdd()} title="Move to add" />
        <Button
          onPress={() => this.props.moveToSettings()}
          title="Move to settings"
        />
        <Button
          onPress={() => this.props.moveToLogin()}
          title="Move back to login"
        />
      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    moveToAdd: () => dispatch(moveToAdd()),
    moveToSettings: () => dispatch(moveToSettings()),
    moveToLogin: () => dispatch(moveToLogin()),
  })
)(Main)
