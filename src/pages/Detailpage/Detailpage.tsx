/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Flex, Box, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { fetchSinglePost } from '@/service/ghostAPI';
import { renderHTMLContent } from '@/util/renderHTMLContent';
import { months } from '@/types/constant';
import { DetailpageProps } from '../../types/interface';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import PageNotFound from '../PageNotFound';

const Detailpage: React.FC<DetailpageProps> = () => {
    const { postId } = useParams();
    const { data, isLoading, error } = useFetch(fetchSinglePost(postId!));

    let post: any;
    let published_at: string;

    if (data) {
        post = data;
        const date = new Date(post.published_at);
        published_at = `${date.getDate()} ${
            months[date.getMonth()]
        } ${date.getFullYear()}`;
    }

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <PageNotFound />;
    }

    return (
        <Flex background="linear-gradient(180deg, #FF9165 -21.55%, #F9DCB0 100%)">
            <Flex width="15%">
                <Box width="100%" height="100%" />
            </Flex>
            <Flex className="my-36" flexDirection="column" width="70%">
                <Box
                    fontFamily="Alegreya"
                    fontSize={{
                        base: '14px',
                        md: '18px',
                    }}
                >
                    {'Home > Category >  Kemahasiswaan'}
                </Box>
                <Box
                    fontFamily="Magilio"
                    fontSize={{
                        base: '20px',
                        md: '35px',
                    }}
                >
                    {post.title}
                </Box>
                <Box
                    fontFamily="Alegreya"
                    fontSize={{
                        base: '12px',
                        md: '18px',
                    }}
                >
                    {published_at!}
                </Box>
                <VStack
                    spacing={{
                        base: '12px',
                        md: '24px',
                    }}
                >
                    <Box maxWidth="100%">
                        <img
                            src="http://localhost:2368/content/images/2022/07/IMG_6351.jpg"
                            alt="featured"
                        />
                    </Box>
                    {renderHTMLContent(post)}
                </VStack>
            </Flex>
            <Flex width="15%" />
        </Flex>
    );
};

export default Detailpage;
