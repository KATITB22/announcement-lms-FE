import React, { useState } from 'react';
import { PaginationProps } from '@/types/interface';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { PAGINATION_PER_PAGE } from '@/types/constant';
import { iconSize } from '@/types/enum';

const Pagination: React.FC<PaginationProps> = ({
    pagination,
    currentPage,
    setPage,
}) => {
    const { pages: pageCount, next, prev } = pagination;
    const isChevronLeft = currentPage !== 1;
    const isChevronRight = currentPage !== Math.max(pageCount, 1);
    const [listOfPages] = useState([
        ...Array(Math.min(PAGINATION_PER_PAGE + 1, pageCount)).keys(),
    ]);
    const displayPages = listOfPages.map((pageNumber) => {
        const isActive = pageNumber + 1 === currentPage;
        return (
            <button
                key={`button${pageNumber}`}
                className="mx-2"
                onClick={() => {
                    setPage(pageNumber + 1);
                }}
                type="button"
            >
                <p
                    className={`text-title border-black px-2 text-Yellow border-solid border-si border-2 hover:border-Yellow hover:text-black ${
                        isActive ? 'bg-Brown text-black' : null
                    }`}
                >
                    {pageNumber + 1}
                </p>
            </button>
        );
    });

    const renderChevron = (isChevron: boolean, isLeft: boolean) =>
        isChevron ? (
            <button
                type="button"
                onClick={() => {
                    if (isLeft) setPage(prev!);
                    else setPage(next!);
                }}
            >
                {isLeft ? (
                    <BsChevronLeft size={iconSize.medium} />
                ) : (
                    <BsChevronRight size={iconSize.medium} />
                )}
            </button>
        ) : null;

    return (
        <div className="flex flex-row justify-center items-center self-center">
            {renderChevron(isChevronLeft, true)}
            {displayPages}
            {renderChevron(isChevronRight, false)}
        </div>
    );
};

export default Pagination;
