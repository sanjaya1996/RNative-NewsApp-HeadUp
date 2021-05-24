import axios from 'axios';
import {NEWS_API_KEY} from '@env';

const NEWS_API_ENDPOINT = 'https://newsapi.org';

const API = axios.create({baseURL: NEWS_API_ENDPOINT});

export const fetchLatestNews = () =>
  API.get(
    `/v2/everything?sources=bbc-news&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchBreakingNews = () =>
  API.get(
    `/v2/top-headlines?sources=abc-news&sortBy=popularity&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchTechNews = () =>
  API.get(
    `/v2/top-headlines?sortBy=popularity&category=technology&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchEntertainmentNews = () =>
  API.get(
    `/v2/top-headlines?country=au&sortBy=popularity&category=entertainment&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchHealthNews = () =>
  API.get(
    `/v2/top-headlines?sortBy=popularity&category=health&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );
