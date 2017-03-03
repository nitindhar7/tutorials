/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const BlueScreen = ({copy, onSubmit}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue', padding: 40}}>
      <Text style={{color: 'white', marginBottom: 20}}>I am Blue Screen</Text>
      <Text style={{color: 'white', padding: 20, backgroundColor: 'black', marginBottom: 20}}>{copy}</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
        onChangeText={(text) => this.text = text}
      />
      <Button
        title="Submit"
        color="white"
        onPress={() => onSubmit(this.text)}
      />
      <Button
        title="Switch"
        color="orange"
        onPress={() => Actions.orangeScreen()}
      />
    </View>
  )
}

export default BlueScreen
