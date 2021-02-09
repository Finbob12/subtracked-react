import axios from 'axios';

// Provide deployed site base url for all requests
const subAPI = axios.create({
    baseURL: 'http://localhost:3001'
});

// Pass JWT in headers for every request
subAPI.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default subAPI;