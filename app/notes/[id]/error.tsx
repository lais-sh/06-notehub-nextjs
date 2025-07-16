'use client';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div style={{ color: 'red', padding: '1rem' }}>
      {message}
    </div>
  );
}
