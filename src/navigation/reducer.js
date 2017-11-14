import { combineReducers } from 'redux'
import login from './Login/reducer'
import main from './Main/reducer'

export default combineReducers({
  login,
  main,
})
