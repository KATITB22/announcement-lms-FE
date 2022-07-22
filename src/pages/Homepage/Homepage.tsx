import React from 'react';
import BlogPost from '../../components/BlogPost';
import BaseLayout from '../../layout/BaseLayout';
import { Post } from '../../types/types';
import useFetch from '../../hooks/useFetch';
// import env from '../../env'

const Homepage: React.FC<{}> = () => {
    // const path = env.GHOST_API_URL + "/ghost/api/content/posts?key=" + env.GHOST_API_CONTENT_API_KEY + "&include=tags";
    const path = "http://localhost:2368/ghost/api/content/posts?key=c11259cec5c2cfa1a037f3f5a4&include=tags";
    const { data, isLoading, error, message } = useFetch<Post>(path);

    if (isLoading) {
        return (
            <></>
        )
    }

    if (error){
        console.log(message);
        return (
            <></>
        )
    }

    const blogPostElements = data.posts.map((item: Post) => (
        <BlogPost
            id={item.id}
            title={item.title}
            date={item.created_at}
            // author={item.author}
            description={item.excerpt}
            imageUrl={item.feature_image}
            // link={item.link}
            // tags={item.tags}
        />
    ));
    return (
        <BaseLayout>
            <div>
                <div className="py-20 bg-Yellow">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-2 text-center">
                            Announcement
                        </h1>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20">
                    <div className="container max-w-screen-lg min-h-screen mx-auto px-[3.75rem]">
                        <div className="grid justify-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {blogPostElements}
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Homepage;
