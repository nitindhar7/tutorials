/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import { connect } from 'react-redux'
import OrangeScreen from '../presenters/OrangeScreen'

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

const OrangeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(OrangeScreen)

export default OrangeScreenContainer
