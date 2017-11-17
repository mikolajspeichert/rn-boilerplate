import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from '@i18n'

import styles from './styles'
import { moveToMain, moveToLogin } from './actions'

class Splash extends Component {
  static propTypes = {
    main: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: I18n.t('splash.title'),
    header: null,
  }

  componentDidMount() {
    this.props.main()
    // this.props.login()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{I18n.t('splash.example')}</Text>
      </View>
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    main: () => dispatch(moveToMain()),
    login: () => dispatch(moveToLogin()),
  })
)(Splash)
