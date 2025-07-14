import { Note } from '@/types/note';
import styles from './NoteList.module.css';

interface Props {
  notes: Note[];
}

export default function NoteList({ notes }: Props) {
  if (notes.length === 0) {
    return <p className={styles.empty}>No notes found.</p>;
  }

  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li key={note.id} className={styles.item}>
          <h3 className={styles.title}>{note.title}</h3>
          <p className={styles.content}>{note.content}</p>
        </li>
      ))}
    </ul>
  );
}
