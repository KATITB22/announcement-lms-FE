import React, { useEffect, useState } from 'react';
import { PaginationProps } from '@/types/interface';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { PAGINATION_PER_PAGE } from '@/types/constant';
import { iconSize } from '@/types/enum';

const generateNumbers = (currentPage: number, totalPage: number) => {
    let startPage;
    let endPage;
    if (totalPage > PAGINATION_PER_PAGE) {
        startPage =
            currentPage - Math.floor(PAGINATION_PER_PAGE / 2) > 0
                ? currentPage - Math.floor(PAGINATION_PER_PAGE / 2)
                : 1;
        endPage =
            currentPage + Math.floor(PAGINATION_PER_PAGE / 2) > totalPage
                ? totalPage
                : currentPage + Math.floor(PAGINATION_PER_PAGE / 2);
        endPage =
            endPage === startPage + PAGINATION_PER_PAGE - 1
                ? endPage
                : startPage + PAGINATION_PER_PAGE - 1;
        endPage = endPage > totalPage ? totalPage : endPage;
        startPage =
            startPage === endPage - PAGINATION_PER_PAGE + 1
                ? startPage
                : endPage - PAGINATION_PER_PAGE + 1;
    } else {
        startPage = 1;
        endPage = totalPage;
    }

    const numbers: number[] = [];
    for (let i = startPage; i < endPage + 1; i += 1) {
        numbers.push(i);
    }

    return numbers;
};

const Pagination: React.FC<PaginationProps> = ({
    pagination,
    page: currentPage,
    setPage,
    className,
}) => {
    const { pages: pageCount } = pagination;
    // console.log(pagination);
    const [listOfPages, setListOfPages] = useState<number[]>(
        generateNumbers(1, pageCount)
    );
    const [showLeftChevron, setShowLeftChevron] = useState(false);
    const [showRightChevron, setShowRightChevron] = useState(false);

    useEffect(() => {
        const numbers = generateNumbers(currentPage, pageCount);
        setShowLeftChevron(numbers[0] !== 1);
        setShowRightChevron(
            numbers[PAGINATION_PER_PAGE - 1] !== undefined &&
                numbers[PAGINATION_PER_PAGE - 1] !== pageCount
        );
        setListOfPages(numbers);
    }, [currentPage]);

    const displayPages = listOfPages.map((pageNumber) => {
        const isActive = pageNumber === currentPage;
        const bg = className || 'bg-Orange';
        return (
            <button
                key={`button${pageNumber}`}
                className={`z-20 ${
                    isActive ? `${bg} rounded-md` : ''
                } flex justify-center items-center`}
                onClick={() => {
                    setPage(pageNumber);
                }}
                type="button"
            >
                <p className="font-sans font-medium text-caption px-2 text-black transition">
                    {pageNumber}
                </p>
            </button>
        );
    });

    return (
        <>
            <div className="w-[13%] flex justify-center items-center">
                <button
                    type="button"
                    onClick={() => {
                        setPage(currentPage - 1 > 0 ? currentPage - 1 : 1);
                    }}
                    className={`${
                        !showLeftChevron ? 'hidden' : undefined
                    } z-20 w-full flex justify-center items-center`}
                >
                    <BsChevronLeft size={iconSize.medium} />
                </button>
            </div>
            {displayPages}
            <div className="w-[13%] flex justify-center items-center">
                <button
                    type="button"
                    onClick={() => {
                        setPage(
                            currentPage + 1 > pageCount
                                ? pageCount
                                : currentPage + 1
                        );
                    }}
                    className={`${
                        !showRightChevron ? 'hidden' : undefined
                    } z-20 w-full flex justify-center items-center`}
                >
                    <BsChevronRight size={iconSize.medium} />
                </button>
            </div>
        </>
    );
};

export default Pagination;
