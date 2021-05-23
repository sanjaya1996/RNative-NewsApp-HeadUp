import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Title from './Title';
import SubTitle from './SubTitle';

const BlockCard = ({style, imageStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../assets/test.png')}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.contentContainer}>
        <Title>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Title>
        <SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
