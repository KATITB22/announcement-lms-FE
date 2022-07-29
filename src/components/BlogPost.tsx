/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatUrl, trimString } from '@/util/util';
// import { Post } from '../types/types';
import { PostOrPage } from '@tryghost/content-api';
import { MAX_DESCRIPTION } from '@/types/constant';

const BlogPost: React.FC<PostOrPage> = (props) => {
    const {
        id,
        title,
        primary_author,
        excerpt: description,
        feature_image,
        url: link,
        tags,
        published_at: date,
    } = props;
    const formattedDate = formatDate(date!);
    const formattedUrl = formatUrl(feature_image!);
    const trimmedText = trimString(description, MAX_DESCRIPTION);
    const authorName = primary_author?.name;
    return (
        <Link to={`/post/${id}`}>
            <div
                className="
                    shadow-lg
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:shadow-2xl
                    justify-between
                    flex-col
                    flex
                    w-full
                    h-full
                    max-w-xs
                    md:max-w-md
                "
            >
                <img
                    alt={title}
                    src={formattedUrl}
                    className="max-h-40 w-full object-cover rounded-t-lg"
                />
                <div className="bg-white w-full h-full p-4 rounded-br-lg rounded-bl-lg">
                    <div className="flex flex-col justify-between h-full">
                        {/* title  */}
                        <div>
                            <p className="font-Body text-body font-normal mb-2">
                                {formattedDate} | Posted by {authorName}
                            </p>
                            <a
                                href={link}
                                className="font-Heading text-title font-semibold"
                            >
                                {title}
                            </a>
                            <p className="font-Body text-body font-normal mb-3">
                                {trimmedText}
                            </p>
                        </div>
                        {/* tags  */}
                        <div>
                            {tags ? (
                                <div className="flex items-center mt-2 flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        // TODO: change # to tags link
                                        <a
                                            href={tag.url}
                                            className="px-2 py-2 rounded bg-Orange text-white hover:text-black"
                                            key={tag.slug}
                                        >
                                            {tag.name}
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
        </Link>
    );
};

export default BlogPost;
