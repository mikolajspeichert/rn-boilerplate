import NavigatorActions from '@navigation/actions'

const DEFAULT_ACTION = 'DEFAULT_ACTION'

export const actions = {
  DEFAULT_ACTION,
}

export const defaultAction = () => {
  return async dispatch => {
    dispatch({
      type: DEFAULT_ACTION,
      value: [],
    })
  }
}

export const moveToAdd = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'Add',
  }
}
export const moveToSettings = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'Settings',
  }
}
export const moveToLogin = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'Login',
  }
}
