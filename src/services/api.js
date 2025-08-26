import axios from "axios";

// Criação da instância do Axios
export const api = axios.create({
    baseURL: 'http://localhost:3001',
});

// Interceptor para incluir o token de autenticação nas requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    // Manipulação de erros do interceptor
    return Promise.reject(error);
});

// Exemplo de requisição para obter categorias
const fetchCategories = async () => {
    try {
        const response = await api.get('/categories');
        console.log('Categorias:', response.data);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error.response ? error.response.data : error.message);
    }
};

// Chamada da função para buscar categorias
fetchCategories();