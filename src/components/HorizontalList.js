import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import Title from './Title';
import SmallCard from './SmallCard';

const HorizontalList = ({title, data, loading}) => {
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        {loading ? (
          <Text>Loading...</Text>
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
