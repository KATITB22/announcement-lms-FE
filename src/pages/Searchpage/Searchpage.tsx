import useFetch from '@/hooks/useFetch';
import { fetchAllPost } from '@/service/ghostAPI';
import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useSearchParams } from 'react-router-dom';
import {
    Pagination as PaginationType,
    PostOrPage,
} from '@tryghost/content-api';
import { MAX_POST } from '@/types/constant';
import Pagination from '@/components/Pagination';
import BlogPost from '@/components/BlogPost';
import FilterAndCategory from '@/components/FilterAndCategory';
import { ErrorTypes } from '@/types/enum';
import VistockSearch from '@/components/VistockSearch';
import vistock from '@/assets/images/search-not-found.png';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';

const Searchpage: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, error } = useFetch(fetchAllPost());
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q');
    const query = q || '';
    const [result, setResult] = useState<PostOrPage[]>([]);
    const [oriResult, setOriResult] = useState<PostOrPage[]>([]);

    const options = {
        keys: ['title'],
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
        if (isLoading) return;
        if (query) {
            const fuse = new Fuse(data, options);
            setResult(fuse.search<PostOrPage>(query).map((item) => item.item));
            setOriResult(
                fuse.search<PostOrPage>(query).map((item) => item.item)
            );
        } else {
            setResult((data as Array<PostOrPage>).map((item) => item));
            setOriResult((data as Array<PostOrPage>).map((item) => item));
        }
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
    }, [page, result]);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorPage type={ErrorTypes.ServerError} />;
    }

    document.title = `${query} - OSKM ITB 2022`;

    const renderSearch = (input: PostOrPage[]) => {
        if (input.length === 0) {
            return (
                <div className="min-h-content inline-flex items-center md:ml-10 flex-grow justify-start flex-col text-center z-10">
                    <img
                        src={vistock}
                        alt="tidak ada hasil pencarian"
                        className="w-[20rem] md:w-[30rem] aspect-square absolute -z-[5]"
                    />
                    <p className="m-0 mb-1 mt-52 justify-center font-Heading text-title md:text-h3 text-DarkerOrange drop-shadow-errorStyle">
                        Hasil tidak ditemukan
                    </p>
                    <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
                        Gunakan kata kunci yang lain atau yang lebih umum
                    </div>
                </div>
            );
        }

        return (
            <div className="col-span-1 xl:col-span-3 lg:col-span-2 mx-auto self-start">
                <div className="my-4">
                    <Pagination
                        pagination={pagination}
                        page={page}
                        setPage={setPage}
                    />
                </div>
                <div className="flex justify-start">
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
        );
    };

    const renderResult = (input: PostOrPage[]) => (
        <div className="container max-w-screen-xl py-6 px-[3.25rem] mx-auto gap-6 min-h-content inline-flex flex-row items-center justify-center z-10">
            <div className="hidden md:block self-start">
                <FilterAndCategory
                    item={result}
                    setItem={setResult}
                    originalItem={oriResult}
                    initParams={searchParams}
                    setParams={setSearchParams}
                />
            </div>
            {renderSearch(input)}
        </div>
    );

    return (
        <div className="w-full bg-gradient-to-b from-Orange to-LightOrange min-h-content relative z-10">
            <div className="flex flex-row">
                <VistockSearch />
                {renderResult(result)}
            </div>
        </div>
    );
};

export default Searchpage;
