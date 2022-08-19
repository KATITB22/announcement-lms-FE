import React, { useState } from 'react';
import { fetchPost } from '@/service/ghostAPI';
import useFetch from '@/hooks/useFetch';
import { Posts } from '@/types/interface';
import Pagination from '@/components/Pagination';
import { SPONSOR_TITLE, MEDPAR_TITLE } from '@/types/constant';
import BlogPost from '@/components/BlogPost';
import { ErrorTypes } from '@/types/enum';
import SponsorAndPartnerContainer from '@/components/SponsorAndPartnerContainer';
import VistockHome from '@/components/VistockHome';
import VistockAnnoucement from '@/assets/images/home/announcement-v1.png';
import {
    medparLG,
    medparMD,
    medparSM,
    medparXL,
} from '@/pages/Partnerpage/PartnersList';

import {
    sponsorLG,
    sponsorMD,
    sponsorSM,
} from '@/pages/Partnerpage/SponsorsList';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';

const Homepage: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);
    const { data, isLoading, error, message } = useFetch(fetchPost(page), page);

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

    document.title = 'Home - DEVA: Blog OSKM ITB 2022';

    if (posts.length === 0) {
        return <ErrorPage message={message} type={ErrorTypes.EmptyPost} />;
    }

    return (
        <div className="min-h-content">
            <div className="bg-[#FF8952]">
                <img
                    src={VistockAnnoucement}
                    alt="annoucement"
                    className="w-screen"
                    draggable="false"
                />
            </div>
            {/* <Annoucement /> */}
            <div className="bg-gradient-to-b from-DarkOrange to-MediumBrown min-h-screen relative z-10">
                <VistockHome />
                <div className="py-10">
                    <div className="container max-w-[92.5vw] xl:max-w-screen-xl mx-auto">
                        <div className="flex justify-center relative pt-9">
                            <div className="bg-LightBrown absolute top-0 lg:right-[14%] rounded-md flex flex-row justify-between items-center self-center w-44 h-10">
                                <Pagination
                                    pagination={posts.meta.pagination}
                                    page={page}
                                    setPage={setPage}
                                />
                            </div>
                            <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 bg-LightBrown py-6 px-6 rounded-lg">
                                {blogPostElements}
                            </div>
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex flex-col justify-center">
                            <div className="flex relative h-[36px] justify-center my-auto">
                                <div className=" font-Heading text-xl sm:text-2xl text-center bg-LightBrown absolute px-[10px] py-1 bottom-10 rounded drop-shadow-lg">
                                    {SPONSOR_TITLE}
                                </div>
                            </div>
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={sponsorSM}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={sponsorMD}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={sponsorLG}
                            />
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex justify-center flex-col">
                            <div className="flex relative h-[36px] justify-center my-auto">
                                <div className=" font-Heading text-xl sm:text-2xl text-center bg-LightBrown absolute px-[10px] py-1 bottom-10 rounded drop-shadow-lg">
                                    {MEDPAR_TITLE}
                                </div>
                            </div>
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={medparSM}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={medparMD}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={medparLG}
                            />
                            <SponsorAndPartnerContainer
                                listOfSponsorAndPartner={medparXL}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
