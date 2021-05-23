import React from 'react';
import {StyleSheet} from 'react-native';
import BlockCard from './BlockCard';

const FeaturedNews = ({item}) => {
  return <BlockCard style={styles.container} item={item} />;
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default FeaturedNews;
