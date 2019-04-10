import axios from 'axios';

<<<<<<< HEAD
//const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://172.20.2.73:5000';
=======
// const BASE_URL = 'http://localhost:5000';
const BASE_URL = 'http://192.168.1.12:5000';
>>>>>>> 7a055a2d9fa1b59350a5133fa1fc40cf856606e6

export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');

const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api`,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const token = getToken();
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosInstance;