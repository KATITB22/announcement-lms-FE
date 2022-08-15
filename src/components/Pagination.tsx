import React, { useEffect, useState } from 'react';
import { PaginationProps } from '@/types/interface';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { PAGINATION_PER_PAGE } from '@/types/constant';
import { iconSize } from '@/types/enum';
import { generateArray, setupFirstPage } from '@/util/util';

const Pagination: React.FC<PaginationProps> = ({
    pagination,
    page: currentPage,
    setPage,
}) => {
    const { pages: pageCount } = pagination;
    const startPage = setupFirstPage(currentPage, PAGINATION_PER_PAGE);
    const endPage = Math.min(startPage + PAGINATION_PER_PAGE, pageCount + 1);
    const [listOfPages, setListOfPages] = useState<number[]>(
        generateArray(startPage, endPage)
    );

    const isChevronLeft = startPage > 1;
    const isChevronRight = endPage - 1 < pageCount;

    useEffect(() => {
        setListOfPages(generateArray(startPage, endPage));
    }, [startPage, endPage]);

    const displayPages = listOfPages.map((pageNumber) => {
        const isActive = pageNumber === currentPage;
        return (
            <button
                key={`button${pageNumber}`}
                className="mx-2"
                onClick={() => {
                    setPage(pageNumber);
                }}
                type="button"
            >
                <p
                    className={`font-Subheading text-title px-2 text-Black hover:text-Yellow transition ${
                        isActive
                            ? 'text-Yellow border-solid rounded-lg border-2 border-Orange bg-Orange'
                            : null
                    }`}
                >
                    {pageNumber}
                </p>
            </button>
        );
    });

    return (
        <div className="flex flex-row justify-center items-center self-center">
            <button
                type="button"
                onClick={() => {
                    setListOfPages(
                        generateArray(
                            startPage - PAGINATION_PER_PAGE,
                            startPage
                        )
                    );
                    setPage(startPage - 1);
                }}
                className={!isChevronLeft ? 'hidden' : undefined}
            >
                <BsChevronLeft size={iconSize.medium} />
            </button>
            {displayPages}
            <button
                type="button"
                onClick={() => {
                    setListOfPages(
                        generateArray(
                            endPage,
                            Math.min(
                                endPage + PAGINATION_PER_PAGE,
                                pageCount + 1
                            )
                        )
                    );
                    setPage(endPage);
                }}
                className={!isChevronRight ? 'hidden' : undefined}
            >
                <BsChevronRight size={iconSize.medium} />
            </button>
        </div>
    );
};

export default Pagination;
