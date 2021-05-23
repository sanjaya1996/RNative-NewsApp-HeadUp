import {
  BREAKING_NEWS_FAIL,
  BREAKING_NEWS_LOADING,
  BREAKING_NEWS_SUCCESS,
  ENTERTAINMENT_NEWS_FAIL,
  ENTERTAINMENT_NEWS_LOADING,
  ENTERTAINMENT_NEWS_SUCCESS,
  GENERAL_NEWS_FAIL,
  GENERAL_NEWS_LOADING,
  GENERAL_NEWS_SUCCESS,
  POLITICAL_NEWS_FAIL,
  POLITICAL_NEWS_LOADING,
  POLITICAL_NEWS_SUCCESS,
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
      return {loading: false, newsList: action.payload};
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
      return {loading: false, newsList: action.payload};
    case TECH_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const politicalNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POLITICAL_NEWS_LOADING:
      return {...state, loading: true};
    case POLITICAL_NEWS_SUCCESS:
      return {loading: false, newsList: action.payload};
    case POLITICAL_NEWS_FAIL:
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
      return {loading: false, newsList: action.payload};
    case ENTERTAINMENT_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export const generalNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_NEWS_LOADING:
      return {...state, loading: true};
    case GENERAL_NEWS_SUCCESS:
      return {loading: false, newsList: action.payload};
    case GENERAL_NEWS_FAIL:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
