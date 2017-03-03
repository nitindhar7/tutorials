/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import { updateCopy } from '../actions'
import BlueScreen from '../presenters/BlueScreen'

const mapStateToProps = (state) => {
  return {
    copy: state.copy
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(updateCopy(text))
    }
  }
}

const BlueScreenContainer = connect(mapStateToProps, mapDispatchToProps)(BlueScreen)

export default BlueScreenContainer
