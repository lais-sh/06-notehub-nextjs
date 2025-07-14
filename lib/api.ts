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

export async function fetchNotes(params: { page: number }): Promise<FetchNotesResponse> {
  const response = await axios.get<FetchNotesResponse>(API_URL, {
    ...config,
    params,
  });
  return response.data;
}

export async function fetchNoteById(id: number): Promise<Note> {
  const response = await axios.get<Note>(`${API_URL}/${id}`, config);
  return response.data;
}
