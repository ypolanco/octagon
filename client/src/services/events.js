import api from './api-helper';

export const getAllEvents = async () => {
  const resp = await api.get('/events');
  return resp.data;
}