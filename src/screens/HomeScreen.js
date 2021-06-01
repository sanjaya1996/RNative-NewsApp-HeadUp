import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import BreakingNews from '../components/BreakingNews';
import EntertainmentNews from '../components/EntertainmentNews';
import FeaturedNews from '../components/FeaturedNews';
import HealthNews from '../components/HealthNews';
import {styles as screenStyles} from '../components/common/Screen';
import TechNews from '../components/TechNews';
import * as newsActions from '../store/actions/newsActions';

import LatestNews from '../components/LatestNews';

const HomeScreen = props => {
  const [isRefreshing, setIsRefreshing] = useState(false);
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

  const loadNews = useCallback(async () => {
    dispatch(newsActions.getBreakingNews());
    dispatch(newsActions.getLatestNews());
    dispatch(newsActions.getHealthNews());
    dispatch(newsActions.getTechNews());
    dispatch(newsActions.getEntertainmentNews());
  }, [dispatch]);

  useEffect(() => {
    loadNews();
  }, [dispatch, loadNews]);

  useEffect(() => {
    if (
      !loading &&
      !loadingLatest &&
      !loadingHealth &&
      !loadingTech &&
      !loadingEntertain
    ) {
      setIsRefreshing(false);
    }
  }, [loading, loadingLatest, loadingHealth, loadingTech, loadingEntertain]);

  const onRefresh = () => {
    setIsRefreshing(true);
    loadNews();
  };

  return (
    <ScrollView
      style={styles.screen}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      <FeaturedNews
        item={newsListLatest[0]}
        loading={loadingLatest && !isRefreshing}
        error={errorLatest}
      />

      <BreakingNews
        data={newsList}
        loading={loading && !isRefreshing}
        error={error}
      />

      <HealthNews
        data={newsListHealth}
        loading={loadingHealth && !isRefreshing}
        error={errorHealth}
      />

      <TechNews
        data={newsListTech}
        loading={loadingTech && !isRefreshing}
        error={errorTech}
      />

      <EntertainmentNews
        data={newsListEntertain}
        loading={loadingEntertain && !isRefreshing}
        error={errorEntertain}
      />

      <LatestNews
        data={remainingLatestNews}
        loading={loadingLatest && !isRefreshing}
        error={errorLatest}
      />
    </ScrollView>
  );
};

const styles = screenStyles;

export default HomeScreen;
