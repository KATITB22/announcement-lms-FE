import React, { useState } from 'react';
import { fetchPost } from '@/service/ghostAPI';
import useFetch from '@/hooks/useFetch';
import { imgPartner } from '@/types/types';
import { Posts } from '@/types/interface';
import Pagination from '@/components/Pagination';
import BlogPost from '../../components/BlogPost';
import BaseLayout from '../../layout/BaseLayout';
import Loading from '../Loading';
import { listOfMedpar, sponsorMD } from '../Partnerpage/PartnerPage';
import PageNotFound from '../PageNotFound';

const pageTitle = '\uE000nno\uE070nce\uE063ent';
const sponsorTitle = 'S\uE064o\uE01Esore\uE03A B\uE05A:';
const medparTitle = '\uE023e\uE053ia Partner';

const Homepage: React.FC<{}> = () => {
    const [page, setPage] = useState<number>(1);

    const { data, isLoading, error } = useFetch(fetchPost(page), page);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <PageNotFound />;
    }

    const posts: Posts = data;
    console.log(posts);
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
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20 min-h-screen">
                    <div className="container max-w-screen-xl mx-auto px-[3.75rem]">
                        <div className="my-4">
                            <Pagination
                                pagination={posts.meta.pagination}
                                currentPage={page}
                                setPage={setPage}
                            />
                        </div>
                        <div className="flex justify-center">
                            <div className="grid place-items-stretch lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                {blogPostElements}
                            </div>
                        </div>
                        <div className="relative bg-LightBrown py-6 px-2 mt-16 rounded-lg flex justify-center">
                            <h2 className="text-center font-Heading text-xl sm:text-2xl font-bold absolute top-[-20px] bg-LightBrown rounded-lg pt-1 px-3 drop-shadow-lg">
                                {sponsorTitle}
                            </h2>
                            <div className="grid justify-items-center gap-4 p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {sponsorMD.map((image: imgPartner) => (
                                    <a href={image.link} key={image.link}>
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
                                    <a href={image.link} key={image.link}>
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
