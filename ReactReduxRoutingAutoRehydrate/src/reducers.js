/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { combineReducers } from 'redux'

import { UPDATE_COPY } from './actions'

export function copy(state = 'This is the initial copy', action) {
  switch (action.type) {
    case UPDATE_COPY:
      return action.copy || state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  copy
})

export default rootReducer
