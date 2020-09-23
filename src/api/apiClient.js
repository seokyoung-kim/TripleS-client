import axios from 'axios';

const host =
  process.env.NODE_ENV === 'development'
    ? '/'
    : process.env.REACT_APP_API_HOST || '/';

const apiClient = axios.create({
  baseURL: host,
  withCredentials: false,
});

setInterval(function () {
  apiClient.get('/api/v1/cards');
}, 1200000);

export default apiClient;
