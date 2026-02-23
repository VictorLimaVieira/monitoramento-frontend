import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-nest-estudo.onrender.com',
});