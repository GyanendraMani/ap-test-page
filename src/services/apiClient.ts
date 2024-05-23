import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://api.acharyaprashant.org/v2/legacy`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
