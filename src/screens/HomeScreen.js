import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import HealthNews from '../components/HealthNews';
import Screen from '../components/common/Screen';
import TechNews from '../components/TechNews';
import * as newsActions from '../store/actions/newsActions';

import {Text} from 'react-native';
import LatestNews from '../components/LatestNews';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector(store => store);

  const breakingNewsState = state.breakingNews;
  const {loading, error, newsList} = breakingNewsState;

  const latestNewsState = state.latestNews;
  const {
    loading: loadingLatest,
    error: errorLatest,
    newsList: newsListLatest,
  } = latestNewsState;

  let remainingLatestNews = [...newsListLatest];
  remainingLatestNews.shift();

  const healthNewsState = state.latestNews;
  const {
    loading: loadingHealth,
    error: errorHealth,
    newsList: newsListHealth,
  } = healthNewsState;

  const techNewsState = state.techNews;
  const {
    loading: loadingTech,
    error: errorTech,
    newsList: newsListTech,
  } = techNewsState;

  const entertainmentNewsState = state.entertainmentNews;
  const {
    loading: loadingEntertain,
    error: errorEntertain,
    newsList: newsListEntertain,
  } = entertainmentNewsState;

  useEffect(() => {
    dispatch(newsActions.getBreakingNews());
    dispatch(newsActions.getLatestNews());
    dispatch(newsActions.getHealthNews());
    dispatch(newsActions.getTechNews());
    dispatch(newsActions.getEntertainmentNews());
  }, [dispatch]);

  return (
    <Screen>
      {loadingLatest ? (
        <Text>Loading...</Text>
      ) : errorLatest ? (
        <Text>{errorLatest}</Text>
      ) : newsListLatest.length > 0 ? (
        <FeaturedNews item={newsListLatest[0]} />
      ) : null}

      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <BreakingNews data={newsList} />
      )}

      {loadingHealth ? (
        <Text>Loading...</Text>
      ) : errorHealth ? (
        <Text>{errorHealth}</Text>
      ) : (
        <HealthNews data={newsListHealth} />
      )}

      {loadingTech ? (
        <Text>Loading...</Text>
      ) : errorTech ? (
        <Text>{errorTech}</Text>
      ) : (
        <TechNews data={newsListTech} />
      )}

      {loadingEntertain ? (
        <Text>Loading...</Text>
      ) : errorEntertain ? (
        <Text>{errorEntertain}</Text>
      ) : (
        <EntertainmentNews data={newsListEntertain} />
      )}

      {loadingLatest ? (
        <Text>Loading...</Text>
      ) : errorLatest ? (
        <Text>{errorLatest}</Text>
      ) : (
        <LatestNews data={remainingLatestNews} />
      )}
    </Screen>
  );
};

export default HomeScreen;
