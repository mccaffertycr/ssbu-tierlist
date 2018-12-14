import axios from 'axios';

export default {
  getAllTierlists: () => axios.get('/api/tierlist'),
  getNewTierlists: () => axios.get('/api/tierlist/new'),
  getBestTierlists: () => axios.get('/api/tierlist/top'),
  getAvgTierlist: () => axios.get('/api/tierlist/avg'),
  getTierlist: id => axios.get(`/api/tierlist/${id}`),
  upvoteTierlist: id => axios.put(`/api/tierlist/${id}`),
  saveTierlist: tierlist => axios.post(`/api/tierlist`, tierlist),
};
