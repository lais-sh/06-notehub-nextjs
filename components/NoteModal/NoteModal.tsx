'use client';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './NoteModal.module.css';

interface NoteModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

export default function NoteModal({ title, content, onClose }: NoteModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.close}>×</button>
        <h2>{title}</h2>
        <p>{content}</p>
        <button onClick={onClose} className={styles.button}>Close</button>
      </div>
    </div>,
    document.body
  );
}
