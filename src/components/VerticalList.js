import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Title from './Title';
import FlatCard from './FlatCard';

const VerticalList = ({title, data, loading}) => {
  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        {loading ? (
          <Text>Loading...</Text>
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
