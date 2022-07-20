import React from 'react';

import { Post } from '../types/types';

const BlogPost: React.FC<Post> = (props) => {
    const { title, date, author, description, imageUrl, link, tags } = props;
    return (
        <div
            className="
                shadow-lg
                transition
                duration-500
                ease-in-out
                transform
                hover:shadow-2xl
                rounded-lg
                justify-between
                flex-col
                flex
            "
        >
            <img
                alt={title}
                src={imageUrl}
                className="max-h-40 w-full object-cover"
            />
            <div className="bg-white w-full h-full p-4">
                {/* title  */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <p className="font-Body text-body font-normal mb-2">
                            {date} | Posted by {author}
                        </p>
                        <a
                            href={link}
                            className="font-Heading text-h6 font-semibold"
                        >
                            {title}
                        </a>
                        <p className="font-Body text-body font-normal">
                            {description}
                        </p>
                    </div>
                    {/* tags  */}
                    <div>
                        <a
                            className="font-Caption text-body font-semibold hover:text-Orange"
                            href={link}
                        >
                            Read More
                        </a>
                        {tags ? (
                            <div className="flex items-center mt-2 flex-wrap gap-2">
                                {tags.map((tag: string) => (
                                    // TODO: change # to tags link
                                    <a
                                        href="www.google.com"
                                        className="px-2 py-2 rounded bg-Orange text-white hover:text-black"
                                    >
                                        {tag}
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center mt-2 bg-White">
                                <div className="pl-2 bg-White" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
