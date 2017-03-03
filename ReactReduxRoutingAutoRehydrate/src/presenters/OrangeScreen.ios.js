/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const OrangeScreen = ({copy}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'orange', padding: 40}}>
      <Text style={{color: 'white', marginBottom: 20}}>I am Orange Screen</Text>
      <Text style={{color: 'white', padding: 20, backgroundColor: 'black', marginBottom: 20}}>{copy}</Text>
      <Button
        title="Switch"
        color="blue"
        onPress={() => Actions.pop()}
      />
    </View>
  )
}

export default OrangeScreen
