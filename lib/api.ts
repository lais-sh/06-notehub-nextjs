import axios from 'axios';
import type { Note, NewNoteData, FetchNotesResponse } from '@/types/note';

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

interface QueryParams {
  page?: number;
  search?: string;
}

export async function fetchNotes({ page = 1, search = '' }: QueryParams = {}): Promise<FetchNotesResponse> {
  const params = {
    page,
    perPage: 12,
    ...(search.trim() && { search: search.trim() }),
  };

  const { data } = await http.get<FetchNotesResponse>('/notes', { params });
  return data;
}

export async function fetchNoteById(noteId: number): Promise<Note> {
  const { data } = await http.get<Note>(`/notes/${noteId}`);
  return data;
}

export async function createNote(noteData: NewNoteData): Promise<Note> {
  const { data } = await http.post<Note>('/notes', noteData);
  return data;
}

export async function deleteNote(noteId: number): Promise<Note> {
  const { data } = await http.delete<Note>(`/notes/${noteId}`);
  return data;
}
