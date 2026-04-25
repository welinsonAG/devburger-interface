import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://devburger-api-utsz.onrender.com',
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');

  if (userData) {
    const parsed = JSON.parse(userData);

  if (parsed.token)
      config.headers.Authorization = `Bearer ${parsed.token}`;
    
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('devburger:userData');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  },
);
