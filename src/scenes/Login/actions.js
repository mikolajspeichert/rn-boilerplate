import NavigatorActions from '@navigation/actions'

const MOVE = 'MOVE'

export const actions = {
  MOVE,
}

export const moveToOnboarding = () => {
  return {
    type: NavigatorActions.login.MOVE,
    value: 'Onboarding',
  }
}
