import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import Title from '../common/Title';
import SmallCard from '../cards/SmallCard';
import LoadingSpinner from '../common/LoadingSpinner';

const HorizontalList = ({title, data, loading, error}) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <SmallCard item={item} />}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});

export default HorizontalList;
