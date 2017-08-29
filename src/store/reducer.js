import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { MainNavigator } from '@navigation/MainNavigator'
// import { home } from ''

const initialState = MainNavigator.router.getActionForPathAndParams('Home')

const nav = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case 'More':
      nextState = MainNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'More' }),
        state
      )
      break
    default:
      nextState = MainNavigator.router.getStateForAction(state, action)
  }
  return nextState || state
}

export default nav
// export default combineReducers({
//   home,
//   nav,
// })
