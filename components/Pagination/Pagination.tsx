'use client';

import styles from './Pagination.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  if (totalPages <= 1) return null;

  const handleClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.button} ${page === currentPage ? styles.active : ''}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
