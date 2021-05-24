import * as React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'HeadUp News App'}}
      />
      <Stack.Screen
        name="NewsDetails"
        component={NewsDetailsScreen}
        options={{title: 'News Details'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
