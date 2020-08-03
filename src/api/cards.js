import apiClient from './apiClient';

export const getCard = () => apiClient.get('/api/v1/cards');

export default null;
