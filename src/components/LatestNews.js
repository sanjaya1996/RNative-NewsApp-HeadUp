import React from 'react';
import {StyleSheet, View} from 'react-native';
import BlockCard from './cards/BlockCard';
import Title from './common/Title';

const LatestNews = ({data}) => {
  return (
    <>
      <Title size={20}>Latest News</Title>
      <View style={styles.listStyle}>
        {data.map(item => (
          <BlockCard key={item.id} item={item} style={styles.cardContainer} />
        ))}
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
