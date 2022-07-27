/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {
    Flex,
    // Hide,
    Box,
    VStack,
} from '@chakra-ui/react';
import { parse } from 'node-html-parser';
import { useParams } from 'react-router-dom';
import env from '@/env';
import { DetailpageProps } from '../../types/interface';
// import { DetailPost } from '../../types/types';
import useFetch from '../../hooks/useFetch';
import Render from './Render';

const Detailpage: React.FC<DetailpageProps> = () => {
    const { postId } = useParams();
    const url = `${env.VITE_GHOST_API_URL}/ghost/api/content/posts/${postId}?key=${env.VITE_GHOST_API_CONTENT_API_KEY}&include=tags`;
    const response = useFetch(url);
    const data = response.data as any;
    const { isLoading } = response;
    const { error } = response;
    const { message } = response;
    const { posts } = data;

    const renderHTMLContent = React.useCallback(() => {
        if (posts.length === 0) return [];

        const root = parse(posts[0].html.replace(/(\r\n|\n|\r)/gm, ''));
        console.log(root);
        const components: any[] = [];
        let id: number = 0;
        root.childNodes.forEach((node: any) => {
            if (node.tagName === 'P') {
                components.push(Render.paragraph(id, node.outerHTML));
            } else if (node.tagName === 'HR') {
                components.push(Render.divider());
            } else if (node.tagName === 'OL') {
                components.push(Render.ol(id, node));
            } else if (node.tagName === 'UL') {
                components.push(Render.ul(id, node));
            } else if (node.tagName === 'DIV') {
                if (node.childNodes[1]?.attrs?.title === 'Download') {
                    const titleFile = node.childNodes[1].text.trim();
                    components.push(
                        Render.file(
                            id,
                            titleFile,
                            node.childNodes[1].attrs.href
                        )
                    );
                } else {
                    // components.push(
                    //     Render.heading(id, node.childNodes[0].text, node.childNodes[1].text)
                    // )
                }
            } else if (node.tagName === 'FIGURE') {
                components.push(
                    node.childNodes[0].tagName === 'IMG'
                        ? Render.image(id, node.childNodes[0].attrs.src)
                        : Render.video(
                              id,
                              node.childNodes[0].childNodes[0].attrs.style
                                  .match(/(https?:\/\/[^\s]+)/g)[0]
                                  .slice(0, -2),
                              node.childNodes[0].childNodes[0].attrs.src
                          )
                );
            } else if (node.tagName === 'BLOCKQUOTE') {
                components.push(Render.blockquote(id, node.text));
            }
            id += 1;
        });
        return components;
    }, [data]);

    if (isLoading) {
        return <p>Loading</p>;
    }

    if (error) {
        return <p>{message}</p>;
    }

    console.log(posts[0].html);

    return (
        <Flex background="linear-gradient(180deg, #FF9165 -21.55%, #F9DCB0 100%)">
            <Flex width="15%">
                <Box width="100%" height="100%" />
            </Flex>
            <Flex marginTop="7%" flexDirection="column" width="70%">
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
                    kitsch 8-bit organic plaid small batch keffiyeh
                </Box>
                <Box
                    fontFamily="Alegreya"
                    fontSize={{
                        base: '12px',
                        md: '18px',
                    }}
                >
                    8 Jul 2022
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
                    {renderHTMLContent()}
                </VStack>
            </Flex>
            <Flex width="15%" />
        </Flex>
    );
};

export default Detailpage;
