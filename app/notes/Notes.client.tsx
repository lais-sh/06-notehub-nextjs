'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/noteService';
import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';
import NoteModal from '@/components/NoteModal/NoteModal';
import NoteForm from '@/components/NoteForm/NoteForm';

import type { FetchNotesResponse } from '@/lib/noteService';

interface NotesClientProps {
  initialData: FetchNotesResponse;
}

export default function NotesClient({ initialData }: NotesClientProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ['notes', page, search],
    queryFn: () => fetchNotes({ page, search }),
    initialData,
  });

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        ➕ New Note
      </button>

      <SearchBox onSearch={setSearch} />

      <NoteList notes={data.notes} />

      <Pagination
        currentPage={page}
        totalPages={data.totalPages}
        onPageChange={setPage}
      />

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <NoteForm onClose={() => setIsModalOpen(false)} />
      </NoteModal>
    </>
  );
}
