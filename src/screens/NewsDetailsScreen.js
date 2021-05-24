import React from 'react';
import NewsDetails from '../components/NewsDetails';
import Screen from '../components/common/Screen';

const NewsDetailsScreen = props => {
  const news = props.route.params.item;

  return (
    <Screen>
      <NewsDetails news={news} />
    </Screen>
  );
};

export default NewsDetailsScreen;
