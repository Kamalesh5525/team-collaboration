import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust port and URL as needed
  });

export default api;
