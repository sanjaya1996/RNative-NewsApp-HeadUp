import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BreakingNews from '../components/BreakingNews';
import FeaturedNews from '../components/FeaturedNews';
import Screen from '../components/Screen';
import TechNews from '../components/TechNews';

import NEWS_LIST from '../data/dummy-data';

const HomeScreen = () => {
  const breakingNews = NEWS_LIST.filter(
    item => item.category === 'breaking-news',
  );

  const techNews = NEWS_LIST.filter(item => item.category === 'tech');
  return (
    <Screen>
      <FeaturedNews item={NEWS_LIST[0]} />
      <BreakingNews data={breakingNews} />
      <TechNews data={techNews} />
    </Screen>
  );
};

export default HomeScreen;
