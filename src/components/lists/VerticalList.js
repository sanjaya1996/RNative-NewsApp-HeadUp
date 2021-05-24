import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Title from '../common/Title';
import FlatCard from '../cards/FlatCard';
import LoadingSpinner from '../common/LoadingSpinner';

const VerticalList = ({title, data, loading, error}) => {
  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          data.map(item => <FlatCard key={item.id} item={item} />)
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});

export default VerticalList;
