import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

import HomeButtonTopNavigator from './homeButtonTopNavigator';

const Stack = createStackNavigator();

const RootNavigaion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeButtonTopNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigaion;
