import NavigatorActions from '@navigation/actions'

const DEFAULT_ACTION = 'DEFAULT_ACTION'

export const actions = {
  DEFAULT_ACTION,
}

export const moveToOnboarding = () => {
  return {
    type: NavigatorActions.MOVE,
    value: 'Onboarding', //Routes.Onboarding,
  }
}
