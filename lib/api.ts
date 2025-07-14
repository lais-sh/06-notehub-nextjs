import axios from 'axios';
import type { Note, FetchNotesResponse } from '@/types/note';

const BASE_URL = 'https://notehub-public.goit.study/api';

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!TOKEN) {
  console.warn('⚠️ NOTEHUB API token is missing. Check your .env file.');
}

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export async function fetchNotes({ page, search = '' }: { page: number; search?: string }): Promise<FetchNotesResponse> {
  const params = {
    page,
    perPage: 12,
    ...(search.trim() !== '' && { search: search.trim() }),
  };

  const response = await axiosInstance.get<FetchNotesResponse>('/notes', { params });
  return response.data;
}

export async function fetchNoteById(id: number): Promise<Note> {
  const response = await axiosInstance.get<Note>(`/notes/${id}`);
  return response.data;
}
