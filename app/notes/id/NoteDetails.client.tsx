'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import styles from './NoteDetails.module.css';

interface Props {
  id: number;
}

export default function NoteDetailsClient({ id }: Props) {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={styles.content}>{note.content}</p>
        <p className={styles.date}>{new Date(note.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
