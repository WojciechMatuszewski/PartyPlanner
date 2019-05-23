import axios from 'axios';

const axiosMapBoxInstance = axios.create({
  baseURL: 'https://api.mapbox.com'
});

axiosMapBoxInstance.defaults.params = {};
axiosMapBoxInstance.defaults.params['access_token'] =
  process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default axiosMapBoxInstance;
