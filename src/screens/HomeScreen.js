import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import HealthNews from '../components/HealthNews';
import Screen from '../components/Screen';
import TechNews from '../components/TechNews';
import * as newsActions from '../store/actions/newsActions';

<<<<<<< HEAD
import NEWS_LIST from '../data/dummy-data';
import {ScrollView, Text} from 'react-native';
=======
import {Text} from 'react-native';
import LatestNews from '../components/LatestNews';
>>>>>>> af93a25a66ba82090d3baa16a07eddc6ae1940b6

const HomeScreen = () => {
  const dispatch = useDispatch();

  const state = useSelector(store => store);

<<<<<<< HEAD
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
=======
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
>>>>>>> af93a25a66ba82090d3baa16a07eddc6ae1940b6
  const {
    loading: loadingHealth,
    error: errorHealth,
    newsList: newsListHealth,
<<<<<<< HEAD
=======
  } = healthNewsState;

  const techNewsState = state.techNews;
  const {
    loading: loadingTech,
    error: errorTech,
    newsList: newsListTech,
>>>>>>> af93a25a66ba82090d3baa16a07eddc6ae1940b6
  } = techNewsState;

  const entertainmentNewsState = state.entertainmentNews;
  const {
<<<<<<< HEAD
    loading: loadingEntertainment,
    error: errorEntertainment,
    newsList: newsListEntertainment,
  } = techNewsState;
=======
    loading: loadingEntertain,
    error: errorEntertain,
    newsList: newsListEntertain,
  } = entertainmentNewsState;
>>>>>>> af93a25a66ba82090d3baa16a07eddc6ae1940b6

  useEffect(() => {
    dispatch(newsActions.getLatestNews());
    dispatch(newsActions.getBreakingNews());
<<<<<<< HEAD
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
=======
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
      ) : (
        <FeaturedNews item={newsListLatest[0]} />
      )}

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
>>>>>>> af93a25a66ba82090d3baa16a07eddc6ae1940b6
    </Screen>
  );
};

export default HomeScreen;
