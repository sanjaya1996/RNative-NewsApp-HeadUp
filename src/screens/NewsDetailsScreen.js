import React from 'react';
import {useSelector} from 'react-redux';
import NewsDetails from '../components/NewsDetails';
import Screen from '../components/Screen';

const NewsDetailsScreen = () => {
  const state = useSelector(store => store);

  const latestNewsState = state.latestNews;
  const {newsList} = latestNewsState;

  return (
    <Screen>
      <NewsDetails news={newsList[2]} />
    </Screen>
  );
};

export default NewsDetailsScreen;
