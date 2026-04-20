import axios from "axios";



export const api = axios.create({
  baseURL: 'https://devburger-api-5t5d.onrender.com',
});

// Interceptor para incluir o token de autenticação nas requisições
api.interceptors.request.use(
  (config) => {
    try {
      const userData = localStorage.getItem("devburger:userData");

      if (userData) {
        const { token } = JSON.parse(userData);

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      localStorage.removeItem("devburger:userData");
    }

    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem("devburger:userData");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

