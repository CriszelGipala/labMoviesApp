import { useState } from "react";

const usePagination = () => {
  const [page, setPage] = useState(1);

  const handlePreviousPage = () => {
    setPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = (totalPages: number) => {
    setPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  return {
    page,
    handlePreviousPage,
    handleNextPage,
    disablePrevious: page === 1,
  };
};

export default usePagination;