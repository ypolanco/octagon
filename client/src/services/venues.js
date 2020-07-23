import api from './api-helper';

export const getAllVenues = async () => {
  const resp = await api.get('/venues');
  return resp.data;
}

export const getOneVenue = async (id) => {
  const resp = await api.get(`/venues/${id}`)
  return resp.data
}