import NavigatorActions from '@navigation/actions'

const DEFAULT_ACTION = 'DEFAULT_ACTION'

export const actions = {
  DEFAULT_ACTION,
}

export const moveToMain = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch({
        type: NavigatorActions.MOVE,
        value: 'Main',
      })
    }, 1000)
  }
}

export const moveToLogin = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch({
        type: NavigatorActions.MOVE,
        value: 'Login',
      })
    }, 1000)
  }
}
