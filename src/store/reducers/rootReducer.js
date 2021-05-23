import {combineReducers} from 'redux';
import {
  breakingNewsReducer,
  entertainmentNewsReducer,
  latestNewsReducer,
  healthNewsReducer,
  techNewsReducer,
} from './newsReducer';

const RootReducer = combineReducers({
  breakingNews: breakingNewsReducer,
  techNews: techNewsReducer,
  healthNews: healthNewsReducer,
  latestNews: latestNewsReducer,
  entertainmentNews: entertainmentNewsReducer,
});

export default RootReducer;
