import { NavigationActions } from 'react-navigation'
import { MainNavigator } from '.'

const initialState = MainNavigator.router.getStateForAction(
  MainNavigator.router.getActionForPathAndParams('Home')
)

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      return MainNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.type }),
        state
      )
    default:
      return MainNavigator.router.getStateForAction(action, state)
  }
}
