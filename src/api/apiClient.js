import axios from 'axios';

const host =
  process.env.NODE_ENV === 'development'
    ? '/'
    : process.env.REACT_APP_API_HOST || '/';

const apiClient = axios.create({
  baseURL: host,
  withCredentials: false,
});

export default apiClient;
