/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatUrl, trimString } from '@/util/util';
import { MAX_DESCRIPTION } from '@/types/constant';
import { BlogPost as BlogPostCard } from '@/types/interface';

const BlogPost: React.FC<BlogPostCard> = (props) => {
    const {
        id,
        title,
        primary_author,
        excerpt: description,
        feature_image,
        // url: link,
        tags,
        published_at: date,
        size,
    } = props;
    const formattedDate = formatDate(date!);
    const formattedUrl = formatUrl(feature_image!);
    const trimmedText = trimString(description, MAX_DESCRIPTION);
    const authorName = primary_author?.name;
    return (
        <Link to={`/post/${id}`}>
            <div
                className={`shadow-lg
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
                    ${size === 'sm' ? 'md:max-w-xs ' : 'md:max-w-md'}
                    `}
            >
                <img
                    alt={title}
                    src={formattedUrl}
                    className="max-h-40 w-full object-cover rounded-t-lg"
                />
                <div
                    className={`bg-white w-full h-full ${
                        size === 'sm' ? 'p-2' : 'p-4'
                    } rounded-br-lg rounded-bl-lg`}
                >
                    <div className="flex flex-col justify-between h-full">
                        {/* title  */}
                        <div>
                            <p
                                className={`font-Body ${
                                    size === 'sm' ? 'text-caption' : 'text-body'
                                } font-normal mb-2`}
                            >
                                {formattedDate} | {authorName}
                            </p>
                            <span
                                // href={link}
                                className={`font-Heading ${
                                    size === 'sm' ? 'text-bo' : 'text-title'
                                } font-semibold`}
                            >
                                {title}
                            </span>
                            <p
                                className={`font-Body  ${
                                    size === 'sm' ? 'text-caption' : 'text-body'
                                } font-normal mb-3`}
                            >
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
                                            className={`rounded bg-Orange text-white hover:text-black  ${
                                                size === 'sm'
                                                    ? 'p-1 text-sm -mt-3'
                                                    : 'p-2'
                                            }`}
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
