import React from 'react';
import {Text, StyleSheet} from 'react-native';
import BlockCard from './cards/BlockCard';

const FeaturedNews = ({item, loading, error}) => {
  return loading ? null : error ? (
    <Text>{error}</Text>
  ) : !item ? null : (
    <BlockCard style={styles.container} item={item} />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default FeaturedNews;
