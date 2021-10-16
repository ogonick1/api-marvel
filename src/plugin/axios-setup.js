import axios from 'axios';
import config from '../config';

export default function axiosSetup() {
  axios.interceptors.request.use(
    (axiosConfig) => {
      const newConfig = { ...axiosConfig };
      newConfig.params = {
        ...(newConfig.params || {}),
        apikey: config.marvelApiKey,
      }

      newConfig.baseURL = config.baseUrl || '/';

      return newConfig;
    },
    (err) => Promise.reject(err),
  );

  axios.interceptors.response.use(
    (response) => response.data.data,
    async (error) => {
      return Promise.reject(error);
    },
  );
}
