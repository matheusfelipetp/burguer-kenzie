import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});
