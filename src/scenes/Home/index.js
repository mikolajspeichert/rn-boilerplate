import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import SpecialButton from '@reusable/SpecialButton'
import styles from './styles'
import I18n from '@i18n'

class HomeScreen extends Component {
  static navigationOptions = {
    title: I18n.t('home.hello'),
  }

  render() {
    return (
      <View style={styles.home}>
        <Text>
          {I18n.t('home.welcome')} {Platform.OS === 'ios' ? 'iOS' : 'Android'}
        </Text>
        <SpecialButton
          title={I18n.t('home.more')}
          onPress={() => this.props.goToMore()}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goToMore: () => dispatch({ type: 'More' }),
})

export default connect(null, mapDispatchToProps)(HomeScreen)
