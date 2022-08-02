import useFetch from '@/hooks/useFetch';
import { fetchAllPost } from '@/service/ghostAPI';
import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useParams } from 'react-router-dom';
import {
    Pagination as PaginationType,
    PostOrPage,
} from '@tryghost/content-api';
import { MAX_POST } from '@/types/constant';
import Pagination from '@/components/Pagination';
import BlogPost from '@/components/BlogPost';
import BaseLayout from '../../layout/BaseLayout';
import Loading from '../Loading';
import PageNotFound from '../PageNotFound';

const Searchpage: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, error } = useFetch(fetchAllPost());

    const { q } = useParams();

    const options = {
        keys: ['title', 'authors.name', 'tags.name'],
    };

    const fuse = new Fuse(data, options);

    const result = fuse.search<PostOrPage>(`${q}`);

    const [pagination, setPagination] = useState<PaginationType>({
        page,
        limit: MAX_POST,
        pages: Math.ceil(result.length / MAX_POST),
        total: result.length,
        next: page !== Math.ceil(result.length / MAX_POST) ? page + 1 : null,
        prev: page !== 1 ? page - 1 : null,
    });

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
        return <Loading />;
    }
    if (error) {
        return <PageNotFound />;
    }
    return (
        <BaseLayout>
            <div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 min-h-screen">
                    <div className="container max-w-screen-xl mx-auto px-[3.75rem]">
                        <div className="my-4">
                            <Pagination
                                pagination={pagination}
                                currentPage={page}
                                setPage={setPage}
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                {result
                                    .map((item) => item.item)
                                    .slice(
                                        (page - 1) * MAX_POST,
                                        page * MAX_POST
                                    )
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
            </div>
        </BaseLayout>
    );
};

export default Searchpage;
