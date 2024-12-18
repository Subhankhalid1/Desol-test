import { PaginationProps } from "../../../@types/carTypes";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const buttonsToShow = 2;
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);

  const pageButtons = [];
  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(i);
  }

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded ${
          currentPage === 1
            ? " text-gray-200 cursor-not-allowed"
            : " text-white"
        }`}
      >
        Prev
      </button>

      {/* Page Number Buttons */}
      {pageButtons.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            page === currentPage
              ? "bg-green-600 text-white font-bold"
              : "bg-gray-800 text-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded ${
          currentPage === totalPages
            ? " text-gray-200 cursor-not-allowed"
            : " text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
