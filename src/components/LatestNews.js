import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BlockCard from './cards/BlockCard';
import LoadingSpinner from './common/LoadingSpinner';
import Title from './common/Title';

const LatestNews = ({data, loading, error}) => {
  return (
    <>
      <Title size={20}>Latest News</Title>
      <View style={styles.listStyle}>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          data.map(item => (
            <BlockCard key={item.id} item={item} style={styles.cardContainer} />
          ))
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
  cardContainer: {
    marginVertical: 5,
  },
});

export default LatestNews;
