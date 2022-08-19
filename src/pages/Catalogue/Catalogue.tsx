import VistockHome from '@/components/VistockHome';
import React, { useEffect, useState } from 'react';
import MerchPost from '@/components/MerchPost';
import Pagination from '@/components/Pagination';
import { CATALOGUE_TITLE } from '@/types/constant';
import { data } from './MerchList';

const LIMIT_CATALOGUE = 6;

const Catalogue: React.FC<{}> = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [merchs, setMerchs] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const offsetData = (currentPage - 1) * LIMIT_CATALOGUE;
        const shownData = data.slice(offsetData, offsetData + LIMIT_CATALOGUE);
        const shownPosts = shownData.map((item) => (
            <MerchPost key={item.title} item={item} />
        ));
        setMerchs(shownPosts);
    }, [currentPage]);

    document.title = 'Catalogue - DEVA: Blog OSKM ITB 2022';

    return (
        <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-screen relative z-10">
            <VistockHome />
            <div className="container max-w-[92.5vw] xl:max-w-screen-xl mx-auto">
                <p className="text-4xl md:text-h3 font-Heading font-bold mb-2 text-center pt-10">
                    {CATALOGUE_TITLE}
                </p>
                <div className="py-10">
                    <div className="container max-w-max xl:max-w-screen-xl mx-auto">
                        <div className="flex justify-center relative pt-9">
                            <div className="bg-LightBrown absolute top-0 right-[10%] lg:right-[14%] rounded-md flex flex-row justify-between items-center self-center w-44 h-10">
                                <Pagination
                                    pagination={{
                                        pages: Math.ceil(
                                            data.length / LIMIT_CATALOGUE
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
    );
};
export default Catalogue;
