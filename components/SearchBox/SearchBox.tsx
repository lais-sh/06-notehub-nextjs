'use client';

import { ChangeEvent, useState } from 'react';
import css from './SearchBox.module.css';

type SearchBoxProps = {
  initialQuery?: string;
  onSearch: (query: string) => void;
};

export default function SearchBox({ initialQuery = '', onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
    onSearch(newValue);
  };

  return (
    <input
      className={css.input}
      type="search"
      value={query}
      placeholder="Type to search notes..."
      onChange={handleChange}
      autoComplete="off"
    />
  );
}

