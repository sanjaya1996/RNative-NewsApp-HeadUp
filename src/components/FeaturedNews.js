import React from 'react';
import {StyleSheet} from 'react-native';
import BlockCard from './BlockCard';

const FeaturedNews = () => {
  return <BlockCard style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default FeaturedNews;
