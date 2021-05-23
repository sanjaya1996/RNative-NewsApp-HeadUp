import React from 'react';
import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import PoliticalNews from '../components/PoliticalNews';
import Screen from '../components/Screen';
import TechNews from '../components/TechNews';

import NEWS_LIST from '../data/dummy-data';

const HomeScreen = () => {
  const breakingNews = NEWS_LIST.filter(
    item => item.category === 'breaking-news',
  );

  const techNews = NEWS_LIST.filter(item => item.category === 'tech');
  const politicalNews = NEWS_LIST.filter(item => item.category === 'political');
  const entertainmentNews = NEWS_LIST.filter(
    item => item.category === 'entertainment',
  );
  return (
    <Screen>
      <FeaturedNews item={NEWS_LIST[0]} />
      <BreakingNews data={breakingNews} />
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
};

export default HomeScreen;
