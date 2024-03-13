import axios from 'axios';

    // Base da Comunicação da API
    const api = axios.create({
        baseURL: "http://192.168.0.33:3010/",
    })

    api.interceptors.request.use(
        (config) => {
           const token = localStorage.getItem('accessToken');
           if (token) {
             config.headers.Authorization = `Bearer ${token}`;
           }
           return config;
        },
        (error) => {
            Promise.reject(error)
        }
    );
export default api;