import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const Screen = ({children}) => {
  return <ScrollView style={styles.screen}>{children}</ScrollView>;
};

export const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: '#f7f3f3',
  },
});

export default Screen;
