import { get } from './http.service';

export const API_URL = 'https://api.zippopotam.us/us';

export default {
  get(url) {
    return get(url).then(response => response.json());
  },
  getState(code) {
    return this.get(`${API_URL}/${code}`).then(data => data.places[0]);
  },
};

