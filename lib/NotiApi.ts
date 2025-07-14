import { http } from './api';
import type { Note, NewNoteData, FetchNotesResponse } from '@/types/note';

interface QueryOptions {
  page?: number;
  search?: string;
}

export async function loadNotes({ page = 1, search = '' }: QueryOptions = {}): Promise<FetchNotesResponse> {
  const query = {
    page,
    perPage: 12,
    ...(search.trim() && { search: search.trim() }),
  };

  try {
    const { data } = await http.get<FetchNotesResponse>('/notes', { params: query });
    return data;
  } catch (error) {
    console.warn('⚠️ Failed to load notes:', error);
    throw new Error('Could not retrieve notes.');
  }
}

export async function getNote(noteId: number): Promise<Note> {
  try {
    const { data } = await http.get<Note>(`/notes/${noteId}`);
    return data;
  } catch {
    throw new Error(`Unable to fetch note with ID ${noteId}`);
  }
}

export async function createNoteEntry(noteData: NewNoteData): Promise<Note> {
  try {
    const { data } = await http.post<Note>('/notes', noteData);
    return data;
  } catch {
    throw new Error('Failed to create a new note.');
  }
}

export async function deleteNoteEntry(noteId: number): Promise<Note> {
  try {
    const { data } = await http.delete<Note>(`/notes/${noteId}`);
    return data;
  } catch {
    throw new Error(`Error removing note with ID ${noteId}`);
  }
}
