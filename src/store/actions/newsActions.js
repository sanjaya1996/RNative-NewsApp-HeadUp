import {
  BREAKING_NEWS_FAIL,
  BREAKING_NEWS_LOADING,
  BREAKING_NEWS_SUCCESS,
  ENTERTAINMENT_NEWS_FAIL,
  ENTERTAINMENT_NEWS_LOADING,
  ENTERTAINMENT_NEWS_SUCCESS,
  HEALTH_NEWS_FAIL,
  HEALTH_NEWS_LOADING,
  HEALTH_NEWS_SUCCESS,
  LATEST_NEWS_FAIL,
  LATEST_NEWS_LOADING,
  LATEST_NEWS_SUCCESS,
  TECH_NEWS_FAIL,
  TECH_NEWS_LOADING,
  TECH_NEWS_SUCCESS,
} from '../constants/newsConstants';
import * as api from '../../api';
import {getApiErrorMessage} from '../../utils/errorMessage';

export const getLatestNews = () => {
  return async dispatch => {
    try {
      dispatch({type: LATEST_NEWS_LOADING});
      const {data} = await api.fetchLatestNews();
      dispatch({type: LATEST_NEWS_SUCCESS, payload: data});
    } catch (err) {
      dispatch({type: LATEST_NEWS_FAIL, payload: getApiErrorMessage(err)});
    }
  };
};

export const getBreakingNews = () => {
  return async dispatch => {
    try {
      dispatch({type: BREAKING_NEWS_LOADING});
      const {data} = await api.fetchBreakingNews();
      dispatch({type: BREAKING_NEWS_SUCCESS, payload: data});
    } catch (err) {
      dispatch({type: BREAKING_NEWS_FAIL, payload: getApiErrorMessage(err)});
    }
  };
};

export const getTechNews = () => {
  return async dispatch => {
    try {
      dispatch({type: TECH_NEWS_LOADING});
      const {data} = await api.fetchTechNews();
      dispatch({type: TECH_NEWS_SUCCESS, payload: data});
    } catch (err) {
      dispatch({type: TECH_NEWS_FAIL, payload: getApiErrorMessage(err)});
    }
  };
};

export const getHealthNews = () => {
  return async dispatch => {
    try {
      dispatch({type: HEALTH_NEWS_LOADING});
      const {data} = await api.fetchHealthNews();
      dispatch({type: HEALTH_NEWS_SUCCESS, payload: data});
    } catch (err) {
      dispatch({type: HEALTH_NEWS_FAIL, payload: getApiErrorMessage(err)});
    }
  };
};

export const getEntertainmentNews = () => {
  return async dispatch => {
    try {
      dispatch({type: ENTERTAINMENT_NEWS_LOADING});
      const {data} = await api.fetchEntertainmentNews();
      dispatch({type: ENTERTAINMENT_NEWS_SUCCESS, payload: data});
    } catch (err) {
      dispatch({
        type: ENTERTAINMENT_NEWS_FAIL,
        payload: getApiErrorMessage(err),
      });
    }
  };
};
