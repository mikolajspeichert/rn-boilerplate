import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { Navigator } from '@navigation/main'
// import { home } from ''

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams('Home')
)

const nav = (state = initialState, action) => {
  switch (action.type) {
    case 'Add':
      return Navigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Add' }),
        state
      )
    default:
      return Navigator.router.getStateForAction(action, state)
  }
}

export default combineReducers({
  nav,
})
// export default combineReducers({
//   home,
//   nav,
// })
