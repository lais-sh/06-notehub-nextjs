'use client';

import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNote } from '@/lib/noteService';
import type { Note } from '@/types/note';
import css from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
    },
    onError: (error) => {
      console.error('❌ Failed to delete note:', error);
    },
  });

  if (notes.length === 0) return <p>No notes found.</p>;

  return (
    <ul className={css.list}>
      {notes.map(({ id, title, content, tag }) => (
        <li key={id} className={css.listItem}>
          <Link href={`/notes/${id}`} className={css.link}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.content}>{content}</p>
            <span className={css.tag}>{tag}</span>
          </Link>
          <button
            className={css.button}
            onClick={() => mutate(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
