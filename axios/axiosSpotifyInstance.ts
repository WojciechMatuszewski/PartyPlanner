import axios from 'axios';

const axiosSpotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/'
});

axios.defaults.headers.common['Authorization'] =
  'Bearer BQAT7djy6CcD5_hPikUwZM8UNdGlJo9PNSAC5GdHao4_Bnv6dikm0rRYBnoccAA61y2dIFGZcOs4u-F30dSSGIxqaWG9WevJFHFZTaOgqL-0QsIxO03RjYcRScTyT9BeS7HkhjoXpIj4KM5rJ78ZJa8PCbuJNoeRFm2XZJ2thkPYYN8t_l08MIK9fz0nqZI8GRtCTv_u';

export default axiosSpotifyInstance;
