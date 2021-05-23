import React from 'react';
import {StyleSheet, View} from 'react-native';

import Title from './Title';
import FlatCard from './FlatCard';

const VerticalList = ({title, data}) => {
  return (
    <View>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        {data.map(item => (
          <FlatCard key={item.id} item={item} />
        ))}
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
