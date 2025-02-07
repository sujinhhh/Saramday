/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './src/screens/Home';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
