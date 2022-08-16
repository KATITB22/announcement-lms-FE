import PageTransition from '@/components/PageTransition';
import VistockHome from '@/components/VistockHome';
import { MerchPostType } from '@/types/interface';
import Logo from '@/assets/images/logo/logo.png';
import React, { useEffect, useState } from 'react';
import MerchPost from '@/components/MerchPost';
import Kuaci from '@/assets/images/home/announcement-min.png';
import Pagination from '@/components/Pagination';

const LIMIT_CATALOGUE = 6;

const Data: MerchPostType[] = [
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
    {
        title: 'Test',
        price: 'Rp. 100.000',
        url: 'https://www.google.com',
        images: [Logo, Kuaci],
    },
];

const Catalogue: React.FC<{}> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [merchs, setMerchs] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const offsetData = (currentPage - 1) * LIMIT_CATALOGUE;
        const shownData = Data.slice(offsetData, offsetData + LIMIT_CATALOGUE);
        const shownPosts = shownData.map((item) => (
            <MerchPost key={item.title} item={item} />
        ));
        setMerchs(shownPosts);
    }, [currentPage]);

    return (
        <PageTransition>
            <div>
                <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-screen relative z-10">
                    <VistockHome />

                    <div className="py-10">
                        <div className="container max-w-max xl:max-w-screen-xl mx-auto">
                            <div className="flex justify-center relative pt-9">
                                <div className="bg-LightBrown absolute top-0 right-[10%] lg:right-[14%] rounded-md flex flex-row justify-between items-center self-center w-44 h-10">
                                    <Pagination
                                        pagination={{
                                            pages: Math.ceil(
                                                Data.length / LIMIT_CATALOGUE
                                            ),
                                            page: 0,
                                            limit: 0,
                                            prev: 0,
                                            next: 0,
                                            total: 0,
                                        }}
                                        page={currentPage}
                                        setPage={setCurrentPage}
                                    />
                                </div>
                                <div className="grid place-items-stretch xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-LightBrown py-6 px-6 rounded-lg">
                                    {merchs}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Catalogue;
