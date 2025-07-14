import axios from 'axios';
import { Note, FetchNotesResponse } from '@/types/note';

const API_URL = 'https://notehub-public.goit.study/api/notes';
const AUTH_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const config = {
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

// Отримання списку нотаток
export async function fetchNotes(params: { page: number; search?: string }): Promise<FetchNotesResponse> {
  const { page, search = '' } = params;
  const response = await axios.get(`${API_URL}?page=${page}&search=${search}`, config);
  return response.data;
}

// Отримання однієї нотатки
export async function fetchNoteById(id: number): Promise<Note> {
  const response = await axios.get(`${API_URL}/${id}`, config);
  return response.data;
}
