import axios from 'axios';

const NEWS_API_KEY = '75c31129c2484f8d9361e50cdd234c88';
const NEWS_API_ENDPOINT = 'https://newsapi.org';

const API = axios.create({baseURL: NEWS_API_ENDPOINT});

export const fetchLatestNews = () =>
  API.get(
    `/v2/everything?sources=bbc-news&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchBreakingNews = () =>
  API.get(
    `/v2/top-headlines?sortBy=popularity&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchTechNews = () =>
  API.get(
    `/v2/top-headlines?sortBy=popularity&category=technology&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchEntertainmentNews = () =>
  API.get(
    `/v2/top-headlines?sortBy=popularity&category=entertainment&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );

export const fetchHealthNews = () =>
  API.get(
    `/v2/top-headlines?sortBy=popularity&category=health&pageSize=10&apiKey=${NEWS_API_KEY}`,
  );
