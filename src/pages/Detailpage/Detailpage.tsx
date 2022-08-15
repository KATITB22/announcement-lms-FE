/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { Flex, Box, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '@/service/ghostAPI';
import { renderHTMLContent } from '@/util/renderHTMLContent';
import { MONTHS } from '@/types/constant';
import VistockBackground from '@/components/VistockBackground';
import DefaultImage from '@/assets/images/logo/logo.png';
import { DetailPost, DetailpageProps } from '@/types/interface';
import useFetch from '@/hooks/useFetch';
import { ErrorTypes } from '@/types/enum';
import { formatUrl } from '@/util/util';
import RelatedPosts from './RelatedPosts';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { renderCaption } from './Render';

const Detailpage: React.FC<DetailpageProps> = ({ isForUnit, fromPost }) => {
    const { postId } = useParams();
    const { data, isLoading, error, message } = useFetch(
        fetchSinglePost(postId!),
        postId
    );
    const [featureImg, setFeatureImg] = React.useState('');

    useEffect(() => {
        setFeatureImg(formatUrl(data.detailPost?.feature_image!));
    }, [data]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [postId]);

    let post: DetailPost;
    let published_at: string;

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        if (message === 'Resource not found error, cannot read post.') {
            return (
                <ErrorPage message={message} type={ErrorTypes.PostNotFound} />
            );
        }
        return <ErrorPage message={message} type={ErrorTypes.ServerError} />;
    }

    if (data.detailPost) {
        if (!isForUnit && !fromPost) {
            return <ErrorPage type={ErrorTypes.PostNotFound} />;
        }
        post = data.detailPost;
        const date = new Date(post.published_at!);
        published_at = `${date.getDate()} ${
            MONTHS[date.getMonth()]
        } ${date.getFullYear()}`;
    }
    const getFeatureImage = () =>
        post!.feature_image ? (
            <figure className="w-full flex flex-col items-center">
                <img
                    className="w-full max-h-[500px] object-contain"
                    src={featureImg}
                    alt={post!.feature_image_alt!}
                    onError={() => {
                        setFeatureImg(DefaultImage);
                    }}
                />
                {post!.feature_image_caption && (
                    <figcaption className="font-Caption text-[13px] md:text-caption w-full">
                        {renderCaption(post!.feature_image_caption)}
                    </figcaption>
                )}
            </figure>
        ) : (
            <Box className="w-full flex flex-col items-center">
                <img
                    className="w-full max-h-[500px] object-cover"
                    src={DefaultImage}
                    alt="default-img"
                />
            </Box>
        );

    document.title = `${post!.title} - Deva: Blog OSKM ITB 2022`;

    return (
        <Flex
            background="linear-gradient(180deg, #FF9165 -21.55%, #F9DCB0 100%)"
            className="min-h-screen justify-center relative z-10"
        >
            <VistockBackground />
            <Flex width="15%">
                <Box width="100%" height="100%" />
            </Flex>
            <Flex
                className="my-12 md:my-20 max-w-screen-lg"
                flexDirection="column"
                width="70%"
            >
                <Box
                    fontFamily="Magilio"
                    fontSize={{
                        base: '2rem',
                        md: '3rem',
                    }}
                >
                    {post!.title}
                </Box>

                {post!.primary_author && (
                    <Box
                        fontFamily="Alegreya Semibold"
                        fontSize={{
                            base: '12px',
                            md: '18px',
                        }}
                        pb="12px"
                    >
                        Author: {post!.primary_author.name} | {published_at!}
                    </Box>
                )}

                <VStack
                    spacing={{
                        base: '12px',
                        md: '24px',
                    }}
                    className="bg-[#D9D9D9] z-30 p-5 bg-opacity-70 rounded-[37px]"
                >
                    {!isForUnit && getFeatureImage()}
                    {renderHTMLContent(post!)}
                </VStack>
                {!isForUnit && <RelatedPosts posts={data.relatedPosts} />}
            </Flex>
            <Flex width="15%" />
        </Flex>
    );
};

export default Detailpage;
