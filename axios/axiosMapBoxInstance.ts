import axios from 'axios';

const axiosMapBoxInstance = axios.create({
  baseURL: 'https://api.mapbox.com'
});
axiosMapBoxInstance.defaults.params = {};
axiosMapBoxInstance.defaults.params['access_token'] = process.env.MAPBOX_TOKEN;

export default axiosMapBoxInstance;
