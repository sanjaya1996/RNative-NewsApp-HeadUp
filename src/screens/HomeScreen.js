import React from 'react';
import {StyleSheet, View} from 'react-native';
import FeaturedNews from '../components/FeaturedNews';
import SmallCard from '../components/SmallCard';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <FeaturedNews />
      <SmallCard />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f7f3f3',
  },
});

export default HomeScreen;
