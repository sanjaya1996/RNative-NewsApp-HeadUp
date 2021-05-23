/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useColorScheme, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
    </Provider>
  );
};

export default App;
