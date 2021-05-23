import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import PoliticalNews from '../components/PoliticalNews';
import Screen from '../components/Screen';
import TechNews from '../components/TechNews';
import * as newsActions from '../store/actions/newsActions';

import NEWS_LIST from '../data/dummy-data';
import {Text} from 'react-native';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector(store => store);
  const breakingNewsState = state.breakingNews;

  const {loading, error, newsList} = breakingNewsState;

  useEffect(() => {
    dispatch(newsActions.getBreakingNews());
  }, [dispatch]);

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
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <BreakingNews data={newsList.articles} />
      )}
      <PoliticalNews data={politicalNews} />
      <TechNews data={techNews} />
      <EntertainmentNews data={entertainmentNews} />
    </Screen>
  );
};

export default HomeScreen;
