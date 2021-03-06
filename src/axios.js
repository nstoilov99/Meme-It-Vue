import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9999/api/',
    withCredentials: true
});

// Add token to every request
instance.interceptors.request.use(config => {
    return config; 
});

export default instance;