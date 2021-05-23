import {combineReducers} from 'redux';
import {
  breakingNewsReducer,
  generalNewsReducer,
  politicalNewsReducer,
  techNewsReducer,
} from './newsReducer';

const RootReducer = combineReducers({
  breakingNews: breakingNewsReducer,
  techNews: techNewsReducer,
  politicalNews: politicalNewsReducer,
  generalNews: generalNewsReducer,
});

export default RootReducer;
