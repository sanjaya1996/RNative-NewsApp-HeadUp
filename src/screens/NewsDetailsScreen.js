import React from 'react';
import NewsDetails from '../components/NewsDetails';
import Screen from '../components/common/Screen';
import HorizontalList from '../components/lists/HorizontalList';
import {useSelector} from 'react-redux';

const NewsDetailsScreen = props => {
  const {item} = props.route.params;
  const category = item.category;

  const state = useSelector(store => store);

  let newsList = [];

  switch (category) {
    case 'breaking':
      newsList = state.breakingNews.newsList;
      break;
    case 'tech':
      newsList = state.techNews.newsList;
      break;
    case 'health':
      newsList = state.healthNews.newsList;
      break;
    case 'entertainment':
      newsList = state.entertainmentNews.newsList;
      break;
    case 'latest':
      newsList = state.latestNews.newsList;
      break;
    default:
      newsList = state.latestNews.newsList;
      break;
  }

  console.log(newsList);

  const relatedNews = newsList.filter(n => n.id !== item.id);

  return (
    <Screen>
      <NewsDetails news={item} />
      <HorizontalList title="Related News" data={relatedNews} />
    </Screen>
  );
};

export default NewsDetailsScreen;
