import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import SpecialButton from '@reusable/SpecialButton'
import styles from './styles'
import I18n from '@i18n'

class HomeScreen extends Component {
  static navigationOptions = {
    title: I18n.t('hello'),
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View styles={styles.home}>
        <Text>
          {I18n.t('welcome')} {Platform.OS === 'ios' ? 'iOS' : 'Android'}
        </Text>
        <SpecialButton
          title={I18n.t('more')}
          onPress={() => navigate('Chat')}
        />
      </View>
    )
  }
}

export default HomeScreen
