'use client';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './NoteModal.module.css';

interface Props {
  title: string;
  content: string;
  onClose: () => void;
}

export default function NoteModal({ title, content, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className={styles.button}>Close</button>
      </div>
    </div>,
    document.body
  );
}
