import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from '@/app/notes/[id]/NoteDetails.client';

interface Props {
  params: { id: string };
}

export default async function NoteDetailsPage({ params }: Props) {
  const queryClient = new QueryClient();
  const noteId = Number(params.id);

  await queryClient.prefetchQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient noteId={noteId} />
    </HydrationBoundary>
  );
}

