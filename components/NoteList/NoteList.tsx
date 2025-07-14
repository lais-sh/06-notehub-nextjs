import { Note } from '@/types/note';
import NoteItem from '@/components/NoteItem/NoteItem';
import styles from './NoteList.module.css';

interface Props {
  notes: Note[];
}

export default function NoteList({ notes }: Props) {
  return (
    <ul className={styles.list}>
      {notes.map(note => (
        <li key={note.id}>
          <NoteItem note={note} />
        </li>
      ))}
    </ul>
  );
}
