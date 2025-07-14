'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import styles from './NotesPage.module.css';

export default function NotesClient() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['notes-1'],
    queryFn: () => fetchNotes({ page: 1 }),
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError) return <p>Could not fetch the list of notes. {String(error)}</p>;
  if (!data) return <p>Something went wrong.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Notes</h1>
      <NoteList notes={data.results} />
    </div>
  );
}
