import { NavigationActions } from 'react-navigation'

import actions from '@navigation/actions'
import { LoginNavigator } from '.'

const initialState = LoginNavigator.router.getStateForAction(
  LoginNavigator.router.getActionForPathAndParams('Login')
)

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.login.MOVE:
      return LoginNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.value }),
        state
      )
    default:
      return LoginNavigator.router.getStateForAction(action, state)
  }
}
