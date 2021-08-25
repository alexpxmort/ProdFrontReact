
import axios from 'axios';

export const BASE_URL = 'http://localhost:3333/';

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => status < 500,
});
