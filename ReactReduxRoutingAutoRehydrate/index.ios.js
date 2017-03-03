/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  AsyncStorage,
  AppState
} from 'react-native';
import { Provider } from 'react-redux'
import { compose, applyMiddleware, createStore } from 'redux'
import {Actions, Scene, Router} from 'react-native-router-flux';
import {persistStore, autoRehydrate} from 'redux-persist'
import BlueScreenContainer from './src/containers/BlueScreenContainer'
import OrangeScreenContainer from './src/containers/OrangeScreenContainer'
import rootReducer from './src/reducers'

const store = createStore(
  rootReducer,
  compose(autoRehydrate())
)

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="blueScreen" component={BlueScreenContainer} initial />
    <Scene key="orangeScreen" component={OrangeScreenContainer} />
  </Scene>
);

export default class ReactReduxRoutingAutoRehydrate extends Component {
  componentWillMount() {
    AppState.addEventListener('change', (currentAppState) => {
      persistStore(store, {storage: AsyncStorage})
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactReduxRoutingAutoRehydrate', () => ReactReduxRoutingAutoRehydrate);
