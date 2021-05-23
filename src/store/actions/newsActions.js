import {
  BREAKING_NEWS_FAIL,
  BREAKING_NEWS_LOADING,
  BREAKING_NEWS_SUCCESS,
  TECH_NEWS_FAIL,
  TECH_NEWS_LOADING,
  TECH_NEWS_SUCCESS,
} from '../constants/newsConstants';
import * as api from '../../api';
import {getApiErrorMessage} from '../../utils/errorMessage';

export const getBreakingNews = () => {
  return async dispatch => {
    try {
      dispatch({type: BREAKING_NEWS_LOADING});
      const {data} = await api.allNews();
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
      const {data} = await api.allNews();
      dispatch({type: TECH_NEWS_SUCCESS, payload: data});
    } catch (err) {
      dispatch({type: TECH_NEWS_FAIL, payload: getApiErrorMessage(err)});
    }
  };
};
