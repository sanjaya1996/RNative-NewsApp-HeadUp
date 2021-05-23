import axios from 'axios';

const NEWS_API_KEY = '75c31129c2484f8d9361e50cdd234c88';
const NEWS_API_ENDPOINT = 'https://newsapi.org';

const API = axios.create({baseURL: NEWS_API_ENDPOINT});

export const allNews = () =>
  API.get(`/v2/everything?q=bitcoin&apiKey=${NEWS_API_KEY}`);
