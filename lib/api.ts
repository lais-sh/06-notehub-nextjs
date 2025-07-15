import axios from 'axios';
import { Note, NewNote } from '@/types/note';

const API_URL = 'https://notehub-public.goit.study/api/notes';
const AUTH_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const config = {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

export async function fetchNotes(params: { page: number; search?: string }) {
  const { page, search = '' } = params;

  const response = await axios.get(`${API_URL}`, {
    headers: config.headers,
    params: { page, search },
  });

  return response.data;
}

export async function fetchNoteById(id: number) {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: config.headers,
  });

  return response.data;
}

export async function createNote(newNote: NewNote) {
  const response = await axios.post(`${API_URL}`, newNote, {
    headers: config.headers,
  });

  return response.data;
}

export async function deleteNote(id: number) {
  await axios.delete(`${API_URL}/${id}`, {
    headers: config.headers,
  });
}
