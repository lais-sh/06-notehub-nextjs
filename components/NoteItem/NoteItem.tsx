import Link from 'next/link';
import { Note } from '@/types/note';
import styles from './NoteItem.module.css';

interface Props {
  note: Note;
}

export default function NoteItem({ note }: Props) {
  return (
    <li className={styles.item}>
      <Link href={`/notes/${note.id}`} className={styles.link}>
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.content}>{note.content}</p>
      </Link>
    </li>
  );
}
