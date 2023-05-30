import React from "react";
import Link from "next/link";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = startPage + maxVisiblePages - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let page = startPage; page <= endPage; page++) {
            pageNumbers.push(page);
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-center mt-8">
            {currentPage > 1 && (
                <Link href={`/pengumuman?page=${currentPage - 1}`}>
                    <a className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                        &laquo; Previous
                    </a>
                </Link>
            )}

            {getPageNumbers().map((page) => (
                <Link key={page} href={`/pengumuman?page=${page}`}>
                    <a
                        className={`px-3 py-1 mx-1 border border-gray-300 rounded-md ${page === currentPage ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                            }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </a>
                </Link>
            ))}

            {currentPage < totalPages && (
                <Link href={`/pengumuman?page=${currentPage + 1}`}>
                    <a className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
                        Next &raquo;
                    </a>
                </Link>
            )}
        </div>
    );
};

export default Pagination;
