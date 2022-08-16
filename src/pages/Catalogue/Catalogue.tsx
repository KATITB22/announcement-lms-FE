import PageTransition from '@/components/PageTransition';
import VistockHome from '@/components/VistockHome';
import React, { useEffect, useState } from 'react';
import { Pagination as PaginationType } from '@tryghost/content-api';
import MerchPost from '@/components/MerchPost';
import { CATALOGUE_TITLE, MAX_POST } from '@/types/constant';
import Pagination from '@/components/Pagination';
import { data } from './MerchList';

const Catalogue: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const [pagination, setPagination] = useState<PaginationType>({
        page,
        limit: MAX_POST,
        pages: Math.ceil(data.length / MAX_POST),
        total: data.length,
        next: page !== Math.ceil(data.length / MAX_POST) ? page + 1 : null,
        prev: page !== 1 ? page - 1 : null,
    });
    useEffect(() => {
        setPagination({
            ...pagination,
            page,
            pages: Math.ceil(data.length / MAX_POST),
            total: data.length,
            next: page !== Math.ceil(data.length / MAX_POST) ? page + 1 : null,
            prev: page !== 1 ? page - 1 : null,
        });
    }, [page, data]);
    return (
        <PageTransition>
            <div>
                <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-screen relative z-10">
                    <VistockHome />
                    <div className="container max-w-[92.5vw] xl:max-w-screen-xl mx-auto">
                        <p className="text-4xl md:text-h3 font-Heading font-bold mb-2 text-center pt-10">
                            {CATALOGUE_TITLE}
                        </p>
                        <div className="py-10">
                            <div className="flex justify-center">
                                <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-LightBrown py-6 px-6 rounded-lg">
                                    {data
                                        .slice(
                                            (page - 1) * MAX_POST,
                                            page * MAX_POST
                                        )
                                        .map((item) => (
                                            <MerchPost
                                                key={item.title}
                                                item={item}
                                            />
                                        ))}
                                </div>
                            </div>
                            <div className="my-4">
                                <Pagination
                                    pagination={pagination}
                                    page={page}
                                    setPage={setPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};
export default Catalogue;
