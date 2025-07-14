import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';

export const dynamic = 'force-dynamic';

interface Props {
  params: { id?: string };
}

export default async function Page({ params }: Props) {
  if (!params?.id) {
    throw new Error('Missing ID param');
  }

  const id = Number(params.id);

  if (isNaN(id)) {
    throw new Error(`Invalid ID: ${params.id}`);
  }

  const note = await fetchNoteById(id);

  return <NoteDetailsClient note={note} />;
}
