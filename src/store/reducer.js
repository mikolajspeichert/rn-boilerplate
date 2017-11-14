import { combineReducers } from 'redux'

import main from '@scenes/Main/reducer'
import navigation from '@navigation/reducer'

export default combineReducers({
  navigation,
  main,
})
