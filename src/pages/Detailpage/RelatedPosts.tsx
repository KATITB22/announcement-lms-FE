/* eslint-disable */
import React from 'react';
import { Posts } from '@/types/interface';
import BlogPost from '@/components/BlogPost';
const RelatedPosts = ({ posts }: { posts: Posts }) => {
    if (!posts || posts.length === 0) {
        return null;
    }
    return (
        <div>
            <p className="text-2xl md:text-2xl mt-8 mb-4">Related Posts:</p>
            <div className="flex justify-center">
                <div className="grid mx-8 sm:mx-0 place-items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {posts.map((item) => (
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
                            size="sm"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedPosts;
