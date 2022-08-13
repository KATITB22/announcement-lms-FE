import React, { useState } from 'react';
import { fetchPost } from '@/service/ghostAPI';
import useFetch from '@/hooks/useFetch';
import { Posts } from '@/types/interface';
import Pagination from '@/components/Pagination';
import { PAGE_TITLE, SPONSOR_TITLE, MEDPAR_TITLE } from '@/types/constant';
import BlogPost from '@/components/BlogPost';
import { ErrorTypes } from '@/types/enum';
import PageTransition from '@/components/PageTransition';
import SponsorAndPartnerContainer from '@/components/SponsorAndPartnerContainer';
import { medparLG, medparMD } from '../Partnerpage/PartnersList';

import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { sponsorLG, sponsorMD, sponsorSM } from '../Partnerpage/SponsorsList';

const Homepage: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, error, message } = useFetch(fetchPost(page), page);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorPage message={message} type={ErrorTypes.EmptyPost} />;
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

    document.title = 'Home - OSKM ITB 2022';

    return (
        <PageTransition>
            <div>
                <div className="py-10 bg-Yellow">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
                            {PAGE_TITLE}
                        </h1>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 min-h-screen">
                    <div className="container max-w-[92.5vw] xl:max-w-screen-xl mx-auto">
                        <div className="flex justify-center">
                            <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-LightBrown py-6 px-6 rounded-lg">
                                {blogPostElements}
                            </div>
                        </div>
                        <div className="my-4">
                            <Pagination
                                pagination={posts.meta.pagination}
                                page={page}
                                setPage={setPage}
                            />
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex flex-col justify-center">
                            <h2 className="text-center font-Heading text-xl sm:text-2xl font-bold absolute top-[-20px] bg-LightBrown rounded-lg pt-1 px-3 drop-shadow-lg">
                                {SPONSOR_TITLE}
                            </h2>
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={sponsorLG}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={sponsorMD}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={sponsorSM}
                            />
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex justify-center flex-col">
                            <h2 className="text-center font-Heading text-xl sm:text-2xl font-bold absolute top-[-20px] bg-LightBrown rounded-lg pt-1 px-3 drop-shadow-lg">
                                {MEDPAR_TITLE}
                            </h2>
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={medparLG}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={medparMD}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Homepage;
