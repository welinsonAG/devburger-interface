import axios from "axios";

export async function putUserData(user) {
  return api.put(`/users/${user.id}`, user);
}

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

// Interceptor para incluir o token de autenticação nas requisições
api.interceptors.request.use(
  (config) => {
    const userData = localStorage.getItem("devburger:userData");

    const token = userData && JSON.parse(userData).token;

    if (token){ 
      config.headers.Authorization = `Bearer ${token}`;
      console.log("✅ Enviando token:", token);
    } else {
      console.log("❌ Nenhum token encontrado");
    
  }
    return config;
  },
 (error) => {  
   return Promise.reject(error);
 }
);

