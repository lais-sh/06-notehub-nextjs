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
    <>
      {isOpen && (
        <NoteModal
          title={note.title}
          content={note.content}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

