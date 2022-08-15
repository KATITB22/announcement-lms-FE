import BlogPost from '@/components/BlogPost';
import PageTransition from '@/components/PageTransition';
import Pagination from '@/components/Pagination';
import useFetch from '@/hooks/useFetch';
import { fetchAllSponsor } from '@/service/ghostAPI';
import { ErrorTypes } from '@/types/enum';
import { Posts } from '@/types/interface';
import React from 'react';
import ErrorPage from '../ErrorPage';
import Loading from '../Loading';

const Catalogue: React.FC<{}> = () => {
    const [page, setPage] = React.useState<number>(1);
    const { data, isLoading, error, message } = useFetch(
        fetchAllSponsor(),
        page
    );

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorPage message={message} type={ErrorTypes.ServerError} />;
    }

    const posts: Posts = data;
    const blogPostElements = posts.map((item) => (
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
    ));

    document.title = 'Catalogue - Deva: Blog OSKM ITB 2022';

    if (posts.length === 0) {
        return <ErrorPage message={message} type={ErrorTypes.EmptyPost} />;
    }

    return (
        <PageTransition>
            {' '}
            <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-content">
                <div className="container max-w-[92.5vw] xl:max-w-screen-xl mx-auto py-4">
                    <div className="flex justify-center">
                        <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-LightBrown py-6 px-6 rounded-lg">
                            {blogPostElements}
                        </div>
                    </div>
                    <div className="py-4">
                        <Pagination
                            pagination={posts.meta.pagination}
                            page={page}
                            setPage={setPage}
                        />
                    </div>{' '}
                </div>
            </div>
        </PageTransition>
    );
};

export default Catalogue;
