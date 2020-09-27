import apiClient from './apiClient';

export const getCard = async (next) => {
  if (next) {
    const data = await apiClient.get(`/api/v1/cards?next=${next}`);
    console.log('==>', data);
    return data;
  }
  return await apiClient.get('/api/v1/cards');
};

export const getCardPlatform = ({ platform }) =>
  apiClient.get(`/api/v1/cards/platform/${platform}`);

export const getCardWriter = ({ writer }) =>
  apiClient.get(`/api/v1/cards/writer/${writer}`);

export default null;
