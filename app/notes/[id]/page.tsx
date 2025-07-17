export const dynamic = 'force-dynamic';

import { fetchNoteById } from '@/lib/api';
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';
import NoteDetailsClient from './NoteDetails.client';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteDetailsPage({ params }: Props) {
  const { id: idString } = await params;
  const id = Number(idString);

  if (isNaN(id)) {
    throw new Error(`Invalid ID: ${idString}`);
  }

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient noteId={id} />
    </HydrationBoundary>
  );
}
