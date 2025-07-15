import ReactPaginate from 'react-paginate';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (selectedPage: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      nextLabel="→"
      previousLabel="←"
      breakLabel="..."
      pageCount={totalPages}
      forcePage={currentPage - 1}
      onPageChange={(e: { selected: number }) => onPageChange(e.selected + 1)}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}
