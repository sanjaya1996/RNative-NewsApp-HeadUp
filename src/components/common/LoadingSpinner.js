import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingSpinner = props => {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size={props.size || 'large'} color="#4e4d4d" />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;
