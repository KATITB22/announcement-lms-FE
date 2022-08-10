import useFetch from '@/hooks/useFetch';
import { fetchAllPost } from '@/service/ghostAPI';
import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useLocation } from 'react-router-dom';
import {
    Pagination as PaginationType,
    PostOrPage,
} from '@tryghost/content-api';
import { MAX_POST } from '@/types/constant';
import Pagination from '@/components/Pagination';
import BlogPost from '@/components/BlogPost';
import FilterAndCategory from '@/components/FilterAndCategory';
import { ErrorTypes } from '@/types/enum';
import { LoadingSpecific } from '../Loading';
import ErrorPage from '../ErrorPage';

const Searchpage: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, error } = useFetch(fetchAllPost());
    const { search } = useLocation();
    const q = new URLSearchParams(search).get('q');
    const query = q || '';
    const [result, setResult] = useState<PostOrPage[]>([]);
    const [oriResult, setOriResult] = useState<PostOrPage[]>([]);

    const options = {
        keys: ['title', 'tags.name'],
    };

    const [pagination, setPagination] = useState<PaginationType>({
        page,
        limit: MAX_POST,
        pages: Math.ceil(result.length / MAX_POST),
        total: result.length,
        next: page !== Math.ceil(result.length / MAX_POST) ? page + 1 : null,
        prev: page !== 1 ? page - 1 : null,
    });

    useEffect(() => {
        const fuse = new Fuse(data, options);
        setResult(fuse.search<PostOrPage>(query).map((item) => item.item));
        setOriResult(fuse.search<PostOrPage>(query).map((item) => item.item));
    }, [data, query]);

    useEffect(() => {
        setPagination({
            ...pagination,
            page,
            pages: Math.ceil(result.length / MAX_POST),
            total: result.length,
            next:
                page !== Math.ceil(result.length / MAX_POST) ? page + 1 : null,
            prev: page !== 1 ? page - 1 : null,
        });
    }, [page]);

    if (isLoading) {
        return <LoadingSpecific />;
    }

    if (error) {
        return <ErrorPage type={ErrorTypes.ServerError} />;
    }

    const renderResult = (input: PostOrPage[]) => {
        if (input.length === 0) {
            return <ErrorPage type={ErrorTypes.SearchNotFound} />;
        }

        return (
            <div className="container max-w-screen-xl mx-auto px-[3.75rem] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 h-content">
                <div className="col-span-1 mx-auto">
                    <FilterAndCategory
                        item={result}
                        setItem={setResult}
                        originalItem={oriResult}
                    />
                </div>
                <div className="col-span-1 xl:col-span-3 lg:col-span-2">
                    <div className="my-4">
                        <Pagination
                            pagination={pagination}
                            page={page}
                            setPage={setPage}
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {input
                                .slice((page - 1) * MAX_POST, page * MAX_POST)
                                .map((item) => (
                                    <BlogPost
                                        key={item.slug}
                                        slug={item.slug}
                                        id={item.id}
                                        title={item.title}
                                        published_at={item.published_at}
                                        primary_author={item.primary_author}
                                        excerpt={item.excerpt}
                                        feature_image={item.feature_image}
                                        url={item.slug}
                                        tags={item.tags}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0]">
            {renderResult(result)}
        </div>
    );
};

export default Searchpage;
