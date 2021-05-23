import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Title from './Title';
import SubTitle from './SubTitle';

const FlatCard = ({item}) => {
  const {title, description, urlToImage} = item;
  return (
    <View style={styles.container}>
      <Image source={{uri: urlToImage}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: '100%',
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});

export default FlatCard;
