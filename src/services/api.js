import axios from 'axios';

const api = axios.create({
    baseURL : 'http://192.168.100.85:3000',
    timeout: 10000,
    withCredentials: true,
    transformRquest: [(data) => JSON.stringify(data.data)],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default api;   