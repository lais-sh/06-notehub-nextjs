import { Note } from '@/types/note';
import styles from './NoteList.module.css';

interface NoteListProps {
  notes: Note[];
  onNoteClick: (note: Note) => void;
}

export default function NoteList({ notes, onNoteClick }: NoteListProps) {
  return (
    <ul className={styles.list}>
      {notes.map((note) => (
        <li
          key={note.id}
          className={styles.item}
          onClick={() => onNoteClick(note)}
        >
          <h3 className={styles.title}>{note.title}</h3>
          <p className={styles.content}>{note.content}</p>
        </li>
      ))}
    </ul>
  );
}
