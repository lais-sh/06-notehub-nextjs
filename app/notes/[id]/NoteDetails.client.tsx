'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import type { Note } from '@/types/note';

interface Props {
  noteId: number;
}

export default function NoteDetailsClient({ noteId }: Props) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !note) {
    return <p style={{ color: 'red' }}>Failed to load note</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p><strong>Tag:</strong> {note.tag}</p>
      <p><em>Created at: {new Date(note.createdAt).toLocaleString()}</em></p>
    </div>
  );
}
