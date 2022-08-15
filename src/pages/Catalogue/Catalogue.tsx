import PageTransition from '@/components/PageTransition';
import VistockHome from '@/components/VistockHome';
import { MerchPostType } from '@/types/interface';
import Logo from '@/assets/images/logo/logo.png';
import React from 'react';
import MerchPost from '@/components/MerchPost';
import Kuaci from '@/assets/images/home/annoucement-min.png';

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
];

const Catalogue: React.FC<{}> = () => (
    <PageTransition>
        <div>
            <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-screen relative z-10">
                <VistockHome />

                <div className="py-10">
                    <div className="container max-w-[92.5vw] xl:max-w-screen-xl mx-auto">
                        <div className="flex justify-center">
                            <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-LightBrown py-6 px-6 rounded-lg">
                                {Data.map((item) => (
                                    <MerchPost key={item.title} item={item} />
                                ))}
                            </div>
                        </div>
                        <div className="my-4">
                            {/* <Pagination
                                    pagination={posts.meta.pagination}
                                    page={page}
                                    setPage={setPage}
                                /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageTransition>
);

export default Catalogue;
