import React from 'react';
import {Text, StyleSheet} from 'react-native';
import BlockCard from './BlockCard';

const FeaturedNews = ({item, loading, error}) => {
  return loading ? (
    <Text>Loading</Text>
  ) : error ? (
    <Text>{error}</Text>
  ) : (
    <BlockCard style={styles.container} item={item} />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default FeaturedNews;
