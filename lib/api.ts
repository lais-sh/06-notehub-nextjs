import axios from 'axios';

const API_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!API_TOKEN) {
  throw new Error('Missing API token.');
}

export const http = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});
