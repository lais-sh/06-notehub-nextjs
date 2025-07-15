'use client';

import { useState } from 'react';
import NoteModal from '@/components/NoteModal/NoteModal';
import { Note } from '@/types/note';

interface Props {
  note: Note;
}

export default function NoteDetailsClient({ note }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <NoteModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </NoteModal>
  );
}

