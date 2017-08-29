import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import I18n from '@i18n'

class MoreScreen extends Component {
  static navigationOptions = {
    title: I18n.t('more.more'),
  }
  render() {
    return (
      <View style={styles.more}>
        <Text>
          {I18n.t('more.welcome')}
        </Text>
      </View>
    )
  }
}

export default MoreScreen
