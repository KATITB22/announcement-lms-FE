/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatUrl, trimString } from '@/util/util';
import { MAX_DESCRIPTION } from '@/types/constant';
import { BlogPost as BlogPostCard } from '@/types/interface';

const BlogPost: React.FC<BlogPostCard> = (props) => {
    const {
        title,
        primary_author,
        excerpt: description,
        feature_image,
        // url: link,
        tags,
        published_at: date,
        size,
        slug,
    } = props;
    const formattedDate = formatDate(date!);
    const formattedUrl = formatUrl(feature_image!);
    const trimmedText = trimString(description, MAX_DESCRIPTION);
    const authorName = primary_author?.name;
    return (
        <Link to={`/post/${slug}`}>
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
                    ${size === 'sm' ? '' : 'md:max-w-md'}
                    `}
            >
                <img
                    alt={title}
                    src={formattedUrl}
                    className="max-h-40 w-full object-cover rounded-t-lg"
                />
                <div
                    className={`bg-white w-full h-full p-3 ${
                        size === 'sm' ? '' : 'md:p-4'
                    } rounded-br-lg rounded-bl-lg`}
                >
                    <div className="flex flex-col justify-between h-full">
                        {/* title  */}
                        <div>
                            <p
                                className={`font-Body text-caption ${
                                    size === 'sm' ? '' : 'md:text-caption'
                                } font-normal mb-1 md:mb-0`}
                            >
                                {formattedDate} | {authorName}
                            </p>
                            <span
                                // href={link}
                                className={`font-Heading text-body ${
                                    size === 'sm' ? '' : 'md:text-title'
                                } font-semibold`}
                            >
                                {title}
                            </span>
                            <p
                                className={`font-Body text-caption  ${
                                    size === 'sm' ? '' : 'md:text-body'
                                } font-normal md:mb-2`}
                            >
                                {trimmedText}
                            </p>
                        </div>
                        {/* tags  */}
                        <div>
                            {tags?.length !== 0 ? (
                                <div className="flex items-center mt-2 flex-wrap gap-2">
                                    {tags!.map((tag) => (
                                        // TODO: change # to tags link
                                        <a
                                            href={tag.url}
                                            className={`rounded bg-Orange text-white hover:text-black py-1 px-2 text-sm ${
                                                size === 'sm'
                                                    ? '-mt-3'
                                                    : 'md:text-caption'
                                            }`}
                                            key={tag.slug}
                                        >
                                            {tag.name}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogPost;
