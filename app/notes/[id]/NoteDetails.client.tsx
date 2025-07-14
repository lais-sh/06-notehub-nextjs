'use client';

import { Note } from '@/types/note';

interface Props {
  note: Note;
}

export default function NoteDetailsClient({ note }: Props) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
