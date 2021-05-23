import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import BlockCard from './BlockCard';

const {width} = Dimensions.get('window');

const SmallCard = () => {
  return <BlockCard style={styles.container} imageStyle={styles.image} />;
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
});
export default SmallCard;
