/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { combineReducers } from 'redux'
import { ActionConst } from 'react-native-router-flux';
import { UPDATE_COPY } from './actions'

const initialState = {
  scene: {},
};

export function copy(state = 'This is the initial copy', action) {
  switch (action.type) {
    case UPDATE_COPY:
      return action.copy || state
    default:
      return state
  }
}

export function routes(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routes,
  copy
})

export default rootReducer
