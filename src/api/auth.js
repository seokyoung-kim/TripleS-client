import apiClient from './apiClient';

export const naverLogin = ({ token }) =>
  apiClient.post('/api/v1/auth/social/naver/login', { token });

export const googleLogin = () => apiClient.post('/auth/google/social/login');

export const naverLogout = () => apiClient.post('/api/auth/naver/logout');

export const googleLogout = () => apiClient.post('/api/auth/google/logout');

export const check = () => apiClient.get('/api/auth/check');

export const verify = () => apiClient.get('/api/v1/auth/verify');
