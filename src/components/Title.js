import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({children, numberOfLines = 2, size = 18}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{...styles.text, fontSize: size}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
  },
});

export default Title;
