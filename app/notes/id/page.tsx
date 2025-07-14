import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';

interface Props {
  params: { id: string };
}

export default async function NoteDetailsPage({ params }: Props) {
  const id = Number(params.id);
  const note = await fetchNoteById(id);

  return <NoteDetailsClient note={note} />;
}
