import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import icons from '@assets/icons'
import I18n from '@i18n'

import styles from './styles'
import {
    defaultAction,
} from './actions'

class {{pascalCase name}} extends Component {
  static propTypes = {
    defaultAction: PropTypes.func.isRequired,
  }

  static navigationOptions = {
    title: I18n.t('{{camelCase name}}.title'),
    tabBarIcon: <Image source={icons.check} style={styles.icon} />,
  }

  render() {
    return (
      <View style={styles.{{camelCase name}} }>
        {I18n.t('{{camelCase name}}.example')}
      </View>
    )
  }
}

export default connect(
    state => ({
    }),
    dispatch => ({
        defaultAction: () => dispatch(defaultAction),
    }))
({{pascalCase name}})
