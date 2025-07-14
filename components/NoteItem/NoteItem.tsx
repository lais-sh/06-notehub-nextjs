import { Note } from '@/types/note';
import styles from './NoteItem.module.css';
import Link from 'next/link';

interface Props {
  note: Note;
}

export default function NoteItem({ note }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{note.title}</h2>
      </div>
      <p className={styles.content}>{note.content}</p>
      <p className={styles.date}>{new Date(note.createdAt).toLocaleDateString()}</p>
      <div className={styles.actions}>
        <Link href={`/notes/${note.id}`}>View details</Link>
        {/* кнопка видалення буде пізніше */}
      </div>
    </div>
  );
}
