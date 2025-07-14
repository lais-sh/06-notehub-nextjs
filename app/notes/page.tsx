import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/queryClient';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export default async function NotesPage() {
  const queryClient = getQueryClient();

  // Prefetch SSR-запит на першу сторінку (або будь-яку)
  await queryClient.prefetchQuery({
    queryKey: ['notes', { page: 1 }],
    queryFn: () => fetchNotes({ page: 1 }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
