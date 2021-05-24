import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import HealthNews from '../components/HealthNews';
import Screen from '../components/common/Screen';
import TechNews from '../components/TechNews';
import * as newsActions from '../store/actions/newsActions';

import LatestNews from '../components/LatestNews';

const HomeScreen = props => {
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
      <FeaturedNews
        item={newsListLatest[0]}
        loading={loadingLatest}
        error={errorLatest}
      />

      <BreakingNews data={newsList} loading={loading} error={error} />

      <HealthNews
        data={newsListHealth}
        loading={loadingHealth}
        error={errorHealth}
      />

      <TechNews data={newsListTech} loading={loadingTech} error={errorTech} />

      <EntertainmentNews
        data={newsListEntertain}
        loading={loadingEntertain}
        error={errorEntertain}
      />

      <LatestNews
        data={remainingLatestNews}
        loading={loadingLatest}
        error={errorLatest}
      />
    </Screen>
  );
};

export default HomeScreen;
