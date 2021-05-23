import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import HealthNews from '../components/HealthNews';
import Screen from '../components/Screen';
import TechNews from '../components/TechNews';
import * as newsActions from '../store/actions/newsActions';

import NEWS_LIST from '../data/dummy-data';
import {ScrollView, Text} from 'react-native';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector(store => store);

  const latestNewsState = state.latestNews;
  const {
    loading: loadingLatest,
    error: errorLatest,
    newsList: newsListLatest,
  } = latestNewsState;

  const breakingNewsState = state.breakingNews;
  const {loading, error, newsList} = breakingNewsState;

  const techNewsState = state.techNews;
  const {
    loading: loadingTech,
    error: errorTech,
    newsList: newsListTech,
  } = techNewsState;

  const healthNewsState = state.healthNews;
  const {
    loading: loadingHealth,
    error: errorHealth,
    newsList: newsListHealth,
  } = techNewsState;

  const entertainmentNewsState = state.entertainmentNews;
  const {
    loading: loadingEntertainment,
    error: errorEntertainment,
    newsList: newsListEntertainment,
  } = techNewsState;

  useEffect(() => {
    dispatch(newsActions.getLatestNews());
    dispatch(newsActions.getBreakingNews());
    dispatch(newsActions.getTechNews());
    dispatch(newsActions.getHealthNews());
    dispatch(newsActions.getEntertainmentNews());
  }, [dispatch]);

  return (
    <Screen>
      <FeaturedNews
        item={NEWS_LIST[0]}
        loading={loadingLatest}
        error={errorLatest}
      />
      <BreakingNews data={NEWS_LIST} loading={loadingLatest} />
      <HealthNews data={NEWS_LIST} loading={loadingHealth} />
      <TechNews data={NEWS_LIST} loading={loadingTech} />
      <EntertainmentNews data={NEWS_LIST} loading={loadingEntertainment} />
    </Screen>
  );
};

export default HomeScreen;
