import News from '../../models/News';
import {
  BREAKING_NEWS_FAIL,
  BREAKING_NEWS_LOADING,
  BREAKING_NEWS_SUCCESS,
  ENTERTAINMENT_NEWS_FAIL,
  ENTERTAINMENT_NEWS_LOADING,
  ENTERTAINMENT_NEWS_SUCCESS,
  LATEST_NEWS_FAIL,
  LATEST_NEWS_LOADING,
  LATEST_NEWS_SUCCESS,
  HEALTH_NEWS_FAIL,
  HEALTH_NEWS_LOADING,
  HEALTH_NEWS_SUCCESS,
  TECH_NEWS_FAIL,
  TECH_NEWS_LOADING,
  TECH_NEWS_SUCCESS,
} from '../constants/newsConstants';

const initialState = {
  loading: false,
  newsList: [],
};

export const breakingNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case BREAKING_NEWS_LOADING:
      return {...state, loading: true};
    case BREAKING_NEWS_SUCCESS:
      return {
        loading: false,
        newsList: createNewsList(action.payload.articles),
      };
    case BREAKING_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const techNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TECH_NEWS_LOADING:
      return {...state, loading: true};
    case TECH_NEWS_SUCCESS:
      return {
        loading: false,
        newsList: createNewsList(action.payload.articles),
      };
    case TECH_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const healthNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HEALTH_NEWS_LOADING:
      return {...state, loading: true};
    case HEALTH_NEWS_SUCCESS:
      return {
        loading: false,
        newsList: createNewsList(action.payload.articles),
      };
    case HEALTH_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const entertainmentNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTERTAINMENT_NEWS_LOADING:
      return {...state, loading: true};
    case ENTERTAINMENT_NEWS_SUCCESS:
      return {
        loading: false,
        newsList: createNewsList(action.payload.articles),
      };
    case ENTERTAINMENT_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const latestNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_NEWS_LOADING:
      return {...state, loading: true};
    case LATEST_NEWS_SUCCESS:
      return {
        loading: false,
        newsList: createNewsList(action.payload.articles),
      };
    case LATEST_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

// UTILS FUNCTIONS
function createNewsList(newsList) {
  let list = [];
  newsList.forEach(n => {
    const newNews = new News(
      Date.now().toString() + Math.random(),
      n.title,
      n.description,
      n.content,
      n.urlToImage,
      n.author,
      n.publishedAt,
    );

    list.push(newNews);
  });

  return list;
}
