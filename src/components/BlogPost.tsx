/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatUrl } from '@/util/util';
import { MAX_DESCRIPTION, MAX_TITLE } from '@/types/constant';
import { BlogPost as BlogPostCard } from '@/types/interface';
import DefaultImage from '@/assets/images/default-post-min.png';
import { Text } from '@chakra-ui/react';

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

    const [formattedUrl, setFormattedUrl] = React.useState('');

    React.useEffect(() => {
        const srcImage = formatUrl(feature_image!);
        setFormattedUrl(srcImage);
    }, []);

    const formattedDate = formatDate(date!);
    const authorName = primary_author?.name;
    return (
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
                    h-[34em]
                    max-w-xs
                    ${size === 'sm' ? '' : 'md:max-w-md'}
                    `}
        >
            <img
                alt={title}
                src={formattedUrl}
                onError={() => {
                    setFormattedUrl(DefaultImage);
                }}
                className="bg-LightBrown min-h-[160px] max-h-40 w-full object-contain rounded-t-lg"
            />
            <div
                className={`bg-white w-full h-full min-h-[12.5rem] ${
                    size === 'sm' ? 'p-2' : 'p-4'
                } rounded-br-lg rounded-bl-lg`}
            >
                <div className="flex flex-col justify-between h-full">
                    {/* title  */}

                    <Link to={`/post/${slug}`}>
                        <div>
                            <p
                                className={`font-Body text-caption ${
                                    size === 'sm'
                                        ? 'text-sm'
                                        : 'md:text-caption'
                                } font-normal mb-1 md:mb-0`}
                            >
                                {formattedDate} | {authorName}
                            </p>
                            <Text
                                noOfLines={MAX_TITLE}
                                // href={link}
                                className={`font-Heading text-body  ${
                                    size === 'sm' ? '' : 'md:text-title'
                                } font-semibold`}
                            >
                                {title}
                            </Text>

                            <Text
                                noOfLines={MAX_DESCRIPTION}
                                className={`font-Body text-caption text-left  ${
                                    size === 'sm' ? '' : 'md:text-body'
                                }  font-normal md:mb-1`}
                            >
                                {description}
                            </Text>
                        </div>
                    </Link>
                    {/* tags  */}
                    <div>
                        {tags && tags.length > 0 ? (
                            <div className="flex items-center mt-6 flex-wrap gap-2 gap-y-5">
                                {tags.map((tag) => (
                                    // TODO: change # to tags link
                                    <a
                                        href={`/search?tag=${tag.name}`}
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
    );
};

export default BlogPost;
