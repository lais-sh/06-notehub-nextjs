'use client';

import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';

import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';
import NoteModal from '@/components/NoteModal/NoteModal';
import NoteForm from '@/components/NoteForm/NoteForm';

import type { FetchNotesResponse } from '@/lib/api';

interface NotesClientProps {
  initialData: FetchNotesResponse;
}

export default function NotesClient({ initialData }: NotesClientProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [debouncedSearch] = useDebounce(search, 500);

  const { data } = useQuery<FetchNotesResponse>({
    queryKey: ['notes', page, debouncedSearch],
    queryFn: () => fetchNotes({ page, search: debouncedSearch }),
    initialData,
    placeholderData: initialData,
  });

  const handleSearch = (query: string) => {
    setPage(1);
    setSearch(query);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        ➕ New Note
      </button>

      <SearchBox onSearch={handleSearch} />

      <NoteList notes={data.notes} />

      {data.totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={data.totalPages}
          onPageChange={setPage}
        />
      )}

      {isModalOpen && (
        <NoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <NoteForm onClose={() => setIsModalOpen(false)} />
        </NoteModal>
      )}
    </>
  );
}
