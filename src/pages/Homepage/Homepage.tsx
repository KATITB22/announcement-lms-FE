import React from 'react';
import env from '@/env';
import BlogPost from '../../components/BlogPost';
import BaseLayout from '../../layout/BaseLayout';
import { DetailPost, Pagination, imgPartner } from '../../types/types';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import { listOfMedpar, sponsorMD } from '../Partnerpage/PartnerPage';

const pageTitle = '\uE000nno\uE070nce\uE063ent';
const sponsorTitle = 'S\uE064o\uE01Esore\uE03A B\uE05A:';
const medparTitle = '\uE023e\uE053ia Partner';

const Homepage: React.FC<{}> = () => {
    const path = `${env.VITE_GHOST_API_URL}/ghost/api/content/posts?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags,authors`;
    const { data, isLoading, error, message } = useFetch(path);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <p>{message}</p>;
    }

    const {
        meta: { pagination },
        posts,
    }: { meta: { pagination: Pagination }; posts: DetailPost[] } = data;
    console.log(pagination, posts);

    const blogPostElements = posts.map((item) => (
        <BlogPost
            key={item.slug}
            id={item.id}
            title={item.title}
            published_at={item.published_at}
            primary_author={item.primary_author}
            description={item.excerpt}
            feature_image={item.feature_image}
            url={item.slug}
            tags={item.tags}
        />
    ));
    return (
        <BaseLayout>
            <div>
                <div className="py-20 bg-Yellow">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-Heading font-bold mb-2 text-center">
                            {pageTitle}
                        </h1>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20">
                    <div className="container max-w-screen-lg mx-auto px-[3.75rem]">
                        <div className="grid justify-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {blogPostElements}
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex justify-center">
                            <h2 className="text-center font-Heading text-xl sm:text-2xl font-bold absolute top-[-20px] bg-LightBrown rounded-lg pt-1 px-3 drop-shadow-lg">
                                {sponsorTitle}
                            </h2>
                            <div className="grid justify-items-center gap-4 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {sponsorMD.map((image: imgPartner) => (
                                    <a href={image.link}>
                                        <img
                                            alt={image.title}
                                            src={image.imageUrl}
                                            className={`w-[${image.type}] h-[${image.type}] object-cover`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex justify-center">
                            <h2 className="text-center font-Heading text-xl sm:text-2xl font-bold absolute top-[-20px] bg-LightBrown rounded-lg pt-1 px-3 drop-shadow-lg">
                                {medparTitle}
                            </h2>
                            <div className="grid justify-items-center gap-4 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {listOfMedpar.map((image: imgPartner) => (
                                    <a href={image.link}>
                                        <img
                                            alt={image.title}
                                            src={image.imageUrl}
                                            className={`w-[${image.type}] h-[${image.type}] object-cover`}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Homepage;
