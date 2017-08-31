import React, { Component } from 'react'
import { View, Text, Image, Platform } from 'react-native'
import { connect } from 'react-redux'
import icons from '@assets/icons'
import SpecialButton from '@reusable/SpecialButton'
import styles from './styles'
import I18n from '@i18n'

class HomeScreen extends Component {
  static navigationOptions = {
    title: I18n.t('home.hello'),
    tabBarIcon: <Image source={icons.check} style={styles.icon} />,
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
  goToMore: () => dispatch({ type: 'Add' }),
})

export default connect(null, mapDispatchToProps)(HomeScreen)
