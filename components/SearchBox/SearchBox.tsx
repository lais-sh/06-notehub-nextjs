'use client';

import { useState } from 'react';
import styles from './SearchBox.module.css';

interface Props {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(search.trim());
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}
