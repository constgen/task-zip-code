import { get } from './http.service';

export const API_URL = 'https://api.zippopotam.us/us';

export default {
  get(url) {
    return get(url).then(response => response.json());
  },
  getState(code) {
    return this.get(`${API_URL}/${code}`).then((data) => {
      if (!data.places[0]) throw new Error(`There is no such state for ${code} zipcode`);
      data.places[0]['post code'] = data['post code']; // eslint-disable-line no-param-reassign
      return data.places[0];
    });
  },
};

