'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import styles from './NotesPage.module.css';

export default function NotesClient() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isFetching, error } = useQuery({
    queryKey: ['noteItems', query, pageNumber],
    queryFn: () => fetchNotes({ search: query, page: pageNumber }),
  });

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <input
          className={styles.search}
          type="text"
          placeholder="Find notes"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPageNumber(1);
          }}
        />
        <span className={styles.pageInfo}>
          Page {pageNumber} of {data?.totalPages ?? 1}
        </span>
      </header>

      {isFetching && <p>Loading...</p>}
      {error && <p>Error fetching notes</p>}

      <section>
        {data?.notes?.length ? (
          <NoteList notes={data.notes} />
        ) : (
          <p>No results found.</p>
        )}
      </section>

      <footer className={styles.pagination}>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
        >
          Back
        </button>

        <button
          disabled={pageNumber >= (data?.totalPages ?? 1)}
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          Next
        </button>
      </footer>
    </div>
  );
}
