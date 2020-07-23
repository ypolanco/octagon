import api from './api-helper';

export const getAllEvents = async () => {
  const resp = await api.get('/events');
  return resp.data;
}

export const getOneEvent = async (id) => {
  const resp = await api.get(`/events/${id}`)
  return resp.data
}